import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if(response.data.success) {
      toast.success(response.data.msg)
      setEmail("")
    } else {
      toast.error("Error")
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            alt="logo"
            className="w-[130px] sm:w-auto"
          />
        </Link>

        <Link href="/admin/blogList">
          <button className=" with-shadow">
            Go to Admin panel <Image src={assets.arrow} alt="arrow" />
          </button>
        </Link>
      </div>
      <div className="text-center my-8">
        {/* <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1> */}
        <p className="mt-10 max-w-[740px] m-auto text-sm sm:text-2xl">
        Welcome to blogger&#8482;, where insightful stories and expert opinions come together to inspire, inform, and ignite your passions. Dive into our world of diverse content and join our community of curious minds.
        </p>
        <form
          className="flex justify-between duration-300 max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000] transition-transform transform hover:-translate-x-2 hover:translate-y-2 hover:shadow-none"
          action=""
          onSubmit={onSubmitHandler}
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="pl-4 outline-none bg-transparent text-white"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
