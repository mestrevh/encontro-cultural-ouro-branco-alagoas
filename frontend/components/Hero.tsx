import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-950 text-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase border-l-4 border-yellow-500 pl-4">
            Hip Hop & <span className="text-yellow-500">Free Step</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg">
            A cultura urbana corre nas veias. Domine a pista com a energia do Hip Hop e a precisão do Free Step. Explore a nossa história e venha aprender a arte das ruas.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold py-3 px-8 rounded-sm transition duration-300 transform hover:scale-105">
            Saiba Mais
          </button>
        </div>

        <div className="flex-1 w-full h-64 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center shadow-2xl border border-gray-700">
          <span className="text-gray-500 font-semibold tracking-widest uppercase">Imagem da Cultura Urbana</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
