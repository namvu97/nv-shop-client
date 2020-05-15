import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer-top">
                    <div className="container">
                        <div className="row">
                            <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                                <h2>
                                    <Link to="/">
                                        <img alt="Footer" src="/images/logo-footer.png" />
                                    </Link>
                                </h2>
                                <p>
                                    NV Mobile Shope thành lập năm 2009.
                            </p>
                            </div>
                            <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Địa chỉ</h3>
                                <p>72B E8 - Phương Mai - Đống Đa - Hà Nội</p>
                                <p>42A E2 - Phương Mai - Đống Đa - Hà Nội</p>
                            </div>
                            <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Dịch vụ</h3>
                                <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
                                <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
                            </div>
                            <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Hotline</h3>
                                <p>Phone Sale: (+84) 0988 550 553</p>
                                <p>Email: nvmobileshop@yopmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*	Footer	*/}
                <div id="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p>
                                    2019 © NV Mobile Shop. All rights reserved. Developed by NV Software.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*	End Footer	*/}
            </div>
        );
    }
}

export default Footer;