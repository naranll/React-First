import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Legendary Andy";

  function sayHi(username) {
    if(username) {
      return <h1>Hello {username}!</h1>
    } else {
      return <h1>Hello Newbie!</h1>
      //can't write <h1>Hello</h1> <h2>World</h2>
    }
  }
  
  function clickHandler(){
    console.log("Clicked!");
  }

  const splitted = name.split(' ');
  console.log(splitted); //why console.log twice?
  let textSize = (splitted[0] == 'Legendary') ? "36px" : "50px";

  const customHeader = {
    color: "green",
    fontSize: textSize,
  }

  return (
    <div className="App">
      <header style={customHeader}>{sayHi()}</header>
      {/* if i wrote {sayHi} without the {} it will show error, saying it's not the right jsx format 
      because {sayHi} works as a pointer so it won't 'return' any value except starting position*/}

      <button onClick={clickHandler}>Click me</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
    </div>
    
    // <button></button> can't read because jsx only returns one element. "<> </>" is acceptable
  );
}

export default App;
