import React from "react";
import Image from "next/image";
import { assets, blog_data } from "@/Assets/assets";
import Link from "next/link";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black duration-300 transition-transform transform hover:scale-110">
      <Link href={`/blog/${id}`}>
        <Image
          priority
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-small">
        {" "}
        {category}{" "}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {" "}
          {title}{" "}
        </h5>
        <div className="mb-3 text-sm tracking-tight text-gray-700"  dangerouslySetInnerHTML={{__html: description.slice(0,120)}}>
          
        </div>
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center"
        >
          {" "}
          Read More{" "}
          <Image src={assets.arrow} alt="" width={12} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
