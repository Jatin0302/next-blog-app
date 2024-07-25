"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });

    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex  justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              alt=""
              width={180}
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <Link href="/admin/blogList">
            <button className=" with-shadow ">
              Go to Admin panel <Image src={assets.arrow} alt="" />
            </button>
          </Link>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 md:mx-auto max-w-[800px] mt-[-100px] mb-10 ">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-white rounded-3xl"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <div className="blog-content" dangerouslySetInnerHTML={{__html: data.description}}></div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
