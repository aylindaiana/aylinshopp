import { Search, User, ShoppingCart, Headphones } from "lucide-react";

const MainHeader = () => {
  return (
    <div className="w-full bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col leading-tight cursor-pointer">
          <span className="font-logo text-3xl text-[#c98ca3] tracking-wide">
            AYLIN SHOPP
          </span>
          <span className="text-xs tracking-[0.4em] text-gold">
            DECO
          </span>
        </div>

        <div className="hidden md:flex items-center w-1/2 border border-primarySoft rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-primary transition">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="w-full px-5 py-2 outline-none text-darkText font-body"
          />
          <button className="px-4 text-[#c98ca3] hover:text-gold transition">
            <Search size={20} />
          </button>
        </div>

        <div className="flex items-center gap-8 text-[#c98ca3] font-body text-sm">

          <div className="hidden md:flex flex-col items-center cursor-pointer hover:text-gold transition">
            <Headphones size={20} />
            <span>Ayuda</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-gold transition">
            <User size={20} />
            <span className="hidden md:block">Mi cuenta</span>
          </div>

          <div className="relative flex flex-col items-center cursor-pointer hover:text-gold transition">
            <ShoppingCart size={20} />
            <span className="hidden md:block">Carrito</span>

            <span className="absolute -top-2 -right-2 bg-gold text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MainHeader;