import "./meetup.css";

export default function Meetup() {
    return (
        <div className="meetup">
            <img src="assets/img/meetup.png" alt="" className="meetupImg" />

            <div className="meetupinfo">
                <img src="assets/img/meetupTopic.png" alt="" className="meetupTopic" />
                <h3 className="meetupTitle">Finance & Investment Elite Social Mixer @Lujiazui</h3>
            </div>

            <div className="meetupDateInfo">
                <i class=" meetupCalender fas fa-calendar-day"></i>
                <h5 className="meetupDate">Fri, 12 Oct, 2018</h5>

                <i class="meetupLocation fas fa-map-marker-alt"></i>
                <h5 className="meetupPlace">Ahmedabad, India</h5>
            </div>

            <div className="visitSite">
                <h5 className="visitSiteText">Visit Website</h5>
            </div>

            <div className="meetupUserInfo">
                <img src="assets/img/meetuplogo.png" alt="" className="meetupUserLogo" />
                <h4 className="meetupUserName">Ronal Jones</h4>

                <i class=" meetupEye far fa-eye"></i>
                <h5 className="meetupView">1.4k views</h5>
                <i class=" meetupShare fas fa-share-alt-square"></i>
            </div>
        </div>
    )
}
