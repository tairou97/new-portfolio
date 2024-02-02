// import React from "react";
// import { motion } from "framer-motion";
// import "../Inner/Inner.scss";
// const Inner = ({ children }) => {
//   const anim = (variants) => {
//     return {
//       initial: "initial",
//       animate: "enter",
//       exit: "exit",
//       variants,
//     };
//   };

//   const opacity = {
//     initial: {
//       opacity: 0,
//     },
//     enter: {
//       opacity: 1,
//     },
//     exit: {
//       opacity: 1,
//     },
//   };

//   const slide = {
//     initial: {
//       top: "100vh",
//     },
//     enter: {
//       top: "100vh",
//     },
//     exit: {
//       top: "0",
//     },
//   };

//   const navBar = [
//     {
//       name: "About",
//       to: "/",
//       id: 1,
//     },
//     {
//       name: "Skills",
//       to: "/skills",
//       id: 2,
//     },
//     {
//       name: "Projects",
//       to: "/projects",
//       id: 3,
//     },
//     {
//       name: "Contact",
//       to: "/contact",
//       id: 4,
//     },
//   ];
//   return (
//     <div className="inner">
//       <motion.div {...anim(slide)} className="slide" />
//       <motion.div {...anim(opacity)} className="page">
//         <nav>
//           <ul className="nav">
//             {navBar.map((nav) => (
//               <li key={nav.id}>
//                 <NavLink to={nav.to}>{nav.name}</NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default Inner;
