import { useState, useEffect } from 'react'
import azLogo from '../assets/AZ verzekeringen logo.png'
import { FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import Footer from './Footer'

const Contact = () => {
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
              <a href="/links" className="text-gray-800 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors">
                LINKS
              </a>
              <a href="/contact" className="bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
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
              <a href="/" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                HOME
              </a>
              <a href="/links" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                LINKS
              </a>
              <a href="/contact" className="block bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded">
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
      <section className="bg-gradient-to-b from-blue-100 to-blue-200 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <div className="mb-12 scale-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Information */}
            <div className="slide-in-left">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Contact Informatie
                </h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-teal-700 mt-1" />
                    </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Correspondentieadres:</h3>
                        <p className="text-gray-600 text-lg">Graan 27</p>
                        <p className="text-gray-600 text-lg whitespace-pre-wrap">6461 RB  KERKRADE</p>
                      </div>
                  </div>

                  {/* Visit Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-teal-700 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Bezoekadres:</h3>
                      <p className="text-gray-600 text-lg">Eurode Business Center</p>
                      <p className="text-gray-600 text-lg">Eurode-Park 1–29</p>
                      <p className="text-gray-600 text-lg">6461 KB&nbsp;&nbsp;KERKRADE</p>
                    </div>
                  </div>


                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-teal-700 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefoonnummer:</h3>
                      <p className="text-gray-600 text-lg">045-5452821</p>
                    </div>
                  </div>
                </div>

                {/* Email Button */}
                <div className="mt-8">
                  <a 
                    href="mailto:info@azverzekeringen.nl"
                    className="inline-flex items-center space-x-3 bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
                  >
                    <FaEnvelope className="w-5 h-5" />
                    <span>Stuur een e-mail</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Google Maps */}
            <div className="slide-in-right">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Locatie
                </h2>
                
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Eurode%20Business%20Center%2C%20Eurode-Park%201-29%2C%206461%20KB%20Kerkrade&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AZ Verzekeringen Locatie"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
