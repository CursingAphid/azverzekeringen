import { useState, useEffect } from 'react'
import azLogo from '../assets/AZ verzekeringen logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const PrivacyVerklaring = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="bg-gray-50 sticky top-0 z-50 relative">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-50 via-gray-300 to-gray-800"></div>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={azLogo} 
                alt="AZ Verzekeringen Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
                HOME
              </a>
              <a href="#" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
                LINKS
              </a>
              <a href="mailto:info@azverzekeringen.nl" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
                CONTACT
              </a>
              <a href="/privacy" className="bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                PRIVACY VERKLARING
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800 hover:text-teal-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-2">
              <a href="/" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                HOME
              </a>
              <a href="#" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                LINKS
              </a>
              <a href="mailto:info@azverzekeringen.nl" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                CONTACT
              </a>
              <a href="/privacy" className="block bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded">
                PRIVACY VERKLARING
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <div className="mb-12 scale-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800">
              Privacy Verklaring
            </h1>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none fade-in">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Persoonsgegevens worden binnen AZ Verzekeringen verwerkt in overeenstemming met de wet bescherming persoonsgegevens en de gedragscode verwerking persoonsgegevens financiële instellingen. In de gedragscode zijn de regels van de wet bescherming persoonsgegevens specifiek uitgewerkt voor banken en verzekeraars.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
              Waarvoor worden uw gegevens gebruikt?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Bij de aanvraag van een verzekering of een financiële dienst vragen wij u om persoonsgegevens. De door u verstrekte gegevens worden gebruikt voor het aangaan en uitvoeren van overeenkomsten, voor het uitvoeren van marketingactiviteiten, voor fraudebestrijding en integriteitsbewaking binnen financiële instellingen, voor statistische analyse en om te kunnen voldoen aan wettelijke verplichtingen. Uiteraard worden gegevens verwerkt in overeenstemming met de wet bescherming persoonsgegevens (Wbp).
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
              Bijzondere persoonsgegevens
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Soms hebben wij vanuit de aard van de dienstverlening bijzondere gegevens van u nodig. Het gaat dan bijvoorbeeld om gegevens betreffende de gezondheid bij de aanvraag van sommige financiële diensten, zoals een levensverzekering. Als wij daarnaast gegevens van een arts nodig hebben, dan zal altijd eerst uw toestemming worden gevraagd. Wij moeten dan aan u aangeven waarom wij deze informatie nodig hebben en welke gegevens het betreft. Een ander voorbeeld betreft strafrechtelijke gegevens. Bij sommige overeenkomsten kan worden gevraagd naar het eventuele strafrechtelijke verleden van een klant. Wij zullen alleen vragen naar strafrechtelijke gegevens over de afgelopen 8 jaar voorafgaand aan de aanvraag van een financiële dienst.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
              Het gebruik van deze website
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Wij hebben passende maatregelen genomen om uw bezoek aan en het gebruik van onze site te beveiligen en misbruik te voorkomen. Alle personen die van de gegevens kennis kunnen nemen, zijn gehouden aan geheimhouding daarvan. Als u onze website bezoekt om informatie te verkrijgen, kunnen bezoekersgegevens door ons verzameld en opgeslagen worden om de gebruikersvriendelijkheid van onze site te bevorderen.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
              Internetsites van derden
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Op de internetsites van ons kunt u hyperlinks naar andere websites van derden aantreffen. Deze pagina is daarop niet van toepassing. AZ Verzekeringen draagt ook geen enkele verantwoordelijkheid van de toegankelijkheid en inhoud van deze websites en de omgang van deze derden met uw persoonsgegevens. Lees daarom, indien aanwezig, het privacy statement van de site die u bezoekt.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyVerklaring
