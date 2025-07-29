import { useNavigate, useParams } from "react-router";

import { motion } from "motion/react";
import { useState, useContext } from "react";
import ReactMarkdown from "react-markdown";
import InformationContext from "../contexts/InformationContext";
import CheatSheetButton from "./CheatSheetButton";
import MarkdownCheatSheet from "./MarkdownCheatSheet";

function FlashCardPageWrapper({
  prevCard = {
    cardID: "",
    cardTitle: "",
    cardNote: "",
    cardDateCreated: "",
    cardDateModifiedLast: "",
    cardColor: "#93c5fd",
  },
  mode,
  action,
}) {
  const { info, setInfo } = useContext(InformationContext);
  const navigateBack = useNavigate();
  const URLParams = useParams();
  const [showTitleError, setShowTitleError] = useState(false);
  const [showNoteError, setShowNoteError] = useState(false);
  const [previewMarkdown, setPreviewMarkdown] = useState(false);

  const [title, setTitle] = useState(prevCard.cardTitle);
  const [noteContent, setNoteContent] = useState(prevCard.cardNote);

  const brightPink = "#f9a8d4";
  const brightBlue = "#93c5fd";
  const brightGreen = "#86efac";
  const brightYellow = "#fde68a";
  const [colorSelected, setColorSelected] = useState(prevCard.cardColor);

  function actionOnFlashCard() {
    const titleIsEmpty = title.trim() === "";
    const noteContentIsEmpty = noteContent.trim() === "";

    setShowTitleError(titleIsEmpty);
    setShowNoteError(noteContentIsEmpty);

    if (titleIsEmpty || noteContentIsEmpty) return;

    const dateCreated = new Date().toLocaleDateString("en-GB");
    const themeID = URLParams.theme;
    action(
      setInfo,
      title,
      noteContent,
      dateCreated,
      colorSelected,
      themeID,
      prevCard.cardID
    );
    navigateBack(`/${URLParams.theme}`);
  }

  const [cheatSheetVisible, setCheatSheetVisible] = useState(false);

  const variants = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 },
  };
  return (
    <>
      <div className="relative px-10 py-6 z-5 m-auto my-15 shadow-[-5px_5px_7px_rgba(0,0,0,0.3)] flex flex-col gap-7 rounded-lg w-[95%] md:w-[80%] lg:w-[75%] dark:bg-primary-black-navigation bg-primary-white-smoke">
        <div>
          <h1 className="dark:text-white text-gray-800 text-lg pb-2">
            Choose a Flashcard Title
          </h1>
          <input
            type="text"
            placeholder="C++ Constructors basics"
            className="w-full px-4 py-2 border rounded-lg  dark:bg-primary-black-navigation dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {showTitleError && <p className="text-red-600">Please set a title</p>}
          <h1 className="dark:text-white text-gray-800 text-lg pt-4">
            Choose the card/note color
          </h1>
          <div className="flex items-center gap-4 pt-2">
            {[brightBlue, brightPink, brightGreen, brightYellow].map(
              (color) => (
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  key={color}
                  className={` rounded-full border-2 cursor-pointer ${
                    colorSelected === color
                      ? "border-2 border-black dark:border-white w-[23px] h-[23px]"
                      : "border-transparent w-6 h-6"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setColorSelected(color)}
                />
              )
            )}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex   overflow-hidden w-max bg-[#e2e2e2] dark:bg-[#2e2c35] rounded-lg">
              <button
                className={`dark:text-white :text-black px-3 py-1 rounded-lg cursor-pointer  ${
                  !previewMarkdown ? "bg-[#c9c9c9] dark:bg-[#161718]" : ""
                }`}
                onClick={() => setPreviewMarkdown(false)}
              >
                Edit
              </button>

              <button
                className={`dark:text-white :text-black px-3 py-1 rounded-lg cursor-pointer  ${
                  previewMarkdown ? "bg-[#c9c9c9] dark:bg-[#161718]" : ""
                }`}
                onClick={() => setPreviewMarkdown(true)}
              >
                Preview
              </button>
            </div>
            <CheatSheetButton setCheatSheetVisible={setCheatSheetVisible} />
          </div>
          {/* Tailwind by default removes the style from h1's etc etc. Either use a tailwind plugin called typography where by using class prose, the genereted text from the markdown
           has some default stylings, OR i can style each component by use of the components prop on ReactMarkdown. For simplicity i used the plugin.
           prose-invert is for dark theme*/}
          {!previewMarkdown ? (
            <textarea
              placeholder="Constructors in C++ are special member functions that initialize objects when they are created."
              rows="3"
              className="w-full h-130 px-4 py-3 my-6 border  rounded-lg bg-primary-white-smoke dark:bg-primary-black-navigation dark:text-white"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />
          ) : (
            <div className="border-1 rounded-lg px-4 py-6 prose prose-sm md:prose-base dark:prose-invert max-w-full mt-7">
              <ReactMarkdown
                components={{
                  img: ({ node, ...props }) => (
                    <img
                      {...props}
                      className="mx-auto "
                      alt={props.alt || ""}
                    />
                  ),
                }}
              >
                {noteContent}
              </ReactMarkdown>
            </div>
          )}
          {showNoteError && <p className="text-red-600">Please set a note</p>}
        </div>
        <div className="flex justify-end gap-5">
          <motion.button
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            className="text-white bg-blue-500 rounded-md cursor-pointer px-7 py-2 border-1 border-blue-800 shadow-[0px_5px_5px_rgba(0,0,0,0.25)]"
            onClick={() => actionOnFlashCard()}
          >
            {mode}
          </motion.button>
          <motion.button
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigateBack(`/${URLParams.theme}`)}
            className="text-gray-500 bg-white rounded-md cursor-pointer px-7 py-2 border-1 border-gray-800 shadow-[0px_5px_5px_rgba(0,0,0,0.25)]"
          >
            Cancel
          </motion.button>
        </div>
      </div>
      {cheatSheetVisible && (
        <MarkdownCheatSheet setCheatSheetVisible={setCheatSheetVisible} />
      )}
    </>
  );
}

export default FlashCardPageWrapper;
