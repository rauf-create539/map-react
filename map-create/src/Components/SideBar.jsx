import { NavLink, useLocation } from "react-router-dom";

function SideBar() {
  const menuItems = [
    { name: "Cities", path: "/"},
    { name: "Favorites", path: "/favorites"},
    { name: "Theme", path: "/theme"},
    { name: "Atrractions", path: "/Attractions"},
    { name: "About", path: "/about"},
  ];

  const baseStyle = "flex w-[200px] h-[50px] border border-black border-t-0 border-l-0 border-r-0 hover:bg-black hover:text-white hover:scale-100 transition duration-300 ease-in-out p-2 text-lg font-semibold items-center justify-center rounded-";
  const activeStyle = "bg-black text-white"
  const location = useLocation();

  return (
    <div className="w-[250px] bg-white border-2 border-black border-t-0 h-screen sticky top-0 flex flex-col items-center justify-start">
            <ul className="flex flex-col justify-center items-center mt-8">
              {menuItems.map((item, index) => (
               <li key={index} className="flex w-full justify-center"> 
                <NavLink
                  to={item.path}
                  className={({isActive}) =>
                    `${baseStyle} 
                    ${isActive || (location.pathname === "/" && item.path ==="/") ? activeStyle : "hover:bg-black hover:text-white"}`
                }
                >
                  {item.name}
                </NavLink> 
               </li>
              ))}
            </ul>
    </div>
  );
}

export default SideBar;