import React,{useState} from 'react'

const Login1 = () => {
    let [user,setUser]=useState({email:"",password:""})
    let emailHandler=(event)=>{
        setUser({...user,email:event.target.value})
    }
    let passwordHandler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }
  return (
    <div className='container mt-5'>
        
    <div className='row'>
    <div className='col-md-6'>
    <pre>{JSON.stringify(user)}</pre>
        <div className='card'>
            <div className='card-header'>
                <h3>Login Page</h3>
            </div>
            <div className='card-body'>
                <form onSubmit={submitHandler}>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Email' onChange={emailHandler}/>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Password' onChange={passwordHandler}/>
                    </div>
                    <div className='form-group'>
                    <input type='submit' className="btn btn-success"/>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>

        
    </div>
  )
}

export default Login1