const NavMenu = () => {
  return (
    <nav className="w-full bg-primarySoft border-t border-primaryLight">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-center gap-12 py-3 font-body text-sm text-darkText font-medium">
          <li className="cursor-pointer hover:text-gold transition">Inicio</li>
          <li className="cursor-pointer hover:text-gold transition">Productos ▾</li>
          <li className="cursor-pointer hover:text-gold transition">Rastrear pedido</li>
          <li className="cursor-pointer hover:text-gold transition">Contacto</li>
          <li className="cursor-pointer hover:text-gold transition">Quiénes Somos</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;