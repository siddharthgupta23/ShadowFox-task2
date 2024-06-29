// import React from 'react'
// import { Link } from 'react-router-dom';
// import FOOTER_LINKS from '../ASSETS/frontend/assets/footer_links';
// import FOOTER_CONTACT_INFO from '..//ASSETS/frontend/assets/footer_contact'
// import "../input.css";
// const Footer = () => {
//   return (
//     <footer>
//     <div>
//       <div>
//         <Link to="/" className="mb-10 bold-20">Shoppee</Link>
//         <div>
//           {
//             FOOTER_LINKS.map((col)=> (<FooterColumn title={col.title} key={col.title}>
//               <ul className="flex flex-col gap-4 text-regular-14 font-regular text-gray-600">
//                 {col.links.map((link)=>(<Link to ="/" key={link}>{link}</Link>))}
//               </ul>
//             </FooterColumn>))
//           }
//           <div>
//             <FooterColumn title={FOOTER_CONTACT_INFO.title}>
//               {FOOTER_CONTACT_INFO.links.map((link)=>
//             (
//               <Link to="/" key={link.label}>
//              <p>{link.label}</p>
//               </Link>
//             ))}
//             </FooterColumn>
//             </div>
//           </div>
//       </div>
//     </div>
//     </footer>
//   )
// };
// const FooterColumn =({title,children})=>
// {
//   return (
//     <div>
//       <h4>
//         {title}
//         </h4>
//         {children}
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_LINKS from '../ASSETS/frontend/assets/footer_links';
import FOOTER_CONTACT_INFO from '../ASSETS/frontend/assets/footer_contact';
import SOCIALS from "../ASSETS/frontend/assets/socials";
import "../input.css";

const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">   
       <div className="max_padd_container flex-w-full flex-col gap-14 ">
         <div className="flex flex-col md:flex-row gap-10"> 
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link to="/" className="text-bold-20">Shoppee</Link>
          </div>
          <div className="flex flex-wrap justify-between w-full">
            
            {
              FOOTER_LINKS.map((col) => (
                <FooterColumn title={col.title} key={col.title}>
                  <ul className="flex flex-col gap-4 text-regular-14 text-gray-600">
                    {col.links.map((link) => (
                      <li key={link}>
                        <Link to="/">{link}</Link>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              ))
            }
            <div className="flex flex-col gap-5">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="flex flex-col gap-4 text-regular-14 text-gray-600">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label}>
                    <Link to="/"  className="flex gap-4 md:flex-col lg:flex-row"><p>{link.label}:</p><p className="medium-14">{link.value}</p></Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
          <div className="flex">
            <FooterColumn>
              <ul className="flex-gap-4">
                {SOCIALS.links.map((link)=>(
                  <Link to="/" key={link}><img src={link} alt="socialIcon" height={22} width={22} /></Link>
                ))}
              </ul>
            </FooterColumn>
           </div> 
         </div> 
      </div>
      <div className="border bg-gray-20"></div>
      <p className="text-center regular-14 text-gray-30">2024|Shopee|All rights Reserved </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="w-full md:w-1/4 mb-10 md:mb-0">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;

