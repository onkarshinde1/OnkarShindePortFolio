import React, { useState } from "react";
import Image from "next/image";
import { assets  } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfc02ca4-03bc-4b90-969a-586eab846f72");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="w-full px-[12%] py-12  scroll-mt-10 bg-[url('/footer-bg-colour.png')] bg-no-repeat bg-center "
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h4 className="text-sm text-gray-500 mb-2 font-ovo">Connect with me</h4>

        <h1 className="text-4xl md:text-5xl mb-4 font-ovo">Get in touch</h1>

        <p className="text-gray-500 mb-12">
          I&apos;d love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
            />
          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-4
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
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

          <p className="mt-4">{result}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
