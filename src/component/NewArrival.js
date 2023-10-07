import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cookie from "universal-cookie";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBIcon,
} from "mdb-react-ui-kit";
const cookie = new Cookie();
function NewArrival() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = cookie.get("jwt");
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        setLoading(false);
        fetch('http://localhost:8080/api/getAllProducts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
                // Cache the API response in a cookie for future use
                //cookie.set("cachedProducts", data, { path: "/" });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    })
    
    return (
        <>
        <div className="d-flex flex-column bg-white py-4">
            <h2 className="text-muted text-center mt-1 mb-1">The perfect shopping experience.</h2>
            <h2 className="text-muted text-center mt-1 mb-1">Welcome to E-Store</h2>

        </div>
    <h2 className="text-muted text-center mt-1 mb-1">New Arrivals</h2>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {products.map((product) => (
                                     <Carousel.Item interval={1000}>
                                         <MDBContainer fluid className="my-5">
                                             <MDBRow className="justify-content-center">
                                                 <MDBCol md="6">
                                                     <MDBCard className="text-black">
                                                         <MDBCardImage
                                                             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                                                             position="top"
                                                             alt="Apple Computer"
                                                         />
                                                         <MDBCardBody>
                                                             <div className="text-center">
                                                                 <h2 className="text-muted mb-4">{product.productName}</h2>
                                                                 <span>Price : {product.price}</span>
                                                             </div>
                                                         </MDBCardBody>
                                                     </MDBCard>
                                                 </MDBCol>
                                             </MDBRow>
                                         </MDBContainer>
                                     </Carousel.Item>
            ))}
        </Carousel>
            <div className="d-flex justify-content-center mt-1 mb-4">
                <Link to="/product" className="btn btn-primary" replace>
                    Browse All products
                </Link>
            </div>
        </>
    );

}

export default NewArrival;