import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HOST_IMAGE } from '../configs/api';
import { connect } from 'react-redux';
import api from '../configs/api';

class Cart extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      mail: "",
      phone: "",
      address: "",
      name: ""
    }
  }

  onChangeHandle = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    })
  }

  onClickRemoveCart = (productId) => {
    this.props.removeCart(productId)
  }

  onSubmit = (e) => {
    e.preventDefault()

    let data = {
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      name: this.state.name,
      orders: this.props.cart.map(item => item._id)
    }
    console.log(data)
    api.post("/product/order", data)
      .then(response => {
        if (response.data.status === "oke") {
          console.log("oke", response.data)
          this.props.history.push(`/cart/success`)
          this.props.clearCart();
          return
        }
        alert("Information is not valid")
        console.log("fail", response.data)
      })
      .catch(e => {
        console.log("Error", e)
      })

  }

  render() {
    return (
      <>
        {/*	Cart	*/}
        <div id="my-cart">
          <div className="row">
            <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
            <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
            <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
          </div>
          <form method="post">
            {
              this.props.cart.map((item, index) => {
                const key = item._id;
                const { image, name, price, _id, quantity } = item
                return (
                  <div className="cart-item row" key={key}>
                    <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                      <img alt="NV Mobile Shop" src={`${HOST_IMAGE}${image}`} />
                      <h4>{name}</h4>
                    </div>
                    <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                      <input type="number" id="quantity" className="form-control form-blue quantity" defaultValue={quantity} min={1} />
                    </div>
                    <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                      <b>{(price * quantity).toLocaleString()}đ</b>
                      <Link to="#" onClick={() => this.onClickRemoveCart(_id)}>Xóa</Link>
                    </div>
                  </div>
                )
              })
            }
            <div className="row">
              <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                <button id="update-cart" className="btn btn-success" type="submit" name="sbm">Cập nhật giỏ hàng</button>
              </div>
              <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
              <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{this.props.total.toLocaleString()}đ</b></div>
            </div>
          </form>
        </div>
        {/*	End Cart	*/}
        {/*	Customer Info	*/}
        <div id="customer">
          <form method="post">
            <div className="row">
              <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                <input
                  placeholder="Họ và tên (bắt buộc)"
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChangeHandle}
                  required
                />
              </div>
              <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                <input
                  placeholder="Số điện thoại (bắt buộc)"
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={this.onChangeHandle}
                  required
                />
              </div>
              <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                <input
                  placeholder="Email (bắt buộc)"
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={this.onChangeHandle}
                  required
                />
              </div>
              <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                <input
                  placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={this.onChangeHandle}
                  required
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="by-now col-lg-6 col-md-6 col-sm-12">
              <Link to="#" onClick={this.onSubmit}>
                <b>Mua ngay</b>
                <span>Giao hàng tận nơi siêu tốc</span>
              </Link>
            </div>
            <div className="by-now col-lg-6 col-md-6 col-sm-12">
              <Link to="#">
                <b>Trả góp Online</b>
                <span>Vui lòng call (+84) 0988 550 553</span>
              </Link>
            </div>
          </div>
        </div>
        {/*	End Customer Info	*/}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (productId) => {
      dispatch({
        type: 'REMOVE_CART',
        payload: productId
      })
    },
    clearCart: () => {
      dispatch({
        type: 'CLEAR_CART'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)