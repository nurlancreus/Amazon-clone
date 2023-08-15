import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = ({ avgRating: starNumber, ratings: ratingNumber }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <>
          {starNumber > i ? (
            <span key={i}>
              <StarIcon className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]" />
            </span>
          ) : (
            <span key={i}>
              <StarIcon className="stroke-[#F1B61F] h-[20px]" />
            </span>
          )}
        </>
      ))}
      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;
