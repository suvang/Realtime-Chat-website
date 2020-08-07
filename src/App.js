import React, {useState,useEffect} from 'react';
import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
      db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      });
  }, [] )
 
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [] )

  const sendMessage = (event) => {
   event.preventDefault();

  
db.collection('messages').add({
  message: input,
  username: username,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})
   setInput('');
  }

  return (
    <div className="App">
      <img style={{width:'100px', height:'100px'}} src="https://image.flaticon.com/icons/png/512/95/95639.png"/>
     <h1>Created by: Suvang </h1>
     <h2>welcome {username}</h2>

     <form className="app__form">
 <FormControl className="app__formControl">
  <Input className="app__input" placeholder="Enter a message"  value={input} onChange={event => setInput(event.target.value)} />

<IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
  <SendIcon />
</IconButton>

 </FormControl>
     </form>

      <FlipMove>
      {
       messages.map(({id,message})=>(
         <Message key={id} username={username} message={message} />
       ))
     }
      </FlipMove>
    </div>
  );
}

export default App;
