import "./navbar.css";

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <img src="assets/img/whole.png" alt="" className="navIcon" />
            </div>

            <div className="navCenter">
                <div className="searchBox">
                    <i class="fas fa-search"></i>
                    <input type="text" className="searchText" placeholder="Search for your favorite groups in ATG" />
                </div>
                            
            </div>

            <div className="navRight">
                <span className="navText">Create Account.</span>
                <a href="#" className="navLink">It's free!</a>
            </div>
        </div>
    )
}