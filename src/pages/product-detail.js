import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ProductDetail from '../components/Product';

function ProductDetailPage() {
  let { productId } = useParams();

  const { fetching, product } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'REQUEST_GET_PRODUCT',
      payload: { productId: productId },
    });
  }, [dispatch, productId]);

  if (fetching) {
    return 'Loading...';
  }
  return (
    <div className="container p-5">
      <h3>Product Detail</h3> <Link to="/">Back</Link>
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductDetailPage;
