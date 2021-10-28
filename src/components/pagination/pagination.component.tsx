import React from "react";
import { connect } from "react-redux";

import Select from "react-select";

import "./pagination.styles.scss";

function Pagination(props: {
  onPageChanged: any;
  currentPage: any;
  totalPages: any;
}) {
  // const arrayOfNumbers = [...Array(totalPages)?.keys()];

  // const options = (arrayOfNumbers: number[]) => {
  //   return arrayOfNumbers
  //     ?.filter((index: any) => index > 0)
  //     .map((item: any, idx: any) => {
  //       return {
  //         value: `${item}`,
  //         label: `${item}`,
  //       };
  //     });
  // };

  return (
    <div className="pagination__container">
      {/* <button
        className="pagination__button"
        onClick={() => props.onPageChanged(Number(props.currentPage) - 1)}
      >
        PREVIOUS
      </button>
      <Select
        className="pagination__selector"
        onChange={(input: any) => {
          const selectedOption = input.value;
          props.onPageChanged(selectedOption);
        }}
        options={options(arrayOfNumbers)}
        placeholder={"Select page..."}
      />
      <button
        className="pagination__button"
        onClick={() => props.onPageChanged(Number(props.currentPage) + 1)}
      >
        NEXT
      </button> */}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  collection: state.collection.collectionData,
});

export default connect(mapStateToProps)(Pagination);
function totalPages(totalPages: any) {
  throw new Error("Function not implemented.");
}
