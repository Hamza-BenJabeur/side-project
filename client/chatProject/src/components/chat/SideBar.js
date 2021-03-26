import image from '../../images/boj.PNG'
function SideBar({active}){
    
    return (
        <nav id="sidebar" className={active?"active":null}>
            <div style={{height:"20px"}}></div>
            <div className="channel">
                <span>Channels</span>
   
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>


            </div>
        <div class="sidebar-header">
        <div class="input-group rounded">
        
        <input type="search" class="form-control rounded" placeholder=" Search" aria-label="Search"
        aria-describedby="search-addon" id="input" />
        
        </div>
        </div>
        
        <ul class="list-unstyled components" id="relative">
            <li className="cont">
            <div className="icon-channel">
                    <div className="icon"><div className="channel-name">A</div></div>
                <a href="#homeSubmenu"  >ABOUT</a>
                </div>
              
            </li>
            <li>
                <div className="personal">
                    <div className="info">
                        <img className="user-image"  src={image}/>
                   
                        <p className="user-name">hamza ben jabeur</p>
      
               
                    
                    </div>
                </div>
            </li>
        </ul>
        </nav>
    )
}
export default SideBar;
