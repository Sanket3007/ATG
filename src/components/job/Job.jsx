import "./job.css";

export default function Job() {
    return (
        <div className="job">
            <div className="jobInfo">
                <img src="assets/img/Job.png" alt="" className="jobTopic" />

                <div className="mainTitle">
                    <h3 className="jobTitle">Software Developer</h3>
                </div>

                <div className="companyName">
                    <i class=" companyLogo fas fa-briefcase"></i>
                    <h5 className="company">Innovaccer Analytics Private Ltd.</h5>

                    <i class="jobLocation fas fa-map-marker-alt"></i>
                    <h5 className="jobPlace">Noida, India</h5>
                </div>

                <div className="visit">
                    <h5 className="visitText">Apply on Timesjobs</h5>
                </div>

                <div className="jobUserInfo">
                <img src="assets/img/joblogo.png" alt="" className="jobUserLogo" />
                <h4 className="jobUserName">Joseph Gray</h4>

                <i class=" jobEye far fa-eye"></i>
                <h5 className="jobView">1.4k views</h5>
                <i class=" jobShare fas fa-share-alt-square"></i>
            </div>

            </div>
        </div>
    )
}
