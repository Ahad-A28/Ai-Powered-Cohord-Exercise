import React, { useContext, useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { FaCamera } from 'react-icons/fa';
import {expressionContex }from '../context/Expression.context';

export default function FacialExpression() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const  {expression,setExpression} = useContext(expressionContex);
  console.log(expression);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error('Error accessing webcam: ', err));
    };

    loadModels().then(startVideo);
  }, []);

  const handleVideoPlay = async (videoRef) => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    let mostProableExpression = 0;
    let detectedExpression = '';

    if (!detections || detections.length === 0) {
      console.log('No face detected');
      setExpression('No face detected');  
      return;
    }

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProableExpression) {
        mostProableExpression = detections[0].expressions[expression];
        detectedExpression = expression;
      }
    }

    console.log(detectedExpression);
    setExpression(detectedExpression); // Update the state with the detected expression
  };

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        className="video rounded-xl object-cover overflow-hidden"
        style={{ width: '35rem', height: '20rem' }}
      />
      <button
        onClick={() => handleVideoPlay(videoRef)}
        className="detect-mood-btn py-4 px-3 bg-sky-600 rounded-lg text-lg font-bold cursor-pointer flex items-center gap-3 mt-5 text-white"
      >
        <FaCamera /> Detect Mood
      </button>

      
    </div>
  );
}