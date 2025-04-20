import React from 'react'
import "./singlePost.css"
function singlePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur 
                <div className="singlePostEdit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Yash</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex voluptatum optio nisi accusamus quisquam debitis hic, eveniet delectus doloremque distinctio et quod repudiandae minima aliquid nihil nulla reprehenderit porro!
            </p>
        </div>
    </div>
  )
}


export default singlePost