import { v4 as uuidv4 } from "uuid";

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
