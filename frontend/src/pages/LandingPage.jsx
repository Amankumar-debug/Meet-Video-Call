import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function LandingPage() {

    const router=useNavigate();
    return ( 
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Your Video call</h2>
                </div>
                <div className='navList'>
                    <p onClick={()=>{
                        router("/cfdfr")
                    }}>Join as Guest</p>
                    <p onClick={()=>{
                        router("/auth")
                    }}>Register</p>
                    <button className='loginBtn' onClick={()=>{
                        router("/auth")
                    }}>Login</button>
                </div>
            </nav>
            <div className="landingPageMain">
                <div className="landingPageMainText">
                    <h1><span style={{color:"orange"}}>Connect</span> with your <br></br>
                        Loved Ones</h1>
                    <p>Cover a distance by your vedio call</p>
                    <Link to={"/auth"}><button className='GetStartedBtn'>Get Started</button></Link>
                </div>
                <div className="landingPageMainImg">
                    <img src='/mobile.png' alt='call-image'></img>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;