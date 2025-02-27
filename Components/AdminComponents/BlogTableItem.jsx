import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ image, title, author, date, deleteBlog, id }) => {
  const blogDate = new Date(date);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={100}
          height={100}
          src={image ? image : assets.profile_icon}
        />
        <p>{author ? author : "No Author name available"}</p>
      </th>
      <td className="px-6 py-4 ">{title ? title : "No Title"}</td>
      <td className="px-6 py-4 ">{blogDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer " onClick={() =>deleteBlog(id)}>
        X
      </td>
    </tr>
  );
};

export default BlogTableItem;
