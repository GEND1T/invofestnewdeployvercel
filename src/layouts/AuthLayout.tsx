import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="grid grid-cols-2 items-center h-screen">
            {/* kiri */}
            <div className="bg-pink-100 h-180 flex flex-col items-center justify-center">
                
                <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
                alt=""
                className="w-96" 
                />
                
                <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
                alt=""
                className="w-96" 
                />
                
            </div>
            {/* kanan */}
            <div className="p-10">
                <Outlet />
            </div>
        </div>
    )
}