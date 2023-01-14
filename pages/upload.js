import { useRef, useState } from "react";

export default function VideoInput({ width, height }) {
  const inputRef = useRef();
  const [source, setSource] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };
  

  return (
    <>
    <h1 className="text-black text-center text-2xl md:text-6xl m-10"> Video Uploader </h1>
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100 h-full">
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      <div className="flex h-full items-center justify-center">
        {source && (
          <video
            className="block w-fit h-96  object-cover"
            src={source}
            controls
          />
        )}
        {!source && (
          <button
            className="mt-4 mr-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={handleChoose}
          >
            Choisir une vidéo
          </button>
        )}
      </div>
      
      {source && (
      <div className="p-4 font-bold text-center text-gray-600">
      <button
            className="mt-4 mr-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={handleChoose}>
            Choisir une vidéo
          </button> 
          </div>

        )}
        

    </div>
    </>
  );
}
