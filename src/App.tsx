import { useState } from 'react';
import { Menu, X, MessageCircle, Heart, Leaf, Award } from 'lucide-react';

function App() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-sm shadow-sm z-20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/Lo Saludable (4).png" 
                alt="Lo Saludable Logo" 
                className="h-24 w-24 object-contain"
              />
              <span className="text-2xl font-light text-white tracking-wide">LoSaludable</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-[#81c784] transition-colors duration-300 font-light"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-white hover:text-[#81c784] transition-colors duration-300 font-light"
              >
                Sobre nosotros
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-white hover:text-[#81c784] transition-colors duration-300 font-light"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('pedidos')}
                className="text-white hover:text-[#81c784] transition-colors duration-300 font-light"
              >
              Pedidos
              </button>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-[#81c784] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#57745f]/95 backdrop-blur-sm shadow-lg">
              <div className="flex flex-col space-y-4 px-6 py-6">
                <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[#81c784] transition-colors text-left">Inicio</button>
                <button onClick={() => scrollToSection('sobre-mi')} className="text-white hover:text-[#81c784] transition-colors text-left">Sobre nosotros</button>
                <button onClick={() => scrollToSection('productos')} className="text-white hover:text-[#81c784] transition-colors text-left">Productos</button>
                <button onClick={() => scrollToSection('pedidos')} className="text-white hover:text-[#81c784] transition-colors text-left">Pedidos</button>
              
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Inicio */}
      <section id="inicio" className="pt-24 pb-20 min-h-screen flex items-center bg-gradient-to-br from-[#57745f] to-[#4a6352]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/Lo Saludable (4).png" 
                alt="Lo Saludable Logo" 
                className="h-36 w-36 sm:h-48 sm:w-48 lg:h-60 lg:w-60 mx-auto mb-6 object-contain mt-20"
              />
              <h1 className="text-5xl md:text-6xl Ojuju text-white mb-6 tracking-wide">
                LoSaludable
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-[#81c784] text-xl font-light mb-12">
                <span>Sin gluten</span>
                <span className="hidden md:block">·</span>
                <span>Sin azúcar</span>
                <span className="hidden md:block">·</span>
                <span>100% natural</span>
              </div>
            </div>
            
            <p className="text-white text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Descubre el sabor auténtico de productos artesanales hechos con amor y los mejores ingredientes naturales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('productos')}
                className="bg-[#81c784] text-white px-8 py-3 rounded-full hover:bg-[#66bb6a] transition-all duration-300 font-light text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Ver Productos
              </button>
              <button 
                onClick={() => scrollToSection('pedidos')}
                className="bg-transparent border-2 border-[#81c784] text-[#81c784] px-8 py-3 rounded-full hover:bg-[#81c784] hover:text-white transition-all duration-300 font-light text-lg"
              >
                Hacer Pedido
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-20 bg-green">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#57745f] mb-6">Sobre nosotros</h2>
              <div className="w-24 h-1 bg-[#81c784] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                
                <p className="text-[#57745f] leading-relaxed font-light text-lg">
                  Somos Soledad y Martina, tía y sobrina, unidas por la pasión de crear alimentos saludables y deliciosos.
                </p>
                <p className="text-[#57745f] leading-relaxed font-light text-lg">
                  Nuestra pasión por la cocina saludable nació de una necesidad personal. Después de años luchando con problemas digestivos y buscando alternativas sin gluten que realmente supieran bien, decidimos crear nuestras propias recetas.
                </p>
                <p className="text-[#57745f] leading-relaxed font-light text-lg">
                  Cada producto de LoSaludable está hecho con ingredientes cuidadosamente seleccionados, sin aditivos artificiales, sin gluten y sin azúcar refinada. Creemos firmemente que comer saludable no significa renunciar al sabor.
                </p>
                <p className="text-[#57745f] leading-relaxed font-light text-lg">
                  Desde nuestra cocina hasta tu mesa, cada receta está preparada con amor y dedicación, pensando en tu bienestar y el de tu familia.
                </p>
                
                <div className="flex items-center space-x-6 pt-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="text-[#81c784]" size={24} />
                    <span className="text-[#57745f] font-light">Hecho con amor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Leaf className="text-[#81c784]" size={24} />
                    <span className="text-[#57745f] font-light">100% Natural</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 bg-[#fff8e7] rounded-2xl flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                    alt="Marti y Soli cocinando"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-20 bg-[#57745f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Nuestros Productos</h2>
            <div className="w-24 h-1 bg-[#81c784] mx-auto rounded-full mb-6"></div>
            <p className="text-[white] text-lg font-light max-w-2xl mx-auto">
              Todos nuestros productos son aptos para celíacos, libres de azúcar refinada y elaborados con ingredientes 100% naturales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pepas dulces */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#81c784] to-[#a1887f] flex items-center justify-center">
                <img 
                  src= "pepas.png" 
                  alt="Pepas dulces sin azúcar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="text-[#81c784]" size={24} />
                  <h3 className="text-2xl font-light text-[#57745f]">Pepas Dulces</h3>
                </div>
                <p className="text-[#57745f] font-light leading-relaxed mb-6">
                  Nuestras pepas dulces están endulzadas naturalmente con eritritol. Perfectas para acompañar tu té o café.
                </p>
                <ul className="space-y-2 text-[#81c784] font-light">
                  <li>✓ Dulzura natural</li>
              
                  <li>✓ Snack saludable</li>
                  <li>✓ Artesanales</li>
                  
                </ul>
              </div>
            </div>

            {/* Budín de Naranja */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="h-64 bg-gradient-to-br from-[#ffe082] to-[#81c784] flex items-center justify-center">
      <img 
        src="budin.png" 
        alt="Budín de Naranja saludable"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-2 mb-4">
        <Award className="text-[#81c784]" size={24} />
        <h3 className="text-2xl font-light text-[#57745f]">Budín de Naranja</h3>
      </div>
      <p className="text-[#57745f] font-light leading-relaxed mb-6">
        Budín húmedo y esponjoso, endulzado naturalmente y sin gluten.
      </p>
      <ul className="space-y-2 text-[#81c784] font-light">
        
        <li>✓ Liviano</li>
        <li>✓ Fruta natural</li>
        
        
      </ul>
    </div>
  </div>
  </div>



            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {/* Pan Bagel */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="h-64 bg-gradient-to-br from-[#81c784] to-[#a1887f] flex items-center justify-center">
      <img 
        src="panbagel.png" 
        alt="Pan sin gluten estilo Bagel"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-2 mb-4">
        <Award className="text-[#81c784]" size={24} />
        <h3 className="text-2xl font-light text-[#57745f]">Pan Bagel</h3>
      </div>
      <p className="text-[#57745f] font-light leading-relaxed mb-6">
        Pan estilo Bagel que cuidan tu cuerpo y conquistan tu paladar. Ideales para cualquier momento del día.
      </p>
      <ul className="space-y-2 text-[#81c784] font-light">
        <li>✓ Perfectos para sándwiches rápidos</li>
        <li>✓ Se pueden freezar y disfrutar cuando quieras</li>
        <li>✓ Nutritivos y naturalmente libres de gluten</li>
      </ul>
    </div>
  </div>

  {/* Pan de queso */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="h-64 bg-gradient-to-br from-[#a1887f] to-[#81c784] flex items-center justify-center">
      <img 
        src="pan.png" 
        alt="Pan de queso"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-2 mb-4">
        <Leaf className="text-[#81c784]" size={24} />
        <h3 className="text-2xl font-light text-[#57745f]">Pan de queso keto</h3>
      </div>
      <p className="text-[#57745f] font-light leading-relaxed mb-6">
        Panes de queso sin gluten. Ideales para aperitivos saludables o acompañar tus comidas favoritas.
      </p>
      <ul className="space-y-2 text-[#81c784] font-light">
        <li>✓ Proteina natural</li>
        <li>✓ Sabor intenso</li>
        <li>✓ Energia nutritiva</li>
      </ul>
    </div>
  </div>
  </div>


          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('pedidos')}
              className="bg-[#81c784] text-white px-10 py-4 rounded-full hover:bg-[#66bb6a] transition-all duration-300 font-light text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              ¡Quiero probarlos!
            </button>
          </div>
        </div>
      </section>

      {/* Pedidos Section */}
      <section id="pedidos" className="py-20 bg-green">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#57745f] mb-6">Cómo hacer tu pedido</h2>
            <div className="w-24 h-1 bg-[#81c784] mx-auto rounded-full mb-6"></div>
            <p className="text-[#57745f] text-lg font-light max-w-2xl mx-auto">
              Hacer tu pedido es muy fácil. Puedes contactarnos por WhatsApp.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              {/* WhatsApp */}
              <div className="w-20 h-20 bg-[#81c784] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-light text-[#57745f] mb-4">Por WhatsApp</h3>
              <p className="text-[#57745f] font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                Envíanos un mensaje directo por WhatsApp. Te responderemos rápidamente para coordinar tu pedido personalizado.
              </p>
              <a 
                href="https://wa.me/5492266515776?text=Hola! Me interesa hacer un pedido de productos LoSaludable"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#128C7E] transition-all duration-300 font-light text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Enviar WhatsApp
              </a>
              </div>

            <div className="mt-16 bg-[#57745f] rounded-2xl p-8 text-center">
              <h4 className="text-xl font-light text-[white] mb-4">Información importante sobre pedidos</h4>
              <div className="grid md:grid-cols-2 gap-6 text-[white] font-light">
                <div>
                  <strong className="text-[#81c784]">Tiempo de preparación:</strong><br />
                  2-3 días hábiles
                </div>
                <div>
                  

                  <strong className="text-[#81c784]">Entrega:</strong>
<ul className="text-[white] font-light list-none mt-2">
  <li>Envío a domicilio con cargo.</li>
  <li>Retiro en punto de venta.</li>
</ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#57745f] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/Lo Saludable (4).png" 
              alt="Lo Saludable Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-light">LoSaludable</span>
          </div>
          <p className="font-light">LoSaludable © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;