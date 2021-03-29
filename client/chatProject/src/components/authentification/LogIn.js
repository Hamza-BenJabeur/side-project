import {useState} from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createUser} from '../../redux/actions/user'
function LogIn (){
    const dispatch = useDispatch();
    const [value,setValue]=useState(false)
    const [user, setUser] = useState({ firstName: '', lastName: '', userName: '', email: '', imgURL: '',password:'' });
    const handleSubmit = async (e) => {
        e.preventDefault();
    
       
          dispatch(createUser(user));
     
      };
     
    return (
        <section class="login-block">
    <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
           {!value?
           <div>
		    <h2 class="text-center">Login Now</h2>
		    <form class="login-form">
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Username</label>
    <input type="text" class="form-control" placeholder="Username"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
    <input type="password" class="form-control" placeholder="Password"/>
  </div>
  
  
    <div class="form-check">
    <label class="form-check-label">
    <button type="submit" class="btn btn-login float-right">LogIn</button>
    <button type="submit" class="btn btn-register float-right" onClick={()=>{setValue(true)}}>Register</button>
    </label>
  </div>
  
</form>
</div>
:
<div>
<h2 class="text-center">Register Now</h2>
<form class="login-form"  onSubmit={handleSubmit}>

<div class="form-group">
<label for="exampleInputEmail1" class="text-uppercase">firstName</label>
<input type="text" class="form-control" placeholder="firstName"
onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
</div>
<div class="form-group">
<label for="exampleInputEmail1" class="text-uppercase">lastName</label>
<input type="text" class="form-control" placeholder="lastName"
onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
</div>

<div class="form-group">
<label for="exampleInputPassword1" class="text-uppercase">userName</label>
<input type="text" class="form-control" placeholder="userName"
onChange={(e) => setUser({ ...user, userName: e.target.value })}/>
</div>
<div class="form-group">
<label for="exampleInputPassword1" class="text-uppercase">email</label>
<input type="text" class="form-control" placeholder="email"
onChange={(e) => setUser({ ...user, email: e.target.value })}/>
</div>
<div class="form-group">
<label for="exampleInputPassword1" class="text-uppercase">image</label>
<FileBase type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, imgURL: base64 })} />
</div>
<div class="form-group">
<label for="exampleInputPassword1" class="text-uppercase">Password</label>
<input type="password" class="form-control" placeholder="Password"
onChange={(e) => setUser({ ...user, password: e.target.value })}/>
</div>

<div class="form-group">
<label for="exampleInputPassword1" class="text-uppercase">repeat Password</label>
<input type="password" class="form-control" placeholder="Password"/>
</div>

<div class="form-check">
<label class="form-check-label">
<button type="submit" class="btn btn-register float-right">Register</button>
</label>
</div>

</form>
</div>
}

		</div>
		<div class="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  </ol>
            <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    </div>
    </div>
            </div>	   
		    
		</div>
	</div>
</div>
</div>
</section>
    )
}
export default LogIn;