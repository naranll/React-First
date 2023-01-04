import "../style/stackHeader.css";

export default function Header() {
    return <div className="header">
        <div id="myLogo">
            <img src="./Stack_Overflow-Logo.wine.svg" alt="stack logo"/>
        </div>
        <a href="#" >About</a>
        <a href="#" >Products</a>
        <a href="#" >For Teams</a>
        <form>
            <input type="text" placeholder="Search..." name="search" id="searchBar"></input>
        </form>
        <button>Log In</button>
        <button>Sign Up</button>
    </div>

}