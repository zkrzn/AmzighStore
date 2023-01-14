import { useRef, useState } from "react";

export default function VideoInput({ width, height }) {
  const inputRef = useRef();
  const [source, setSource] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 700, height: 400 });
  const [isResizing, setIsResizing] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const videoRef = useRef(null);
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
    if (event.target !== videoRef.current) return;
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
      <h1 className="text-black text-center text-2xl md:text-6xl m-10"> Video Uploader </h1>
      <div className="relative resizer rounded-lg overflow-hidden shadow-lg bg-gray-100 w-full h-5/6">
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        <div
          className="relative  items-center justify-center w-full h-full"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {source && (
            <video
              ref={videoRef}
              className="block  object-cover relative cursor-move w-full h-auto"
              src={source}
              controls
              style={{
                width: size.width + "px",
                height: size.height + "px",
                top: position.y + "px",
                left: position.x + "px",
                position: "relative",
              }}
            />
          )}
          {source && (
            <div
              className="resizer absolute bottom-0 right-0 cursor-se-resize h-5/6"
              style={{ width: "200px", height: "200px" }}
            ></div>
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
          <div className="p-4 w-full h-full font-bold text-center text-gray-600">
            <button
              className="mt-4 mr-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outine-none focus:shadow-outline"
              onClick={handleChoose}
            >
              Choisir une autre vidéo
            </button>
          </div>
        )}
      </div>
    </>
  );
}
