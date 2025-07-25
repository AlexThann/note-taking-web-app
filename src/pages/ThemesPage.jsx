import { useContext, useState } from "react";
import InformationContext from "../contexts/InformationContext";
import GridContainer from "../components/GridContainer";
import ThemeCard from "../components/ThemeCard";
import Dialog from "../components/Dialog";
import AddButton from "../components/AddButton";
import MainBodyCover from "../components/MainBodyCover";

function ThemesPage() {
  const { info, setInfo } = useContext(InformationContext);

  const [showDialogForNewTheme, setShowDialogForNewTheme] = useState(false);

  function addNewTheme() {
    setShowDialogForNewTheme(true);
  }

  return (
    <MainBodyCover>
      {/* For each theme created a themeCard. */}
      <GridContainer>
        {info.map((themeElement, index) => {
          return (
            <ThemeCard
              key={themeElement.themeID}
              themeElement={themeElement}
              setInfo={setInfo}
            />
          );
        })}
        <AddButton text="New Theme" methodOnClick={addNewTheme} />
      </GridContainer>
      {showDialogForNewTheme && (
        <Dialog
          setShowDialogForNewTheme={setShowDialogForNewTheme}
          info={info}
          setInfo={setInfo}
        />
      )}
    </MainBodyCover>
  );
}

export default ThemesPage;
