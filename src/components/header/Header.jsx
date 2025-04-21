import "./Header.css"
function Header() {
  return (
    <div className="header flex flex-col items-center mb-4">
      {/* <div className="headerTitles"> */}
      <span className="headerTitleLg flex my-5 text-7xl text-center" style={{ fontFamily: "Instrument Serif" }}>Your Travel Blog</span>
      {/* </div> */}

      <div
        className="rounded-lg"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1595087/pexels-photo-1595087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "400px", 
          aspectRatio: "16/9", 
        }}
      ></div>

      {/* <img
        className="headerImg rounded-lg"
        src="https://plus.unsplash.com/premium_photo-1676236246841-58ce7f9004a0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
        alt=""
      /> */}
    </div>
  )
}

export default Header