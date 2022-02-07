const list = [
    { category: 'tv', price: 1400 },
    { category: 'smartphones', price: 590 },
    { category: 'notebooks', price: 1500 },
    { category: 'smartphones', price: 350 },
    { category: 'mobile', price: 350 },
    { category: 'tv', price: 350 }
  ];
   
  let sortingOrder = {
    smartphones: 1,
    mobile: 2,
    notebooks: 3,
    tv: 4
  };
  
  function compare(key, order = 'asc') {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
  
      const first =
        a[key].toLowerCase() in sortingOrder
          ? sortingOrder[a[key]]
          : Number.MAX_SAFE_INTEGER;
      const second =
        b[key].toLowerCase() in sortingOrder
          ? sortingOrder[b[key]]
          : Number.MAX_SAFE_INTEGER;
  
      let result = 0;
      if (first < second) result = -1;
      else if (first > second) result = 1;
      return order === 'desc' ? ~result : result;
    };
  }
  
  let sortedList = list.sort(compare('category'));
  console.log(sortedList);
  