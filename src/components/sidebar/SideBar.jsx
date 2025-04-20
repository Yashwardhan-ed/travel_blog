import "./SideBar.css"
import { useState, useRef } from "react"

function SideBar() {
    const [isEditing, setIsEditing] = useState(false)
    const [about, setAbout] = useState(
        localStorage.getItem("about") || ""
    );
    const textareaRef = useRef(null)

    const handleEdit = () => {
        setIsEditing(true);
    }   

    const handleSave = () => {
        setIsEditing(false);
        localStorage.setItem("about", about);
    }

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">
                    <span className="about">About Me</span>
                    {!isEditing ? (
                        <button onClick={handleEdit} className="editButton">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    ) : (
                        <button onClick={handleSave} className="saveButton">
                            <i className="fa-solid fa-save"></i>
                        </button>
                    )}
                </div>
                <div className="aboutContent">
                    {isEditing ? (
                        <textarea
                            ref={textareaRef}
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className="aboutTextarea"
                        />
                    ) : (
                        <p className="aboutText">{about}</p>
                    )}
                </div>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Style</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar