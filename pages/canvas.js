import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Canvas = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const router = useRouter();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d');
  }, []);

  const startDrawing = event => {
    setIsDrawing(true);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    contextRef.current.beginPath();
  };

  const draw = event => {
    if (!isDrawing) return;
    contextRef.current.lineWidth = 5;
    contextRef.current.lineCap = 'round';
    contextRef.current.strokeStyle = 'black';
    contextRef.current.moveTo(position.x, position.y);
    setPosition({ x: event.clientX, y: event.clientY });
    contextRef.current.lineTo(position.x, position.y);
    contextRef.current.stroke();
  };

  return (
    <>
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={finishDrawing}
      onMouseLeave={finishDrawing}
    />
    </>
  );
};

export default Canvas;
