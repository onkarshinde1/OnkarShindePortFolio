import React from "react";

const Onkar = () => {
  return (
    <div>
      <p className="font-ovo">Ovo font is now working</p>
      <button className=" hover:shadow-white">Click Me</button>
      <div class="hover-shadow-white">Hover me</div>
      <button
        class="
  border-2 border-black
  px-6 py-2 font-bold
  shadow-none
  hover:shadow-neo
  hover:-translate-x-1 hover:-translate-y-1
  transition-all duration-200
"
      >
        Click Me
      </button>
    </div>
  );
};

export default Onkar;
