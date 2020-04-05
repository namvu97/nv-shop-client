// import React, { Component } from 'react';
// import api from '../../configs/api';

// class login extends Component {
//     constructor(props,context){
//         super(props, context);
//         this.state = {
//             username: "",
//             password: ""
//         }
//     }

//     onChangeHandle = (event) => {
//         const { value, name } = event.target;
//         this.setState({
//             [name]: value
//         })
//     }

//     onSubmit = async (event) => {
//         event.preventDefault();

//         let data = {
//             username: this.state.username,
//             password: this.state.password
//         }
//         console.log(data)
//         let result = await api.post("/product/admin/signin", data)
//         console.log(result)
//         console.log(result.data)
//         console.log(result.status)
//         if(result.data.status){
//             this.props.history.push(`/admin`)
//         }
//     }

//     render() {
//         return (
//             <div className="row">
//                 <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
//                     <div className="login-panel panel panel-default">
//                         <div className="panel-heading">Namvu Mobile Shop - Administrator</div>
//                         <div className="panel-body">
//                         {/* <div className="alert alert-danger">Tài khoản không hợp lệ !</div> */}
//                         <form role="form" method="post">
//                             <fieldset>
//                             <div className="form-group">
//                                 <input 
//                                     className="form-control" 
//                                     placeholder="Username" 
//                                     name="username" 
//                                     type="text"
//                                     onChange={this.onChangeHandle} 
//                                     autofocus 
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input 
//                                     className="form-control" 
//                                     placeholder="Mật khẩu" 
//                                     name="password" 
//                                     type="password"
//                                     onChange={this.onChangeHandle}  
//                                 />
//                             </div>
//                             <div className="checkbox">
//                                 <label>
//                                     <input 
//                                         name="remember" 
//                                         type="checkbox" 
//                                         defaultValue="Remember Me" 
//                                     />
//                                     Nhớ tài khoản
//                                 </label>
//                             </div>
//                             <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Đăng nhập</button>
//                             </fieldset>
//                         </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default login;