
import "./App.css"; 
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';




// import { prettyDOM } from "@testing-library/react";



export default function App() {
  const data=[
    {
      productImage:
        "holder.js/100px180",
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      rating:"NA",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Special Item",
      price: "$18.00",
      rating: "100%",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Sale Item",
      price: "$25.00",
      rating: "NA",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Popular Item",
      price: "$40.00",
      rating: "100",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Sale Item",
      price: "$25.00",
      rating: "NA",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      rating: "NA",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Special Item",
      price: "$18.00",
      rating: "100%",
    },
    {
      productImage:
        "holder.js/100px180",
      productName: "Popular Item",
      price:"$40.00",
      rating: "100%",
    },
    
    
  ]
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <div className="head">
       
          <div className="card-value">
             <h1><Badge bg="success">
              Cart {count}
             </Badge>
       </h1>
      </div>
      <div className="main"><h1>Shop in style</h1><p>With this shop hompeage template</p></div>
      </div>
   
      <Container>
      <Row>
      {data.map((product,idx)=>(
        <Col xs={3}
       key={idx}>
         <Product
         key={idx}
         prod={product}
         count={count}
         setCount={setCount}
         /></Col>
      ))}
        
      </Row>
    </Container>
     
    </div>
  
  
  );
}

function Product({prod,count,setCount})
{
  function addTocart()
  {
    setCount(count+1);
    setShow(!show);
  }
  function removeCart(){
  setCount(count-1);
  setShow(!show);
  }
  const [show,setShow]=useState(false);
 
  return(
<div >
  
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.rating}</Card.Text>
        <Card.Text>{prod.price}</Card.Text>
        
       {!show ?
        <Button variant="primary"   onClick={addTocart}>Add to cart</Button>  : 
        <Button variant="danger"   onClick={removeCart}>Remove to cart</Button>}
      </Card.Body>
    </Card>
 </div>

  )
}