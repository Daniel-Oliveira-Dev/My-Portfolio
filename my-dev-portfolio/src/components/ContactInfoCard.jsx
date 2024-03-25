export function ContactInfoCard(props) {
    return (
        <div className="flex flex-row justify-start items-center gap-2">
            <img src={props.icon} id="icon" className="w-12 md:w-16 h-auto bg-transparent mx-2" />
            <a href={props.link} target="_blank"
                className="text-xl no-underline flex flex-row justify-center items-center 
                text-[var(--deep-space-sparkle)] gap-2
                over:cursor-pointer hover:text-[var(--dark-jungle-green)] ">
                {props.name}
                <span class="material-symbols-outlined m-0 p-0">open_in_new</span>
            </a>
        </div>
    )
}