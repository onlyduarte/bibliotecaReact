import React from 'react'
import './nav.css'
const Nav = () => {
    return ( 
        <>
            <nav>
               <a href="#">
                   <h1>Logo</h1>
               </a>
                <div>
                    <a href="#"><p>Roadmaps</p></a>
                    <a href="#"><p>Best Practices</p></a>
                    <a href="#"><p>Questions</p></a>
                    <a href="#"><p>Guides</p></a>
                </div>
                <div>
                    <a href="#"><p>Login</p></a>
                    <a href="#"><p>Sign Up</p></a>
                </div>
            </nav>
        </>
     );
}
 
export default Nav;