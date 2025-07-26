import { FaRegEdit } from "react-icons/fa";
import { motion } from "motion/react";

function EditButton({ editAction, enableDarkMode = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      className="flex items-center p-1 text-2xl cursor-pointer"
      onClick={(e) => {
        editAction(e);
      }}
    >
      <FaRegEdit className={enableDarkMode ? "dark:[&>path]:fill-white" : ""} />
    </motion.div>
  );
}

export default EditButton;
