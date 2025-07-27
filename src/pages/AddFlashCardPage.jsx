import { useNavigate, useParams } from "react-router";
import MainBodyCover from "../components/MainBodyCover";
import { useContext } from "react";
import InformationContext from "../contexts/InformationContext";
import { useEffect } from "react";
import addFlashCard from "../util/addFlashCard";
import FlashCardPageWrapper from "../components/FlashCardPageWrapper";

function AddFlashCardPage() {
  const { info, setInfo } = useContext(InformationContext);
  const navigateBack = useNavigate();
  const URLParams = useParams();

  useEffect(() => {
    // Checks on render if the URL given is a valid themeID, else redirects.
    const validURL = info.find(
      (themeItem) => themeItem.themeID === URLParams.theme
    );
    if (!validURL) navigateBack("/error");
  }, []);

  return (
    <MainBodyCover>
      <FlashCardPageWrapper mode="Add" action={addFlashCard} />
    </MainBodyCover>
  );
}

export default AddFlashCardPage;
