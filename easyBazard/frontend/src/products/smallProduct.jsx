import { Link } from "react-router-dom";


const SmallProduct = ({ product }) => {
  <div className="w-[2220rem] ml-[2rem] p-3 bg-blue-500">
    <div className="relative">
      <img src={product.image} alt={product.image} className="h-auto rounded" />
      
    </div>

    <div className="p-4">
      <Link to={`/product/${product._id}`}>
        <h2 className="flex justify-between items-cen">
          <div>{product.name}</div>
        </h2>
        <span
          className="bg-pink-800 text-xs font-medium mr-2 px-2.5 
         py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300"
        >
          ${product.price}
        </span>
      </Link>
    </div>
  </div>;
};

export default SmallProduct;
