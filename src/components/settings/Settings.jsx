import React from 'react'
import "./settings.css"
import SideBar from '../sidebar/SideBar'

function settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Icon</span>
                <span className="settingsUpdateTitle">Delete your Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img src="" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}}/>
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='john'/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john@gmail.com'/>
                <label htmlFor="">Password</label>
                <input type="text" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default settings