import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  canvas: {
    background: 'transparent',
  },
};

function Uncover({ image, cover }) {
  const canvasRef = useRef();
  const divRef = useRef();
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const img = new Image();
    img.src = cover;

    img.onload = function onload() {
      const width = img.width / 2;
      const height = img.height / 2;
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      ctx.drawImage(img, 0, 0, width, height);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsPressed(true);
  };

  const handleMouseMove = (event) => {
    if (isPressed) {
      const x = event.clientX - (canvasRef.current.width / 2);
      const y = event.clientY - (canvasRef.current.height / 2);
      const ctx = canvasRef.current.getContext('2d');
      ctx.globalCompositeOperation = 'destination-out';

      ctx.beginPath();
      ctx.arc(x, y, 30, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  return (
    <div
      style={{
        display: 'inline-block',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        borderRadius: '50%',
      }}
      ref={divRef}
    >
      <canvas
        ref={canvasRef}
        style={styles.canvas}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>

  );
}

export default Uncover;

Uncover.propTypes = {
  image: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
