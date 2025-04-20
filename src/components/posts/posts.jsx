import { useState, useEffect } from "react"
import "./posts.css"
import Post from "../post/post"

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = () => {
      const savedPosts = JSON.parse(localStorage.getItem('travelPosts') || '[]')
      setPosts(savedPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div className="posts">
      {posts.length === 0 ? (
        <p className="noPosts">No travel stories.</p>
      ) : (
        posts.map(post => <Post key={post._id} post={post} />)
      )}
    </div>
  )
}

export default Posts