import "./education.css"

export default function Education() {
    return (
        <div className="education">
            <img src="assets/img/education.png" alt="" className="educationImg" />

            <div className="educationinfo">
                <img src="assets/img/educationTopic.png" alt="" className="educationTopic" />
                <h3 className="educationTitle">Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h3>
                <p className="educationDescp">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            </div>

            <div className="educationUserInfo">
                <img src="assets/img/educationlogo.png" alt="" className="educationUserLogo" />
                <h4 className="educationUserName">Sarah West</h4>

                <i class=" educationEye far fa-eye"></i>
                <h5 className="educationView">1.4k views</h5>
                <i class=" educationShare fas fa-share-alt-square"></i>
            </div>
        </div>
    )
}
