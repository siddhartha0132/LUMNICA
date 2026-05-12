// ML Engine utilities for camera and face mesh analysis

export const startCamera = async (videoElement) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { 
        facingMode: 'user', 
        width: { ideal: 1280 }, 
        height: { ideal: 720 } 
      }
    });
    if (videoElement) {
      videoElement.srcObject = stream;
      await videoElement.play();
    }
    return { success: true, stream };
  } catch (error) {
    console.error('Camera access error:', error);
    return { 
      success: false, 
      error: error.message || 'Camera access denied' 
    };
  }
};

export const stopCamera = (videoElement) => {
  try {
    if (videoElement && videoElement.srcObject) {
      const tracks = videoElement.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoElement.srcObject = null;
    }
  } catch (error) {
    console.error('Error stopping camera:', error);
  }
};

export const initFaceMesh = async () => {
  // Lightweight delay to simulate readiness; no model needed since
  // we send the captured frame directly to the NVIDIA Vision backend.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('[ml-engine] Camera ready for capture');
      resolve({ success: true });
    }, 600);
  });
};

/**
 * Captures a frame from the live video feed, draws it to the canvas,
 * then POSTs the JPEG to the backend /api/analyzeSkin endpoint so that
 * NVIDIA Vision performs the real analysis — NO hardcoded values.
 */
export const runLiveSkinAnalysis = async (videoElement, canvasElement, options = {}) => {
  try {
    if (!videoElement || videoElement.readyState < 2) {
      throw new Error('Video stream not ready');
    }

    // ── 1. Draw current video frame onto the canvas ──
    const width  = videoElement.videoWidth  || 640;
    const height = videoElement.videoHeight || 480;

    canvasElement.width  = width;
    canvasElement.height = height;

    const ctx = canvasElement.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, width, height);

    console.log(`[ml-engine] Captured frame ${width}×${height} from live camera`);

    // ── 2. Convert canvas to a Blob ──
    const blob = await new Promise((resolve, reject) => {
      canvasElement.toBlob(
        (b) => (b ? resolve(b) : reject(new Error('Failed to capture frame'))),
        'image/jpeg',
        0.92
      );
    });

    console.log(`[ml-engine] Frame blob size: ${blob.size} bytes — sending to backend`);

    // ── 3. POST to the real backend skin analysis endpoint ──
    const API_URL = 'https://lumnicaai.onrender.com/api';
    const formData = new FormData();
    formData.append('image', blob, 'live-capture.jpg');

    const resp = await fetch(`${API_URL}/analyzeSkin`, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`Backend error ${resp.status}: ${errText}`);
    }

    const data = await resp.json();
    console.log('[ml-engine] Backend skin analysis result:', data);

    if (!data.skinData) {
      throw new Error('Backend returned no skinData');
    }

    // ── 4. Return in the format LumnicaAi.jsx expects ──
    return {
      skinData: data.skinData,
      needsFallback: false,
      confidence: data.skinData.imageConfidence || 'high',
      error: null,
    };

  } catch (error) {
    console.error('[ml-engine] Live analysis error:', error);
    // Signal caller to use the ML fallback route (analyzeSkinML)
    return {
      skinData: null,
      needsFallback: true,
      confidence: 0,
      error: error.message,
    };
  }
};
