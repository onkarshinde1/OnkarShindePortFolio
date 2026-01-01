'use client'
import About from "./component/About";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Onkar from "./component/Onkar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
            {/* <Onkar /> */}
    </>
  );
}
