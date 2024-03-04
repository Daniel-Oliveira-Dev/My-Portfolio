import "./myheader.css";
import 'animate.css';
import brasilPNG from "../assets/flags/brasil.png";
import usaPNG from "../assets/flags/usa.png";

export function MyHeader() {
    return (
        <div className="top-0 left-0 right-0 absolute
         my-[3vh] bg-transparent text-[#778DA9] text-md box-border px-4">
            <div className="border-solid border-2 border-[#778DA9]
            flex flex-1 flex-shrink flex-row items-center justify-evenly h-[7vh] w-[100%]">
                <div className="headerButton">PROJETOS</div>
                <div className="headerButton">SOBRE MIM</div>
                <div className="headerButton">EXPERIÊNCIAS</div>
                <div className="headerButton">CURSOS</div>
                <div className="headerButton">CONTATO</div>
                <div className="languageSwitch flex flex-row justify-around items-center">
                    {/* <img src={brasilPNG}/> */}
                    {/* <img src={usaPNG}/> */}
                </div>
            </div>
        </div>
    )
}