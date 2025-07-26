import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

function BackButton({ url }) {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        navigate(`/${url}`);
      }}
      className="cursor-pointer dark:text-white dark:bg-primary-blue-900 px-1 rounded-md text-2xl"
    >
      <FaArrowLeftLong />
    </motion.button>
  );
}

export default BackButton;
