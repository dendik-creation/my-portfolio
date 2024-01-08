import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <>
      <div className="w-full h-full flex items-center">
        <div className="flex w-full justify-start items-center md:mx-36">
          <div className="text-white">
            <div className="text-7xl mb-16 flex font-black">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ translateY: 84 }}
                  animate={{ translateY: 0 }}
                  transition={{
                    ease: "circOut",
                    duration: 0.4,
                    delay: 0.4,
                  }}
                  className=""
                >
                  About
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
                  className="ms-4 border-b-8 border-e-0 border-t-0 border-l-0 rounded-lg border-sky-500"
                >
                  Me
                </motion.div>
              </div>
            </div>
            <div className="font-light overflow-hidden">
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
                    "A Fullstack Web Developer",
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
