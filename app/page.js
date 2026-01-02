'use client'
import About from "./component/About";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Onkar from "./component/Onkar";
import Services from "./component/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services /> 
            {/* <Onkar /> */}
    </>
  );
}
