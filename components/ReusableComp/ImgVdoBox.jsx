import playicon from "@/app/style/images/play-white-icon.svg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { checkFileType } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ImgVdoBox({ vdata, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="videoslidebox-main"
        style={{
          backgroundImage: `url(${
            checkFileType(vdata?.image?.data?.attributes?.ext || "") === "video"
              ? vdata?.thumbnail?.data?.attributes?.url
              : vdata?.image?.data?.attributes?.url
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <AlertDialog>
          <div className="">
            <div className="homevideos-btn-block">
              <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
                {checkFileType(vdata?.image?.data?.attributes?.ext || "") ===
                "video" ? (
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
                ) : (
                  <button className="readmore-btn border-btn">
                    View
                    <Image
                      loading="lazy"
                      className="img-fluid"
                      src={playicon?.src}
                      alt="arrow-circle"
                      width={10}
                      height={10}
                    />
                  </button>
                )}
              </AlertDialogTrigger>

              {isOpen && (
                <AlertDialogContent className="videopopup-mainbox p-0 border-0 max-w-screen-xl">
                  <div
                    ref={modalRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                  >
                    <div className="relative">
                      <AlertDialogCancel
                        className="video-close-btn p-0 m-0 border-0"
                        asChild
                        onClick={closeModal}
                      >
                        <button className="">&#x2715;</button>
                      </AlertDialogCancel>
                      <div className="p-0">
                        {checkFileType(
                          vdata?.image?.data?.attributes?.ext || ""
                        ) === "video" ? (
                          <video
                            ref={videoRef}
                            src={`${
                              vdata?.VideoURL ||
                              vdata?.image?.data?.attributes?.url
                            }`}
                            width=""
                            autoPlay
                            controls
                            className=""
                          ></video>
                        ) : (
                          <Image
                            src={vdata?.image?.data?.attributes?.url}
                            alt="img-box"
                            height={1000}
                            width={1000}
                            quality={100}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </AlertDialogContent>
              )}
            </div>
          </div>
        </AlertDialog>
      </div>
    </>
  );
}

export default ImgVdoBox;
