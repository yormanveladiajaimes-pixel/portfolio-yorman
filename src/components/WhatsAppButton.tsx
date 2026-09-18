'use client'

export default function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/573118909132?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20de%20edici%C3%B3n%20de%20video'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="animate-pulse-subtle">
        <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <svg
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.149-.792.462-.272.314-.92.967-.92 2.354s.211 2.727.294 2.926c.083.198.398.896.767 1.305.369.409.804.685 1.133.8.329.115.647.059.879-.074.232-.133.487-.56.623-1.095.135-.535.267-1.105.3-1.308.032-.203.17-.315.359-.315.19 0 .502.073.867.416.365.343.857 1.07 1.105 1.577.248.506.457.856.567.911.11.054.25.05.429-.018z" />
          </svg>
        </div>
      </div>
      <span className="hidden group-hover:flex absolute right-full mr-4 bg-dark text-light px-3 py-2 rounded text-sm whitespace-nowrap">
        Contactar por WhatsApp
      </span>
    </a>
  )
}
