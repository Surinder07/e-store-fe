import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Cookie from "universal-cookie";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "../navMenu/Header";
const cookie = new Cookie();

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = cookie.get("jwt");

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
       <Header/>
       <div className="container">
        {products.map((product) => (
            <div className="cardCss">
                <Card style={{
                    padding: '16px',
                    margin: '16px',
                    alignContent : 'center'
                }}>
                    <div className="cardBody">
                    <Card.Body>
                        <Card.Img variant="top" style={{width:'180px', height:'140px'}} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481" />
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                            {product.productDescription}
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </div>
                </Card>
            </div>
        ))}
       </div>
   </>

  );
}

export default ProductList;
