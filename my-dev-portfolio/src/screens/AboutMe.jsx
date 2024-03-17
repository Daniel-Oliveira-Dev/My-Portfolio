import { MyHeader } from "../components/MyHeader";
import { useState } from "react";
import dataJSON from "../data.json";
import myPhoto from "../assets/photos/me.jpg";

export function AboutMe() {
    const [shouldShowPageInEnglish, setShouldShowPageInEnglish] = useState(false);
    const [dataJsonUsed, setDataJsonUsed] = useState(dataJSON.br);
    const [skillsSearch, setSkillsSearch] = useState("");

    const handleLanguageChange = () => {
        setDataJsonUsed(!shouldShowPageInEnglish ? dataJSON.en : dataJSON.br);
        setShouldShowPageInEnglish(prevState => !prevState);
    };

    function handleSkillSearch(event) {
        const query = event.target.value;
        setSkillsSearch(query);
    }

    const filteredSkills = skillsSearch !== "" ?
    dataJsonUsed.aboutMe.skills.filter((skill) => {
        return skill.toLowerCase().includes(skillsSearch.toLowerCase());
    }) : dataJsonUsed.aboutMe.skills;

    return (
        <div>
            <MyHeader handleLanguageChange={handleLanguageChange} />
            <div className="mainContent grid grid-flow-row
            grid-cols-1 md:grid-cols-2 auto-cols-max mx-4 gap-3">
                <div className="flex flex-col justify-start items-center text-center gap-5">
                    <div className="text-[var(--deep-space-sparkle)] text-4xl font-bold">{dataJsonUsed.aboutMe.intro}</div>
                    <div>{dataJsonUsed.aboutMe.overview}</div>
                    <div className="bg-[var(--shadow-blue)] p-2 border-[var(----yankees-blue)] border-solid 
                    border-[4px] rounded-md flex flex-col gap-4">
                        <div className="flex flex-row justify-evenly border-b-2 border-[var(----yankees-blue)] pb-2">
                            <div className="w-[33%] text-md md:text-lg font-bold">
                                {dataJsonUsed.aboutMe.skillsName}
                            </div>
                            <div className="w-[66%]">
                                <input type="text" placeholder={dataJsonUsed.aboutMe.inputPlaceholder}
                                onChange={handleSkillSearch}
                                className="bg-transparent focus:outline-none outline-none text-sm md:text-md
                                border-b-2 border-[var(--deep-space-sparkle)] overflow-hidden text-center
                                placeholder-[var(--chinese-white)] w-[50%] px-1"/>
                            </div>
                        </div>
                        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-5 auto-cols-max gap-3 
                        w-[100%]">
                            {filteredSkills.map((skill) => {
                                return (
                                    <div className="flex justify-center items-center text-center overflow-hidden
                                    text-sm">
                                        {skill}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={myPhoto} className="w-50 h-auto border-[var(--deep-space-sparkle)] border-solid border-[6px] rounded-md" />
                </div>
            </div>
        </div>
    )
}