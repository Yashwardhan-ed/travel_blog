import { Link } from "react-router-dom"
import "./post.css"

function Post({ post }) {
  const image = "https://images.unsplash.com/photo-1606240724602-5b21f896eae8";

  return (
    <div className="post flex flex-col w-80 shadow-[0_0_2px_#888888] rounded-lg bg-[#fffae7] p-2 hover:scale-102 transition duration-300 mr-3">

      <img
        src={post?.image || image}
        alt={post?.title}
        className="postImg w-full object-cover rounded-md aspect-[4/3] mb-2"
      />

      {/* <div className="postInfo "> */}
      {/* </div> */}

      <div className="flex flex-col mb-2">
        <Link
          className=" text-xl font-bold text-[#3f2700] hover:underline"
          to={`/post/${post?._id}`}>
          {post?.title}
        </Link>
        <span className="postAuthor text-xs text-gray-500 ">Author: {post?.author}</span>


      </div>


      <p className="postDesc text-sm text-gray-700">{post?.desc}</p>

      <span className="postDate text-xs text-gray-400">
        {new Date(post?.createdAt).toLocaleDateString()} - {post?.location}
      </span>

    </div>
  );
}

export default Post