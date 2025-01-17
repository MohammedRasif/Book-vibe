import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Roots = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;