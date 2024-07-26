"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Gallery({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dialogRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleImageClick = (imgData) => {
    setSelectedImage(imgData);
    setIsOpen(true);
  };

  return (
    <div className="home-gallery-massonary">
      <div className="gallery-main">
        {data?.map((imgData) => (
          <div
            key={imgData?.id}
            className={
              imgData?.isWide
                ? "gallery-img-box wide wow fadeInUp"
                : "gallery-img-box wow fadeInUp"
            }
          >
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={`${imgData?.image?.data?.attributes?.formats?.medium?.url || ""
                    }`}
                  height={400}
                  width={400}
                  onClick={() => handleImageClick(imgData)}
                />
              </AlertDialogTrigger>
            </AlertDialog>
          </div>
        ))}
      </div>
      {isOpen && selectedImage && (
        <AlertDialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <AlertDialogContent
            className="videopopup-mainbox border-0 max-w-screen-xl"
            ref={dialogRef}
          >
            <div className="relative">
              <AlertDialogCancel
                className="video-close-btn p-0 m-0 border-0"
                onClick={() => setIsOpen(false)}
              >
                &#x2715;
              </AlertDialogCancel>

              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={`${selectedImage?.image?.data?.attributes?.url || ""}`}
                height={1200}
                width={1200}
                quality={100}
              />
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}

export default Gallery;
