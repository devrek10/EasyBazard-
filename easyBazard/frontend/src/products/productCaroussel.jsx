import Message from "../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTopProductsQuery } from "../redux/api/productSlice";
import {
  FaBox,
  FaClock,
  FaMonument,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import moment from "moment";

const ProductCaroussel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScrolll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mb-4 lg:block xl:block md:block text-white">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider
          {...settings}
          className="xl:w-[50rem] lg:w-[56rem] sm:w-[40rem] sm:block flex justify-center items-center"
        >
          {products.map(
            ({
              image,
              _id,
              name,
              price,
              description,
              brand,
              createdAt,
              numReviews,
              rating,
              quantity,
              countInStock,
            }) => (
              <div key={_id}>
                <img
                  src={image}
                  alt={name}
                  className="w-full object-cover h-[30rem]"
                />
                <div className="mt-4 flex justify-center items-center font-semibold">
                  <div className="one">
                    <h2>{name}</h2>
                    <p>$ {price}</p> <br /> 
                    <p className="w-[20rem] ">{description}</p>
                  </div>
                  <div className="flex justify-between w-[20rem]">
                    <div className="one">
                      <h1 className="flex items-center mb-6">
                        <FaStore className="mr-2 text-white" /> Marque: {brand}
                      </h1>
                      <h1 className="flex items-center mb-6">
                        <FaClock className="mr-2 text-white" /> Added: {""}
                        {moment(createdAt).fromNow()}
                      </h1>
                      <h1 className="flex items-center mb-6">
                        <FaStar className="mr-2 text-white" /> reviews:{" "}
                        {numReviews}
                      </h1>
                    </div>
                    <div className="two">
                    <h1 className="flex items-center mb-6">
                        <FaStar className="mr-2 text-white" /> Ratings:{" "}
                        {Math.round(rating)}
                      </h1>
                      <h1 className="flex items-center mb-6">
                        <FaShoppingCart className="mr-2 text-white" /> Quantité:{" "}
                        {""}
                        {quantity}
                      </h1>
                      <h1 className="flex items-center mb-6">
                        <FaBox className="mr-2 text-white" /> En Stock:{" "}
                        {countInStock}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      )}
    </div>
  );
};
export default ProductCaroussel;
