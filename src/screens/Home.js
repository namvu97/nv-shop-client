import React, { Component } from 'react';

import api from '../configs/api'
import ProductItem from '../components/ProductItem';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      featuredProducts: [],
      newProducts: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let response = await Promise.all([
      api.get('product/featured'),
      api.get('product/new'),
    ])

    this.setState({
      ...this.state,
      featuredProducts: response[0].data,
      newProducts: response[1].data,
    })
    console.log(this.state.featuredProducts)
  }

  render() {
    return (
      <>
        <div className="products">
          <h3>Sản phẩm nổi bật</h3>
          <div className="product-list card-deck">
            {
              this.state.featuredProducts.map((item, index) =>
                <ProductItem
                  key={index}
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              )
            }
          </div>
        </div>
        <div className="products">
          <h3>Sản phẩm mới</h3>
          <div className="product-list card-deck">
            {
              this.state.newProducts.map((item, index) =>
                <ProductItem
                  key={index}
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              )
            }
          </div>
        </div>
      </>
    )
  }
}

export default Home;