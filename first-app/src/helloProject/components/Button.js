export default function Button() {
    function clickHandler() {
        console.log("Clicked!");
    }
    return <button onClick={clickHandler}>Click me</button>;
}