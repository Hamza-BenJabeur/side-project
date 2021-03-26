import {useState} from 'react';
import SideBar from './SideBar'
import Nav from './nav';
import './Style.css';
function Chat(){
    const [active,setActive]=useState(false)
    const handleClick=()=>{
      console.log("active");
      setActive(!active);
    }
    
    return (
        <div class="wrapper">

        <SideBar active={active}/>

 
        <div id="content">
            <Nav handleClick={handleClick} active={active}/>
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>

    
  

    )
}
export default Chat;
