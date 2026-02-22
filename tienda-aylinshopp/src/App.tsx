import Navbar from "./components/layout/Navbar";
import { products } from "./data/products";
import {ProductCard } from "./components/product/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10 text-darkText">
          Mi Tienda AylinShopp
        </h1>
        
        <div className="min-h-screen bg-gray-50"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;