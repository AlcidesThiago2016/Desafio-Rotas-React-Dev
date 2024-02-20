import { Outlet } from "react-router-dom";
import SubMenu from "../../../Components/SubMenu";
import "./styles.css"

export default function Products(){
    return(
        <main>
            <div className="container mt20">
                <SubMenu />
                <Outlet />
            </div>
        </main>
    );
}