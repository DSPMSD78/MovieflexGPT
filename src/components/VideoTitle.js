import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none flex items-center">
      <div className="px-3 sm:px-6 md:px-12 lg:px-20 max-w-3xl pointer-events-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white line-clamp-2 sm:line-clamp-none">
          {title}
        </h1>
        <p className="hidden md:block py-2 sm:py-4 md:py-6 text-sm md:text-lg lg:text-lg w-full md:w-9/12 lg:w-7/12 text-gray-200 line-clamp-2 md:line-clamp-3">
          {overview}
        </p>
        <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-4 md:mt-6">
          <button className="bg-white text-black text-xs sm:text-sm md:text-base font-bold px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-lg hover:bg-opacity-75 transition whitespace-nowrap">
            ▶ Play
          </button>
          <button className="bg-gray-500 bg-opacity-50 text-xs sm:text-sm md:text-base font-bold px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-lg hover:bg-opacity-75 transition whitespace-nowrap">
            ⓘ Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
