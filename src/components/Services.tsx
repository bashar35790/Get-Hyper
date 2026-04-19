const Services = () => {
  const servicesData = [
    {
      num: "01",
      title: "Social strategy",
      desc1: "Slimme strategie. Sterke start.",
      desc2: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      btnText: "Meer over social strategie",
      bgColor: "bg-white",
      textColor: "text-black",
      outline: "border-gray-200 border",
    },
    {
      num: "02",
      title: "Content creation",
      desc1: "Content die opvalt en raakt.",
      desc2: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
      btnText: "Meer over content creatie",
      bgColor: "bg-[#FCAEFC]", // pink
      textColor: "text-black",
      outline: "border-none",
    },
    {
      num: "03",
      title: "Activation",
      desc1: "Zichtbaar waar en wanneer het telt.",
      desc2: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
      btnText: "Meer over activatie",
      bgColor: "bg-[#25C989]", // green
      textColor: "text-black",
      outline: "border-none",
    },
    {
      num: "04",
      title: "Data",
      desc1: "Inzichten die impact maken.",
      desc2: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
      btnText: "Meer over data",
      bgColor: "bg-[#0A7DFF]", // blue
      textColor: "text-white",
      outline: "border-none",
    }
  ];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto py-16 space-y-8 md:space-y-16">
      {servicesData.map((service, idx) => (
        <div key={idx} className={`rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row justify-between relative overflow-hidden transition-all hover:scale-[1.01] duration-500 ${service.bgColor} ${service.textColor} ${service.outline}`}>
          
          <div className="flex flex-col space-y-6 md:w-1/2 z-10">
            <div className="font-bold tracking-widest uppercase text-xs border border-current rounded-full px-4 py-1 w-fit opacity-80 mb-2">
              Service {service.num}
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              {service.title}
            </h2>
            
            <div className="mt-8 md:mt-16 sm:w-3/4 flex flex-col space-y-2">
              <h3 className="font-bold text-lg md:text-xl">
                 {service.desc1}
              </h3>
              <p className="font-medium opacity-90 leading-snug">
                {service.desc2}
              </p>
            </div>
            
            <button className={`mt-8 flex items-center space-x-2 text-sm font-bold uppercase tracking-wider bg-white rounded-full py-3 px-6 w-fit hover:opacity-80 transition-opacity ${service.textColor === 'text-white' ? 'text-black' : 'text-gh-orange hover:bg-neutral-100'} shadow-sm`}>
               <span>{service.btnText}</span>
               <span className="text-lg">→</span>
            </button>
          </div>
          
          <div className="absolute top-8 right-8 font-black text-6xl text-black/10 z-0">
             {service.num}
          </div>

          <div className="mt-12 md:mt-0 md:w-1/3 flex justify-end z-10">
            {/* Image Placeholder representing the service image */}
            <div className={`w-full h-64 md:h-full rounded-2xl min-h-[300px] border-4 ${service.textColor === 'text-white' ? 'border-white/20' : 'border-gh-orange/50'} bg-neutral-200 overflow-hidden relative shadow-lg transform rotate-3 hover:rotate-1 transition-transform duration-300`}>
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-bold italic text-sm p-4 text-center">
                 Image Placeholder - {service.title}
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </section>
  );
};

export default Services;
