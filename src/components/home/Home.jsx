import "./Home.css"
import React from 'react'
import Header from "../Header"
import Posts from "../posts/posts"
import SideBar from "../sidebar/SideBar"

function Home() {
  return (
    <>
      <header />
      <div>
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home