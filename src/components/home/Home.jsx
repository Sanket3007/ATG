import Group34 from '../group34/Group34';
import Posts from '../posts/Posts';
import Sidebar from '../sidebar/Sidebar';
import './home.css';


export default function Home() {
    return (
        <div>
            <Group34 />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}
