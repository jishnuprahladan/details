import React, { useState } from 'react';
import './Login.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MDBCardBody, MDBCheckbox, } from 'mdb-react-ui-kit';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let location = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const body = { email, password }
        const res = await axios.post('http://localhost:8000/login', body)
        if(res){
            localStorage.setItem("user",JSON.stringify(res.data.currentUser))
        alert(res.data.message);
        location('/home')
        console.log(res);
        }
        else{
console.log(res.error.data.message)
        }
    }

    return (
        <>
            <div>
                <nav bg="dark">
                    <div>
                        <div href="#home" className=' ' >
                            <div className='p-3 d-flex justify-content-end'>
                                <p className='me-3 mt-3'>Don't have an account?</p>
                                <Link to='/register'>
                                    <button className='btn btn-primary mt-2'>Sign Up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Container fluid>
                <Row className='d-flex  justify-content-center align-items-center h-100'>
                    <Col col='12'>
                        <Card className='bg-white my-5 mx-auto' style={{ border: '0px', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                <h2 className="fw-bold mb-2 text-center">Welcome Back!</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>
                                <label>Email</label>
                                <input className='form-control mb-4 w-100' onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email address' id='formControlLg' type='email' size="lg" />
                                <label>Password</label>
                                <input className='form-control mb-4 w-100' onChange={(e) => setPassword(e.target.value)} placeholder='Password' name='password' id='formControlLg' type='password' size="lg" />
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember me' />
                                <button onClick={(e) => login(e)} className='btn' style={{ border: 0 }} size='lg'>
                                    Login
                                </button>
                            </MDBCardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;