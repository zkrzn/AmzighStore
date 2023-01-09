import React, { useState } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'

const VideoUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploadedFileUrl, setUploadedFileUrl] = useState('')
  const [uploadError, setUploadError] = useState(null)

  const onDrop = async (acceptedFiles) => {
    try {
      const formData = new FormData()
      formData.append('video', acceptedFiles[0])
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setUploadedFile(res.data.file)
      setUploadedFileUrl(res.data.url)
    } catch (err) {
      setUploadError(err.response.data.error)
    }
  }

  return (
    <div>
      <Dropzone onDrop={onDrop} accept="video/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop a video file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      {uploadedFile && (
        <video src={uploadedFileUrl} controls />
      )}
      {uploadError && (
        <p>{uploadError}</p>
      )}
    </div>
  )
}

export default VideoUploader
