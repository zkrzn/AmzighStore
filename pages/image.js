import { useRef, useState } from "react";

export default function ImageInput({ width, height }) {
  const inputRef = useRef();
  const [source, setSource] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [isResizing, setIsResizing] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const imageRef = useRef(null);
  const initialX = useRef(0);
  const initialY = useRef(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const handleMouseDown = (event) => {
    if (event.target !== imageRef.current) return;
    initialX.current = event.clientX - position.x;
    initialY.current = event.clientY - position.y;
    if (event.target.classList.contains("resizer")) {
      setIsResizing(true);
    } else {
      setIsMoving(true);
    }
  };

  const handleMouseMove = (event) => {
    if (isResizing) {
      setSize({
        width: event.clientX - initialX.current,
        height: event.clientY - initialY.current,
      });
    } else if (isMoving) {
      setPosition({
        x: event.clientX - initialX.current,
        y: event.clientY - initialY.current,
      });
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setIsMoving(false);
  };

  return (
    <>
      <h1 className="text-black text-center text-2xl md:text-6xl m-5 bol"> Image Uploader </h1>
      <div className="relative  rounded-lg shadow-lg bg-gray-100 h-4/5 w-11/12">
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        <div
          className="relative items-center text-center"
          class="resizer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {source && (
            <img
              ref={imageRef}
              className="block object-cover relative"
              src={source}
              style={{
              width: size.width + "px",
              height: size.height + "px",
              top: position.y + "px",
              left: position.x + "px",
              position: "absolute",
              }}
              />
              )}
              {source && (
              <div
              className=" absolute bottom-0 right-0 cursor-se-resize"
              style={{ width: "200px", height: "200px" }}
              ></div>
              )}
              {!source && (
              <button
                         className="m-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                         onClick={handleChoose}
                       >
              Choisir une image
              </button>
              )}
              </div>
              {source && (
              <div className="p-4 w-full h-full font-bold text-center text-gray-600">
              </div>
              )}
              </div>
              </>
);
}
