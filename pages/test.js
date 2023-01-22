import { useRef, useState } from 'react'

const menu = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [source, setSource] = useState();
  const videoRef = useRef(null);

  const handleFileUpload = event => {
    setSelectedFile(event.target.files[0])
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  }
  

  return (
    <div className="bg-gray-200 min-h-screen p-6 ">
      <nav className="bg-white rounded-lg shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className=" flex items-center justify-center">
                <a href="../text" className="m-2 px-3 py-2 rounded-md text-base leading-6 font-bold bg-indigo-200 text-indigo-800 hover:bg-orange-200">Text</a>
                <a href="../image" className="m-2 px-3 py-2 rounded-md text-base leading-6 font-bold bg-indigo-200 text-indigo-800 hover:bg-orange-200">Image</a>
                <a href="../uploader" className="m-2 px-3 py-2 rounded-md text-base leading-6 font-bold bg-indigo-200 text-indigo-800 hover:bg-orange-200">Video</a>     
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-medium text-center">Upload an image or a video</h1>
        <form className="flex flex-col items-center justify-center">
          <input type="file" onChange={handleFileUpload} className="bg-white p-2 rounded-lg shadow-md m-4" />
<button className="bg-indigo-500 text-white p-2 rounded-lg shadow-md">Upload</button>
</form>
{selectedFile && (
<div className="m-4 text-center  resize rounded-md bg-black">
<video
              ref={videoRef}
           
              src={source}
              controls
              
            />
</div>
)}
</main>
</div>
)
}

export default menu
