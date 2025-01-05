import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="h-screen flex justify-center items-center">
      {!isMobile ? (
        <div className="flex justify-center items-center w-full p-8 space-x-8">
          <motion.div
            className="w-1/2 space-y-6"
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="font-bold text-textDark text-6xl mb-4">
              Zihinsel Sağlığın için En İyi Arkadaşın
            </h1>
            <p className="font-normal text-textLight text-2xl">
              Mood tracking, psikolog onaylı öneriler, grup terapisi ve daha
              fazlasıyla, TerapiniSeç hep yanında.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://play.google.com"
                className="bg-green-600 text-white py-3 px-5 rounded-xl flex items-center justify-center hover:bg-green-700 transition duration-300"
              >
                <FontAwesomeIcon icon="fa-brands fa-google-play" className="mr-2" />
                Google Play'de İndir
              </a>
              <a
                href="https://apple.com"
                className="bg-black text-white py-3 px-5 rounded-xl flex items-center justify-center hover:bg-gray-800 transition duration-300"
              >
                <FontAwesomeIcon icon="fa-brands fa-app-store" className="mr-2" />
                App Store'da İndir
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-accentLight p-6 rounded-3xl shadow-2xl text-textDark space-y-4">
              <h2 className="text-3xl font-bold">TerapiniSeç Neler Sunar?</h2>
              <p className="text-xl">
                • Mood tracking ile anlık duygu durumunu takip et.<br />
                • Psikolog onaylı öneriler ve haftalık raporlar al.<br />
                • Sanal grup terapisi ve meditasyon seanslarına katıl.<br />
                • Uzmanların eklediği kişisel gelişim kaynaklarına hızlıca eriş.
              </p>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="mt-48 px-4 w-full h-auto flex flex-col space-y-6">
          <h1 className="font-bold text-textDark text-4xl text-center">
            Zihinsel Sağlığın için En İyi Arkadaşın
          </h1>
          <p className="font-normal text-textLight text-center">
            Mood tracking, psikolog onaylı öneriler, grup terapisi ve daha fazlasıyla,
            TerapiniSeç hep yanında.
          </p>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
            <span className="text-textDark font-bold text-2xl">Ana Görsel Buraya</span>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a
              href="https://play.google.com"
              className="bg-green-600 text-white py-3 px-6 rounded-xl w-60 text-center hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon="fa-brands fa-google-play" className="mr-2" />
              Google Play'de İndir
            </a>
            <a
              href="https://apple.com"
              className="bg-black text-white py-3 px-6 rounded-xl w-60 text-center hover:bg-gray-800 transition duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon="fa-brands fa-app-store" className="mr-2" />
              App Store'da İndir
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Download;