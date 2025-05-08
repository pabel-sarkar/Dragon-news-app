import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 py-3 bg-[#F3F3F3] items-center">
      <p className="bg-[#D72050] ml-2 text-white px-3 py-2 ">Letest</p>
      <Marquee className="flex gap-6" pouseOnHover={true} speed={70}>
        <p clallName="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          dolorem maiores temporibus est voluptates iure enim quae nemo,
          necessitatibus sunt.
        </p>
        <p clallName="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          dolorem maiores temporibus est voluptates iure enim quae nemo,
          necessitatibus sunt.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
