import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
function Home() {
    const [item, setitem] = useState('')
    const location =useNavigate()
    useEffect(() => {

        const item = JSON.parse(localStorage.getItem("user"))
        if (item) {
            setitem(item)
        }
        else{

            alert("user Not found please login")
            location('/')
        }


    })
    const logout=(e)=>{
        setitem(localStorage.removeItem("user"))
    }
 
    return (
        <>
            <div>
                <nav bg="dark">
                    <div>
                        <div href="#home" className=' ' >
                            <div className='p-3 d-flex justify-content-end'>
                                <p className='me-3 mt-3'><strong>Hi,{item} </strong></p>
                                <Link to='/'>
                                    <button onClick={(e)=>logout(e)} className='btn btn-primary mt-2'>Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Container className='d-flex text-center justify-content-center'>
                <Row>
                    <Col>
                        <h4>Name your Orginization</h4><br></br>
                        <input className='form-control text-center mb-4 w-100' name='txt' placeholder='Enter orginization name' id='formControlLg' type='text' size="lg" />
                        <h4 className='mt-5'>Select your Orginization Type below</h4>
                    </Col>
                </Row>

            </Container>
            <Container className='text-center mt-5'>
                <Row>
                    <Col md={3} className=''>
                        <div className='border p-2' > <img src='https://i.postimg.cc/wB1Whg3w/it-icon-png-6.png' style={{ height: 100 }} /><br></br>
                            <strong></strong></div>
                    </Col>

                    <Col md={3} className=''>
                        <div className='border p-2'><img src='https://i.postimg.cc/qMGZr19x/1255546.png' style={{ height: 100 }} /><br></br>
                            <strong>contruction</strong></div>
                    </Col>

                    <Col md={3} className=''>
                        <div className='border p-2'><img src='https://i.postimg.cc/XYQWjTHV/education-png-24.png' style={{ height: 100 }} /><br></br>
                            <strong>Education</strong></div>
                    </Col>
                    <Col md={3} className=''>
                        <div className='border p-2'><img src='https://i.postimg.cc/nhcShvxb/house-symbol-and-home-icon-sign-design-free-png.webp' style={{ height: 100 }} /><br></br>
                            <strong>Consultancy</strong></div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={3} className=''>
                        <div className='border p-2'>  <img src='https://i.postimg.cc/bwjc9qMY/904080.png' style={{ height: 100 }} /><br></br>
                            <strong>Logistics</strong></div>
                    </Col>

                    <Col md={3} className=''>
                        <div className='border p-2'>   <img src='https://i.postimg.cc/XJFQzLfF/pngtree-blue-factory-icon-or-logo-png-image-8837200.png' style={{ height: 100 }} /><br></br>
                            <strong>Manufacturing</strong></div>
                    </Col>

                    <Col md={3} className=''>
                        <div className='border p-2'><img src='https://i.postimg.cc/QxDnv2nM/19-190577-transparent-tourism-icon-png-tourism-icon-blue-png.png' style={{ height: 100 }} /><br></br>
                            <strong>Tourism</strong></div>
                    </Col>
                    <Col md={3} className=''>
                        <div className='border p-2'><img src='https://i.postimg.cc/wB1Whg3w/it-icon-png-6.png' style={{ height: 100 }} /><br></br>
                            <strong>IT</strong></div>
                    </Col>
                </Row>

                <Button className='btn btn-primary mt-5 ' size='lg'>Next</Button>

            </Container>


        </>
    )
}

export default Home