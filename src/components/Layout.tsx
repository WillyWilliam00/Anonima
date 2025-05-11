import React from "react";
import AnimatePing from "./ui/AnimatePing";
import { selectTheme, themesName } from "./utility/utils";

interface LayoutProps {
  children: React.ReactNode;
}



const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-primario">
      <header className="border-2 border-primario bg-background-primario w-full flex p-4 justify-around">
        <div>
            <label className="text-primario text-sm "  >
              Scegli un tema colore:
              <select name="selectedTheme" defaultValue={localStorage.theme || "hacker"} className="bg-background-primario" onChange={(e) => selectTheme(e.target.value as themesName)}>
                <option value="rosso" className="text-choise-red ">Rosso</option>
                <option value="blu" className="text-choise-blue">Blu</option>
                <option value="giallo" className="text-choise-yellow">Giallo</option>
                <option value="hacker" className="text-primario">Hacker</option>
              </select>
            </label>
          </div>
        <div>
          <h1 className="text-primario text-xl font-semibold">Anonima</h1>
          
        </div>
        <div className="flex items-center gap-2">
          <AnimatePing size={"md"} />
          <h1 className="text-primario text-l font-xl">Connessione_Sicura</h1>
        </div>
      </header>
      <main className="mx-auto md:w-10/12 xl:w-11/12 flex-1 p-4 flex flex-col ">
        {children}
      </main>
      <footer className="border-2 border-primario bg-background-primario w-full  flex p-2 justify-center items-center">
        <p className="text-primario">Conversazioni_Criptate_Con_Anonima</p>
      </footer>
    </div>
  );
};

export default Layout;
