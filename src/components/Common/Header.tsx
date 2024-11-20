import { useEffect, useState } from "react";
import ChickenLabsLogo from "../../assets/imges/ChickenLabsLogo.png"
import { GoQuestion } from "react-icons/go";

interface HeaderProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    toggleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMouseEnter, onMouseLeave, toggleClick }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <div className="w-full mb-6 border-b-2 border-b-chickenPoint">
            <div className="flex items-center justify-between px-4 text-3xl text-chickenMain">
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <a href="/">
                            <img src={ChickenLabsLogo} alt="logo" className="w-44" />
                        </a>
                    </div>
                </div>
                <GoQuestion
                    className="mr-3 text-4xl rounded-full cursor-pointer text-chickenMain hover:text-white hover:bg-chickenPoint"
                    { ...(isLargeScreen ? {onMouseEnter: onMouseEnter , onMouseLeave: onMouseLeave } : {onClick: toggleClick })}
                />
            </div>
        </div>
    );
};

export default Header