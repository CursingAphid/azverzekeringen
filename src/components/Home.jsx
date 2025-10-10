import { useState, useEffect } from 'react'
import azLogo from '../assets/AZ verzekeringen logo.png'
import officeImage from '../assets/AZverzekeringen_kantoor.jpg'
import { FaCheckCircle, FaLightbulb, FaHandshake, FaBars, FaTimes } from 'react-icons/fa'
import Footer from './Footer'

const Home = () => {
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
              <a href="/" className="bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                HOME
              </a>
              <a href="/links" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
                LINKS
              </a>
              <a href="/contact" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
                CONTACT
              </a>
              <a href="/privacy" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
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
              <a href="/" className="block bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded">
                HOME
              </a>
              <a href="/links" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                LINKS
              </a>
              <a href="/contact" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                CONTACT
              </a>
              <a href="/privacy" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                PRIVACY VERKLARING
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="mb-12 scale-in">
            <img 
              src={azLogo} 
              alt="AZ Verzekeringen Logo" 
              className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto mx-auto object-contain"
            />
          </div>
          
          {/* Tagline */}
          <div className="text-3xl md:text-4xl az-tagline text-gray-800 fade-in">
            Advies op maat van A tot Z
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white grid lg:grid-cols-2 items-center pb-8 lg:pb-0">
        {/* Left side - Text content */}
        <div className="px-6 lg:px-12 max-w-3xl mx-auto lg:mx-0 slide-in-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 pt-8 lg:pt-0">
            Welkom op de site van AZ Verzekeringen!
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Graag zijn we u van dienst op het gebied van zowel particuliere als zakelijke schade- en levensverzekeringen. Het gevoel van ouderwetse service in een modern jasje.
            </p>
            <p>
              Maak vrijblijvend een afspraak om uw verzekeringspakket eens onder de loep te nemen. Ook voor starters, zowel zakelijk als privé, kunt u bij ons informeren naar de mogelijkheden.
            </p>
            <p>
              Doordat wij volledig onafhankelijkheid zijn kunnen wij brede service tegen scherpe premies aanbieden.
            </p>
          </div>
        </div>
        
        {/* Right side - Desktop image with diagonal slash */}
        <div className="hidden lg:block diagonal-image-right h-[500px] xl:h-[600px] slide-in-right">
          <img 
            src={officeImage} 
            alt="AZ Verzekeringen Kantoor" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Kernwaarden Section */}
      <section className="bg-blue-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 fade-in">
            Kernwaarden
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Kwaliteit */}
            <div className="text-left fade-in">
              <div className="w-20 h-20 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="w-8 h-8 text-gray-700 icon-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Kwaliteit</h3>
              <p className="text-gray-600 leading-relaxed">
                AZ Verzekeringen hecht grote waarde aan kwaliteit. Mede daarom hebben wij een samenwerking met BSB volmachten te Geleen. Door deze samenwerking zijn wij volledig onafhankelijk en doen wij zaken met vele gerenommeerde verzekeraars. Hierdoor kunnen wij onze relaties een uitstekend advies geven en voldoet onze dienstverlening aan de hoogste kwaliteitsnormen.
              </p>
            </div>

            {/* Deskundigheid */}
            <div className="text-left fade-in">
              <div className="w-20 h-20 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLightbulb className="w-8 h-8 text-gray-700 icon-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Deskundigheid</h3>
              <p className="text-gray-600 leading-relaxed">
                Sinds de invoering van de Wet Financieel Toezicht (WFT) in 2007 gelden in onze branche strenge toetredingseisen op het gebied van deskundigheid, betrouwbaarheid, integriteit en wijze van adviseren. Ons kantoor beschikt over de vereiste vergunningen en wft diploma's die door de AFM vereist zijn. Daarnaast zijn wij verplicht in ons vakgebied iedere drie jaar permanente educatie te volgen om altijd actueel te blijven en op de hoogte te zijn van de laatste ontwikkelingen in onze branche. Dit zorgt ervoor dat de deskundigheid gewaarborgd blijft.
              </p>
            </div>

            {/* Persoonlijkheid */}
            <div className="text-left fade-in">
              <div className="w-20 h-20 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="w-8 h-8 text-gray-700 icon-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Persoonlijkheid</h3>
              <p className="text-gray-600 leading-relaxed">
                Tot slot: Één van de belangrijkste eigenschappen van ons kantoor is persoonlijkheid. Wij streven ernaar om al onze klanten persoonlijk te leren kennen. Wij komen graag bij de mensen thuis om te inventariseren, adviseren en te bemiddelen in diverse verzekeringsproducten. Doordat we een klein kantoor zijn, zonder personeel, staan we iedere klant persoonlijk te woord en houden wij de lijnen kort waardoor snelle en goede service wordt geboden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              Bekijk onze video
            </h2>
            
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <iframe
                allow="fullscreen"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/63f3ko?"
                width="100%"
                style={{border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden'}}
                title="AZ Verzekeringen Video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
