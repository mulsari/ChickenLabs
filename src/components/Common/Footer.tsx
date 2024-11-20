import { FaGithubSquare } from "react-icons/fa"
import { PiChartPieSliceDuotone } from "react-icons/pi";

const Footer = () => {
    const newPageGithub = () => {
        window.open("https://github.com/chchaeun/fit-chicken-fats");
    }
    
    return (
        <div className="flex justify-between mt-10 border-t-2 border-t-chickenPoint">
            <FaGithubSquare
                className="m-3 text-4xl rounded text-chickenMain hover:text-white hover:bg-chickenPoint"
                onClick={newPageGithub}
            />
            <div className="flex items-center text-chickenFont">
                <div className="py-10 text-xs text-right ">
                    ⓒ 2024. Team-ChickenLabs. All rights reserved. <br />
                    (출처: 식품의약품안전처 식품영양성분 데이터베이스)
                </div>
                <PiChartPieSliceDuotone className="mr-6 text-2xl" />
            </div>
        </div>
    );
}

export default Footer