import React from 'react';
import "./UserRegister.css"


function Login() {

  return (

    <div className='login-bg'>

      <div className='container'>

        <form id='TheForm' method='post' nonvalidate="nonvalidate" >

          <div className='row'>
            <div className='col-xs-12 col-sm-5 col-md-5 fadeInRight animated'>
              <span>
                Maharashtra Real Estate
              </span>
              <div></div>
              <div></div>

            </div>


            <div className='col-xs-12 col-sm-5 col-md-5'>

              <div className='page-panel login'>
                <div>
                  <h1>Login to your Account</h1>
                </div>
              </div>

            </div>

          </div>

        </form>

      </div>

    </div>

  )
}

export default Login;
