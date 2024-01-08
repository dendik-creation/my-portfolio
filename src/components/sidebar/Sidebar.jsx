import React from "react";
import { SidebarItem } from "./SidebarItem";
import { motion } from "framer-motion";
export const Sidebar = () => {
  const SidebarList = () => {
    return (
      <>
        {SidebarItem &&
          SidebarItem.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              className="transition-all hover:transition-all border-b-4 border-sky-300/0 hover:border-sky-300/100  px-2 py-1.5 rounded-lg"
            >
              <motion.div
                initial={{ translateX: -84 }}
                animate={{ translateX: 0 }}
                transition={{
                  ease: "circOut",
                  duration: 0.4,
                  delay: 0.2 * (i + 2),
                }}
              >
                <i className={`${item.class} text-3xl`}></i>
              </motion.div>
            </a>
          ))}
      </>
    );
  };
  return (
    <>
      <div className="fixed h-full w-24">
        <div className="w-full text-white h-full flex flex-col gap-12 justify-center items-center">
          <SidebarList />
        </div>
      </div>
    </>
  );
};
