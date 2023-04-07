import React from 'react'
import noLogo from'./noEntry.png';
import startLogo from './check.png';
import logo from './logo.svg';
import './Home.css';
import { ChangeEvent,useState, FormEvent, useEffect } from 'react';
import {Observable,subscriber,from,map, filter} from 'rxjs';

function Home() {
    //var displayLogo = startLogo;
  var myname ;
  var newText="";
  // SAMPLE USERNAME DATA
  const userName =["Pravin","Abu","Ali","Jaffar","Ainaa","Johnathan","Alig","Prathiban","Joel","Beatrix","Bob","Ben","Peter"];
  
  // MAKE userName ARRAY AN OBSERVABLE
  // const userName$= from(userName);

  // let verifyUser = userName$.pipe(
  //   map(val => val.includes(text)),
  //   filter(val => val.includes(text))
  // );

  //TO SET LOGO ACCORDING TO USER VERIFICATION
  // let changeLogo = verifyUser.subscribe(result =>{
  //   if (result === true){
  //     startLogo = logo;
  //   } else{
  //     startLogo = noLogo;
  //   }
  // })

  // TO GET INPUT
  const [text,setText] = useState("");

  const [newLogo,setLogo] = useState(startLogo);

  const [nText,setNewText] = useState(newText)

  // useEffect(()=>{
  //   this.subscription = verifyUser.subscribe(result =>{
  //     this.setText({text : result})
  //   })
  // })

  // TO SET TEXT BASED ON INPUT BY USER 
  const change = event =>{
    setText(event.target.value)
  }

  // ACTION WHEN BUTTON IS CLICKED
  const pressed = () =>{
    //startLogo= noLogo;
    if (userName.includes(text)){
      setLogo(startLogo = logo);
      setNewText(newText = text);
    }else if (!userName.includes(text)&& text !==""){
      setLogo(startLogo = noLogo);
      setNewText(newText = "");
    }else {
      alert("No input");
    }
    
  }

  const handleEnterKey =(e)=>{
    if (e.key ==="Enter"){
        pressed(e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={text} onChange={change} onKeyDown={handleEnterKey} />

        <button onClick={pressed} className='Button'>Verify</button>
        <img src={startLogo} className="App-logo" alt="logo" />
        <h1>Key In A Name</h1>
        <p className='description'>
          Basic function to check if user name exist in the array.<br/> 
          If so the react logo is displayed, if not the no entry logo is displayed.<br/> 
          Name entered is {nText}.<br/>
          Array includes ["Pravin","Abu","Ali","Jaffar","Ainaa","Johnathan","Alig","Prathiban","Joel","Beatrix","Bob","Ben","Peter"]<br/>
          Will make a proper login feature soon once I have properly understood rxjs.<br/>
        </p>
        
        
      </header>
    </div>
  )
}

export default Home