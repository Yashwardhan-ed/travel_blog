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
        <div
            className="sidebar flex flex-row justify-around items-start border border-[#939200] shadow-[0_0_2px_#888888] rounded-xl bg-[#ffda83] p-3 w-full mt-5"
        >
            <div className="sidebarItem">

                <div className="sidebarTitle flex gap-2">
                    <span className="about font-bold">About Me</span>
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
                        <p className="aboutText text-center">{about}</p>
                    )}
                </div>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle font-bold">Categories</span>
                <ul
                    className="sidebarList grid grid-cols-2 gap-2 mt-2"
                    style={{ listStyleType: "none", padding: 0 }}
                >
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Style</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle font-bold">Follow Us</span>
                <div className="sidebarSocial flex justify-around items-center mt-2">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>

        </div>
    )
}

export default SideBar