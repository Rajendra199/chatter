import React, { useState,useContext } from 'react';
import users from '../../UserList/constants/users';
import {GlobalContext} from '../../../context/GlobalState'


const RETURN_KEY_CODE = 13;

export default function Footer({value, name, sendMessage, onChangeMessage, message }) {
  // const onKeyDown = ({ keyCode }) => {
  //   // if (keyCode !== RETURN_KEY_CODE ) { return; }

  //   // sendMessage();
  // }
  const { addMessage } = useContext(GlobalContext)



  const [val, setVal] = useState("");
  console.log(val);

  const sendMessageData = (e) => {
    e.preventDefault();
    addMessage(val)
    setVal("")
  }

  

  return (
    <div className="messages__footer">
      <input
        type="text"
        value={val}
        name="val"
        placeholder="Write a message..."
        id="user-message-input"
        onChange={(e) => setVal(e.target.value)}
      />
      <div className="messages__footer__actions">
        <i className="far fa-smile" />
        <i className="fas fa-paperclip" />
        <i className="mdi mdi-ticket-outline" />
        <button onClick={sendMessageData} disabled={!message}>Send</button>
      </div>
    </div>
  );
}
