import { useState } from 'react';

const ResizableText = () => {
  const [text, setText] = useState("Ecrire un texte");
  const [fontSize, setFontSize] = useState(20);

  return (
    <div className='text-center'>
      <input 
        placeholder={text} 
        onChange={e => setText(e.target.value)} 
        style={{ fontSize: `${fontSize}px` }}
        className=" border-2 bg-black text-white text-center"
      />
      <div>
        <button onMouseDown={() => setFontSize(fontSize - 1)} 
                className="w-10 h-10 m-5 bg-sky-500 hover:bg-sky-700 rounded shadow text-4xl"> - </button>
        <button onMouseDown={() => setFontSize(fontSize + 1)} 
                className="w-10 h-10 m-5 bg-sky-500 hover:bg-sky-700 rounded  shadow text-4xl"> + </button>
      </div>
    </div>
  );
};

export default ResizableText;