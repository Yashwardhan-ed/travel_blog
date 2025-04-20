import "./post.css"

function post() {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" className="postImg"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postCat">Style</span>
                </div>
            </div>
            <span className="postTitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, at? Autem voluptatum veritatis
            </span>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus commodi illum non aliquid, minus pariatur, illo necessitatibus incidunt, ea accusantium mollitia ex tenetur corrupti velit ratione animi laborum ad!</p>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div >
    )
}

export default post