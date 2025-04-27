import React from 'react';
import Form from 'react-bootstrap/Form';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import Button from 'react-bootstrap/Button';
import '../Style/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Layout from './Layout';
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
    <Layout>
     <section>
      
        <h1>Welcome to Evolution</h1>
        <p>EVs are the future of sustainable transportation.</p>
        {/* Add more content here */}
      </section>


      {/* Carousel Section */}
      <section>
        <div className='fluid-container'>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={image1} alt="First slide" />
              
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={image2} alt="Second slide" />
             
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className="d-block w-100" src={image3} alt="Third slide" />
              
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* About EV Section */}
      <section id="about" className='about-section'>
        <Container className="p-5 text-center">
          <h3>About EV</h3>
          <p>EVs (Electric Vehicles) run on electric motors powered by rechargeable batteries.</p>
          <p>They produce zero tailpipe emissions, making them eco-friendly.</p>
          <p>Charging can be done at home or at public fast-charging stations.</p>
          <p>Common battery types include lithium-ion for efficiency and longevity.</p>
          <p>Popular EV brands are Tesla, BYD, Hyundai, and Tata.</p>
          <p>EVs have lower maintenance costs compared to gasoline vehicles.</p>
          <p>Government incentives and improving infrastructure are boosting EV adoption worldwide.</p>
          <Button variant="outline-success" className='mt-3'><Link to={"/about"}>Learn More</Link></Button>
        </Container>
      </section>

      {/* Video Section */}
      <section className='video-section'>
        <Container fluid className='d-flex justify-content-center'>
          <video width="90%" autoPlay loop muted>
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className='contact-section'>
        <Container className='py-5'>
          <Row className="align-items-center">
            {/* Left side: Image or heading */}
            <Col xs={12} md={6} className='text-center mb-4 mb-md-0'>
              <h1>Contact Us</h1>
              {/* If you want real image: */}
              {/* <img src={yourImage} alt="Contact" className="img-fluid rounded" /> */}
            </Col>

            {/* Right side: Form */}
            <Col xs={12} md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                </Form.Group>

                <Button variant="outline-success">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      </Layout>
    </>
  )
}

export default Home;
