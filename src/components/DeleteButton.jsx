import { FaTrashAlt } from "react-icons/fa";
import { motion } from "motion/react";

// Delete button for either deleting a theme or flashcard, based on handleDeleteAction
function DeleteButton({ handleDeleteAction }) {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      className="flex items-center text-red-600 p-1 text-xl cursor-pointer"
      onClick={(e) => {
        handleDeleteAction(e);
      }}
    >
      <FaTrashAlt />
    </motion.div>
  );
}

export default DeleteButton;
