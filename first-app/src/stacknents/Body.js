import "../stacktyles/stackBody.css";
import LeftBar from "../stacknents/LeftBar";
import Scrollable from "./Scrollable";

export default function Body() {
    return <div id="body">
        <LeftBar />
        <Scrollable />
    </div>
}