import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';
import useSound from 'use-sound';
import config from '../../../config';
import LatestMessagesContext from '../../../contexts/LatestMessages/LatestMessages';
import TypingMessage from './TypingMessage';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import '../styles/_messages.scss';
import {GlobalContext} from '../../../context/GlobalState'

//https://stackoverflow.com/questions/43668808/render-data-from-localstorage-with-react

const socket = io(
  config.BOT_SERVER_ENDPOINT,
  { transports: ['websocket', 'polling', 'flashsocket'] }
);


function Messages() {

  const { message } = useContext(GlobalContext)
  return (
    <div className="messages">
      <Header />
      <div className="messages__list" id="message-list">
        {message}
      </div>
      <Footer message={Message} sendMessage={TypingMessage} onChangeMessage={Messages} />
    </div>
  );
}

export default Messages;
