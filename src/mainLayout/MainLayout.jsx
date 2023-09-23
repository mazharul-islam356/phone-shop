import { Outlet } from "react-router-dom";
import LinkRoute from "../components/LinkRoute/LinkRoute";
import Logo from "../components/Pages/Logo/Logo";


const MainLayout = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-2 px-10 shadow-md p-4">
            <Logo></Logo>
            <LinkRoute></LinkRoute> 
                </div>         
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;