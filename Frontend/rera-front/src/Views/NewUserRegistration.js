import React, { useEffect, useMemo, useState } from 'react';
import "./UserRegister.css"
import { toast } from 'react-toastify';
import {useSelector,useDispatch} from "react-redux"
import { addUser } from '../redux/actions/userRegister';
import { addprolist } from '../redux/actions/getPromoter';

toast.configure()

function NewUserRegistration() {

  const [values, setValues] = useState({
    state: "",
    userType: "",
    username: "",
    passwword: "",
    confirmPassword: "",
    mobile: "",
    email: "",
    error: ""

  });

  const usrRegister = useSelector((state)=>state.adduser)
  const stateRegister = useSelector((state)=>state.getstateList)
  
  const {loading,error,userInfo} = usrRegister;

  const {isLoading,isError,data} = stateRegister
  
  console.log(isLoading,isError,data)

  const dispatch = useDispatch()
  const dispatch_for = useDispatch()

  const usernameHandler = (event) => {
    event.persist()
    setValues((value) => ({
      ...value,
      username: event.target.value
    }))

  }

  const onValueChange = (event)=>{
    event.persist()
    setValues((value)=>({
      ...value,
      userType:event.target.value
    }))
  }

  const onstateChnage = (event)=>{
    event.persist()
    setValues((value)=>({
      ...value,
      state:event.target.value

    }))
  }

  const passwordHandler = (event) => {
    event.persist()
    setValues((value) => ({
      ...value,
      passwword: event.target.value
    }))

  }

  const confirmPasswordHandler = (event) => {
    event.persist()
    setValues((value) => ({
      ...value,
      confirmPassword: event.target.value
    }))
  }

  const mobileNumberHandler = (event) => {
    event.persist()

    setValues((value) => ({
      ...value,
      mobile: event.target.value
    }))
  }

  const emailHandler = (event) => {
    event.persist()
    setValues((value) => ({
      ...value,
      email: event.target.value
    }))
  }


  const sumitForm = (event) => {
    event.preventDefault()


    if (values.mobile.length !== 10) {

      setValues((value) => ({
        ...value,
        error: "Phone Number is not 10 digits"
      }))
      toast.error("Phone number should be 10 digits only")

    }

    dispatch(addUser({
        userRegistration:{
          userType:values.userType,
          state:values.state,
          name:values.username,
          email:values.email,
          password:values.passwword,
          phonenumber:values.mobile
        }
      })
      
      )
    
  }

  useEffect(() => {

    dispatch_for(addprolist())
    
  }, []);
  

  return (
    <div className='login-bg'>

      <div className='container'>

        <form id='TheForm' method='post' onSubmit={sumitForm}>

          <div className='page-panel login col-md-8 col-sm-8 col-md-offset-2'>
            <h1>Create New Account</h1>

            <div className='row'>

              <div className='col-md-12 col-sm-12 radios'>
                <div className='select-type' >
                  <label htmlFor="UserType">Select User Type : </label>
                  <span style={{ color: "red" }}>*</span>
                  <div className='radios'>
                    <input type={"radio"} id="1" tabIndex="1" value="Promoter" name='UserType' onChange={onValueChange}></input>
                    <label htmlFor='Promoter'>Promoter </label>
                  </div>
                  <div className='radios'>
                    <input type={"radio"} id="2" tabIndex="1" value="agent" name='UserType' onChange={onValueChange}></input>
                    <label htmlFor='Real Estate Agent '>Real Estate Agent </label>
                  </div>
                  <div className='radios'>
                    <input type={"radio"} id="3" tabIndex="1" value="Complainant" name='UserType' onChange={onValueChange}></input>
                    <label htmlFor='Complainant'>Complainant</label>
                  </div>
                </div>
              </div>
              <div>

                <div className='form-group col-sm-6 col-md-6 col-xs-12'>
                  <label className='mandatory' htmlFor='StateId'>Select State/UT</label>
                  <select className='form-control' onChange={onstateChnage} value={values.state}>

                  {

                    isError ? <option>loading values</option> : data !== undefined && data.message.map((x)=>(
                      <option key={x.stateItems.DivId} value={x.stateItems.DivId}>{x.stateItems.DivName}</option>
                      
                      ))
                      
                    }
                    </select>
                </div>
                <div className='form-group col-sm-6 col-md-6 col-xs-12'>
                  <label htmlFor='Username'>UserName</label>
                  <input autoComplete='off' className='form-control'
                    placeholder='Username' tabIndex="5" type={"text"} id="UserName" value={values.username}
                    name="username"
                    onChange={usernameHandler}
                    required
                  >

                  </input>
                  <span style={{ color: "red" }}></span>
                </div>
              </div>

              <div className='col-md-6 col-sm-6 col-xs-12'>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input autoComplete='off' className='form-control'
                    placeholder='Password' tabIndex="6" type="password" id="password"  value={values.passwword}
                    onChange={passwordHandler} name="password" required
                  >

                  </input>

                </div>

                <div className='form-group'>
                  <label htmlFor='emailid'>Mobile Number</label>
                  <input autoComplete='off' className='form-control'
                    placeholder='Mobile Number' tabIndex="7" type={"text"} id="mobileNumber"  value={values.mobile}
                    onChange={mobileNumberHandler} required
                  >

                  </input>

                </div>

              </div>

              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input autoComplete='off' className='form-control'
                    placeholder='confirmPassword' tabIndex="6" type={"text"} id="confirmPassword"  value={values.confirmPassword}
                    name="confirmpassword" onChange={confirmPasswordHandler} required
                  >

                  </input>

                </div>

                <div className='form-group'>
                  <label htmlFor='emailid'>Email ID</label>
                  <input autoComplete='off' className='form-control'
                    placeholder='email ID' tabIndex="7" type={"email"} id="mobileNumber"  value={values.email}
                    onChange={emailHandler} required
                  >

                  </input>

                </div>

              </div>

              <div >
                <br></br>
                <br></br>
              </div>

              <div className='col-sm-3 col-xs-6'>
                <button id='btnSubmit' className='btn btn-secondary'
                  value={"Create User"} type="submit"
                >
                  Create User
                </button>
              </div>
              <div className='col-sm-3 col-xs-6'>
                <input id='btnSubmit' type={"button"}
                  className="btn btn-warning"
                  value="Go to Login"
                >

                </input>
              </div>

            </div>

          </div>

        </form>

      </div>
      
    </div>
    
    )
    ;
}


export default NewUserRegistration;
