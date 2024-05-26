import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminMenu from "./adminMenu";

const ProductList = () => {
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("")

  const navigate = useNavigate();

  const handleSubmit = () => {};
  const uploadFileHandler = () => {}

  return (
    <div className="container text-white sm:mx-[0]">
      <AdminMenu />
      <div className="flex justify-center align-center flex-col md:w-full p-10">
        <h3 className="h-12 text-center text-white">Creer un produit 📦</h3>
        {image && (
          <div className="text-center">
            <img
              src={imageUrl}
              alt="product"
              className="block mx-auto max-h-[200px]"
            />
          </div>
        )}

        <div className="mb-3 ">
          <label
            className="border text-white px-4 block w-full 
          text-center rounded-lg cursor-pointer font-bold py-11 sm:py-11"
          >
            {image ? image.name : "Upload image"}
            <input
              type="text"
              name="image"
              accept="image/*"
              onChange={uploadFileHandler}
              className={!image ? "hidden" : "text-white"}
            />
          </label>
        </div>

        <div className="p-3">
          <div className="flex flex-wrap justify-center align-center gap-6">
            <div className="one">
              <label htmlFor="name">Name</label> <br />
              <input
                type="text"
                className="mb-3 p-4 w-[20rem] border rounded-lg bg-[#101011]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="two ">
              <label htmlFor="name block">Prix</label> <br />
              <input
                type="number"
                className="mb-3 p-4 w-[20rem] border rounded-lg bg-[#101011]"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center align-center gap-6">
            <div className="one">
              <label htmlFor="name">Quantité</label> <br />
              <input
                type="text"
                className="mb-3 p-4 w-[20rem] border rounded-lg bg-[#101011]"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="two ">
              <label htmlFor="name block">Marque</label> <br />
              <input
                type="text"
                className="mb-3 p-4 w-[20rem] border rounded-lg bg-[#101011]"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center align-center gap-6">
            <div className="one">
              <label htmlFor="name">Description</label> <br />
              <textarea
                type="text"
                className="mb-3 p-4 w-[20rem] border  rounded-lg bg-[#101011]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="two ">
              <label htmlFor="name block">En stocke</label> <br />
              <input
                type="text"
                className="mb-3 p-4 w-[20rem] border rounded-lg bg-[#101011]"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>

          <button 
          onClick={handleSubmit}
          className="py-4 px-10 ml-7 mt-5 rounded-lg text-lg font-bold bg-pink-700">
            Soumettre
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
