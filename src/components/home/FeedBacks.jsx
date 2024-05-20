"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { feedbacks } from "../../constants";
import Heading from "../shared/Heading";

const FeedBacks = () => {
  const [activeFeedback, setActiveFeedback] = useState(0);

  // handle change feedback
  const handleChangeFeedback = (navigate) => {
    if (navigate === "left") {
      activeFeedback !== 0
        ? setActiveFeedback(activeFeedback - 1)
        : setActiveFeedback(feedbacks?.length - 1);
    }

    if (navigate === "right") {
      activeFeedback !== feedbacks?.length - 1
        ? setActiveFeedback(activeFeedback + 1)
        : setActiveFeedback(0);
    }
  };
  return (
    <section className="py-14">
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="hidden w-[70%] md:block">
          <img src="/images/feedback.png" alt="" />
        </div>
        <div>
          <h4 className="mb-5 text-[13px] font-semibold text-primary">
            OUR CLIENTS SAY
          </h4>
          <Heading className="text-left">
            {`Here's`} what our{" "}
            <span className="text-primary">
              users <br />
              speak
            </span>{" "}
            about us
          </Heading>

          <div className="sm:ml-20 mt-10 overflow-hidden">
            <div>
              <p className="font-medium text-black italic text-lg">
                {feedbacks[activeFeedback]?.review}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <h4 className="font-semibold text-lg">
                  {feedbacks[activeFeedback]?.name}
                </h4>
                <span>{feedbacks[activeFeedback]?.position}</span>
              </div>
              {/* <div className="mt-6 flex items-center gap-2">
                <img
                  src="/images/users/1.png"
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <img
                  src="/images/users/2.png"
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <img
                  src="/images/users/3.png"
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <img
                  src="/images/users/4.png"
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <img
                  src="/images/users/5.png"
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </div> */}
            </div>

            <div className="mt-10 flex items-center gap-5">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white cursor-pointer transition-all hover:bg-primary"
                onClick={() => handleChangeFeedback("left")}
              >
                <FaAngleLeft />
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white cursor-pointer transition-all hover:bg-primary"
                onClick={() => handleChangeFeedback("right")}
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
