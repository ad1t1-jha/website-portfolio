import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="w-[150px]">
      <motion.div 
      variants={fadeIn("right", "spring", 0.1 * index, 0.15)}
      className="w-[130px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45, 
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 py-12 min-h-[10px] 
        flex justify-evenly items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[15px]
          text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hey! I'm Aditi, an 19-year-old Computational Mathematics student at the University of Waterloo. 
        I have experience with frontend & UX/UI development and am currently focusing on full-stack development, 
        exploring machine learning models, and data science. I am currently looking for Fall 2025 internships!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 gap-x-4">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index = {index}
          {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");