import { MdQuestionMark } from "react-icons/md";
import { motion } from "motion/react";

// Cheat sheet button to show the component which is used to help the user when editing a note/flashcard.
function CheatSheetButton({ setCheatSheetVisible }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className=" bg-blue-500 p-2 cursor-pointer rounded-full  "
      onClick={() => setCheatSheetVisible(true)}
    >
      <MdQuestionMark className="text-white" />
    </motion.div>
  );
}

export default CheatSheetButton;
