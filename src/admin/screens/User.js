// import React, { Component } from 'react';

// class User extends Component {
//     render() {
//         return (
//         <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
//             <div className="row">
//                 <ol className="breadcrumb">
//                     <li>
//                         <a href="#"><svg className="glyph stroked home">
//                             <use xlinkHref="#stroked-home" /></svg>
//                         </a>
//                     </li>
//                     <li className="active">Danh sách thành viên</li>
//                 </ol>
//             </div>
//             <div className="row">
//                 <div className="col-lg-12">
//                     <h1 className="page-header">Danh sách thành viên</h1>
//                 </div>
//             </div>
//             <div id="toolbar" className="btn-group">
//                 <a href="thanhvien-add.html" className="btn btn-success">
//                     <i className="glyphicon glyphicon-plus" /> Thêm thành viên
//                 </a>
//             </div>
//             <div className="row">
//                 <div className="col-lg-12">
//                     <div className="panel panel-default">
//                         <div className="panel-body">
//                             <table data-toolbar="#toolbar" data-toggle="table">
//                                 <thead>
//                                     <tr>
//                                         <th data-field="id" data-sortable="true">ID</th>
//                                         <th data-field="name" data-sortable="true">Họ &amp; Tên</th>
//                                         <th data-field="price" data-sortable="true">Email</th>
//                                         <th>Quyền</th>
//                                         <th>Hành động</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td style={{}}>1</td>
//                                         <td style={{}}>Admin</td>
//                                         <td style={{}}>admin@gmail.com</td>
//                                         <td><span className="label label-danger">Admin</span></td>
//                                         <td className="form-group">
//                                             <a href="thanhvien-edit.html" className="btn btn-primary">Edit</a>
//                                             <a href="/" className="btn btn-danger">Remove</a>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{}}>2</td>
//                                         <td style={{}}>Nguyễn Văn A</td>
//                                         <td style={{}}>nguyenvana@gmail.com</td>
//                                         <td><span className="label label-warning">Member</span></td>
//                                         <td className="form-group">
//                                             <a href="thanhvien-edit.html" className="btn btn-primary">Edit</a>
//                                             <a href="/" className="btn btn-danger">Remove</a>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="panel-footer">
//                             <nav aria-label="Page navigation example">
//                                 <ul className="pagination">
//                                     <li className="page-item"><a className="page-link" href="#">«</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">1</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">2</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">3</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">»</a></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default User;