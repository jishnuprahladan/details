import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios';
import uuid from 'react-uuid';
import { Container,Row,Col,Card} from 'react-bootstrap';
import { MDBCardBody, MDBCheckbox,}from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [id,setId]=useState('')
    const [name, SetName] = useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const location =useNavigate()

useEffect(()=>{
    setId(uuid().slice(0,3));
},[])
    const registerUser = async(e) => {

      e.preventDefault()
      setId(uuid().slice(0,3));
      const body={id,name,email,password}
      const result = await axios.post('http://localhost:8000/register',body)
      alert(result.data.message);
      location('/')
   
    }

    return (
        <>
            <div>
                <nav bg="dark">
                    <div>
                        <div href="#home" className=' ' >
                            <div className='p-3 d-flex justify-content-end'>
                                <p className='me-3 mt-4'>Already have an account?</p>
                                <Link to='/'>
                                <button style={{ border: 0 }} className='btn btn-primary mt-4'>Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <form>
                <Container fluid>
                    <Row className='d-flex justify-content-center mt-5  h-100'>
                        <Col col='12'>
                            <Card className='bg-white my-5 mx-auto' style={{ border: '0px', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                    <h2 className="fw-bold mb-2 text-center">Let's go</h2>
                                    <label>Full Name</label>
                                    <input className='form-control mb-4 w-100' name='name' onChange={(e)=>SetName(e.target.value)} id='1' type='text' size="lg" />
                                    <label>Email</label>
                                    <input className='form-control mb-4 w-100' name='email' onChange={(e)=>setEmail(e.target.value)} id='2' type='email' size="lg" />
                                    <label>Choose Password</label>
                                    <input className='form-control mb-4 w-100' name='password' onChange={(e)=>setPassword(e.target.value)} id='3' type='password' size="lg" />
                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                                    <button className='btn' onClick={(e) => registerUser(e)} type='submit' style={{ border: 0 }} size='lg'>
                                        Login
                                    </button>
                                </MDBCardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    )
}

export default Register