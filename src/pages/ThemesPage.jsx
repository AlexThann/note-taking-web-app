import { useContext, useState } from "react";
import InformationContext from "../contexts/InformationContext";
import GridContainer from "../components/GridContainer";
import ThemeCard from "../components/ThemeCard";
import Dialog from "../components/Dialog";
import AddButton from "../components/AddButton";
import MainBodyCover from "../components/MainBodyCover";
import addTheme from "../util/addTheme";
import editTheme from "../util/editTheme";

function ThemesPage() {
  const { info, setInfo } = useContext(InformationContext);

  const [showDialogForNewTheme, setShowDialogForNewTheme] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [themeToEdit, setThemeToEdit] = useState({});

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
              setThemeToEdit={setThemeToEdit}
              setShowEditDialog={setShowEditDialog}
            />
          );
        })}
        <AddButton text="New Theme" methodOnClick={addNewTheme} />
      </GridContainer>
      {showDialogForNewTheme && (
        <Dialog
          setShowDialog={setShowDialogForNewTheme}
          info={info}
          setInfo={setInfo}
          action={addTheme}
          mode="Add"
        />
      )}

      {showEditDialog && (
        <Dialog
          setShowDialog={setShowEditDialog}
          info={info}
          setInfo={setInfo}
          action={editTheme}
          mode="Edit"
          prevTheme={themeToEdit}
        />
      )}
    </MainBodyCover>
  );
}

export default ThemesPage;
