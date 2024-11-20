import React from "react";
import { GiChicken } from "react-icons/gi";

const Explanation: React.FC = () => {
    return (
        <div className="absolute z-10 p-1 text-sm rounded-md shadow-xl text-chickenFont bg-chickenPoint right-6 top-20 opacity-95">
            <div className="rounded-md bg-chickenBackground">
                <div className="flex items-center justify-center p-3 text-2xl font-bold border-b-2 border-chickenPoint">
                    <GiChicken className="text-3xl text-chickenPoint" />
                    <p className="px-2">사용 안내</p>
                    <GiChicken className="text-3xl text-chickenPoint" />
                </div>
                <div className="p-3">
                    📌 페이지 번호를 누르며 전체 제품 목록을 확인 할 수
                    있습니다. <br />
                    📌 원하는 브랜드가 있다면 이를 선택해 제품을 볼 수 있습니다.{" "}
                    <br />
                    🔍 검색하고 싶은 제품을 검색하여 찾을 수 있습니다. <br />
                    <br />
                    ✅ 체크박스를 선택해 선택 제품의 상세 영양성분을 포함한
                    정보가 나타나며, <br />
                    &emsp;여러 개 선택이 가능하여 원하는 제품간의 비교가
                    가능합니다. <br />
                    &emsp;➔❗️체크박스는 최대 20개까지만 선택 가능합니다. <br />
                    &emsp;➔ 가로 스크롤로 움직이며 정보를 확인할 수 있습니다.{" "}
                    <br />
                    &emsp;➔ 비교군 중 최솟값(단백질만 최곳값)이 표시되어
                    비교하기에 간편합니다. <br />
                    <br />✅ 모든 영양성분은 100g 당 함량으로 작성되었습니다.
                </div>
            </div>
            <div className="absolute w-2 h-2 border-b-8 border-l-4 border-r-4 bottom-full right-4 border-l-transparent border-r-transparent border-chickenPoint" />
        </div>
    );
};

export default Explanation;
