import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {data} from "../../Content/header";
import logo from "../../assets/Mylogo.png"

const Header = () => {
    return (
                  <div className='flex flex-col gap-4'>
                    <div className="w-6/12 rounded-sm border-2 border-gray-200">
                      <img src={logo} alt="" />
                    </div>
                    {/* Name */}
                    <div className='text-2xl text-PrimarySubcontent font-semibold'>{data.name}</div>
                    {/* C */}
                    <div className='text-PrimaryBase font-semibold'>{data.title}</div>
                    {/* about me */}
                    <div className='text-sm w-4/6'>
                    {data.about} </div>
                    <div className='mt-4'>
                      {/* button */}
                      <a href="#">
                      <span className='rounded-md bg-PrimaryBase font-semibold text-gray-50 py-2 px-3'>
                        {data.btnText}
                        <span className='rotate-90 inline-block ml-2 text-sm'>
                        <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                        </span>
                      </span>
                      </a>
                    </div>
                  </div>
    )
}


export default Header;