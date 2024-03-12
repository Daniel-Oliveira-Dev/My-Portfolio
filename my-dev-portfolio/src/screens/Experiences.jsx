import { MyHeader } from "../components/MyHeader";
import { useState } from "react";
import dataJSON from "../data.json";

export function Experiences() {
    const [shouldShowPageInEnglish, setShouldShowPageInEnglish] = useState(false);
    const [dataJsonUsed, setDataJsonUsed] = useState(dataJSON.br);

    const handleLanguageChange = () => {
        setDataJsonUsed(!shouldShowPageInEnglish ? dataJSON.en : dataJSON.br);
        setShouldShowPageInEnglish(prevState => !prevState);
    };

    return (
        <div>
            <MyHeader handleLanguageChange={handleLanguageChange}/>
            <div className="mainContent">
            </div>
        </div>
    )
}