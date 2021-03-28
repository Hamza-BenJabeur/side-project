
function Nav({active,handleClick,currentName}){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
           <div className="avatar">
            <button type="button" id="sidebarCollapse" class={active?"active":"navbar-btn"} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="name">{currentName.toUpperCase()}</div>
            </div>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
            </button>

           
        </div>
    </nav>
    )
}
export default Nav;