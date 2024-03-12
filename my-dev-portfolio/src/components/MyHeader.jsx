import "./myheader.css";
import 'animate.css';
import brasilPNG from "../assets/flags/brasil.png";
import usaPNG from "../assets/flags/usa.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import MediaQuery from 'react-responsive'

export function MyHeader({ handleLanguageChange }) {
    const [shouldShowPageInEnglish, setShouldShowPageInEnglish] = useState(false);
    const [shouldShowSidebar, setShouldShowSidebar] = useState(false);

    function handleLanguageChangeInHeader() {
        setShouldShowPageInEnglish(prevState => !prevState);
        handleLanguageChange();
    }

    function handleMenuClick() {
        setShouldShowSidebar(prevState => !prevState);
    }

    return (
        <div>
            <MediaQuery minWidth={896}>
                <div className="top-0 left-0 right-0 absolute
                my-[3vh] bg-transparent text-[#778DA9] text-md box-border px-4">
                    <div className="border-solid border-2 border-[#778DA9] box-border p-6
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
            </MediaQuery>
            <MediaQuery maxWidth={895}>
                <div className="top-0 left-0 right-0 absolute
                bg-transparent text-[#778DA9] text-md box-border p-1">
                    <div className="border-solid border-2 border-[#778DA9] box-border
                    flex flex-1 flex-shrink flex-row items-center justify-around h-[7vh] w-[100%]">
                        <div className="optionsMenu relative flex flex-row items-center justify-center w-[50%]">
                            <button className="flex flex-row justify-around items-center w-3
                            hover:cursor-pointer hover:font-bold"
                                onClick={handleMenuClick}>
                                <p className="m-0 p-0">Menu</p>
                                <span className="material-symbols-outlined m-0 p-0">keyboard_double_arrow_down</span>
                            </button>
                            {shouldShowSidebar ? (
                                <div>
                                    {shouldShowPageInEnglish ? (
                                        <div className="absolute top-[100%] -translate-x-1/2
                                        flex flex-1 flex-shrink flex-col items-center justify-evenly
                                        bg-[var(--chinese-white)]">
                                            <Link to="/" className="headerButton mobileSidebarButton">ABOUT ME</Link>
                                            <Link to="/projects" className="headerButton mobileSidebarButton">PROJECTS</Link>
                                            <Link to="/experiences" className="headerButton mobileSidebarButton">EXPERIENCES</Link>
                                            <Link to="/courses" className="headerButton mobileSidebarButton">COURSES</Link>
                                            <Link to="/contact" className="headerButton mobileSidebarButton">CONTACT</Link>
                                        </div>
                                    ) : (
                                        <div className="absolute top-[100%] -translate-x-1/2
                                        flex flex-1 flex-shrink flex-col items-center justify-evenly
                                        bg-[var(--chinese-white)]">
                                            <Link to="/" className="headerButton mobileSidebarButton">SOBRE MIM</Link>
                                            <Link to="/projects" className="headerButton mobileSidebarButton">PROJETOS</Link>
                                            <Link to="/experiences" className="headerButton mobileSidebarButton">EXPERIÊNCIAS</Link>
                                            <Link to="/courses" className="headerButton mobileSidebarButton">CURSOS</Link>
                                            <Link to="/contact" className="headerButton mobileSidebarButton">CONTATO</Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div />
                            )}
                        </div>
                        <div className="languageSwitch flex flex-row justify-around items-center w-[50%]">
                            <img src={brasilPNG} className="flagPNG" />
                            <form className="form-check form-switch flex justify-center items-center">
                                <input className="form-check-input" onClick={handleLanguageChangeInHeader}
                                    type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </form>
                            <img src={usaPNG} className="flagPNG" />
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}