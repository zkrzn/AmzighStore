import { useState } from 'react'
import TextContent from "./text.js";
import VideoContent from "./upload.js";
import ImageContent from "./image.js";

function projet2() {
  const [contentType, setContentType] = useState("text");
  const [contentList, setContentList] = useState([]);

  function handleAddContent(newContent) {
    setContentList([...contentList, newContent]);
  }

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <nav className="bg-white rounded-lg shadow-md m-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className=" flex items-center justify-center">
                <button onClick={() => setContentType("text")} className="m-2 px-3 py-2 rounded-md text-base leading-6 font-bold bg-indigo-200 text-indigo-800 hover:bg-orange-200">Texte</button>
                <button onClick={() => setContentType("image")} className="m-2 px-3 py-2 rounded-md text-base leading-6 font-bold bg-indigo-200 text-indigo-800 hover:bg-orange-200">Image</button>
                <button onClick={() => setContentType("video")} className="m-2 px-3 py-2 rounded-md text-base leading-6 font-bold bg-indigo-200 text-indigo-800 hover:bg-orange-200">Video</button>     
          </div>
        </div>
      </nav>
      {contentType === "text" && <TextContent onAdd={handleAddContent} />}
      {contentType === "video" && <VideoContent onAdd={handleAddContent} />}
      {contentType === "image" && <ImageContent onAdd={handleAddContent} />}
      {contentList.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
</div>
  )
}

export default projet2
