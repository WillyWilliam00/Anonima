import React, {  useState } from "react";
import AnimatePing from "./ui/AnimatePing";
import { selectTheme, ThemeName } from "./utility/utils";


interface LayoutProps {
  children: React.ReactNode;
}





const Layout = ({ children }: LayoutProps) => {
const [selectedTheme, setSelectedTheme] = useState(localStorage.theme as ThemeName || "hacker")
const handleThemeChange = (theme: ThemeName) => {
  setSelectedTheme(theme);
  selectTheme(theme);
}

  
  return (
    <div className=" h-dvh flex flex-col bg-background-primario">
      <header className="border-2 border-primario bg-background-primario w-full flex p-4 justify-around">
        <div>
            <label className="text-primario text-xs sm:text-sm  p-2 rounded"  >
              Tema:
              <select name="selectedTheme" value={selectedTheme} className="bg-background-primario w-fit ml-2 p-1 border-2 rounded border-primario" onChange={(e) =>{handleThemeChange(e.target.value as ThemeName)} } >
                <option value="red-theme" className="text-choise-red ">Rosso</option>
                <option value="blue-theme" className="text-choise-blue">Blu</option>
                <option value="yellow-theme" className="text-choise-yellow">Giallo</option>
                <option value="hacker" className="text-choise-hacker">Hacker</option>
              </select>
            </label>
          </div>
        <div>
          <h1 className="text-primario text-sm sm:text-base lg:text-xl font-semibold">Anonima</h1>
          
        </div>
        <div className="flex items-center gap-2">
          <AnimatePing size={"md"} />
          <h1 className="text-primario text-sm sm:text-base lg:text-xl ">Connessione_Sicura</h1>
        </div>
      </header>
      <main className="mx-auto md:w-10/12 xl:w-11/12 flex-1 p-4 flex flex-col overflow-hidden ">
        {children}
      </main>
      <footer className="border-2 border-primario bg-background-primario w-full  flex p-2 justify-center items-center">
        <p className="text-primario">Conversazioni_Criptate_Con_Anonima</p>
      </footer>
    </div>
  );
};

export default Layout;
