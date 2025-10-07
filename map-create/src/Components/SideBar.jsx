

function SideBar() {
  const menuItems = ["Cities", "Favorites", "Theme", "Attractions", "About"];
  const baseStyle = "flex w-[200px] h-[50px] border border-black border-t-0 border-l-0 border-r-0 hover:bg-black hover:text-white hover:scale-100 transition duration-300 ease-in-out p-2 text-lg font-semibold items-center justify-center rounded-";
  return (
    <div className="w-[250px] bg-white border border-black border-t-0 h-screen sticky top-0 flex flex-col items-center justify-start">
            <ul className="flex flex-col justify-center items-center mt-8">
              {menuItems.map((item, index) => (
               <li key={index} className={baseStyle}> {item} </li>
              ))}
            </ul>
    </div>
  );
}

export default SideBar;