import "./Home.css"
import Header from "../header/Header"
import Posts from "../posts/posts"
import SideBar from "../sidebar/SideBar"

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home