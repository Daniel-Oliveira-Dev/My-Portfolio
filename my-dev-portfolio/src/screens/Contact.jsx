import { MyHeader } from "../components/MyHeader";
import { useState } from "react";
import dataJSON from "../data.json";
import myPhoto from "../assets/photos/me.jpg";
import emailIcon from "../assets/icons/enviar.png";
import whatsappIcon from "../assets/icons/telefone.png";
import linkedinIcon from "../assets/icons/social.png";
import githubIcon from "../assets/icons/github.png";
import instagramIcon from "../assets/icons/insta.png";
import { ContactInfoCard } from "../components/ContactInfoCard";

export function Contact() {
    const [shouldShowPageInEnglish, setShouldShowPageInEnglish] = useState(false);
    const [shouldShowIconsLinks, setShouldShowIconsLinks] = useState(false);

    const handleLanguageChange = () => {
        setShouldShowPageInEnglish(prevState => !prevState);
    };

    function handleIconsLinks() {
        setShouldShowIconsLinks(!shouldShowIconsLinks);
    }

    return (
        <div>
            <MyHeader handleLanguageChange={handleLanguageChange} />
            <div className="mainContent grid grid-flow-row mb-4
            grid-cols-1 md:grid-cols-2 auto-cols-max mx-4 gap-3">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 justify-start items-start mx-4">
                        <ContactInfoCard icon={emailIcon}
                            name={dataJSON.contact.emailAddress}
                            link={"mailto:" + dataJSON.contact.emailAddress} />

                        <ContactInfoCard icon={whatsappIcon}
                            name={dataJSON.contact.phoneNumber}
                            link={"https://wa.me/" + dataJSON.contact.phoneNumber} />

                        <ContactInfoCard icon={linkedinIcon}
                            name={"Daniel de Oliveira"}
                            link={"https://www.linkedin.com/in/" + dataJSON.contact.linkedInId} />

                        <ContactInfoCard icon={githubIcon}
                            name={dataJSON.contact.githubUsername}
                            link={"https://www.github.com/" + dataJSON.contact.githubUsername} />

                        <ContactInfoCard icon={instagramIcon}
                            name={"@" + dataJSON.contact.instagramId}
                            link={"https://www.instagram.com/" + dataJSON.contact.instagramId} />

                    </div>
                    <div className="h-[2px] bg-[var(--deep-space-sparkle)]" />
                    
                    <p className="text-sm flex flex-row items-center">
                        Icons by Flaticon
                        <span onClick={handleIconsLinks} className="material-symbols-outlined m-0 p-0
                            hover:cursor-pointer">keyboard_double_arrow_down</span>
                    </p>

                    {shouldShowIconsLinks ? (<div className="text-sm flex flex-col gap-0">
                        <a href="https://www.flaticon.com/br/icones-gratis/gmail" target="_blank" title="gmail ícones">Gmail ícones criados por smoodlabs - Flaticon</a>
                        <a href="https://www.flaticon.com/br/icones-gratis/telefone" target="_blank" title="telefone ícones">Telefone ícones criados por lakonicon - Flaticon</a>
                        <a href="https://www.flaticon.com/br/icones-gratis/github" target="_blank" title="github ícones">Github ícones criados por Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/br/icones-gratis/insta" target="_blank" title="insta ícones">Insta ícones criados por Bombasticon Studio - Flaticon</a>
                        <a href="https://www.flaticon.com/br/icones-gratis/linkedin" target="_blank" title="linkedin ícones">Linkedin ícones criados por Alfredo Creates - Flaticon</a>
                    </div>) : (<div/>)}

                </div>
                <div className="flex flex-col items-center">
                    <img src={myPhoto} className="h-auto w-50
                    border-[var(--deep-space-sparkle)] border-solid border-[6px] rounded-md" />
                </div>
            </div>
        </div>
    )
}