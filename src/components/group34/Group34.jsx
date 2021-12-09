import "./group34.css";

export default function Group34() {
    return (
        <div className="group34">
            <ul className="groupList">
                <li className="group34ListItem">All Posts(34)</li>
                <li className="group34ListItem change">Article</li>
                <li className="group34ListItem change">Event</li>
                <li className="group34ListItem change">Education</li>
                <li className="group34ListItem change">Job</li>
            </ul>

            <select name="" id="post" className="group34-post">
                <option value="post">Write a Post</option>
            </select>

            <button type="button" className="join-group">
                <span className="buttonIcon"><i class="fas fa-user-friends"></i></span>
                <span className="buttonText">Join Group</span>
            </button>

            <hr className="line" />
        </div>
    )
}
