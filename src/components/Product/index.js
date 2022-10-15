import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

function ProductDetail({ product }) {
  return (
    <Row className="mt-4">
      <Col xxl="4" xl="4" lg="4" md="4" sm="12" xs="12">
        <img width={'100%'} src="/dummy-product-image.jpeg" alt="product" />
      </Col>
      <Col>
        <Card>
          <CardBody>
            <h3>{product.name}</h3>
            <div>{product.model}</div>
            <div>{product.price}</div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ProductDetail;
