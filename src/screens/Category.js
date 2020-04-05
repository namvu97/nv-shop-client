import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../configs/api'
import ProductItem from '../components/ProductItem';

class Category extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
        }
    }
    
    componentDidMount() {
        this.getProductData(this.props.match.params.categoryId)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
            this.getProductData(this.props.match.params.categoryId);
        }
    }

    getProductData(_id) {
        api.get('/product/category/' + _id)
          .then(response => {
            this.setState({ data: response.data })
        })
    }

    render() {
        const { name } = this.props.match.params
        return (
            <>
                {/*	List Product	*/}
                <div className="products">
                    <h3>{name} (hiện có {this.state.data.length} sản phẩm)</h3>
                    <div className="product-list card-deck">
                    {
                        this.state.data.map((item, index) => 
                            <ProductItem
                                key = {index}
                                _id = {item._id}
                                image = {item.image}
                                name = {item.name}
                                price = {item.price}
                            />
                        )
                    }
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

export default Category;