export const allFilterClickListener = (name, filterProp, setState) => {
  setState(prevState => {
    if (prevState.filtration[filterProp].hasOwnProperty(name)) {
      const res = {...prevState};
      delete res.filtration[filterProp][name];
      return res;
    } else {
      return {
        filtration: {
          ...prevState.filtration,
          [filterProp]: {
            ...prevState.filtration[filterProp],
            [name]: !prevState.filtration[filterProp][name]
          }
        }
      };
    }
  });
};

export  const filter = (products = [], filters) => {
  const filterKeys = Object.keys(filters);
  return products.filter(product => {
    return filterKeys.every(key => {
      if (!Object.keys(filters[key]).length) return true;
      if (Array.isArray(product[key])) {
        return product[key].some(keyEle => Object.keys(filters[key]).includes(keyEle.map(String)));
      }
      return Object.keys(filters[key]).includes(product[key].toString());
    });
  });
};