import { useState } from "react";
import HeroSection from "./components/HeroSection";
import { useEffect } from "react";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);
  const HandleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <>
      <button
        onClick={HandleSwitchTheme}
        type="button"
        className="fixed z-10 right-2 top-2 p-1 mt-5 mr-10 rounded-xl text-lg bg-indigo-600"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>

      <div className="font-japanese bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <Services />
          <Work />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
