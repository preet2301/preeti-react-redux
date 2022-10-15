import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Row } from 'reactstrap';

function ProductListing({ products }) {
  return (
    <>
      {products.length ? (
        <Row className="mt-4">
          {products.map((product) => (
            <Col key={product.id} xxl="4" xl="4" lg="4" md="3" sm="12" xs="12">
              <Card>
                {/* Put a dummy img */}
                <CardImg src="dummy-product-image.jpeg"></CardImg>
                <CardBody>
                  <h4>
                    <Link to={`product-detail/${product.id}`}>
                      {product.name}
                    </Link>
                  </h4>
                  <div>{product.model}</div>
                  <div>{product.price}</div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        'No products found'
      )}
    </>
  );
}

export default ProductListing;
