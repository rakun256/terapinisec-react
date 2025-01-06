import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gplayImg from "../Assets/Images/gplay.png";
import appstoreImg from "../Assets/Images/appstore.png";

const Download = () => {
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
    <div className="min-h-screen w-full bg-backgroundLight flex flex-col justify-center items-center py-10 px-4">
      {!isMobile ? (
        <div className="flex flex-row items-center justify-center max-w-6xl w-full space-x-8">
          {/* Sol Sütun */}
          <motion.div
            className="w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-5xl font-bold text-textDark leading-tight">
              Zihinsel Sağlığın için En İyi Arkadaşın
            </h1>
            <p className="text-xl text-textLight leading-relaxed">
              Mood tracking, psikolog onaylı öneriler, grup terapisi ve daha fazlasıyla,  
              TerapiniSeç hep yanında.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://play.google.com"
                className="flex items-center space-x-2 bg-white shadow-lg rounded-xl px-4 py-3 hover:shadow-xl transition duration-300"
              >
                <img src={gplayImg} alt="Google Play" className="w-28" />
              </a>
              <a
                href="https://apple.com"
                className="flex items-center space-x-2 bg-white shadow-lg rounded-xl px-4 py-3 hover:shadow-xl transition duration-300"
              >
                <img src={appstoreImg} alt="App Store" className="w-28" />
              </a>
            </div>
          </motion.div>

          {/* Sağ Sütun */}
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 text-textDark">
              <h2 className="text-2xl font-bold mb-4">
                TerapiniSeç Neler Sunar?
              </h2>
              <p className="text-base leading-relaxed space-y-2">
                <span className="block">
                  • Mood tracking ile anlık duygu durumunu takip et.
                </span>
                <span className="block">
                  • Psikolog onaylı öneriler ve haftalık raporlar al.
                </span>
                <span className="block">
                  • Sanal grup terapisi ve meditasyon seanslarına katıl.
                </span>
                <span className="block">
                  • Uzmanların eklediği kişisel gelişim kaynaklarına hızlıca eriş.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      ) : (
        // Mobil Görünüm
        <div className="flex flex-col items-center max-w-xl w-full space-y-6 mt-8">
          <motion.h1
            className="text-4xl font-bold text-textDark text-center leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Zihinsel Sağlığın için En İyi Arkadaşın
          </motion.h1>
          <motion.p
            className="text-base text-textLight text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Mood tracking, psikolog onaylı öneriler, grup terapisi ve daha fazlasıyla,  
            TerapiniSeç hep yanında.
          </motion.p>
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-full p-6 text-textDark"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-3">TerapiniSeç Neler Sunar?</h2>
            <p className="text-sm leading-relaxed space-y-1">
              <span className="block">
                • Mood tracking ile anlık duygu durumunu takip et.
              </span>
              <span className="block">
                • Psikolog onaylı öneriler ve haftalık raporlar al.
              </span>
              <span className="block">
                • Sanal grup terapisi ve meditasyon seanslarına katıl.
              </span>
              <span className="block">
                • Uzmanların eklediği kişisel gelişim kaynaklarına hızlıca eriş.
              </span>
            </p>
          </motion.div>

          <div className="flex flex-col items-center w-full space-y-4 pt-4">
            <a
              href="https://play.google.com"
              className="bg-white shadow-lg rounded-xl px-4 py-3 hover:shadow-xl transition duration-300 flex items-center justify-center w-full max-w-sm"
            >
              <img src={gplayImg} alt="Google Play" className="w-32" />
            </a>
            <a
              href="https://apple.com"
              className="bg-white shadow-lg rounded-xl px-4 py-3 hover:shadow-xl transition duration-300 flex items-center justify-center w-full max-w-sm"
            >
              <img src={appstoreImg} alt="App Store" className="w-32" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Download;
