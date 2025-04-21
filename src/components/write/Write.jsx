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
      const currentUser = JSON.parse(localStorage.getItem('currentUser'))
      if (!currentUser) {
        navigate('/login')
        return
      }

      const posts = JSON.parse(localStorage.getItem('travelPosts') || '[]')
      const newPost = {
        id: Date.now().toString(),
        title,
        desc,
        location,
        image: file ? URL.createObjectURL(file) : null,
        createdAt: new Date().toISOString(),
        author: currentUser.username,
        authorEmail: currentUser.email
      }
      posts.push(newPost)
      localStorage.setItem('travelPosts', JSON.stringify(posts))
      
      navigate('/')
    } catch (err) {
      setError("Failed to publish post")
    }
  }

  return (
    <div className='write write-responsive'>
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg writeImg-responsive" />
      )}
      <form className='writeForm writeForm-responsive' onSubmit={handleSubmit}>
        {error && <p className="writeError">{error}</p>}
        <div className="writeFormGroup writeFormGroup-responsive">
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
            className='writeInput writeInput-responsive ml-1'
            autoFocus={true}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup writeFormGroup-responsive">
          <input 
            type="text"
            placeholder="Location" 
            className='writeInput writeInput-responsive'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className="writeFormGroup writeFormGroup-responsive">
          <textarea 
            placeholder="Tell your travel story..."
            type="text" 
            className='writeInput writeText writeInput-responsive'
            value={desc}
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className='writeSubmit writeSubmit-responsive' type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write