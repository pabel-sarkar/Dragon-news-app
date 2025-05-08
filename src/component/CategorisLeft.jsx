import React, { use } from "react";
import { NavLink } from "react-router";

const categorisPromis = fetch("/categories.json").then((res) => res.json());
console.log(categorisPromis);
const CategorisLeft = () => {
  const categoris = use(categorisPromis);
  return (
    <div>
      <h2 className="font-bold">all categoris {categoris.length}</h2>

      <div className="grid grid-cols-1 mt-5 ">
        {categoris.map((category) => (
          <NavLink
            className="btn
             text-[#9F9F9F]
              bg-white border-none 
              hover hover:bg-base-200"
              to={`/categoty/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorisLeft;
