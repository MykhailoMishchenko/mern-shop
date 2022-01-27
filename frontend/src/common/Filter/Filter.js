// import React, {useEffect, useState} from "react";
// import styles from "./Filter.module.scss";
// import {ReactComponent as FilterImg} from "../../assets/image/icon/filter.svg";
// import {ReactComponent as GridLine} from "../../assets/image/icon/grid1.svg";
// import {ReactComponent as GridBlocks} from "../../assets/image/icon/grid2.svg";
// import {useDispatch, useSelector} from "react-redux";
// import {changeToGrid, changeToLine} from "../../redux/Filter/Grid/actions";
// import {config, data} from "../../utils/filter/config";
//
// const Filter = () => {
//
//   const [state, setState] = useState({
//     filtration: {
//       polarization: {},
//       frameForGlasses: {},
//       brand: {},
//       price: {}
//     }
//   });
//
//   const [filterIsActive, setFilterIsActive] = useState(false);
//   const dispatch = useDispatch();
//
//   const changeToLineHandler = () => dispatch(changeToLine());
//   const changeToGridHandler = () => dispatch(changeToGrid());
//
//   const {
//     isGrid
//   } = useSelector(state => state?.markup);
//
//   const allFilterClickListener = (name, filterProp) => {
//     setState(prevState => {
//       if(prevState.filtration[filterProp].hasOwnProperty(name)) {
//         const res = {...prevState}
//         delete res.filtration[filterProp][name]
//         return res
//       } else {
//         return {
//           filtration: {
//             ...prevState.filtration,
//             [filterProp]: {
//               ...prevState.filtration[filterProp],
//               [name]: !prevState.filtration[filterProp][name]
//             }
//           }
//         }
//       }
//     });
//   };
//
//
//   const filter = (products = [], filters) => {
//     const filterKeys = Object.keys(filters);
//     return products.filter(product => {
//       return filterKeys.every(key => {
//         if (!Object.keys(filters[key]).length) return true;
//         if (Array.isArray(product[key])) {
//           return product[key].some(keyEle => Object.keys(filters[key]).includes(keyEle));
//         }
//         return Object.keys(filters[key]).includes(product[key]);
//       });
//     });
//   };
//
//   useEffect(() => {
//     console.log(state.filtration);
//     console.log(filter(data, state.filtration));
//   }, [state])
//
//   return (
//     <div className="container">
//       <div className={styles.wrapper}>
//         <div className={styles.filter} onClick={() => setFilterIsActive(!filterIsActive)}><FilterImg /></div>
//         <div className={styles.grid}>
//           <span className={isGrid ? null : styles.active} onClick={changeToLineHandler}>
//             <GridLine />
//           </span>
//           <span className={isGrid ? styles.active : null} onClick={changeToGridHandler}>
//             <GridBlocks />
//           </span>
//         </div>
//         <div className={styles.fromTo}>BESTSELLERS</div>
//       </div>
//       <div className={filterIsActive ? styles.filterWrapperVisible : styles.filterWrapperHidden}>
//         <div className={styles.filterWrapper}>
//           <div className={styles.polarization}>
//             <h5>Поляризация</h5>
//             <div className={styles.list}>
//               {config.polarization.map(item => (
//                 <label key={item.id} className={styles.label}>
//                   <input onClick={() => allFilterClickListener(item.value, "polarization")}  type="checkbox" className={styles.input} />
//                   <div className={styles.value}>
//                     {item.value
//                       ? <p>С поляризацией <i className="fas fa-check"></i></p>
//                       : <p>Без поляризации <i className="fas fa-times"></i></p>
//                     }
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className={styles.frameForGlasses}>
//             <h5>Форма оправы</h5>
//             <div className={styles.list}>
//               {config.frameForGlasses.map(item => (
//                 <label key={item.id} className={styles.label}>
//                   <input onClick={() => allFilterClickListener(item.value, "frameForGlasses")}   type="checkbox" className={styles.input} />
//                   <div className={styles.value}>{item.img} {item.value}</div>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className={styles.brand}>
//             <h5>Бренд</h5>
//             <div className={styles.list}>
//               {config.brand.map(item => (
//                 <label key={item.id} className={styles.label}>
//                   <input onClick={() => allFilterClickListener(item.value, "brand")}   type="checkbox" className={styles.input} />
//                   <div className={styles.value}>{item.value}</div>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className={styles.price}>
//             <h5>Цена</h5>
//             <div className={styles.list}>
//               {config.price.map(item => (
//                 <label key={item.id} className={styles.label}>
//                   <input onClick={() =>  {}}  type="checkbox" className={styles.input} />
//                   <div className={styles.value}>₴ {item.value}+</div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Filter;
