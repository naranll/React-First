import Title from './Title';
import Content from './Content';
import '../stacktyles/Scrollable.css'

export default function Scrollable(){
    return <div class="scroll">
        <Title />
        <Content />
    </div>
}