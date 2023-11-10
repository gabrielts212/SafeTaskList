import Image from "next/image";
import Logo from "../../assets/favicon.ico";
import CustomLink from "../link/link";
import { motion } from "framer-motion";

const Header = ({ title }) => {
  return (
    <div>
      <div className="bg-blue-500 p-4 text-white flex items-center justify-between">
        <div>
          <CustomLink to="/">
            <motion.div whileHover={{ rotate: 720 }}>
              <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </motion.div>
          </CustomLink>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="text-blue-500">
          {/* Adicione o conteúdo que deseja aqui */}
        </div>
      </div>
    </div>
  );
};

export default Header;
