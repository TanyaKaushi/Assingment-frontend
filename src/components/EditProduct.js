import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import arrow from "../img/arrow.svg"
import { Link } from "react-router-dom";
import swal from "sweetalert";


export const EditProduct = (props) => {
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [qty, setQty] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    };

    const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("sku", sku);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("qty", qty);
        formData.append("articleImage", fileName);

        setSku("");
        setName("");
        setPrice("");
        setDescription("");
        setQty("");

       
        axios
            .put(`/products/update/${props.match.params.id}`, formData)
            .then((res) => setMessage(res.data))
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get(`/products/${props.match.params.id}`)
            .then((res) => [
                setSku(res.data.sku),
                setName(res.data.name),
                setPrice(res.data.price),
                setDescription(res.data.description),
                setQty(res.data.qty),
                setFileName(res.data.articleImage),


               
            ])
            .catch((error) => console.log(error));
    }, []);

    return (
        <AddProductContainer>
           <span className="message" style={{color: "red"}}>{message}</span>
            <div className="container">
              
                <div className="container font1" style={{ padding: "0px 100px 20px 100px" }}>

                    <div className="topic c1" style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "5px" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }} >
                            PRODUCTS
                        </Link>
                    </div>&nbsp;
                    <img src={arrow} className="image1 c1" style={{ marginTop: "-10px", width: "50px" }} />&nbsp;&nbsp;
                    <div className="subtopic c1" style={{ color: '#001EB9' }}>Edit product</div>

                    <span className="message">{message}</span>
                    <form onSubmit={changeOnClick} encType="multipart/form-data"
                        class="form-inline"
                    >
                        <div class="form-group row inputstyle">
                            <label class="col-sm-1 col-form-label" htmlFor="sku">
                                SKU
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    value={sku}
                                    onChange={(e) => setSku(e.target.value)}
                                    className="form-control spacestyle"
                                ></input>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="form-group row inputstyle">
                                    <label class="col-sm-2 col-form-label" htmlFor="name">
                                        Name
                                    </label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control spacestyle"
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-group row inputstyle">
                                    <label
                                        class="col-sm-2 col-form-label"
                                        htmlFor="qty"
                                    >
                                        QTY
                                    </label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                            className="form-control spacestyle"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row inputstyle">
                            <label class="col-sm-1 col-form-label" htmlFor="price">
                                Price
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control spacestyle"
                                ></input>
                            </div>
                        </div>

                        <div class="mb-3 inputstyle" style={{ marginLeft: "10px", marginTop: "40px" }}>
                            <label for="exampleFormControlTextarea1" class="form-label" htmlFor="description">
                                Product Description
                            </label>
                            <h6 style={{ color: '#162427', marginTop: "5px", marginBottom: "20px", fontWeight: "400", fontSize: "12px" }}>A small description about the product</h6>
                            <textarea
                                class="form-control inputareastyle"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="description"
                                placeholder=""
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div class="form-group row inputstyle">
                            <label class="col-sm-2 col-form-label" htmlFor="file">
                                Choose item image
                                <h6 style={{ color: '#162427', marginTop: "10px", fontWeight: "400", fontSize: "12px" }}>JPG, PNG, SVG or GIF</h6>
                                <h6 style={{ color: '#162427', marginBottom: "20px", fontWeight: "400", fontSize: "12px" }}>(Maximum file size 30MB)</h6>
                            </label>

                            <div class="col-sm-10">
                                <input
                                    style={{ marginTop: "20px" }}
                                    type="file"
                                    filename="itemImage"
                                    className="form-control-file"
                                    onChange={onChangeFile}
                                ></input>
                            </div>
                        </div>


                        <div class="form-group " style={{ marginTop: "-50px", marginLeft: "980px" }}>
                            <button type="submit" className="btn btn-primary" style={{ width: "200px", height: "45px", borderRadius: "8px", background: "#001eb9" }}>
                                Update Article
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </AddProductContainer>
    );
};

export default EditProduct;

//MAIN CONTAINER
const AddProductContainer = styled.div`


  h1 {
    font-weight: 900;
    color: #02014b;
  }

  .form-group {
    margin: 1rem auto;
  }

  .btn-primary {
    margin-top: 2rem;
    background: #02014b;
    border: none;
    &:hover {
      background: #23387f;
    }
  }

  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;
