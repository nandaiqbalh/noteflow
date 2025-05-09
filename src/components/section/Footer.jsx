import {footerCols} from "../../utils/content.js";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
   <footer className={`bg-gradient-to-bottom`}>
     <div className={`m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-lg:grid max-lg:gap-y-18 max-sm:pb-16`}>
       <div>
         <a className={`flex items-center gap-x-3`} href="#">
           <Logo alt={"NoteFlow logo icon"} className={`stroke-primary-500`} width={4.5}/>
           <p className={`text-primary-50 text-xl font-bold tracking-tighter`}>NoteFlow</p>
         </a>
       </div>

       <div className={`grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18 max-lg:gap-x-24 max-sm:grid-cols-[repeat(2,max-content)] max-sm:gap-y-16`}>
         {footerCols.map((col) => (
           <div key={col.id}>
             <p className={`text-primary-50 mb-8 text-xl/loose font-semibold`}>{col.category}</p>
             <ul className={`flex flex-col gap-y-4`}>
               {col.links.map((link, index) => (
                 <li className={`cursor-pointer`} key={index}>
                   <a className={`text-primary-50 hover:text-primary-500 transition text-lg/8 font-light max-xl:text-base/loose`} href="#">{link}</a>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>
     </div>
   </footer>
  );
};
export default Footer;
