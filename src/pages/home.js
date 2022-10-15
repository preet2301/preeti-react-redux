  import React, { useEffect, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { FormGroup, Input, Label } from 'reactstrap';
  import ProductListing from '../components/ProductListing';

  function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    const [productsData, setProductsData] = useState([]);
    const { fetching, products, categories } = useSelector(
      (state) => state.productsData
    );
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({ type: 'REQUEST_GET_CATEGORIES' });
      dispatch({ type: 'REQUEST_GET_PRODUCTS' });
    }, [dispatch]);


    useEffect(() => {
      if (+selectedCategory === -1) {
        return setProductsData(products);
      }
      const filteredProducts = products.filter(
        (item) => +item.categoryId === +selectedCategory
      );
      setProductsData(filteredProducts);
    }, [selectedCategory, products]);

    if (fetching) {
      return 'Loading...';
    }

    return (
      <div className="p-5">
        <h3>Product Listing</h3>
        <FormGroup>
          <Label for="productCategory">Product Category</Label>
          <Input
            id="productCategory"
            name="select"
            type="select"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="-1">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Input>
        </FormGroup>

        <ProductListing products={productsData} />
      </div>
    );
  }

  export default HomePage;
