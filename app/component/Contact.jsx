import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20
      bg-[url('/footer-bg-colour.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h4 className="text-sm text-gray-500 mb-2 font-ovo">
          Connect with me
        </h4>

        <h1 className="text-4xl md:text-5xl mb-4 font-ovo">
          Get in touch
        </h1>

        <p className="text-gray-500 mb-12">
          I&apos;d love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-4
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="px-10 py-3 rounded-full bg-black text-white
            flex items-center gap-2 justify-center mx-auto mt-10
            hover:bg-gray-800 transition"
          >
            Submit now
            <Image src={assets.right_arrow} alt="" className="w-4" />
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
