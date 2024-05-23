import React from "react";
import Loader from "./Loader";

const Header = () => {
  const { data, isLOading, isError } = useGetTopProductsQuery();

  if (isLoading) return <Loader />;

  if (isError) return <h1>Erreur</h1>;
  return (
    <>
      <div>
        <div>
            <div>
          {data.map((product) => (
            <div key={product._id}>
              <SmallProduct product={product} />
            </div>
          ))}
          </div>
        </div>
        <productCarousel />
      </div>
    </>
  );
};

export default Header;
