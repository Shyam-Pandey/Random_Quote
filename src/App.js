import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data,setData] = useState("")

  const getQoute = () =>{
    const apiURL = "https://api.quotable.io/random"
    axios.get(apiURL).then((res) => {
      console.log("response", res)
      setData(res.data)
    }).then((err) => {
      console.log("error", err)
    })
  }

  const bgColor = ()=>{
    var x = Math.ceil((Math.random() * 1000) % 256);
    var y = Math.ceil((Math.random() * 1000) % 256);
    var z = Math.ceil((Math.random() * 1000) % 256);
    var rgb = "rgb(" + x + "," + y + "," + z + ")";
    return rgb
  }
  
  const changeQuote = () =>{
    getQoute()
    chanageColor()
  }

  const chanageColor = () =>{
    document.getElementById('card').style.background = bgColor()
    return false
  }
  return (
    <>
    <div className="quotes">
      <div id="card">
        <p className="showQoute">{`“${data.content}”`} </p>
        <p className="showAuthName"> <strong> <i>{`-${data.author}`}</i></strong> </p>
        <button className="bnt-quote" onClick={changeQuote}>New Quote</button>
      </div>
    </div>
    </>
  );
}

export default App;
