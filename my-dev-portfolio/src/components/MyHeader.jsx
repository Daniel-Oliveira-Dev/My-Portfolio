import "./myheader.css";
import 'animate.css';
import brasilPNG from "../assets/flags/brasil.png";
import usaPNG from "../assets/flags/usa.png";
import { Link } from "react-router-dom";

export function MyHeader() {
    return (
        <div className="top-0 left-0 right-0 absolute
         my-[3vh] bg-transparent text-[#778DA9] text-md box-border px-4">
            <div className="border-solid border-2 border-[#778DA9]
            flex flex-1 flex-shrink flex-row items-center justify-evenly h-[7vh] w-[100%]">
                <Link to="/" className="headerButton">SOBRE MIM</Link>
                <Link to="/projects" className="headerButton">PROJETOS</Link>
                <Link to="/experiences" className="headerButton">EXPERIÊNCIAS</Link>
                <Link to="/courses" className="headerButton">CURSOS</Link>
                <Link to="/contact" className="headerButton">CONTATO</Link>
                <div className="languageSwitch flex flex-row justify-evenly items-center">
                    <img src={brasilPNG} className="flagPNG" />
                    <form className="form-check form-switch flex justify-center items-center">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </form>
                    <img src={usaPNG} className="flagPNG" />
                </div>
            </div>
        </div>
    )
}