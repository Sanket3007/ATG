import Education from "../education/Education";
import Job from "../job/Job";
import Meetup from "../meetup/Meetup";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Education />
            <Meetup />
            <Job />
        </div>
    )
}
