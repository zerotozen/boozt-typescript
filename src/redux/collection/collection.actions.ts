import { CollectionActionTypes } from "./collection.types";

export const sortProductsByLowerPrice = () => ({
  type: CollectionActionTypes.FILTER_BY_LOWER_PRICE,
});

export const sortProductsByHigherPrice = () => ({
  type: CollectionActionTypes.FILTER_BY_HIGHER_PRICE,
});

export const fetchCollectionsStart = () => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections: any) => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage: any) => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    dispatch(fetchCollectionsStart());
    fetch("product_list.json")
      .then((res) =>
        res.json().then((res) => {
          dispatch(fetchCollectionsSuccess(res));
        })
      )
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
      // .finally(() => dispatch(fetchCollectionsFailure()));
  };
};
