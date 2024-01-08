import React from "react";
import { Cdn } from "./Styles/Cdn";
import { Hero } from "./components/hero/Hero";
import { Sidebar } from "./components/sidebar/Sidebar";
import { About } from "./components/about/About";
// import { motion, useScroll } from "framer-motion";
export default function App() {
  // const { scrollYProgress } = useScroll();
  return (
    <>
      <Cdn />
      <div className=" bg-[rgba(18,14,22,0.98)] relative">
        <Sidebar />
        <section className="h-screen">
          <Hero />
        </section>
        <section className="h-screen">
          <About />
        </section>
      </div>
    </>
  );
}
