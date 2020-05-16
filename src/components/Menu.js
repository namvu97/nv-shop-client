import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../configs/api'

class Menu extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            menuData: []
        }
    }

    componentDidMount() {
        this.getDataMenu();
    }

    async getDataMenu() {
        await api.get('/product/category')
            .then(response => {
                this.setState({
                    menuData: response.data
                })
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <nav>
                        <div id="menu" className="collapse navbar-collapse">
                            <ul>
                                {
                                    // this.state.menuData.map((item, index) => {
                                    //     return (
                                    //         <NavLink
                                    //             key={index}
                                    //             className="menu-item"
                                    //             to={{ pathname: `/category/${item.name}.${item._id}`, }}
                                    //         >
                                    //             {item.name}
                                    //         </NavLink>
                                    //     )
                                    // })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Menu;