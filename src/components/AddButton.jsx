import { motion } from "motion/react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddButton({ methodOnClick, text }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      className="flex-col min-h-28 dark:text-white text-gray-800 font-bold text-4xl flex justify-center items-center cursor-pointer"
      onClick={methodOnClick}
    >
      <p className="text-lg pb-3">{text}</p>
      <IoAddCircleOutline className="text-5xl" />
    </motion.button>
  );
}

export default AddButton;
