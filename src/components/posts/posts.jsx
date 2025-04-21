import { useState, useEffect } from "react"
import "./posts.css"
import Post from "../post/post"

function Posts() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    setUser(currentUser)
    
    const fetchPosts = () => {
      const savedPosts = JSON.parse(localStorage.getItem('travelPosts') || '[]')
      const filteredPosts = currentUser 
        ? savedPosts.filter(post => post.authorEmail === currentUser.email)
        : savedPosts
      setPosts(filteredPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div className="posts mb-4">
      {user ? (
        posts.length === 0 ? (
          <p className="noPosts">You haven't written any travel stories yet.</p>
        ) : (
          posts.map(post => <Post key={post.id} post={post} />)
        )
      ) : (
        <p className="noPosts">Please login to see your travel stories.</p>
      )}
    </div>
  )
}

export default Posts