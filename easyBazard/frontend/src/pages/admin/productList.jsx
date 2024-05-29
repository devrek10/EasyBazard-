import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from "../../redux/api/productSlice";
import { useFetchCategoriesQuery } from "../../redux/api/categorySlice";
import { toast } from "react-toastify";

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
  const [stock, setStock] = useState("");

  const navigate = useNavigate();

  const [uploadProductImage] = useUploadProductImageMutation();
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useFetchCategoriesQuery();

  const handleSubmitFile = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();
      productData.append("image", image);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("brand", brand);
      productData.append("countInStock", stock);

      const { data } = await createProduct(productData);

      if (data.error) {
        toast.error("Creation du produit échouée. Veuillez réessayer🙁");
      } else {
        toast.success(`${data.name} est crée`);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Creation du produit échouée. Veuillez réessayer");
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
      setImageUrl(res.image);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

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

        <div className="flex justify-center align-center mb-3 ">
          <label
            className="border text-white px-4 block w-[50%]  
          text-center rounded-lg cursor-pointer font-bold py-11 sm:py-11"
          >
            {image ? image.name : "Upload image"}
            <input
              type="file"
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
                type="number"
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
                placeholder="0"
                className="mb-3 p-4 w-[20rem] border rounded-lg bg-[#101011]"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center align-center">
            <label className="p-4 ">Catégorie</label>
            <select
              placeholder="Choose Category"
              className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmitFile}
            className="py-4 px-10 ml-7 mt-5 rounded-lg text-lg font-bold bg-pink-700"
          >
            Soumettre
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
