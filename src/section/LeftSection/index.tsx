import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";
import { data } from "../../Content/contact";

const LeftSection = () => {
  return (
    <div className="px-3">
      <div className='sticky top-14 grid grid-row-[35%_45%_20%] h-[85vh]'>
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar />
        {/* link */}
        <div className='flex items-end gap-4 text-2xl'>
          {
            data.map((e) => (
              e.material.map((m) => (
                <Contact icon={m.icon} link={m.link} />
              ))
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default LeftSection;