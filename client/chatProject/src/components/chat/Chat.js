import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import SideBar from './SideBar'
import {getChannels} from '../../redux/actions/channel'
import { useSelector } from 'react-redux';
import Nav from './nav';
import './Style.css';
function Chat(){
    const dispatch =useDispatch(); 
    const [active,setActive]=useState(false)
    const [currentName,setCurrentName]=useState("");
    const handleClick=()=>{
      console.log("active");
      setActive(!active);
    }
    const Name=(x)=>{
        setCurrentName(x)
    }
    useEffect(()=>{
        dispatch(getChannels());
      },[dispatch]);
    const channels = useSelector(state => state.channels)
    return (
        <div class="wrapper">
{console.log(channels)}
        <SideBar active={active} channels={channels} Name={Name}/>

 
        <div id="content">
            <Nav handleClick={handleClick} active={active} currentName={currentName}/>
           
        </div>

    </div>

    
  

    )
}
export default Chat;
