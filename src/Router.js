import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Product from './screens/Product';
import Category from './screens/Category';
import Search from './screens/Search';
import Success from './components/Success';
// import Login from './admin/screens/Login';
// import Admin from './admin/screens/Admin';
// import SidebarAdmin from './admin/components/Sidebar';
// import User from './admin/screens';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="" component={Header} />
            <div id="body">
                <div className="container">
                    <Route path="" component={Menu} />
                    <div className="row">
                        <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                            <Route path="" component={Slider} />
                            <Switch>
                                <Route exact path="" component={Home} />
                                <Route path="/product/:name.:productId" component={Product} /> 
                                <Route path="/category/:name.:categoryId" component={Category} /> 
                                <Route exact path="/cart" component={Cart} />
                                <Route path="/cart/success" component={Success} />
                                <Route path="/search" component={Search} />
                            </Switch>
                        </div>
                        <Route path="" component={Sidebar} />
                    </div>
                </div>
            </div>
            <Route path="" component={Footer} />
            {/* <Route path="/login" component={Login} />
            <Route path="/admin" component={SidebarAdmin} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/admin" component={User} /> */}
        </BrowserRouter>
        );
    }
}

export default Router;