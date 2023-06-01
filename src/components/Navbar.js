

const Navbar = () => (
    <>
        <div className="header">
            <input className="searchbox" type="text" placeholder="Search..."></input>
            <i className="searchicon"class="fa-solid fa-magnifying-glass"></i>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            Sign in <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </div>

        <div className="div1">
                <div className="shop">Shop Popular Categories</div>
                <div className="PIC">
                <div>
                <img src={require("../components/assets/pic1.jpg")} alt="jh" style={{ width: "45%", borderRadius: "20%"}} /> 
                <img src={require("../components/assets/pic3.webp")} alt="hello" style={{ width: "45%"}}/> 
                </div>
                <div>
                <img src={require("../components/assets/pic4.jpg")} alt="hello" style={{ width: "45%"}}/>
                <img src={require("../components/assets/pic2.webp")} alt="hello" style={{ width: "45%", borderRadius:"20px"}}/> 
                </div>
                </div>
        </div>

        <div className="txt1">Get the best fashion services</div>
        <div className="txt2">We provide the best fashion website services you need <br></br> to help you meet your fashion expectations</div>

        <div className="box"></div>
        
        <div className="image1">
            <img src={require("../components/assets/Fashion1.jpg")} alt="hello" style={{ width : "300px", borderRadius: "10px"}}/>
            <img src={require("../components/assets/Fashion2.webp")} alt="hello" style={{ width : "300px", borderRadius: "10px"}}/>
            <img src={require("../components/assets/Fashion3.jpg")} alt="hello" style={{ width : "300px", borderRadius: "10px"}}/>
            <img src={require("../components/assets/Fashion4.jpg")} alt="hello" style={{ width : "300px", borderRadius: "10px"}}/>
        </div>


    </>
)

export default Navbar;