import Review from "./Review";

const Reviews = ({ reviews, title }) => {
  return (
    <div>
      <h3 className="text-2xl">
        {reviews?.length} reviews for {title}
      </h3>
      <div className="mt-6 flex flex-col gap-8">
        {reviews?.map((review) => (
          <Review review={review} key={review?.id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
