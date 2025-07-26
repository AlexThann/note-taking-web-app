import { FaEdit } from "react-icons/fa";
import { motion } from "motion/react";

function EditButton({ editAction }) {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      className="flex items-center  text-xl"
      onClick={(e) => {
        editAction(e);
      }}
    >
      <FaEdit />
    </motion.div>
  );
}

export default EditButton;
