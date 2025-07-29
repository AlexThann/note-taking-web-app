// Used to edit a flashcard object
export default function editFlashCard(
  setInfo,
  title,
  noteContent,
  dateNow,
  colorSelected,
  themeID,
  cardID
) {
  setInfo((prevInfo) =>
    prevInfo.map((theme) => {
      if (theme.themeID === themeID) {
        return {
          ...theme,
          themeFlashCards: theme.themeFlashCards.map((card) =>
            card.cardID === cardID
              ? {
                  ...card,
                  cardTitle: title,
                  cardNote: noteContent,
                  cardDateModifiedLast: dateNow,
                  cardColor: colorSelected,
                }
              : card
          ),
        };
      }
      return theme;
    })
  );
}
