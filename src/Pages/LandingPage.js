import React from "react";
import Background from "../Assets/Images/background.png";
import Logo from "../Assets/Images/TerapiniSec-Blue-Transparent.png";
import CustomButton from "../Components/Button";

const LandingPage = () => {
  return (
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
          <img
            src={Logo}
            alt="TerapiniSeç Logo"
            className="w-40 h-40 md:w-52 md:h-52"
          />
          <div className="flex flex-col items-center space-y-3 md:space-y-5 text-center text-textDark">
            <h1 className="text-4xl md:text-6xl font-bold">TerapiniSeç</h1>
            <h2 className="text-2xl md:text-4xl">
              Ruh sağlığınızı iyileştirin.
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <CustomButton label="Hemen Başla!" />
            <CustomButton label="Daha fazla öğren." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
