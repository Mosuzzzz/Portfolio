

const Title = ({ isHighlight, title, link }: { isHighlight: boolean, title: string, link: string }) => {

    return (
        <a href={link}>
            <div className={`hover:scale-105 transition-all ${isHighlight ? "text-PrimarySubcontent" : ""} font-semibold`}>{title}</div>
        </a>
    );
}


export default Title;