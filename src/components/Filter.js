import React from "react";

const Filter = ({ queries, removeQuery }) => {
  return (
    <div className="max-w-3/5 my-1 flex h-full flex-wrap items-center gap-1">
      {queries?.map((query, index) => (
        <div
          key={index}
          className="ml-1 flex h-8 w-fit min-w-fit items-center justify-center rounded border border-[#434650] p-2 text-xs shadow-lg"
        >
          <span>
            {query?.attribute} {query?.operation} {query?.value}
          </span>

          <span
            className="ml-2 cursor-pointer text-red-400 hover:text-red-500 active:text-red-500"
            onClick={() => removeQuery(index)}
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export default Filter;
