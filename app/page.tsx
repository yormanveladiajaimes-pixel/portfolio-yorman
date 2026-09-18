'use client'

import { useState } from 'react'

const accentRed = '#E8593C'
const darkBg = '#0A0E27'

function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/573118909132?text=Hola%2C%20listo%20para%20edici%C3%B3n%20inteligente'
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-40 group">
      <div className="animate-pulse-subtle">
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200" style={{ backgroundColor: accentRed }}>
          <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.149-.792.462-.272.314-.92.967-.92 2.354s.211 2.727.294 2.926c.083.198.398.896.767 1.305.369.409.804.685 1.133.8.329.115.647.059.879-.074.232-.133.487-.56.623-1.095.135-.535.267-1.105.3-1.308.032-.203.17-.315.359-.315.19 0 .502.073.867.416.365.343.857 1.07 1.105 1.577.248.506.457.856.567.911.11.054.25.05.429-.018z" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function ProcessStep({ number, title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: `${number * 100}ms` }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-white" style={{ backgroundColor: accentRed }}>
        {icon}
      </div>
      <h3 className="font-display text-2xl font-semibold text-white mb-3">
        {number}. {title}
      </h3>
      <p className="text-white/80 max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const samples = [
    { id: 1, title: 'Reel de Fitness', url: '/videos/sample-1.mp4', thumb: '/images/sample-1-thumb.jpg' },
    { id: 2, title: 'Short de Coach', url: '/videos/sample-2.mp4', thumb: '/images/sample-2-thumb.jpg' },
    { id: 3, title: 'Podcast Clip', url: '/videos/sample-3.mp4', thumb: '/images/sample-3-thumb.jpg' },
  ]

  const pillars = [
    { title: 'Inteligencia automática', desc: 'No solo edito rápido. Edito inteligente. Cada decisión está optimizada.' },
    { title: 'Tu tiempo vale más', desc: 'Mientras IA acelera, tú estrategia. Yo me encargo del resto.' },
    { title: 'Resultados que hablan', desc: 'Videos que convierten. Métricas que demuestran. Clientes que vuelven.' },
  ]

  return (
    <>
      <WhatsAppButton />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16" style={{ backgroundColor: darkBg }}>
        <div className="max-w-4xl text-center animate-fade-in">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Asistente IA +<br />Editor de Video
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Pienso el contenido. La IA lo acelera. Tú ganas.
          </p>
          <a href="#como-funciona" className="inline-block px-8 py-4 text-lg font-semibold text-white rounded transition-all duration-200 hover:scale-105" style={{ backgroundColor: accentRed }}>
            Ver cómo funciona ↓
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-20" style={{ color: darkBg }}>
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProcessStep number={1} title="Análisis IA" icon="🧠" description="Entiendo tu contenido, audiencia y objetivo. Sin genéricos." />
            <ProcessStep number={2} title="Edición inteligente" icon="⚡" description="Automatizo lo repetitivo, perfecciono lo creativo. Tú decides." />
            <ProcessStep number={3} title="Resultado" icon="🎯" description="Video optimizado, listo para convertir. Métricas incluidas." />
          </div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: '#F5F3F0' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16" style={{ color: darkBg }}>
            Últimos trabajos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {samples.map((video, idx) => (
              <div key={video.id} className="group cursor-pointer animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }} onClick={() => setPlayingVideo(video.id)}>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                  {playingVideo === video.id ? (
                    <video autoPlay controls className="w-full h-full object-cover" onEnded={() => setPlayingVideo(null)}>
                      <source src={video.url} type="video/mp4" />
                    </video>
                  ) : (
                    <>
                      <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <svg className="w-16 h-16 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold" style={{ color: darkBg }}>{video.title}</h3>
                <p className="text-sm text-gray-600 mt-1">48h → 6h con IA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ YO */}
      <section className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16" style={{ color: darkBg }}>
            Por qué yo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-lg border-l-4 animate-slide-up" style={{ borderColor: accentRed, animationDelay: `${idx * 100}ms` }}>
                <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: darkBg }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: darkBg }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
            ¿Listo para edición inteligente?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Escríbeme por WhatsApp. Sin compromisos. Solo una conversación.
          </p>
          <a href="https://wa.me/573118909132?text=Hola%2C%20listo%20para%20edici%C3%B3n%20inteligente" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 text-lg font-semibold text-white rounded transition-all duration-200 hover:scale-105" style={{ backgroundColor: accentRed }}>
            Contactar ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8 text-center text-white/60" style={{ backgroundColor: '#050A15' }}>
        <p className="font-body text-sm">© 2026 Yorman. Asistente IA + Editor de Video.</p>
      </footer>
    </>
  )
}
