import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgUrl, rating, customerName, feedBack }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgUrl} alt="" className="rounded-full object-contain w-[120px] h-[120px]" />
      <p className="mt-6 max-w-sm text-center info-text">{feedBack}</p>
      <div className="mt-3 flex justify-items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt=""
          className="object-contain m-0 "
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
