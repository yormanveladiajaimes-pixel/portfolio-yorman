'use client'

// Portfolio - Rebuild fix
import { useEffect, useState } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const videoSamples = [
    {
      id: 1,
      title: 'Sample 1',
      videoUrl: '/videos/sample-1.mp4',
      thumbnail: '/images/sample-1-thumb.jpg',
    },
    {
      id: 2,
      title: 'Sample 2',
      videoUrl: '/videos/sample-2.mp4',
      thumbnail: '/images/sample-2-thumb.jpg',
    },
    {
      id: 3,
      title: 'Sample 3',
      videoUrl: '/videos/sample-3.mp4',
      thumbnail: '/images/sample-3-thumb.jpg',
    },
    {
      id: 4,
      title: 'Sample 4',
      videoUrl: '/videos/sample-4.mp4',
      thumbnail: '/images/sample-4-thumb.jpg',
    },
  ]

  const benefits = [
    {
      title: 'Edición Experta',
      description: 'Cortes dinámicos, transiciones suaves y timing perfecto que engancha desde el primer segundo.',
    },
    {
      title: 'IA + Creatividad',
      description: 'Automatizo lo tedioso para que nos enfoquemos en lo que importa: impacto y conversión.',
    },
    {
      title: 'Entrega Rápida',
      description: 'Desde tu idea al video listo: 24-48 horas sin compromiso en calidad.',
    },
  ]

  return (
    <>
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-sm md:px-lg bg-light"
      >
        <div className={`text-center max-w-3xl ${mounted ? 'animate-fade-in' : ''}`}>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-dark mb-sm md:mb-md leading-tight">
            Videos que Venden
          </h1>
          <p className="font-body text-xl md:text-2xl text-dark/70 mb-lg md:mb-xl max-w-2xl mx-auto leading-relaxed">
            Especialista en edición de video y IA. Transformo ideas en reels y shorts que convierten seguidores en clientes.
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-primary-red text-white px-lg py-sm md:py-md text-lg font-semibold rounded transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Ver Trabajos
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-xl md:py-2xl bg-white">
        <div className="max-w-7xl mx-auto px-sm md:px-lg">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark text-center mb-xl md:mb-2xl">
            Últimos Trabajos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl">
            {videoSamples.map((video, idx) => (
              <div
                key={video.id}
                className={`group relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  mounted ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setPlayingVideo(video.id)}
              >
                {playingVideo === video.id ? (
                  <video
                    key={`playing-${video.id}`}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Tu navegador no soporta video HTML5
                  </video>
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-md">
                      <h3 className="font-display text-xl font-semibold text-white">{video.title}</h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Yo Section */}
      <section id="benefits" className="py-xl md:py-2xl bg-light">
        <div className="max-w-6xl mx-auto px-sm md:px-lg">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark text-center mb-xl md:mb-2xl">
            Por Qué Yo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg md:gap-xl">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`p-lg md:p-xl bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-2 border-primary-red ${
                  mounted ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary-red/10 rounded-lg mb-md flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-red rounded-full" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-sm">
                  {benefit.title}
                </h3>
                <p className="font-body text-dark/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-xl md:py-2xl bg-dark text-white">
        <div className="max-w-4xl mx-auto px-sm md:px-lg text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-md md:mb-lg">
            ¿Tu próximo video está listo?
          </h2>
          <p className="font-body text-xl text-white/80 mb-xl md:mb-2xl">
            Escríbeme por WhatsApp y cuéntame tu idea. Sin compromisos, solo una primera conversación.
          </p>
          <a
            href="https://wa.me/573118909132?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20de%20edici%C3%B3n%20de%20video"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-red text-white px-xl py-md text-lg font-semibold rounded transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Contactar Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white/60 py-lg text-center font-body text-sm">
        <p>© 2026 Yorman. Especialista en Edición de Video + IA.</p>
      </footer>
    </>
  )
}
