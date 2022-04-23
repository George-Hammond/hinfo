import './loginpage.css';


const LoginPage = ()=>{
    return(
        <div className='container'>
            <div className="login-form">
                <form >                
                    <br />
                    <input type="text" id='login-email' placeholder="Email*" name='email'  />                              
                    <input type="password" placeholder="Password*" name='Password' />                 
                    <br />
                    <input type="submit" value="Submit" id="res-submit"/>    
                </form>
            </div>            
        </div>
    )
}

export default LoginPage;