import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <nav className="p-6 flex justify-between items-center bg-gray-900 border-b border-gray-800">
        <div className="text-yellow-500 font-bold text-xl uppercase tracking-widest">
          EC Ouro Branco
        </div>
        <ul className="flex gap-6 text-gray-300">
          <li><a href="#" className="hover:text-yellow-500">Início</a></li>
          <li><a href="#eventos" className="hover:text-yellow-500">Eventos</a></li>
        </ul>
      </nav>

      <Hero />

      <section id="eventos" className="py-16 px-6 md:px-24 bg-gray-900 text-gray-100">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase border-b-2 border-yellow-500 inline-block">
          Memórias de Ouro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="h-40 bg-gray-700 mb-4 rounded"></div>
              <h3 className="text-xl font-bold mb-2">Edição {2022 + item}</h3>
              <p className="text-gray-400">Um resumo incrível do que aconteceu nesta edição do Encontro Cultural.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 bg-gray-950">
        &copy; {new Date().getFullYear()} Encontro Cultural Ouro Branco - Alagoas
      </footer>
    </main>
  );
}
