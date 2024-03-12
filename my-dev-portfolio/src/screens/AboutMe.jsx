import { MyHeader } from "../components/MyHeader";
import { useState } from "react";
import dataJSON from "../data.json";
import myPhoto from "../assets/photos/me.jpg";

export function AboutMe() {
    const [shouldShowPageInEnglish, setShouldShowPageInEnglish] = useState(false);
    const [dataJsonUsed, setDataJsonUsed] = useState(dataJSON.br);

    const handleLanguageChange = () => {
        setDataJsonUsed(!shouldShowPageInEnglish ? dataJSON.en : dataJSON.br);
        setShouldShowPageInEnglish(prevState => !prevState);
    };
    
    return (
        <div>
            <MyHeader handleLanguageChange={handleLanguageChange}/>
            <div className="mainContent grid grid-flow-row
            grid-cols-1 md:grid-cols-2 auto-cols-max mx-4 gap-3">
                <div className="flex flex-col justify-start items-center text-center gap-3">
                    <div className="text-[var(--deep-space-sparkle)] text-4xl font-bold">{dataJsonUsed.aboutMe.intro}</div>
                    <div>{dataJsonUsed.aboutMe.overview}</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={myPhoto} className="w-50 h-auto border-[var(--deep-space-sparkle)] border-solid border-[6px] rounded-md"/>
                </div>
            </div>
        </div>
    )
}