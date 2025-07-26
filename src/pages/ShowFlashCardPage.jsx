import MainBodyCover from "../components/MainBodyCover";
import { useNavigate, useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import InformationContext from "../contexts/InformationContext";
import ReactMarkdown from "react-markdown";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import deleteFlashCard from "../util/deleteFlashCard";
import BackButton from "../components/BackButton";

function ShowFlashCardPage() {
  const URLParams = useParams();
  const { info, setInfo } = useContext(InformationContext);
  const navigate = useNavigate();
  const [card, setCard] = useState({});
  const [theme, setTheme] = useState({});

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
    setTheme(validTheme);
    setCard(validCard);
  }, []);

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      `Are you sure you want to delete "${card.cardTitle} note"?`
    );

    if (!confirmed) return; // Stop if user canceled

    // map uses a callback which is then executed for each themeObj.
    setInfo((oldInfo) => deleteFlashCard(theme.themeID, card.cardID, oldInfo));

    navigate(`/${theme.themeID}`);
  }
  return (
    <MainBodyCover>
      <div className="px-10 py-6 m-auto my-15 shadow-[-5px_5px_7px_rgba(0,0,0,0.3)] flex flex-col gap-7 rounded-lg w-[95%] md:w-[80%] lg:w-[75%] dark:bg-primary-black-navigation bg-primary-white-smoke">
        <div className="flex justify-between items-center">
          <BackButton url={theme.themeID} />
          <div className="text-3xl font-bold dark:text-white">
            {card.cardTitle}
          </div>
          <div className="flex gap-1">
            <EditButton enableDarkMode={true} />
            <DeleteButton handleDeleteAction={handleDelete} />
          </div>
        </div>
        <div className="border-2 rounded-lg px-7 py-10 prose prose-sm md:prose-base dark:prose-invert w-full m-auto max-w-full ">
          <ReactMarkdown>{card.cardNote}</ReactMarkdown>
        </div>
      </div>
    </MainBodyCover>
  );
}

export default ShowFlashCardPage;
