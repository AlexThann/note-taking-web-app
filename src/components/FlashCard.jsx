import DeleteButton from "./DeleteButton";
import { motion } from "motion/react";
import { useContext } from "react";
import InformationContext from "../contexts/InformationContext";
import EditButton from "./EditButton";
import { Link } from "react-router";
import deleteFlashCard from "../util/deleteFlashCard";
import { useNavigate } from "react-router";

// Main flashcard component. receives the card information and the parent theme.
function FlashCard({ card, theme }) {
  const { info, setInfo } = useContext(InformationContext);
  const navigate = useNavigate();

  //useEffect(() => console.log(info), [info]);

  // Deletes the flashcard of the theme
  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      `Are you sure you want to delete "${card.cardTitle} note"?`
    );

    if (!confirmed) return; // Stop if user canceled

    setInfo((oldInfo) => deleteFlashCard(theme.themeID, card.cardID, oldInfo));
  }

  // Edits the flashcard
  function handleEdit(e) {
    e.stopPropagation();
    e.preventDefault();
    navigate(`${card.cardID}/edit`);
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
              <EditButton editAction={handleEdit} />
              <DeleteButton handleDeleteAction={handleDelete} />
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

export default FlashCard;
