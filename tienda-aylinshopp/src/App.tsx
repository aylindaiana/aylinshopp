import { ProductCard } from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Mi Tienda AylinShopp
      </h1>
      
      {/* la grilla que organiza los productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;