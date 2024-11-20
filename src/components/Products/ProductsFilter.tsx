import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFilteredResults, setSelectedBrands } from "../../store/slices/chickenSlice";
import { ChickenData } from "../../types/ChickenData";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";

const ProductsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.chicken.data);
  const selectedBrands = useSelector((state: RootState) => state.chicken.selectedBrands);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const searchResults = useSelector(
    (state: RootState) => state.chicken.searchResults
  );

  // 브랜드별 필터링
  useEffect(() => {
    let filteredData = selectedBrands.length
      ? products.filter((product: ChickenData) =>
          selectedBrands.includes(product.brand)
        )
      : products;

    // 검색 결과와 필터링 결과 교집합 
    if (searchResults.length > 0) {
      filteredData = filteredData.filter((product: ChickenData) =>
        searchResults.some((searchItem) => searchItem.id === product.id)
      );
    }

    dispatch(setFilteredResults(filteredData));
  }, [selectedBrands, products, searchResults, dispatch]);

  // 브랜드 별 체크박스 변경 핸들링
  const handleCheckboxChange = (brand: string) => {
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    
    dispatch(setSelectedBrands(newSelectedBrands));
  };

  // 제품 브랜드 가져오기
  const brands = Array.from(
    new Set(
      products
        .map((product) => product.brand)
        .filter((brand): brand is string => brand !== null) // null 제외
    )
  );

  return (
    <div className="p-5">
      <div className="flex items-start mb-4">
        <div
          className="flex items-center flex-shrink-0 p-2 mr-2 border-2 rounded bg-chickenBackground border-chickenPoint"
          style={{ height: '3rem' }}
        >
          <h2 className="mr-2 whitespace-nowrap text-chickenFont">브랜드</h2>
          <button
            className="p-2 rounded bg-chickenPoint"
            onClick={() => setShowAllBrands(!showAllBrands)}
          >
            {showAllBrands ? <FaMinus size={12} color="#FFFEC9"/> : <FaPlus size={12} color="#FFFEC9"/>}
          </button>
        </div>
        <div
          className={`flex flex-wrap items-center gap-2 flex-grow p-3 rounded overflow-hidden transition-all duration-300 bg-chickenBackground border-chickenPoint border-2 ${
            showAllBrands ? "h-auto" : "h-12"
          }`}
        >
          {brands.map((brand) => (
            <label key={brand} className="inline-flex items-center mr-4 text-chickenFont">
              <input
                className="hidden peer"
                type="checkbox"
                value={brand}
                onChange={() => handleCheckboxChange(brand)}
                checked={selectedBrands.includes(brand)}
              />
              <div className="flex items-center justify-center w-4 h-4 mr-2 border-2 rounded cursor-pointer peer-checked:bg-chickenPoint border-chickenPoint">
                {selectedBrands.includes(brand) && <FaCheck className="text-white" size={12} />}
              </div>
              {brand || "기타"}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;