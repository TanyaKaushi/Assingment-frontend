import React from 'react'
import frame from "../img/frame.png"
import { Link } from "react-router-dom";
import arrow from "../img/arrow.svg"

const Favourite = () => {
    return (
        <div style={{ padding: "50px 100px 100px 100px", fontFamily: "Sathoshi" }}>
            <div className="topic c1" style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "5px" , marginLeft: "60px"}}>
                <Link to="/" style={{ textDecoration: "none", color: "black" }} >
                    PRODUCTS
                </Link>
            </div>&nbsp;
            <img src={arrow} className="image1 c1" style={{ marginTop: "-10px", width: "50px" }} />&nbsp;&nbsp;
            <div className="subtopic c1" style={{ color: '#001EB9' }}>Favorites</div>

            <nav
                class="navbar navbar-expand-sm"
                style={{ marginBottom: "50px", paddingTop: "20px" , marginLeft: "30px"}}
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
                        <button class="btn btn-primary my-5 my-sm-0" type="submit" style={{ width: "100px" }} >
                            Search
                        </button>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "400px", marginTop: "-8px" }}>
                        <Link className="nav-link" to="/add-item">
                            <button
                                type="button"
                                class="btn btn-primary"
                                style={{ width: "200px" }}
                            >
                                New Product
                            </button>
                        </Link>

                    </li>
                    <li>
                        <img src={frame} style={{ width: "90px", marginTop: "-17px" }} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Favourite
