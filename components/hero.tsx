import VideoThumb from '@/public/images/astros.webp'
import Image from 'next/image'

import workflow from '@/public/images/workflow.png'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Densidad en imagenes <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">astronomicas</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Clasificador de imágenes astronomicas. El fin de este software es mediante una base de datos astronomica, poder clasificar los elementos encontrados dentro de esta. Para ello se siguio el siguiente WorkFlow.</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Motivación</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Actualmente las formas de obtención de imagenes y data astronomica van en aumento
            por lo que muchas veces las formas convencionales de analisis van siendo cada vez mas obsoletas, costando mayor computo y tiempo.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Solución planteada</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Para poder llevar a cabo este problema, se decidio crear un software el cual
            pudiese data astronomica, analizarla y poder descubrir que existe dentro de dicha data, facilitando el estudio y analisis del universo. Pero
            ¿Como se planea llevar a cabo esta solución?
            </p>
          </div>
          {/* Hero image */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">WORKFLOW</h1>
            <Image  src={workflow} width={600} height={600} alt='workflow' style={{marginLeft:'10%'}} />
          </div>
          

        </div>

      </div>
    </section>
  )
}