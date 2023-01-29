import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";

export default function ImageInput({ width, height }) {
  const inputRef = useRef();
  const [source, setSource] = useState();
  const [dimension, setDimension] = useState({ width: 300, height: 300 });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const onResize = (e, direction, ref, delta, position) => {
    setDimension({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
  };

  return (
    <>
      <div className="relative h-full">
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        <div className="flex h-96 items-center justify-center">
          {source && (
            <Rnd
              className="w-fit h-96 object-cover"
              size={{ width: dimension.width, height: dimension.height }}
              onResize={onResize}
              enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true,
              }}
            >
              <img src={source} alt="Uploaded Image" />
            </Rnd>
          )}
          {!source && (
            <button
              className="mt-4 mr-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              onClick={handleChoose}
            >
              Choisir une image
            </button>
          )}
        </div>
        {source && (
          <div className="p-4 font-bold text-center text-gray-600">
            <button
              className="mt-4 mr-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              onClick={handleChoose}
            >
              Choisir une image
            </button>
          </div>
        )}
      </div>
    </>
  );
}