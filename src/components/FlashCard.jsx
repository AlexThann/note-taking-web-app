import DeleteButton from "./DeleteButton";
import { motion } from "motion/react";
import { useContext, useEffect } from "react";
import InformationContext from "../contexts/InformationContext";
import EditButton from "./EditButton";
import { Link } from "react-router";
import deleteFlashCard from "../util/deleteFlashCard";

function FlashCard({ card, theme }) {
  const { info, setInfo } = useContext(InformationContext);

  //useEffect(() => console.log(info), [info]);

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      `Are you sure you want to delete "${card.cardTitle} note"?`
    );

    if (!confirmed) return; // Stop if user canceled

    setInfo((oldInfo) => deleteFlashCard(theme.themeID, card.cardID, oldInfo));
  }

  return (
    <Link to={card.cardID}>
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="min-h-50 w-[80%] p-5 rounded-lg flex flex-col shadow-[-5px_5px_7px_rgba(0,0,0,0.3)] cursor-pointer justify-between"
          style={{ backgroundColor: card.cardColor }}
        >
          <div className="break-words text-black text-[22px] font-bold">
            {card.cardTitle}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-black">
              Modified @ {card.cardDateModifiedLast}
            </p>
            <div className="flex">
              <EditButton />
              <DeleteButton handleDeleteAction={handleDelete} />
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

export default FlashCard;
