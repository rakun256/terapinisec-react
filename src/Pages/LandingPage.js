import React from "react";
import Background from "../Assets/Images/background.png";
import Logo from "../Assets/Images/TerapiniSec-Blue-Transparent.png";
import CustomButton from "../Components/Button";
import { motion } from "framer-motion";

const LandingPage = (index) => {
  const title = "TerapiniSeç".split(" ");
  const subtitle = "Ruh sağlığınızı iyileştirin.".split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", }}
    >
      <div className="relative h-screen w-full">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
            opacity: "0.70",
          }}
        />
        <div className="relative z-10 h-full flex justify-center items-center">
          <div className="relative z-10 flex flex-col items-center space-y-5 px-5 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              <img
                src={Logo}
                alt="TerapiniSeç Logo"
                className="w-40 h-40 md:w-52 md:h-52"
              />
            </motion.div>
            <div className="flex flex-col items-center space-y-3 md:space-y-5 text-center text-textDark">
              <h1 className="text-4xl md:text-6xl font-bold">
                {title.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold">
                {subtitle.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="flex items-center gap-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              >
                <CustomButton label="Hemen Başla!" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -500 : 500 }}
              >
                <CustomButton label="Daha fazla öğren." />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
