import { Link } from "react-router";
import DeleteButton from "./deleteButton";
import { motion } from "motion/react";

function ThemeCard({ themeElement, setInfo }) {
  function handleDelete(e) {
    // Because the parent method is addTheme, i block it using stopPropagation and prevent default
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      `Are you sure you want to delete "${themeElement.themeTitle}"?`
    );

    if (!confirmed) return; // Stop if user canceled

    // Filter the state to remove the deleted item.
    setInfo((oldInfo) => {
      return oldInfo.filter(
        (itemTheme) => itemTheme.themeID !== themeElement.themeID
      );
    });
  }

  return (
    // overflow-hidden is really important, it clips the overflowing edges from the child of the left colored edges

    <Link to={`/${themeElement.themeID}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" min-h-28 flex pr-4 border rounded-lg overflow-hidden shadow-[-5px_5px_7px_rgba(0,0,0,0.3)] bg-primary-white-smoke dark:bg-primary-black-navigation cursor-pointer"
      >
        <div
          className="w-[9px]"
          style={{ backgroundColor: themeElement.themeColor }}
        />
        <div className="p-4 flex-1 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white break-words">
            {themeElement.themeTitle}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 break-words">
            {themeElement.themeDescription}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Created @ {themeElement.themeDateCreated}
          </p>
        </div>
        <DeleteButton handleDeleteAction={handleDelete} />
      </motion.div>
    </Link>
  );
}

export default ThemeCard;

/*
[
{
    themeID:1,
    themeTitle:"C++",
    themeShortDescription:"OOP Lang",
    themeColor:"rgb(0,0,0)",
    themeDateCreated: Date.now() ?
    themeFlashcards: [
        {
            cardId:X?,
            cardTitle:"Constructors",
            cardNote:"Yapayapayapa *yapa",
            cardDateCreated: Date.now(),
            cardDateLastModified: Date.now()

        }
    
    ]
},


]



*/
