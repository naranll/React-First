import Center from './Center';
import RightBar from './RightBar';
import "../../style/Content.css";

export default function Content(){
    return <div id="content" className="d-lg-flex">
    <Center />
    <RightBar />
    </div>
}