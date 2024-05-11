import { NavLink, Outlet } from "react-router-dom";
import Card from "./Card";

const Layout = () => {
    return (<>
        <div className='sticky top-0 bg-[#242424] m-2 p-2 max-h-[20vh]'>
            <Card>
                <div className='text-center p-4 flex flex-row justify-between'>
                    <NavLink to={'/portfolio'}>
                        <span className='text-4xl text-white font-bold'>
                            Portfolio
                        </span>
                    </NavLink>
                    <NavLink to={'/'}>
                        <span className="text-5xl text-rose-300 font-extrabold">
                            Margo Gongora
                        </span>
                    </NavLink>
                    <NavLink to={'/qualifications'}>
                        <span className='text-4xl text-white font-bold'>
                            Qualifications
                        </span>
                    </NavLink>
                </div>
            </Card>
        </div>
        <main className='flex flex-col'>
            <Outlet />
        </main>
    </>);
}

export default Layout;