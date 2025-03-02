
const Tech = ({ isHighlight, data }: { isHighlight: boolean, data: string[] }) => {
    return (
        <div className="flex gap-x-4">
            {
                data.map((title, index) => (
                    <div key={`${title}-tech${index}`} className={`bg-PrimaryBase px-2 py-1 rounded-md text-gray-50 ${isHighlight ? "text-PrimaryContent" : ""}`}>
                        {title}
                    </div>
                ))
            }
        </div>
    );
}


export default Tech;