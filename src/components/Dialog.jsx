import { motion } from "motion/react";
import { useState } from "react";

// prevTitle etc only used for edit mode.
// Dialog is used on the themesPage for editing or adding a new theme. prevTheme is used for editing, eitherwise its initialized as a empty object (or default object)
// action is for an edit function or an add function on the util folder (editTheme or addTheme)
// Mode is just text either Edit or Add
function Dialog({
  setShowDialog,
  setInfo,
  prevTheme = {
    themeID: "",
    themeTitle: "",
    themeDescription: "",
    themeColor: "#3b82f6",
    themeDateCreated: "",
    themeFlashCards: [],
  },
  action,
  mode,
}) {
  // Sets the current state of the inputs as either the default ones or the previous theme's
  const [title, setTitle] = useState(prevTheme.themeTitle);
  const [description, setDescription] = useState(prevTheme.themeDescription);
  const [colorPicked, setColorPicked] = useState(prevTheme.themeColor);
  // Used for error showing when a title or description is not given
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  function actionFunc() {
    const titleIsEmpty = title.trim() === "";
    const descriptionIsEmpty = description.trim() === "";

    // If the title is empty or the description is empty then set the error labels to appear and return from the func.
    setShowTitleError(titleIsEmpty);
    setShowDescriptionError(descriptionIsEmpty);

    if (titleIsEmpty || descriptionIsEmpty) return;

    const dateCreated = new Date().toLocaleDateString("en-GB");
    // Creates the new state based on the old one and executes the action func. either add or edit on util.
    setInfo((oldInfo) =>
      action(oldInfo, title, description, colorPicked, dateCreated, prevTheme)
    );

    setShowDialog(false);
  }

  // variants for animations
  const variants = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 },
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/40 z-15 flex justify-center items-center"
        onClick={() => setShowDialog(false)} // Closes the dialog
      >
        <div
          onClick={(e) => e.stopPropagation()} // Necessary line to stop the dialog from closing when the inner div is clicked.
          className="flex flex-col z-25 rounded-lg p-6 gap-6 w-[90%] max-w-xl max-h-[90%] overflow-y-auto dark:bg-primary-black-navigation bg-primary-white-smoke"
        >
          <div>
            <h1 className="dark:text-white text-gray-800 text-lg pb-2">
              Choose a theme title
            </h1>
            <input
              type="text"
              placeholder="C++ course "
              value={title}
              className="w-full px-4 py-2 border rounded-lg  dark:bg-primary-black-navigation dark:text-white"
              onChange={(e) => setTitle(e.target.value)}
            />
            {showTitleError && (
              <p className="text-red-600">Please set a title</p>
            )}
          </div>
          <div>
            <h1 className="dark:text-white text-gray-800 text-lg pb-2">
              Write a short description
            </h1>
            <textarea
              placeholder="Notes/Flashcards for my C++ course in UNI"
              rows="3"
              value={description}
              className="w-full px-4 py-2 border  rounded-lg resize-none dark:bg-primary-black-navigation dark:text-white"
              onChange={(e) => setDescription(e.target.value)}
            />
            {showDescriptionError && (
              <p className="text-red-600">Please set a description</p>
            )}
          </div>
          <div>
            <h1 className="dark:text-white text-gray-800 text-lg">
              Choose your theme color
            </h1>
            <input
              type="color"
              value={colorPicked}
              onChange={(e) => setColorPicked(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-5">
            <motion.button
              variants={variants}
              whileHover="hover"
              whileTap="tap"
              className="text-white bg-blue-500 rounded-md cursor-pointer px-7 py-2 border-1 border-blue-800 shadow-[0px_5px_5px_rgba(0,0,0,0.25)]"
              onClick={() => actionFunc()}
            >
              {mode}
            </motion.button>
            <motion.button
              variants={variants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowDialog(false)}
              className="text-gray-500 bg-white rounded-md cursor-pointer px-7 py-2 border-1 border-gray-800 shadow-[0px_5px_5px_rgba(0,0,0,0.25)]"
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dialog;
