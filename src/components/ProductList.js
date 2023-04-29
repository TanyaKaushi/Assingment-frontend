import React, { useState } from "react";
import styled from "styled-components";
import spinner from "../spinner.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import edit from "../img/edit-icon.svg";
import del from "../img/delete-icon.svg";
import star from "../img/star.svg";
import frame from "../img/frame.png"
import "./myStyles.css";
import swal from "sweetalert";

const ProductList = ({ posts }) => {
  const [product, setProduct] = useState([]);



  const deleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data again!",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/products/${id}`).then((res) => {
          swal("Deleted Successful", "Order is removed", "success");

          //this.retrievePosts();
        });
      } else {
        swal("Your data is safe!");
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('searchInput');
    const tableRows = document.querySelectorAll('#myTable tbody td');

    searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const name = row.querySelector('td:first-child').textContent.toLowerCase();

        if (name.includes(searchQuery)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }

      });

    });
  });


  return (
    <MainContainer
      style={{ padding: "50px 100px 100px 100px", fontFamily: "Sathoshi" }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "bold", letterSpacing: "5px", marginLeft: "60px" }}>PRODUCTS</h1>

      <nav
        class="navbar navbar-expand-sm"
        style={{ marginBottom: "50px", paddingTop: "20px", marginLeft: "30px" }}
      >
        <ul class="navbar-nav" style={{ marginLeft: "30px" }}>
          <li class="nav-item">
            <input
              id="searchInput"
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "400px" }}
            />
          </li>
          <li class="nav-item">

            <button type="submit" className="btn btn-primary" style={{ width: "150px", height: "40px", borderRadius: "8px", background: "#001eb9" }}>
              Search
            </button>
          </li>
          <li class="nav-item" style={{ marginLeft: "400px", marginTop: "-8px" }}>
            <Link className="nav-link" to="/add-item">


              <button type="submit" className="btn btn-primary" style={{ width: "200px", height: "40px", borderRadius: "8px", background: "#001eb9" }}>
                New Product
              </button>
            </Link>

          </li>
          <li>
            <Link to="./favorite" >
              <img src={frame} style={{ width: "90px", marginTop: "-17px" }} />
            </Link>
          </li>
        </ul>
      </nav>


      <table id="myTable" class="table" style={{ fontSize: "17px" }}>
        <thead style={{ border: "solid 2px white", color: "#001EB9" }}>
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              SKU
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              IMAGE
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              PRODUCT NAME
            </th>

            <th scope="col" style={{ textAlign: "center" }}>
              PRICE
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody style={{ border: "solid 2px white" }}>
          {!posts.length ? (
            <img />
          ) : (
            posts.map((product, key) => (
              <tr
                style={{
                  borderBottom: "solid 3px #F7F7F7",
                  marginBottom: "30px",
                }}
                key={key}
              >
                <td
                  style={{
                    textAlign: "center",
                    width: "100px",
                    color: "#969191",
                  }}
                >
                  #{product.sku}
                </td>

                <td style={{ textAlign: "center", width: "100px" }}>
                  <img
                    src={`/uploads/${product.articleImage}`}
                    alt="..."
                    style={{ width: "30%", borderRadius: "10px" }}
                  ></img>
                </td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  {product.name}
                </td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  {product.price}
                </td>

                <td style={{ textAlign: "center", width: "80px" }}>
                  <div className="row">
                    <div className="col-sm-2">
                      <Link to={`/update/${product._id}`}>
                        <img src={edit} />
                      </Link>
                    </div>

                    <div className="col-sm-2">
                      <a onClick={() => deleteItem(product._id)}>
                        <img src={del} />
                      </a>
                    </div>

                    <div className="col-sm-2">

                      <img src={star} />

                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <br />
        <br />
      </table>


    </MainContainer>
  );
};

export default ProductList;

// MAIN CONTAINER

const MainContainer = styled.div`

td{
   
}

  form-control {
    color: red !important;
    font-weight: 500;
    margin-top: 2rem;
  }
`;
