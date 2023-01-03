import "../stacktyles/LeftBar.css";

export default function LeftBar() {
    return <div id="left">
        <ul className="sideMenu">
            <li><a href="">HOME</a></li>
            <li><a href="">PUBLIC</a>
                <ul className="options">
                    <li>Tags</li>
                    <li>Users</li>
                    <li>Companies</li>
                </ul>
            </li>
            <li><a href="">COLLECTIVES</a>
                <ul className="options"> 
                    <li>Explore Collectives</li>
                </ul>
            </li>
            <li><a href="">TEAMS</a></li>
        </ul>
    </div>
}