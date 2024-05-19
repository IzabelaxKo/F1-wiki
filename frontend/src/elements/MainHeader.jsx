import {ImagesSlider} from '../../components/ui/images-slider'
import { motion } from "framer-motion";
import PropTypes from 'prop-types';


export function MainHeader({images, text, isMain}) {
    const goto = (id_obj) => {
    let el = document.getElementById(id_obj);
    window.scrollTo({
      top: el.clientHeight / 2,
      left: el.clientWidth / 2,
      behavior: 'smooth'
    })
  }

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-stone-400 py-4">
          {text}
        </motion.p>
        {isMain && 
          <button className="px-4 py-2 backdrop-blur-sm border bg-red-300/10 border-red-500/20 text-white mx-auto text-center rounded-full relative mt-4" onClick={() => goto('infos')}>
            <span>Check It Out →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
          </button>
        }
      </motion.div>
    </ImagesSlider>
  );
}

MainHeader.propTypes = {
  images: PropTypes.array,
  text: PropTypes.string,
  isMain: PropTypes.bool
}