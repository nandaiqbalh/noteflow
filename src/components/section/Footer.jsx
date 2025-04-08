import {footerCols} from "../../utils/content.js";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
   <footer className={`bg-gradient-to-bottom`}>
     <div className={`m-auto flex max-w-[90rem] justify-between px-24 py-32`}>
       <div>
         <a className={`flex items-center gap-x-3`} href="#">
           <Logo alt={"NoteFlow logo icon"} className={`stroke-primary-500`} width={4.5}/>
           <p className={`text-primary-50 text-xl font-bold tracking-tighter`}>NoteFlow</p>
         </a>
       </div>

       <div className={`grid grid-cols-[repeat(4,max-content)] gap-x-24`}>
         {footerCols.map((col) => (
           <div key={col.id}>
             <p className={`text-primary-50 mb-8 text-xl/loose font-semibold`}>{col.category}</p>
             <ul className={`flex flex-col gap-y-4`}>
               {col.links.map((link, index) => (
                 <li className={`cursor-pointer`} key={index}>
                   <a className={`text-primary-50 hover:text-primary-500 transition text-lg/8 font-light`} href="#">{link}</a>
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
