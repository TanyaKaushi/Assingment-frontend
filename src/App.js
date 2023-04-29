import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";
import Favourite from "./components/Favourite";
// import Register from './components/Register';
// import Login from './components/Login';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <ProductList posts={posts} />} />

      <Route
        path="/update/:id"
        render={(props) => <EditProduct {...props} posts={posts} />}
      />

      <Route path="/add-item" component={AddProduct} />
      <Route path="/favorite" component={Favourite} />
      <Footer />
    </div>
  );
}

export default App;
