
const Picture = ({ picture,title }: {picture:string,title:string}) => {
    return (
        <div>
            <img src={picture} alt={title} className="w-5/6 rounded-sm border-2 border-gray-200" />
        </div>
    );
}


export default Picture;