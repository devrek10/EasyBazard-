import React from "react";
import Loader from "./Loader";
import { useGetTopProductsQuery } from "../redux/api/productSlice";
import SmallProduct from '../products/smallProduct'
import ProductCaroussel from "../products/productCaroussel";

const Header = () => {
  const { data, isLoading, isError } = useGetTopProductsQuery();
     console.log(data);
  if (isLoading) return <Loader />;

  if (isError) return <h1>Erreur</h1>;
  return (
    <>
      <div className="flex justify-between">
        <div className="xl:block lg:hidden md:hidden:sm:hidden">
            <div className="grid grid-cols-2">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <ProductCaroussel />
      </div>
    </>
  );
};

export default Header;
