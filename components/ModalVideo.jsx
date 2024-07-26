// "use client";
// import playicon from "@/app/style/images/play-white-icon.svg";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import {
//   AlertDialog,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogTrigger,
// } from "./ui/alert-dialog";

// export default function ModalVideo({ vdata }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const videoRef = useRef(null);

//   const closeModal = () => {
//     setIsOpen(false);
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setIsPlaying(true);
//     } else {
//       setIsPlaying(false);
//     }
//   }, [isOpen]);

//   return (
//     <div
//       className="videoslidebox-main"
//       style={{
//         backgroundImage: `url(${
//           vdata?.thumbnail?.data?.attributes?.url || vdata?.VideothumbnailURL
//         })`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <AlertDialog>
//         <div className="">
//           <div className="homevideos-btn-block">
//             <span>{vdata?.heading}</span>
//             <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
//               <button className="readmore-btn border-btn">
//                 Watch now
//                 <Image
//                   loading="lazy"
//                   className="img-fluid"
//                   src={playicon?.src}
//                   alt="arrow-circle"
//                   width={10}
//                   height={10}
//                 />
//               </button>
//             </AlertDialogTrigger>

//             <AlertDialogContent className="videopopup-mainbox p-0 border-0 max-w-full">
//               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//                 <div className="relative">
//                   <AlertDialogCancel
//                     className="video-close-btn p-0 m-0 border-0"
//                     asChild
//                     onClick={closeModal}
//                   >
//                     <button className="">&#x2715;</button>
//                   </AlertDialogCancel>
//                   <div className="p-0">
//                     {/* <ReactPlayer
//                       url={`${
//                         vdata?.VideoURL || vdata?.video?.data?.attributes?.url
//                       }`}
//                       playing={isPlaying}
//                       controls
//                       width="90vw"
//                       height="90vh"
//                       className="rounded"
//                     /> */}

//                     <video
//                       ref={videoRef}
//                       src={`${
//                         vdata?.VideoURL || vdata?.video?.data?.attributes?.url
//                       }`}
//                       width="100%"
//                       height=""
//                       autoPlay
//                       controls
//                       className="rounded"
//                     ></video>
//                   </div>
//                 </div>
//               </div>
//             </AlertDialogContent>
//           </div>
//         </div>
//       </AlertDialog>
//     </div>
//   );
// }

"use client";
import playicon from "@/app/style/images/play-white-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export default function ModalVideo({ vdata }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);
  const dialogRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      closeModal();
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

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  return (
    <div
      className="videoslidebox-main"
      style={{
        backgroundImage: `url(${vdata?.thumbnail?.data?.attributes?.url || vdata?.VideothumbnailURL
          })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <AlertDialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <div className="">
          <div className="homevideos-btn-block">
            <span>{vdata?.heading}</span>
            <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
              <button className="readmore-btn border-btn">
                Watch now
                <Image
                  loading="lazy"
                  className="img-fluid"
                  src={playicon?.src}
                  alt="arrow-circle"
                  width={10}
                  height={10}
                />
              </button>
            </AlertDialogTrigger>

            {isOpen && (
              <AlertDialogContent
                className="videopopup-mainbox p-0 border-0 max-w-screen-xl"
                ref={dialogRef}
              >
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="relative">
                    <AlertDialogCancel
                      className="video-close-btn p-0 m-0 border-0"
                      asChild
                      onClick={closeModal}
                    >
                      <button className="">&#x2715;</button>
                    </AlertDialogCancel>
                    <div className="p-0">
                      <video
                        ref={videoRef}
                        src={`${vdata?.VideoURL || vdata?.video?.data?.attributes?.url
                          }`}
                        width=""
                        autoPlay
                        controls
                        className="rounded"
                      ></video>
                    </div>
                  </div>
                </div>
              </AlertDialogContent>
            )}
          </div>
        </div>
      </AlertDialog>
    </div>
  );
}
