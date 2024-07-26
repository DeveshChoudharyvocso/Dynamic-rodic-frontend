import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// strapi api token configurations
export function configurations(options = {}, headers = {}) {
  return {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      ...headers,
    },
  };
}

// strapi base url
export function getStrapiBaseUrl() {
  return process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL
    : process.env.NEXT_PUBLIC_STRAPI_FALLBACK_URL;
}

// The function is resposible for checking the type whether it is video or image
export function checkFileType(extension) {
  // Define arrays of image and video extensions
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "tiff",
    "svg",
    "webp",
    "heic",
    "ico",
    "avif",
  ];
  const videoExtensions = [
    "mp4",
    "mkv",
    "webm",
    "avi",
    "mov",
    "wmv",
    "flv",
    "mpeg",
    "3gp",
    "ogg",
    "ogv",
  ];

  // Normalize the extension to lower case and remove leading dot if present
  const normalizedExtension = extension.toLowerCase().replace(/^\./, "");

  // Check if the extension is in the image extensions array
  if (imageExtensions.includes(normalizedExtension)) {
    return "image";
  }

  // Check if the extension is in the video extensions array
  if (videoExtensions.includes(normalizedExtension)) {
    return "video";
  }

  // If the extension is neither an image nor a video
  return "unknown";
}
