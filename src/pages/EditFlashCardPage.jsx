import { useNavigate, useParams } from "react-router";
import FlashCardPageWrapper from "../components/FlashCardPageWrapper";
import MainBodyCover from "../components/MainBodyCover";
import { useContext, useState, useEffect } from "react";
import InformationContext from "../contexts/InformationContext";
import editFlashCard from "../util/editFlashCard";

function EditFlashCardPage() {
  const { info, setInfo } = useContext(InformationContext);
  const navigate = useNavigate();
  const URLParams = useParams();
  const [cardToEdit, setCardToEdit] = useState(null);

  useEffect(() => {
    // Checks on render if the URL given is a valid themeID and cardID, else redirects.
    const validTheme = info.find(
      (themeItem) => themeItem.themeID === URLParams.theme
    );

    if (!validTheme) navigate("/error");
    const validCard = validTheme.themeFlashCards.find(
      (card) => card.cardID === URLParams.card
    );
    if (!validCard) navigate("/error");
    setCardToEdit(validCard);
  }, []);
  // console.log(cardToEdit);

  if (!cardToEdit) return null;

  return (
    <MainBodyCover>
      <FlashCardPageWrapper
        prevCard={cardToEdit}
        mode="Edit"
        action={editFlashCard}
      />
    </MainBodyCover>
  );
}

export default EditFlashCardPage;
