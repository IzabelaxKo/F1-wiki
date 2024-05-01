import {ImagesSlider} from '../../components/ui/images-slider'
import { motion } from "framer-motion";


const images = [
  'https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1706626658/fom-website/2023/Miscellaneous/GettyImages-1656999898.jpg',
  'https://media.formula1.com/content/dam/fom-website/manual/Misc/TeamByTeam2023/ferrari-tbt-2023.png',
  'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-10/nba-plain--6a571e43-4405-4d8d-9c3d-be7276aa02b6.png?h=920929c4&itok=qWwFCtkG'
];

export function MainHeader() {
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-50 to-red-400 py-4">
          Your source for formula 1 information <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-red-300/10 border-red-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Check It Out →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}