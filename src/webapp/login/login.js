import React,{Component} from 'react'
import './styles.css'
import $ from 'jquery'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import google from './img/google.png'
import logo from './img/logo.png'
import Modal from './Modal/Modal'
import Validator from 'validator'
import {GoogleLogin} from 'react-google-login'
class login extends Component
{  constructor()
	{ super();
	 this.state = {
	 toggle:false
 
   }
 }
 
 toggleHandler=()=>{
    console.log("hello")
    this.setState({  
    toggle:!this.state.toggle
 })

 
 }
 componentDidUpdate()
 { 
	const btn=document.getElementsByClassName('hidden')[0]
	console.log("button",btn)
	btn.click()
 }
	componentDidMount()
    { 
        console.log(document.getElementsByTagName('text').innerText)
    }
	responseGoogle=(res)=>{ 
	console.log("hello",res)
	alert("Succesful Login")
	setTimeout(()=>{
		window.location='/'
	}
	,2000)
	

    }

    render() {

    return(
        <div className="LoginPage">
            <section className="ftco-section">
		{this.state.toggle?<Modal modalClosed={this.toggleHandler} show={this.state.toggle}>
			<div className="container">
			
			<div>
				<div className="ModalInner col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="left-slider">
							<div className="owl-carousel">
							  <div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div>
							  <div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div><div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div><div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div>
							</div>
			      </div>
						<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100 logo">
			      			<img src={logo}/>
			      			<h3 className="mb-12">Welcome to <b>Unlisted</b>

			      			</h3>
			      		</div>
								
			      	</div>
						<form action="#" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" htmlFor="name">Email/Phone</label>
			      			<input type="text" className="form-control username" placeholder="Username" required/>
			      		</div>
		            <div className="form-group mb-3">
		        	<label className="label" htmlFor="password">Password</label>
					
		              <input type="password" className="form-control pass" placeholder="Password" required/>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	
									</div>
									<div className="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
		            </div>
		            
		          </form>
		          <div className="or"><span>or</span> </div>
		          <div className="social-login">
					  <GoogleLogin clientId="204963496979-jg5oairf5bt0vkc8oed81jcu1331m034.apps.googleusercontent.com"
					   onSuccess={this.responseGoogle} onFailure={this.responseGoogle}
					   cookiePolicy={'single_host_origin'}  
					   />
				  </div>
		          <p className="create-link"><b>New to Unlisted ?</b> <a data-toggle="tab" href="#signup">Create Account</a></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
		
      

		</Modal>:<button className="clicked" onClick={this.toggleHandler}>Click</button>}
		
	</section>

	
        </div>
    )
}
    
}
export default login