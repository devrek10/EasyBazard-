import { Link } from "react-router-dom";


const Product = ({ product }) => {
  return (
    <div className="w-full flex-1 flex-wrap justify-between items-center gap-5 ml-5">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-[350px] w-[350px]"
        />
        {/* <HeartIcon product={product} /> */}
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              $ {product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;