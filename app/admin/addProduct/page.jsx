"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));

  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);

    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
    <div className="bg-white w-[59%] rounded-lg mx-auto">
      <form onSubmit={onSubmitHandler} className="pt-4 px-5 sm:pt-8 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image" className="cursor-pointer">
          <Image
            className="mt-4 "
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            width={140}
            height={70}
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black "
          type="text"
          placeholder="Enter Blog Title here..."
          required
        />
        <p className="text-xl mt-4">Blog description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black "
          type="text"
          placeholder="Enter Blog description here..."
          required
          rows={6}
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="w-40 mt-4 px-4 py-4 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <button className=" m-6 w-40 h-12 bg-black text-white" type="submit">
          ADD{" "}
        </button>
      </form>
      </div>
    </>
  );
};

export default Page;
