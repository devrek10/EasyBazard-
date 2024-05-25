import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminMenu from "./adminMenu";
import {
  useCreateProductMutation,
  useGetFilteredProductsQuery,
  useUploadProductImageMutation,
} from "../../redux/api/productSlice";
import { toast } from "react-toastify";

const ProductList = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const [uploadProductImage] = useUploadProductImageMutation();
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useGetFilteredProductsQuery();

  const uploadFileHandler = async (e) => {
    const formData = new formData();
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

  const handleSubmit = async () => {
    e.preventdefault();
    try {
      const productData = new FormData();
      productData.append("image", image);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("prix", price);
      productData.append("catégorie", category);
      productData.append("quantité", quantity);
      productData.append("brand", brand);
      productData.append("countInStock", countInStock);

      const { data } = await createProduct(productData);

      if (data.error) {
        toast.error("Creation du produit echouées. Veuillez ressayer");
      } else {
        toast.succes(`${data.name} est crée avec succes`);
        navigate("/");
      }
    } catch (error) {
      toast.error("Creation du produit echouée");
    }
  };

  return (
    <div className="container xl:mx-[9rem] sm:mx-[0]">
      <div className="flex flex-col md:flex-row">
        <AdminMenu />
        <div>
          <div className="md:w-3/4 p-3">
            <div className="h-12 text-white">Créer un Produit</div>
            {imageUrl && (
              <div className="text-center">
                <img
                  src={imageUrl}
                  alt="product"
                  className="block mx:auto max-h-[200px]"
                />
              </div>
            )}

            <div className="mb-3">
              <label className="border text-white px-4 block w-full text-center rounded-lg cursor-pointer font-bold py-11">
                {image ? image.name : "Upload Image"}
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
              <div className="flex-wrap flex">
                <div className="one">
                  <label htmlFor="name">Nom</label> <br />
                  <input
                    type="text"
                    className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="two ml-10">
                  <label htmlFor="name">Prix</label> <br />
                  <input
                    type="number"
                    className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="one">
                  <label htmlFor="name">Quantity</label> <br />
                  <input
                    type="number"
                    className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="two ml-10 ">
                  <label htmlFor="name block">Brand</label> <br />
                  <input
                    type="text"
                    className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>
              <label className="my-5">Description</label>
              <textarea
                type="text"
                className="p-2 mb-3 bg-[#101011] rounded-lg border w-[95%] text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <div className="flex justify-between">
                <div>
                  <label htmlFor="name block">count in stock</label> <br />
                  <input
                    type="text"
                    className="p-2 mb-3 bg-[#101011] rounded-lg border w-[95%] text-white"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Catégories</label> <br />
                  <select
                    placeholder="Choisir un catégorie"
                    className="p-2 mb-3 bg-[#101011] rounded-lg border w-[95%] text-white"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories?.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="py-4 px-10 rounded-lg mt-5 text-lg font-bold bg-pink-600"
              >
                Soumettre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
