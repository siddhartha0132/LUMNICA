import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingAiButton() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
      }}
    >
      <motion.button
        onClick={() => navigate('/LumnicaAi')}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(135deg, #C9A96E 0%, #9E7A45 100%)',
          color: '#FAF9F6',
          border: 'none',
          borderRadius: '50px',
          padding: '16px 28px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(158, 122, 69, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: 'DM Sans, sans-serif',
          letterSpacing: '0.02em',
        }}
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(250, 249, 246, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
          }}
        >
          ✨
        </motion.div>
        
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.span
              key="hovered"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              style={{ whiteSpace: 'nowrap' }}
            >
              Get Personalized AI Review Now
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              AI Skin Analysis
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse animation ring */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          borderRadius: '50px',
          border: '2px solid #C9A96E',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}
