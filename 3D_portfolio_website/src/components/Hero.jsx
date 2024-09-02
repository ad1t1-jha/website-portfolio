import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import linkedin3 from "../assets/linkedin3.png";
import twitterlogo from "../assets/twitterlogo.png"
import { github } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[80vh] mx-auto`}>
      <div
        className={`${styles.paddingX} 
        absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffc0a1]' />
          <div className='w-1 sm:h-80 h-40 peach-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#ffc0a1]'>Aditi Jha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a frontend developer and <br className='sm:block hidden' />
            math enthusiast!
          </p>
          <div className='mt-4 flex space-x-4 items-center'>
            <a href="https://www.linkedin.com/in/jhaaditi/" target="_blank" 
            rel="noopener noreferrer" className="inline-block">
              <img 
                src={linkedin3} 
                alt="LinkedIn" 
                className="w-10 h-10 object-contain 
                cursor-pointer hover:opacity-80 
                transition-opacity duration-300" 
              />
            </a>
            <a href="https://x.com/aditiyyz" target="_blank" 
            rel="noopener noreferrer" className="inline-block">
              <img 
                src={twitterlogo} 
                alt="twitter" 
                className="w-10 h-10 object-contain 
                cursor-pointer hover:opacity-80 
                transition-opacity duration-300" 
              />
            </a>
            <a href="https://github.com/ad1t1-jha" target="_blank" 
            rel="noopener noreferrer" className="inline-block">
              <img 
                src={github} 
                alt="github" 
                className="w-10 h-10 object-contain 
                cursor-pointer hover:opacity-80 
                transition-opacity duration-300" 
              />
            </a>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Hero;