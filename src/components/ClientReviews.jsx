import { FaStar } from "react-icons/fa";
import clientReviews from "../../public/assets/clientReviews";

const ClientReviews = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        color={index < rating ? "#FFD700" : "#E0E0E0"}
        className="inline"
      />
    ));
  };

  return (
    <div className="md:mt-28 lg:mt-52 2xl:mt-20 iphone5:mt-[28rem] iphone10:mt-48 iphone15pm:mt-52 iphone15pro:mt-32 lg:mx-28">
      <h2 className="text-2xl text-center mb-4 md:text-4xl lg:text-start">
        Shiny Happy Clients
      </h2>
      <div className="md:flex md:flex-wrap md:justify-center md:gap-4 space-y-4 md:space-y-0">
        {clientReviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col 2xl:flex-1 md:w-[250px] bg-yellow py-10 px-5 gap-4"
          >
            <span>{renderStars(review.ratings)}</span>
            <h4 className="text-2xl md:h-[50px] md:font-bold">
              {review.title}
            </h4>
            <p className="text-sm mt-4">{review.comment}</p>
            <p className="text-sm">{review.reviewver}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
