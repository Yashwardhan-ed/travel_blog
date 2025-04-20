import React from 'react'
import "./single.css"
import SideBar from '../../sidebar/SideBar'
import SinglePost from '../../singlePost/singlePost'
function single() {
  return (
    <div className='single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default single