function MainBodyCover({ children }) {
  return (
    // NOTE HERE RELATIVE POS
    <section className="flex-1 relative bg-white dark:bg-primary-black-body">
      {children}
    </section>
  );
}

export default MainBodyCover;
