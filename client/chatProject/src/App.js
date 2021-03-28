import {useEffect} from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import { useDispatch } from 'react-redux';
import { getChats } from './redux/actions/chat';
import { useSelector } from 'react-redux';
// import Modal from './components/chat/Modal';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getChats());
  },[dispatch]);
  const chats=useSelector((state)=>state.chats)
  return (
    <div className="App">
      <Chat/>
     {console.log(chats)}
      {/* <Modal/> */}
    </div>
  );
}

export default App;
