import React from "react";

import { useSelector } from "react-redux";

import { connect } from "react-redux";
import OverviewCollection from "../../components/overview-collection/overview-collection.components";

import "./favourites-page.styles.scss";

function FavouritesPage() {
  const favourites = useSelector(
    (state: any) => state.favourites.favouritesList
  );
  return (
    <div className="favourites-page__container">
      <OverviewCollection dataToRender={favourites} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  favourites: state.favourites.favouritesList,
});

export default connect(mapStateToProps)(FavouritesPage);
