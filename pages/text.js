import React, { useState } from "react";
import { Rnd } from "react-rnd";

const TextInput = () => {
  const [text, setText] = useState("");
  const [dimension, setDimension] = useState({ width: 200, height: 40 });
  const [fontSize, setFontSize] = useState(16);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const onResize = (e, direction, ref, delta, position) => {
    setDimension({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
    setFontSize(ref.offsetHeight * 0.4);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Rnd
        style={{
          fontSize: `${fontSize}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        size={dimension}
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
        <h1 className="p-2 text-center border rounded border-red-300">{text}</h1>
      </Rnd>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className="w-1/2 mt-10 border border-gray-400 p-2"
        placeholder="Ecrire un texte"
      />
    </div>
  );
};

export default TextInput;
