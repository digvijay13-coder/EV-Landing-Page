import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Modelimp from '../images/Modelimp.jpg';
import Car1 from "../images/Car1.jpg";
import Car2 from "../images/Car2.png";
import Car3 from "../images/Car3.jpg";
import Layout from './Layout';
import Pagination from 'react-bootstrap/Pagination';
import '../Style/model.css'

const cardData = [
  { title: 'Mahindra BE 6', price: 'Rs. 18.90 - 26.90 Lakh', img: Car1, link: 'https://www.carwale.com/mahindra-cars/be-6/' },
  { title: 'BYD Seal', price: 'Rs. 41.00 - 53.00 Lakh', img: Car2, link: 'https://www.carwale.com/byd-cars/seal/' },
  { title: 'Mercedes-Benz EQS', price: 'Rs. 1.63 Crore', img: Car3, link: 'https://www.carwale.com/mercedes-benz-cars/eqs/' },
  { title: 'Mercedes-Benz EQS', price: 'Rs. 1.63 Crore', img: Car3, link: 'https://www.carwale.com/mercedes-benz-cars/eqs/' },
  { title: 'Mercedes-Benz EQS', price: 'Rs. 1.63 Crore', img: Car3, link: 'https://www.carwale.com/mercedes-benz-cars/eqs/' },
 
  { title: 'Mahindra BE 6', price: 'Rs. 18.90 - 26.90 Lakh', img: Car1, link: 'https://www.carwale.com/mahindra-cars/be-6/' },
   { title: 'Mercedes-Benz EQS', price: 'Rs. 1.63 Crore', img: Car3, link: 'https://www.carwale.com/mercedes-benz-cars/eqs/' },
  { title: 'Mercedes-Benz EQS', price: 'Rs. 1.63 Crore', img: Car3, link: 'https://www.carwale.com/mercedes-benz-cars/eqs/' },
  { title: 'Mercedes-Benz EQS', price: 'Rs. 1.63 Crore', img: Car3, link: 'https://www.carwale.com/mercedes-benz-cars/eqs/' },
  { title: 'Mahindra BE 6', price: 'Rs. 18.90 - 26.90 Lakh', img: Car1, link: 'https://www.carwale.com/mahindra-cars/be-6/' },
  
];

export default function Models() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Function to paginate the cards
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Layout>
        <section>
          <div>
            <img src={Modelimp} alt="Model Image" style={{ width: '100%', height: 'auto' }} />
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="primary"
              style={{ marginTop: '20px' }}
            >
             More About
            </Button>
            <div style={{ minHeight: '150px', marginTop: '20px' }}>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '400px', margin: '0 auto' }}>
                    Tata Motors could offer self-driving autonomous technology on future EVs based on the Avinya concept underpinned by a new Born Electric platform
                    <br></br>
                    <Button variant="info">
                      <a href='https://www.rushlane.com/tata-electric-cars-get-tesla-like-autonomous-12434495.html' >Go To Page</a>
                    </Button>
                  </Card>
                </div>
              </Collapse>
            </div>
          </div>
        </section>

        <section>
        <h3>Some Famous Models</h3>
          <div className="card-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          
            {currentCards.map((car, index) => (
              <Card key={index} style={{ width: '18rem', margin: '10px', backgroundColor: '#333', color: '#fff' }}>
                <img src={car.img} alt={car.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
               
                <Card.Body>
                  <Card.Title>{car.title}</Card.Title>
                  <Card.Text>{car.price}</Card.Text>
                  <a href={car.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">Get Offers</Button>
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>
        <section>
  <Pagination>
    <Pagination.Prev onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)} />
    <Pagination.Next onClick={() => paginate(currentPage < Math.ceil(cardData.length / cardsPerPage) ? currentPage + 1 : currentPage)} />
  </Pagination>
</section>

      </Layout>
    </>
  );
}
