import "../style/stackBody.css";
import LeftBar from "./sub/LeftBar";
import Scrollable from "./sub/Scrollable";

export default function Body() {
    return <div id="body">
        <LeftBar />
        <Scrollable />
    </div>
}