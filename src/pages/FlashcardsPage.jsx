import { Link, useNavigate, useParams } from "react-router";
import { useContext, useEffect } from "react";
import InformationContext from "../contexts/InformationContext";
import GridContainer from "../components/GridContainer";
import AddButton from "../components/AddButton";
import MainBodyCover from "../components/MainBodyCover";
import FlashCard from "../components/FlashCard";

function FlashcardsPage() {
  const { info, setInfo } = useContext(InformationContext);
  // useParams() gets the params from the URL but it returns an object based on the path name .ex /:theme so you need to keep that in mind when parsing
  const params = useParams();

  // used to navigate to the error page.
  const navigateToError = useNavigate();

  useEffect(() => {
    // Checks on render if the URL given is a valid themeID, else redirects.
    const validURL = info.find(
      (themeItem) => themeItem.themeID === params.theme
    );
    if (!validURL) navigateToError("/error");
  }, []);

  return (
    <MainBodyCover>
      {/* For each theme created a themeCard. */}
      <GridContainer>
        <FlashCard />
        <Link to="new" className="flex justify-center items-center">
          <AddButton text="New Flashcard" />
        </Link>
      </GridContainer>
    </MainBodyCover>
  );
}

export default FlashcardsPage;
