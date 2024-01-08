import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-full flex items-center">
        <div className="flex w-full justify-start items-center md:mx-36">
          <div className="text-white">
            <div className="overflow-hidden">
              <motion.div
                initial={{ translateY: 36 }}
                animate={{ translateY: 0 }}
                transition={{
                  ease: "circOut",
                  duration: 0.4,
                  delay: 0.2,
                }}
                className="text-2xl font-medium mb-2 overflow-hidden"
              >
                Hi, my name is
              </motion.div>
            </div>
            <div className="text-7xl mb-10 flex font-black">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ translateY: 84 }}
                  animate={{ translateY: 0 }}
                  transition={{
                    ease: "circOut",
                    duration: 0.4,
                    delay: 0.4,
                  }}
                  className="border-b-8 border-e-0 border-t-0 border-l-0 rounded-lg border-sky-500"
                >
                  Dendi'
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ translateY: 84 }}
                  animate={{ translateY: 0 }}
                  transition={{
                    ease: "circOut",
                    duration: 0.4,
                    delay: 0.6,
                  }}
                  className="ms-4"
                >
                  Setiawan
                </motion.div>
              </div>
            </div>
            <div className="font-light mb-8 overflow-hidden">
              <motion.div
                initial={{ translateY: 84 }}
                animate={{ translateY: 0 }}
                transition={{
                  ease: "circOut",
                  duration: 0.6,
                  delay: 0.8,
                }}
              >
                <TypeAnimation
                  sequence={[
                    1000,
                    "<A Fullstack Web Developer/>",
                    2000,
                    "I Created Modern Web Application",
                    2000,
                    "I Build Everythings For Web",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="font-mono text-4xl"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <div className="flex justify-start items-center gap-3">
                <motion.div
                  initial={{ translateY: 84 }}
                  animate={{ translateY: 0 }}
                  transition={{
                    ease: "circOut",
                    duration: 0.4,
                    delay: 1,
                  }}
                  className="flex justify-start items-center cursor-pointer hover:brightness-200 hover:transition-all transition-all hover:text-[rgba(18,14,22,0.98)] gap-4 bg-sky-600 px-4 py-2 rounded-md"
                >
                  <i className="fa-solid fa-file text-xl"></i>
                  <span className="font-bold text-xl">Get My CV</span>
                </motion.div>
                <motion.div
                  initial={{ translateY: 84 }}
                  animate={{ translateY: 0 }}
                  transition={{
                    ease: "circOut",
                    duration: 0.4,
                    delay: 1.2,
                  }}
                  className="flex justify-start items-center cursor-pointer hover:brightness-150 hover:transition-all transition-all hover:text-[rgba(18,14,22,0.98)] gap-4 bg-green-500 px-4 py-2 rounded-md"
                >
                  <i className="fa-solid fa-phone text-xl"></i>
                  <span className="font-bold text-xl">Let's Connect</span>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <div className="w-full flex justify-end">
            <div className="w-96 h-96 overflow-hidden rounded-full">
              <img
                src="./img/me.png"
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
