import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">
                    <i class=" sidebarIcon fas fa-map-marker-alt">
                        <span className="sidebarIconText">   Noida, India  </span>
                        <i class=" sidebarIconEdit fas fa-pen"></i></i>
                </div>
            </div>

            <div className="sidebarItem">
                <div class="tooltip">&#x1F6C8;
                    <span class="tooltiptext">Your location will help us serve better and     extend a personalised experience.</span>
                </div>
            </div>
        </div>
    )
}
