import { Link } from "react-router-dom"
import "./post.css"

function Post({ post }) {
  const image = "https://images.unsplash.com/photo-1606240724602-5b21f896eae8"
  
  return (
    <div className="post">
      <img 
        src={post?.image || image} 
        alt={post?.title} 
        className="postImg"
      />
      <div className="postInfo">
        <span className="postLocation">{post?.location}</span>
        <span className="postAuthor">By: {post?.author}</span>
      </div>
      <Link to={`/post/${post?._id}`}>
        <span className="postTitle">
          {post?.title}
        </span>
      </Link>
      <p className="postDesc">{post?.desc}</p>
      <hr />
      <span className="postDate">
        {new Date(post?.createdAt).toLocaleDateString()}
      </span>
    </div>
  )
}

export default Post