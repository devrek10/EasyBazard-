import React from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductionQuery({ keyword });
  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem] mt-40 text-[3rem]">Produits Speciaux</h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bld rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
            <div className="flex justify-between flex-wrap mt-8">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;