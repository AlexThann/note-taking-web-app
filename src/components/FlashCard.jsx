import { FaTrashAlt } from "react-icons/fa";
import DeleteButton from "./deleteButton";
import { motion } from "motion/react";
import { useContext, useEffect } from "react";
import InformationContext from "../contexts/InformationContext";
import EditButton from "./EditButton";

function FlashCard({ card, theme }) {
  const { info, setInfo } = useContext(InformationContext);

  useEffect(() => console.log(info), []);

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      `Are you sure you want to delete "${card.cardTitle} note"?`
    );

    if (!confirmed) return; // Stop if user canceled

    // map uses a callback which is then executed for each themeObj.
    setInfo((oldInfo) =>
      oldInfo.map((themeObj) => {
        if (themeObj.themeID === theme.themeID) {
          // Replace only this theme's flashcards array
          return {
            ...themeObj,
            themeFlashCards: themeObj.themeFlashCards.filter(
              (oldCard) => oldCard.cardID !== card.cardID
            ),
          };
        }
        return themeObj;
      })
    );
  }

  return (
    <div className="flex justify-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="min-h-50 w-[80%] p-5 rounded-lg flex flex-col shadow-[-5px_5px_7px_rgba(0,0,0,0.3)] cursor-pointer justify-between"
        style={{ backgroundColor: card.cardColor }}
      >
        <div className="break-words text-black font-bold">{card.cardTitle}</div>
        <div className="flex justify-between">
          <p className="text-sm text-black">
            Modified @ {card.cardDateModifiedLast}
          </p>
          <div className="flex gap-2">
            <EditButton />
            <DeleteButton handleDeleteAction={handleDelete} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default FlashCard;
