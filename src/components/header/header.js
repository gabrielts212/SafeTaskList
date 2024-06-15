import Image from "next/image";
import Logo from "../../assets/header1.png";
import CustomLink from "../link/link";
import { motion } from "framer-motion";

const Header = ({ title }) => {
  return (
    <div>
      <div className="bg-blue-500 text-white flex items-center justify-between">
        <div className="flex-shrink-0">
          <CustomLink to="/">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: 2,
                repeatType: "loop",
              }}
              whileTap={{ scale: 0.1 }}
            >
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </motion.div>
          </CustomLink>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="text-blue-500"></div>
      </div>
    </div>
  );
};

export default Header;
