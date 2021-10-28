import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/collection/collection.actions";

import OverviewCollection from "../../components/overview-collection/overview-collection.components";

import "./homepage.styles.scss";

function HomePage() {
  const collections = useSelector(
    (state: any) => state.collection.collectionData
  );

  const dispatch = useDispatch();

  //This setTimeout simulate a API delay of 1s
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCollectionsStartAsync());
    }, 1000);
  }, []);

  return (
    <div className="home-page__container">
      <OverviewCollection dataToRender={collections} />
    </div>
  );
}

export default HomePage;
