import React, {Component} from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Estimate from './components/Estimate';
import Services from './components/Services';
import ScrollToTop from './components/support/ScrollTop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './system/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/updateCategory';
import LawnMow from './services/LawnMow'
import Trim from './services/Trim'

import './App.css';
import './components/css/Navbar.css'

class App extends Component {
   render() {
    return (
        <>
        <BrowserRouter>
        <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/estimate' exact component={Estimate}  />

              <Route path='/services' exact component={Services}  />
              <Route path='/services/lawn-mowing' exact component={LawnMow}  />
              <Route path='/services/trimming' exact component={Trim}  />

              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />

              <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
              <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
              <AdminRoute path="/create/category" exact component={AddCategory} />
              <AdminRoute path="/create/product" exact component={AddProduct} />
              <Route path="/product/:productId" exact component={Product} />
              <Route path="/cart" exact component={Cart} />
              <AdminRoute path="/admin/orders" exact component={Orders} />
              <PrivateRoute path="/profile/:userId" exact component={Profile} />
              <PrivateRoute path="/admin/products" exact component={ManageProducts} />
              <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
              <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
            </Switch>
            <BottomNav/>
        </BrowserRouter>
        </>
    );
  }
}

export default App;
