const Portfolio = () => {
  const cards = [
    {
      title: "Van nul naar vol, binnen 3 weken",
      bgClass: "bg-gh-orange",
      borderClass: "border-black border-4",
    },
    {
      title: "Zacht in smaak, sterk in beeld",
      bgClass: "bg-gh-blue",
      borderClass: "border-white border-4",
    },
    {
      title: "Content die écht smaakt (en raakt)",
      bgClass: "bg-gh-green",
      borderClass: "border-white border-4",
    }
  ];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            Content<br/> dat scoort.
          </h2>
          <p className="font-medium text-sm md:text-base leading-snug w-4/5">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <button className="mt-8 flex items-center space-x-2 bg-black text-white hover:bg-neutral-800 transition-colors uppercase tracking-widest text-xs font-bold py-3 px-6 rounded-full w-fit">
            <span>Bekijk al ons werk</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Portfolio Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className={`rounded-3xl ${card.bgClass} text-white shadow-xl aspect-square md:aspect-auto md:h-[400px] flex flex-col justify-end p-6 relative overflow-hidden group ${card.borderClass} transform hover:-translate-y-2 transition-transform duration-500`}>
             <div className="absolute top-0 left-0 w-full h-1/2 bg-black/10">
               <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xs italic font-bold">Image</div>
             </div>
             <div className="z-10 bg-white/20 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/30">
               <h3 className="font-bold leading-tight w-3/4">{card.title}</h3>
               <button className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  &rarr;
               </button>
             </div>
          </div>
        ))}
      </div>

      {/* Brands Section */}
      <div className="mt-32 pb-16">
        <h2 className="text-2xl font-bold tracking-tighter mb-8">
          These brands<br/> got hyped.
        </h2>
        
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-4 items-center justify-between opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for logos (fides, srkh, knltb, the, etc.) */}
           {[1,2,3,4,5].map((item) => (
             <div key={item} className="h-12 md:h-16 w-32 bg-neutral-300 rounded-md animate-pulse flex items-center justify-center font-bold text-xs">
                Brand {item}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
