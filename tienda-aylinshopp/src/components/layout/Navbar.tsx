import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header className="w-full">
      <TopBar />
      <MainHeader />
      <NavMenu />
    </header>
  );
};

export default Navbar;