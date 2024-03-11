import "./myheader.css";
import 'animate.css';
import brasilPNG from "../assets/flags/brasil.png";
import usaPNG from "../assets/flags/usa.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function MyHeader({ handleLanguageChange }) {
    const [shouldShowPageInEnglish, setShouldShowPageInEnglish] = useState(false);

    function handleLanguageChangeInHeader() {
        setShouldShowPageInEnglish(!shouldShowPageInEnglish);
        handleLanguageChange();
    }

    return (
        <div className="top-0 left-0 right-0 absolute
         my-[3vh] bg-transparent text-[#778DA9] text-md box-border px-4">
            <div className="border-solid border-2 border-[#778DA9] box-border pr-6
            flex flex-1 flex-shrink flex-row items-center justify-evenly h-[7vh] w-[100%]">
                {shouldShowPageInEnglish ? (
                    <div className="flex flex-1 flex-shrink flex-row items-center justify-evenly">
                        <Link to="/" className="headerButton">ABOUT ME</Link>
                        <Link to="/projects" className="headerButton">PROJECTS</Link>
                        <Link to="/experiences" className="headerButton">EXPERIENCES</Link>
                        <Link to="/courses" className="headerButton">COURSES</Link>
                        <Link to="/contact" className="headerButton">CONTACT</Link>
                    </div>
                ) : (
                    <div className="flex flex-1 flex-shrink flex-row items-center justify-evenly">
                        <Link to="/" className="headerButton">SOBRE MIM</Link>
                        <Link to="/projects" className="headerButton">PROJETOS</Link>
                        <Link to="/experiences" className="headerButton">EXPERIÊNCIAS</Link>
                        <Link to="/courses" className="headerButton">CURSOS</Link>
                        <Link to="/contact" className="headerButton">CONTATO</Link>
                    </div>
                )}
                <div className="languageSwitch flex flex-row justify-evenly items-center">
                    <img src={brasilPNG} className="flagPNG" />
                    <form className="form-check form-switch flex justify-center items-center">
                        <input className="form-check-input" onClick={handleLanguageChangeInHeader}
                            type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </form>
                    <img src={usaPNG} className="flagPNG" />
                </div>
            </div>
        </div>
    )
}