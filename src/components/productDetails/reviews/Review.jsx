import moment from "moment";
import { FaRegStar, FaStar } from "react-icons/fa";

const Review = ({ review }) => {
  const ratings = [];

  for (let i = 0; i < 5; i++) {
    if (i < Number(review?.rating)) {
      ratings.push(<FaStar className="text-[#F7AC2D]" />);
    } else {
      ratings.push(<FaRegStar />);
    }
  }

  return (
    <div className="flex gap-6">
      <div className="w-14 h-14">
        <img
          className="w-full h-full rounded-full"
          src="/images/users/1.png"
          alt=""
        />
      </div>

      <div className="w-fit">
        <div className="flex items-center gap-1">{ratings}</div>
        <h4 className="text-sm my-2">Join Hiddleston</h4>
        <span className="text-sm">
          {moment(review?.date_created).format("MMMM DD, YYYY")}
        </span>
        <p className="mt-4">{review?.content}</p>
      </div>
    </div>
  );
};

export default Review;
