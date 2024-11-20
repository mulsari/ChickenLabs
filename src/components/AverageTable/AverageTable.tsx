import React from "react";
import overallAveragesData from "../../data/overall_averages.json";
import brandAveragesData from "../../data/brand_averages.json";
import { NutritionData, BrandAverages } from "../../types/AverageData";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { GiChicken } from "react-icons/gi";

const overallAverages: NutritionData = overallAveragesData as NutritionData;
const brandAverages: BrandAverages = brandAveragesData as BrandAverages;

interface TableRowProps {
  brand: string;
  data: NutritionData;
}

const TableRow: React.FC<TableRowProps> = ({ brand, data }) => (
    <tr className={brand === "전체" ? "bg-chickenHover" : "bg-white hover:bg-chickenHover"}>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{brand}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.protein.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.calories.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.fat.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.carbohydrate.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.sugars.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.sodium.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.cholesterol.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.saturated_fat.toFixed(1)}</td>
        <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont whitespace-nowrap">{data.weight.toFixed(1)}</td>
    </tr>
);

const AverageTable: React.FC = () => {
  const selectedBrands = useSelector((state: RootState) => state.chicken.selectedBrands);

  return (
      <div className="container p-4 m-4 mx-auto border-2 rounded-lg shadow-md bg-chickenBackground border-chickenPoint">
          <h2 className="flex mb-4 text-2xl font-bold text-chickenFont">
              <GiChicken className="mx-1 text-3xl text-chickenPoint" />
              평균 영양성분</h2>
          <div className="overflow-x-auto">
              <table className="min-w-full text-center border-collapse">
                  <thead className="bg-chickenMain text-chickenFont">
                      <tr>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">브랜드</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">단백질(g)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">열량(kcal)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">지방(g)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">탄수화물(g)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">당류(g)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">나트륨(mg)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">콜레스테롤(mg)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">포화지방산(g)</th>
                          <th className="px-4 py-2 border-b border-chickenNeutral whitespace-nowrap">중량(g)</th>
                      </tr>
                  </thead>
                  <tbody>
                      <TableRow brand="전체" data={overallAverages} />
                      {selectedBrands.map((brand) => (
                          <TableRow key={brand} brand={brand} data={brandAverages[brand]} />
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default AverageTable;
