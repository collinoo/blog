import React from "react";
import Link from "next/link";
const blogList = ({ title, route, description }) => {
  return (
    <div>
      <li
        className="flex flex-row justify-between p-8 mx-auto mb-12 rounded-md"
        style={{
          background: `rgba(255, 255, 255, 0.05)`,
          width: "30rem",
        }}
      >
        <h1 className="mb-3 text-2xl font-bold" style={{ color: "#a6d1ff" }}>
          {title}
        </h1>
        <Link as={"/blog/" + route} href={"/blog/" + route}>
          <span
            className="px-4 py-2 font-semibold text-white duration-200 ease-out transform rounded-md cursor-pointer hover:scale-110 motion-reduce:transform-none"
            style={{ background: `rgba(255,255,255,0.1)` }}
          >
            View more
          </span>
        </Link>
      </li>
    </div>
  );
};

export default blogList;
