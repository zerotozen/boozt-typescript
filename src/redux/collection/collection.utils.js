export const sortProductsByLowerPrice = (collectionData) => {
  return collectionData.sort(function (a, b) {
    if (Number(a.actual_price) < Number(b.actual_price)) return -1;
    if (Number(a.actual_price) > Number(b.actual_price)) return 1;
    return 0;
  });
};

export const sortProductsByHigherPrice = (collectionData) => {
  return collectionData.sort(function (a, b) {
    if (Number(a.actual_price) > Number(b.actual_price)) return -1;
    if (Number(a.actual_price) < Number(b.actual_price)) return 1;
    return 0;
  });
};
