import { useNavigate, useParams } from "react-router";
import MainBodyCover from "../components/MainBodyCover";
import { motion } from "motion/react";
import { useState } from "react";

function AddFlashCardPage() {
  const navigateBack = useNavigate();
  const URLParams = useParams();
  const [showTitleError, setShowTitleError] = useState(false);
  const [showNoteError, setShowNoteError] = useState(false);
  const [title, setTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [previewMarkdown, setPreviewMarkdown] = useState(false);

  function addNewFlashCard() {
    const titleIsEmpty = title.trim() === "";
    const noteContentIsEmpty = noteContent.trim() === "";

    setShowTitleError(titleIsEmpty);
    setShowNoteError(noteContentIsEmpty);

    if (titleIsEmpty || noteContentIsEmpty) return;

    const dateCreated = new Date().toLocaleDateString("en-GB");
  }
  const variants = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 },
  };
  return (
    <MainBodyCover>
      <div className="px-10 py-6 m-auto mt-15 shadow-[-5px_5px_7px_rgba(0,0,0,0.3)] flex flex-col gap-7 rounded-lg w-[95%] md:w-[80%] lg:w-[75%] dark:bg-primary-black-navigation bg-primary-white-smoke">
        <div>
          <h1 className="dark:text-white text-gray-800 text-lg pb-2">
            Choose a Flashcard Title
          </h1>
          <input
            type="text"
            placeholder="C++ Constructors basics"
            className="w-full px-4 py-2 border rounded-lg  dark:bg-primary-black-navigation dark:text-white"
            onChange={(e) => setTitle(e.target.value)}
          />
          {showTitleError && <p className="text-red-600">Please set a title</p>}
        </div>
        <div className="p-2 bg-primary-white dark:bg-[#141b22] rounded-xl">
          {" "}
          {/*#141b22  */}
          <div className="flex  mb-2 rounded-lg overflow-hidden w-max">
            <button
              className={`dark:text-white :text-black px-3 py-1 cursor-pointer  ${
                !previewMarkdown ? "bg-[#0c0d0e]" : "bg-[#c2c2c2]"
              }`}
              onClick={() => setPreviewMarkdown(false)}
            >
              Edit
            </button>

            <button
              className="dark:text-white :text-black px-3 py-1 bg-purple-800 cursor-pointer "
              onClick={() => setPreviewMarkdown(true)}
            >
              Preview
            </button>
          </div>
          {!previewMarkdown ? (
            <textarea
              placeholder="Constructors in C++ are special member functions that initialize objects when they are created."
              rows="3"
              className="w-full h-130 px-4 py-2 border  rounded-lg dark:bg-primary-black-navigation dark:text-white"
              onChange={(e) => setNoteContent(e.target.value)}
            />
          ) : (
            <div>fdasfasd</div>
          )}
          {showNoteError && <p className="text-red-600">Please set a note</p>}
        </div>
        <div className="flex justify-end gap-5">
          <motion.button
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            className="text-white bg-blue-500 rounded-md cursor-pointer px-7 py-2 border-1 border-blue-800 shadow-[0px_5px_5px_rgba(0,0,0,0.25)]"
            onClick={() => addNewFlashCard()}
          >
            Save
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
    </MainBodyCover>
  );
}

export default AddFlashCardPage;
