import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Explanation from "./components/Common/Explanation";
import AverageTable from "./components/AverageTable/AverageTable";

const App: React.FC = () => {
    const [showExplanation, setShowExplanation] = useState(false);

    const handleMouseEnter = () => { setShowExplanation(true); };
    const handleMouseLeave = () => { setShowExplanation(false); };
    const toggleClick = () => { setShowExplanation(!showExplanation); };

    return (
        <>
            <Header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} toggleClick={toggleClick} />
            <div className="flex justify-end">
                {showExplanation ? <Explanation /> : null}
            </div>
            <div className="flex flex-col items-center justify-center p-1 px-3">
                <div className="flex flex-col w-11/12">
                    <ProductsFilter />
                    <AverageTable />
                    <div className="flex w-full sm:flex-col">
                        <div className="flex flex-col items-center flex-grow">
                            <SearchBox />
                            <ChickenTable />
                        </div>
                        <div className="flex-shrink-0 mt-20 ml-10 lg:py-10 sm:pt-10 sm:m-0">
                            <ComparisonTable />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
