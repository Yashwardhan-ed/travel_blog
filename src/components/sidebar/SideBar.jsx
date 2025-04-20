import "./SideBar.css"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">
                    <span>About Me</span>
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quibusdam expedita accusantium dolores eaque ea aliquid quam rerum molestiae autem, ducimus aliquam ipsa dignissimos natus neque blanditiis! Quam, rem blanditiis?
                    </p>
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
        </div>
    )
}

export default SideBar