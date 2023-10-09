import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext} from "react";
import { themeContext } from "./context/darkMode";

function App() {
  const { theme, handleTheme } = useContext(themeContext);

  return (
    <>
      <div className={`app ${theme}`}>
        <Navbar setTheme={handleTheme} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
