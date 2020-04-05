import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {
    render() {
        return (
            <div>
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#slide" data-slide-to={0} className="active" />
                    <li data-target="#slide" data-slide-to={1} />
                    <li data-target="#slide" data-slide-to={2} />
                    <li data-target="#slide" data-slide-to={3} />
                    <li data-target="#slide" data-slide-to={4} />
                    <li data-target="#slide" data-slide-to={5} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/slide-1.png" alt="NV Mobile Shop" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/slide-2.png" alt="NV Mobile Shop" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/slide-3.png" alt="NV Mobile Shop" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/slide-4.png" alt="NV Mobile Shop" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/slide-5.png" alt="NV Mobile Shop" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/slide-6.png" alt="NV Mobile Shop" />
                    </div>
                </div>
                {/* Left and right controls */}
                <Link className="carousel-control-prev" to="#slide" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </Link>
                <Link className="carousel-control-next" to="#slide" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </Link>
            </div>
        );
    }
}

export default Slider;