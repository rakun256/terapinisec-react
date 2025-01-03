import React from "react";
import { motion } from "framer-motion";

const CommentProps = [
  {
    name: "Ecem Nur Özen",
    comment:
      "Bu uygulama sayesinde duygu durumumu çok daha iyi analiz edebiliyorum.",
    point: "5.0",
  },
  {
    name: "Emre Uslu",
    comment:
      "Terapist yorumları ve önerileri gerçekten hayatımı kolaylaştırdı.",
    point: "5.0",
  },
  {
    name: "Ahmet Kaya",
    comment: "Haftalık raporlar motivasyonumu yüksek tutmamda yardımcı oluyor.",
    point: "4.0",
  },
  {
    name: "Jason Statham",
    comment:
      "Meditasyon seanslarıyla zihnimi ve bilincimi rahatlatmayı öğrendim.",
    point: "4.0",
  },
];

const Comments = (index) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-backgroundLight p-4">
      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 500 : -500,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
        exit={{ opacity: 0, x: index % 2 === 0 ? 500 : -500 }}
      >
        <h1 className="font-bold text-textDark mb-8 md:text-6xl text-3xl">
          Kullanıcı Yorumlarımız
        </h1>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -500 : 500,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
        exit={{ opacity: 0, x: index % 2 === 0 ? -500 : 500 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24 place-items-center">
          {CommentProps.map((comment, index) => (
            <div
              key={index}
              className="bg-accentDark/70  rounded-3xl py-6 flex flex-col items-center space-y-4 text-center
              w-[280px] sm:w-[320px] md:w-[340px] xl:w-[380px] h-[350px] shadow-[0_15px_40px_#28617F] shadow-[inset_-15px_4px_27px_35px_#28617F]"
            >
              <p className="text-accentLight font-bold text-3xl">
                {comment.name}
              </p>
              <p className="text-accentLight text-lg w-3/4">
                {comment.comment}
              </p>
              <div className="flex justify-center items-center space-x-1">
                {Array.from({ length: 5 }).map((_, starIndex) => {
                  const filled = starIndex < Math.round(comment.point);
                  return (
                    <span
                      key={starIndex}
                      className={`${
                        filled
                          ? "material-symbols-rounded-fill"
                          : "material-symbols-rounded"
                      } text-xl text-accentLight`}
                    >
                      star
                    </span>
                  );
                })}
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accentLight flex justify-center items-center text-accentDark font-bold text-2xl">
                {comment.point}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Comments;
