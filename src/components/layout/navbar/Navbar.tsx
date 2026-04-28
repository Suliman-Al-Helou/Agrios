import TopBar from "./TopBar";
import MainNav from "./MainNav";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      
        <TopBar />
        <MainNav />
     
    </header>
  );
}
