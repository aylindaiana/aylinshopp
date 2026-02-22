const TopBar = () => {
  return (
    <div className="w-full bg-primary text-white text-xs">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-gold transition">Instagram</span>
          <span className="cursor-pointer hover:text-gold transition">Facebook</span>
          <span className="cursor-pointer hover:text-gold transition">TikTok</span>
        </div>

        <div className="tracking-wide font-medium">
          3 Y 6 CUOTAS SIN INTERÉS
        </div>

        <div />
      </div>
    </div>
  );
};

export default TopBar;