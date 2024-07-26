"use client";
// components/VideoModal.js
import React, { useState, useRef, useEffect } from "react";
import s3 from "@/public/images/discover-rodic-bg.jpg";

const VideoModal = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="h-[450px] w-[600px] bg-orange-400 flex justify-center items-center"
        style={{
          backgroundImage: `url(${s3?.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   width: "100%",
          //   height: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Video
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto p-6">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ×
              </button>
              <video
                ref={videoRef}
                src={videoUrl}
                width="100%"
                controls
                autoPlay
                className="rounded"
              ></video>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoModal;
