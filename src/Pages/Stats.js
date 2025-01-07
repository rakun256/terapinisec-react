import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import StatPhone from "../Assets/Images/stat-phone.png";

const StatProps = [
  {
    id: 1,
    title: "Toplam İndirme Sayısı :",
    value: "500",
    gradient: "from-textLight to-accentDark",
  },
  {
    id: 2,
    title: "Toplam Kullanıcı Sayısı :",
    value: "1000",
    gradient: "from-textLight to-accentDark",
  },
  {
    id: 3,
    title: "En Çok İndirilen Ülke :",
    value: "Türkiye  🇹🇷",
    gradient: "from-red-800 to-red-300",
  },
  {
    id: 4,
    title: "Ortalama Puan :",
    value: "4,5",
    gradient: "from-textLight to-accentDark",
  },
];

const AnimatedStat = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Number.isInteger(latest) ? latest.toString() : latest.toFixed(1)
  );
  const [isInView, setIsInView] = useState(false);
  const parsedValue = parseFloat(value.replace(",", "."));
  const isNumber = !isNaN(parsedValue);

  useEffect(() => {
    if (isInView && isNumber) {
      const animation = animate(count, parsedValue, {
        duration: 2,
      });
      return animation.stop;
    }
    count.set(0);
  }, [isInView, value, count, isNumber]);

  return (
    <motion.p
      className="font-semibold text-accentLight text-6xl"
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ once: false }}
    >
      {isNumber ? rounded : value}
    </motion.p>
  );
};

const Stats = (index) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      {!isMobile ? (
        <div className="h-screen flex justify-center items-center w-full p-8">
          <motion.div
            className="w-1/2 space-y-8"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 500 : -500,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true, amount: 0.3 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? 500 : -500 }}
          >
            <div className="flex justify-center flex-col ">
              <h1 className="font-bold text-textDark mb-4 text-6xl text-left">
                TerapiniSeç İstatistikleri
              </h1>
              <p className="font-normal text-textLight text-3xl text-left">
                2025
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img alt="stat-phone" src={StatPhone}></img>
            </div>
          </motion.div>
          <motion.div
            className="w-1/2"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -500 : 500,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true, amount: 0.01 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -500 : 500 }}
          >
            <div className="grid grid-cols-2 gap-8">
              {StatProps.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    className={`bg-gradient-to-r ${stat.gradient} p-8 rounded-3xl shadow-2xl flex flex-col space-y-8 h-48 justify-center`}
                  >
                    <h1 className="font-light text-accentLight text-xl">
                      {stat.title}
                    </h1>
                    <AnimatedStat value={stat.value} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-3xl shadow-2xl flex flex-col space-y-4 h-48 justify-center mt-8 bg-textLight/50">
              <h1 className="font-normal text-textDark text-xl m-0">
                Başarılarımız:
              </h1>
              <div className="flex space-x-2 items-center m-0">
                <p className="text-5xl">🏆</p>
                <p className="font-light text-textDark text-lg">
                  AppStore'da "Sağlık ve Fitness" kategorisinde En İyi 200
                  Uygulama arasına iki kez girdik! Google Play'de ise en çok
                  indirilen sağlık uygulamaları arasında yerimizi alıyoruz!{" "}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="px-2 w-full h-auto flex flex-col space-y-8 py-16 ">
          <h1 className="font-bold text-textDark text-4xl text-center ">
            TerapiniSeç İstatistikleri
          </h1>
          <p className="font-normal text-textLight text-xl text-center">2025</p>

          <div className="flex flex-col items-center space-y-4">
            {StatProps.map((stat) => (
              <div
                key={stat.id}
                className={`w-full max-w-[350px] bg-gradient-to-r ${stat.gradient}
          p-6 rounded-3xl shadow-2xl flex flex-col space-y-4`}
              >
                <h1 className="font-normal text-accentLight text-xl m-0">
                  {stat.title}
                </h1>
                <AnimatedStat value={stat.value} />
              </div>
            ))}
          </div>

          <div className="p-4 rounded-3xl shadow-2xl flex flex-col space-y-2 bg-textLight/50">
            <h1 className="font-normal text-textDark text-lg m-0">
              Başarılarımız:
            </h1>
            <div className="flex items-center space-x-2">
              <p className="text-3xl">🏆</p>
              <p className="font-light text-textDark text-base">
                AppStore'da "Sağlık ve Fitness" kategorisinde En İyi 200
                Uygulama arasına iki kez girdik! Google Play'de ise en çok
                indirilen sağlık uygulamaları arasında yerimizi alıyoruz!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
