export default function Center() {
    const name = "Legendary Andy";

    function sayHi(username) {
        if (username) {
            return <h1>Hello {username}!</h1>
        } else {
            return <h1>Hello Newbie!</h1>
        }
    }

    const splitted = name.split(' ');
    console.log(splitted); //why console.log twice?
    let textSize = (splitted[0] == 'Legendary') ? "36px" : "50px";

    const customHeader = {
        color: "green",
        fontSize: textSize,
    }
    return <div style={customHeader}>{sayHi(name)}</div>;
}