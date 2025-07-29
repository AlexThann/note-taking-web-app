import { v4 as uuidv4 } from "uuid";

// Function that is used to add a new flashcard
function addFlashCard(
  setInfo,
  title,
  noteContent,
  dateNow,
  colorSelected,
  themeID
) {
  const newFlashCard = {
    cardID: uuidv4(),
    cardTitle: title,
    cardNote: noteContent,
    cardDateCreated: dateNow,
    cardDateModifiedLast: dateNow,
    cardColor: colorSelected,
  };
  // If the theme is found then return a new object where we add the flashcard else return the unchanged theme.
  setInfo((prevInfo) =>
    prevInfo.map((theme) =>
      theme.themeID === themeID
        ? {
            ...theme,
            themeFlashCards: [...theme.themeFlashCards, newFlashCard],
          }
        : theme
    )
  );
}

export default addFlashCard;
