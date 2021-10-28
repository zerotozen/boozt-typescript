import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  sortProductsByHigherPrice,
  sortProductsByLowerPrice,
  fetchCollectionsStartAsync,
} from "../../redux/collection/collection.actions";

import CollectionCard from "../collection-card/collection-card.components";
import { Loader } from "../loader/loader.component";
import Pagination from "../pagination/pagination.component";
import { SearchFilter } from "../search-filter/search-filter.component";

import Select from "react-select";
import { filterOptions } from "../../data/select-filter.options.js";
import { brandOptions } from "../../data/select-brands.options.js";

import "./overview-collection.styles.scss";

function OverviewCollection(props: { dataToRender: string[] }) {
  const [sortedOption, setSortedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const dispatch = useDispatch();
  console.log("DATA TO RENDER", props);
  //total number of products
  let numOfRecords = props.dataToRender?.length;
  let maxProductsPerPage = 20;
  const totalPages = Math.ceil(numOfRecords / maxProductsPerPage);
  const firstPage = 0;
  const lastPage = 97;

  const onPageChanged = (page: any) => {
    console.log("que es page", page);
    if (page !== firstPage && page !== lastPage) setCurrentPage(page);
  };

  const currentData: string[] = props.dataToRender?.slice(
    (currentPage - 1) * maxProductsPerPage,
    (currentPage - 1) * maxProductsPerPage + maxProductsPerPage
  );

  const sortByPrice = (input: { value: string; label: string }) => {
    const selectedOption = input.value;
    setSortedOption(selectedOption);
    sortProducts(selectedOption);
  };

  const sortProducts = (sortOption: string) => {
    if (sortOption === "sortByLowerPrice") {
      dispatch(sortProductsByLowerPrice());
    }
    if (sortOption === "sortByHigherPrice") {
      dispatch(sortProductsByHigherPrice());
    }
    if (sortOption === "") {
      dispatch(fetchCollectionsStartAsync());
    }
  };

  const searchCollectionItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = props.dataToRender.filter((item: any) => {
        console.log("AAAA", item);
        return (
          item.brand_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.product_name.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(currentData);
    }
  };
  const filterByBrandName = (inputBrand: { value: string; label: string }) => {
    console.log("mira ahora aqui", inputBrand);
    const brandToFilter = inputBrand.value;
    setSearchInput(brandToFilter);
    if (brandToFilter !== "") {
      const filteredData = props.dataToRender.filter((item: any) => {
        return item.brand_name === brandToFilter;
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(currentData);
    }
  };

  const clearSearchInput = () => {
    setSearchInput("");
    setFilteredResults([]);
  };

  if (!props.dataToRender) {
    return <Loader />;
  }
  return (
    <div className="overview-collection__container">
      <div className="overview-collection__header-container">
        <div className="overview-collection__header-subcontainer">
          <SearchFilter
            placeholder="Search Collection Items"
            onInputChange={searchCollectionItems}
            searchInput={searchInput}
            clearSearchInput={clearSearchInput}
          />
          <Select
            className="overview-collection__selector"
            onChange={sortByPrice}
            options={filterOptions}
            placeholder={"Sort By Price"}
          />
          <Select
            className="overview-collection__selector"
            onChange={filterByBrandName}
            options={brandOptions}
            placeholder={"Sort By Brand"}
          />
        </div>
        <Pagination
          onPageChanged={onPageChanged}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <div className="overview-collection__body">
        {searchInput.length > 1 && filteredResults.length !== 0 ? (
          filteredResults?.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <CollectionCard item={item} />
              </div>
            );
          })
        ) : filteredResults.length === 0 && searchInput.length >= 1 ? (
          <h1>Item Not Found</h1>
        ) : currentData.length > 0 ? (
          currentData?.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <CollectionCard item={item} />
              </div>
            );
          })
        ) : (
          <h1>There is not Items</h1>
        )}
      </div>
      <Pagination
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default OverviewCollection;
