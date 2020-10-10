import React from 'react';
import logo from './media/omlogo.png';
import background from './media/om.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-theme">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Frontend Dev Selection exercise</h1>
          <h2>By Armando Regalado Arreguín</h2>
          <img src={background} className="om-backgorund" alt="open-market-backgorund" />
          <p className="instructions">The exercise can be phrased as follows:<br /><br />
           “Create a page that allows the user to build a list of things, and each of those things must have
           its own sub-list of children. Define a way that this functionality might be displayed to a user,
           considering both building the list of things and viewing/editing the list. Deleting elements from
           the list should also be possible. Embellish and add effects as you wish.”
          <br /><br />As stated, you are free to decide the best way to lay it out and to make it shine!</p>
          <h3>Excersice</h3>
          <div className="excersice-om">
            <p>Build a list of things</p>
            <input type="text" id="myInput" className="input-title" placeholder="List Title..." />
            <input type="submit" className="addBtn" value="Add" onClick={newElement} />
           <div id="myUL">

           </div>
           </div>
           <ul id="myUL2">
           </ul>
          <p>
            Some pages developed by me.
          </p>
          <a
            className="App-link"
            href="https://www.trendica.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tréndica
          </a><br />
          <a
            className="App-link"
            href="https://www.industrialrobotics.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industrial Robotics
          </a><br />
          <a
            className="App-link"
            href="https://www.armie1.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RENDER (Working still in this one)
        </a><br />
        </div>
      </header>
    </div>
  );
}

let close = document.getElementsByClassName("close");
let i;
let num = 0;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
function newElement() {
  let ul = document.createElement("ul");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  ul.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(ul);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  span.className = "close";
  let inputs = document.createElement("INPUT");
  num = num + 1;
  inputs.id = "myInput" + num;
  let txt = document.createTextNode("\u00D7");
  let texts = document.createTextNode(" List" + num + " ");
  let buttons = document.createElement("BUTTON");
  buttons.innerHTML = "Add-Sublist";
  buttons.className = "addBtn";
  buttons.id = num;
  buttons.onclick = newElement2;
  span.appendChild(txt);
  ul.appendChild(span);
  ul.appendChild(inputs);
  ul.appendChild(texts);
  ul.appendChild(buttons);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }

}

function newElement2() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput" + num).value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL2").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  span.className = "close closes";
  let txt = document.createTextNode("\u00D7");
  let texts = document.createTextNode(" Sub-list" + num);
  span.appendChild(txt);
  li.appendChild(span);
  li.appendChild(texts);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }

}

export default App;
