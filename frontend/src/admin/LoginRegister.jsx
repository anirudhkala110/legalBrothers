import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true
const LoginRegister = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cpassword, setCpassword] = useState(null)
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    const navigate = useNavigate()
    const login = true
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === '' || !email || password === '' || !password) {

        }
        else {
            if (login) {
                axios.post('https://api.legalbrother.in/api/login', { email: email, password: password })
                    // axios.post('http://localhost:8096/api/login', { email: email, password: password })
                    .then((res) => {
                        console.log(res)
                        if (res.data.login) {
                            window.location.href = '/all-case-study';
                        } else {
                            setMsg(res.data.msg);
                            setMsg_type(res.data.msg_type);
                            alert(res.data.msg)
                            // Clear the message after 3 seconds
                            const interval = setInterval(() => {
                                setMsg(null);
                            }, 3000)

                            // Clear the interval to avoid memory leaks
                            clearInterval(interval);
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else {
                if (name === '' || !name) {
                    alert("Please enter the name. . . ")
                }
                if (cpassword != password) {
                    alert("Password didn't match. . . ")
                }
                else {
                    axios.post('https://api.legalbrother.in/api/register', { name: name, email: email, password: password, cpassword: cpassword })
                        .then(res => {
                            console.log(res.data)
                            setMsg(res.data.msg);
                            setMsg_type(res.data.msg_type);
                            alert("Redirecting to Homepage . . .")
                            setInterval(() => {
                                navigate('/')
                            }, 2000)

                        })
                        .catch(err => {
                            console.log(err)
                            alert("Server Error. . . ")
                        })
                }
            }
        }

    }
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    return (
        <div className=''>
            <div className='container-fluid pt-5 bg-white min-vh-100 d-flex justify-content-center align-content-center'>
                <form className='p-2 border bg-light shadow border rounded' style={{ minHeight: '270px', minWidth: "320px",height:"40vh" }} onSubmit={handleSubmit}>
                    <center className='fs-3 fw-semibold'>{login ? 'Login Form' : ' Registration Form'}</center>
                    <center className={`${msg_type === 'error' ? 'fs-4 fw-semibold text-danger' : 'text-success'}`}>{msg ? msg : ''}</center>
                    {
                        !login && <div className='input-group mb-2'>
                            <label className=''>Name</label>
                            <input type="text" className='form-control w-100' required onChange={e => setName(e.target.value)} />
                        </div>
                    }
                    <div className='input-group mb-2'>
                        <label className=''>Email</label>
                        <input type='email' className='form-control w-100' required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='input-group mb-2'>
                        <label className=''>Password</label>
                        <br />
                        <div className='w-100 d-flex align-items-center px-1 bg-white rounded border'>
                            <input type={`${show1 ? 'password' : 'text'}`} className='border-0 form-control' required onChange={e => setPassword(e.target.value)} />{show1 ? <i class="bi bi-eye-fill" onClick={e => setShow1(!show1)}></i> : <i class="bi bi-eye-slash-fill" onClick={e => setShow1(!show1)}></i>}
                        </div>
                    </div>
                    {
                        !login && <div className='input-group mb-2'>
                            <label className=''>Confirm Password</label>
                            <br />
                            <div className='w-100 d-flex align-items-center px-1 bg-white rounded border'>
                                <input type={`${show2 ? 'password' : 'text'}`} className='border-0 form-control' required onChange={e => setCpassword(e.target.value)} />{show2 ? <i class="bi bi-eye-fill" onClick={e => setShow2(!show2)}></i> : <i class="bi bi-eye-slash-fill" onClick={e => setShow2(!show2)}></i>}
                            </div>
                        </div>
                    }
                    {
                        login ? <button className='btn w-100 btn-success rounded-0 my-2' type='submit'>Login</button> :
                            <button className='btn w-100 btn-primary rounded-0 my-2' type='submit'>Register</button>
                    }
                </form>
            </div>

        </div>
    )
}

export default LoginRegister