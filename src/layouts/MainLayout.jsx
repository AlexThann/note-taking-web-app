import { useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import { useEffect } from "react";
// No brackets since we export *DEFAULT*.
import InformationContext from "../contexts/InformationContext";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(true);

  // Both of these are for pulling and storing on localstorage.
  const [info, setInfo] = useState(() => {
    const infoSaved = localStorage.getItem("savedInfo");
    if (infoSaved == null) return [];
    return JSON.parse(infoSaved);
  });

  useEffect(() => {
    localStorage.setItem("savedInfo", JSON.stringify(info));
  }, [info]);

  // InformationContext.Provider for context of info and setinfo
  return (
    <>
      <InformationContext.Provider value={{ info, setInfo }}>
        <main
          className={
            darkMode === true
              ? "dark font-inter min-h-screen flex flex-col"
              : "font-inter min-h-screen flex flex-col"
          }
        >
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Outlet />
        </main>
      </InformationContext.Provider>
    </>
  );
}

export default MainLayout;
