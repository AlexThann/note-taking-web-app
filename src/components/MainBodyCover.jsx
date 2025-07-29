// Simple mainbody cover for all pages.
function MainBodyCover({ children }) {
  return (
    <section className="flex-1 relative bg-white dark:bg-primary-black-body">
      {children}
    </section>
  );
}

export default MainBodyCover;
