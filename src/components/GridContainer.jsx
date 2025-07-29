// Simple grid container for theme and flashcard pages
function GridContainer({ children }) {
  return (
    <>
      <div className="grid-container my-15">{children}</div>
    </>
  );
}

export default GridContainer;
