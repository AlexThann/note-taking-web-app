// map uses a callback which is then executed for each themeObj.
export default function deleteFlashCard(themeID, cardID, info) {
  return info.map((themeObj) => {
    if (themeObj.themeID === themeID) {
      return {
        ...themeObj,
        themeFlashCards: themeObj.themeFlashCards.filter(
          (oldCard) => oldCard.cardID !== cardID
        ),
      };
    }
    return themeObj;
  });
}
