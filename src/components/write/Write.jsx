import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./write.css"

function Write() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [location, setLocation] = useState("")
  const [file, setFile] = useState(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append("title", title)
      data.append("description", desc)
      data.append("location", location)
      if (file) {
        data.append("image", file)
      }

      const posts = JSON.parse(localStorage.getItem('travelPosts') || '[]')
      const newPost = {
        title,
        desc,
        location,
        image: file ? URL.createObjectURL(file) : null,
        createdAt: new Date().toISOString()
      }
      posts.push(newPost)
      localStorage.setItem('travelPosts', JSON.stringify(posts))
      
      navigate('/')
    } catch (err) {
      setError("Failed to publish post")
    }
  }

  return (
    <div className='write'>
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        {error && <p className="writeError">{error}</p>}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input 
            type="file" 
            id='fileInput' 
            style={{display:"none"}}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input 
            type="text"
            placeholder="Title" 
            className='writeInput'
            autoFocus={true}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input 
            type="text"
            placeholder="Location" 
            className='writeInput'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell your travel story..."
            type="text" 
            className='writeInput writeText'
            value={desc}
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className='writeSubmit' type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write