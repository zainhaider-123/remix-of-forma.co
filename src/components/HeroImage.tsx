import { useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        playsInline
        onLoadedData={() => setLoaded(true)}
        className="w-[390px] h-[425px] object-contain mx-auto lg:w-full lg:h-[500px] xl:h-[600px] 2xl:h-[750px]"
      />
    </motion.div>
  );
};

export default HeroImage;
