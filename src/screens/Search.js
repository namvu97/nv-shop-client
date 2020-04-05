import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../configs/api';
import ProductItem from '../components/ProductItem';

class Search extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let url = new URLSearchParams(this.props.location.search);
        let query = url.get('query');
        api.get('/product/search?q=' + query)
            .then(response => {
                this.setState({
                    productList: response.data
                })
            })
    }

    render() {
        return (
            <>
                {/*	List Product	*/}
                <div className="products">
                    <div id="search-result">
                        Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span>
                    </div>
                    <div className="product-list card-deck">
                        {this.state.productList.map((item, index) => 
                            <ProductItem 
                                key={index}
                                _id={item._id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                            />
                        )}
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <ul className="pagination">
                        <li className="page-item"><Link className="page-link" to="#">Trang trước</Link></li>
                        <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">Trang sau</Link></li>
                    </ul> 
                </div>                
            </>
        );
    }
}

export default Search;