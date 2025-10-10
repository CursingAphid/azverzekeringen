import { useState, useEffect } from 'react'
import azLogo from '../assets/AZ verzekeringen logo.png'
import { FaBars, FaTimes, FaFilePdf, FaDownload, FaEye, FaExternalLinkAlt, FaLink } from 'react-icons/fa'
import Footer from './Footer'

const Links = () => {
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

  // PDF documents data
  const pdfDocuments = [
    {
      name: "Aanrijdingsformulier",
      filename: "aanrijdingsformulier.pdf",
      description: "Formulier voor het melden van aanrijdingen en schadeclaims",
      category: "Formulieren"
    },
    {
      name: "Algemene Voorwaarden",
      filename: "algemene_voorwaarden.pdf", 
      description: "Algemene voorwaarden voor onze verzekeringsproducten",
      category: "Voorwaarden"
    },
    {
      name: "Dienstenwijzer",
      filename: "dienstenwijzer.pdf",
      description: "Overzicht van alle diensten die wij\n aanbieden",
      category: "Informatie"
    },
    {
      name: "Schadeformulier Algemeen",
      filename: "schadeformulier_algemeen.pdf",
      description: "Algemeen schadeformulier voor verschillende types schade",
      category: "Formulieren"
    },
    {
      name: "Vergelijkingskaart Risico's Afdekken 2023",
      filename: "Vergelijkingskaart-Risicos-afdekken-2023.pdf",
      description: "Overzicht van risico's en hoe deze \n af te dekken",
      category: "Informatie"
    },
    {
      name: "Vergelijkingskaart Vermogen Opbouwen 2023", 
      filename: "Vergelijkingskaart-Vermogen-opbouwen-2023.pdf",
      description: "Gids voor het opbouwen van vermogen en investeringen",
      category: "Informatie"
    },
    {
      name: "Holleman Beckers Financieel Advies",
      filename: "https://hollemanbeckers.nl/",
      description: "Hypothecair krediet, verzekeringen en financieel plan",
      category: "Externe Links",
      isExternal: true
    },
    {
      name: "Waarborgfonds Motorverkeer",
      filename: "https://waarborgfonds.vereende.nl/",
      description: "Schade melden bij motorverkeer ongevallen",
      category: "Externe Links",
      isExternal: true
    }
  ]

  const categories = [...new Set(pdfDocuments.map(doc => doc.category))]

  const handleViewPDF = (filename, isExternal) => {
    if (isExternal) {
      window.open(filename, '_blank')
    } else {
      window.open(`/links/${filename}`, '_blank')
    }
  }

  const handleDownloadPDF = (filename, name) => {
    const link = document.createElement('a')
    link.href = `/links/${filename}`
    link.download = `${name}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              <a href="/links" className="bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
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
              <a href="/" className="block text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-teal-700 transition-colors rounded">
                HOME
              </a>
              <a href="/links" className="block bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded">
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
      <section className="bg-gradient-to-b from-blue-100 to-blue-200 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <div className="mb-12 scale-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800">
              Documenten
            </h1>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Handige Documenten en links
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hier vindt u alle belangrijke documenten, formulieren, informatie en links die u nodig heeft voor uw verzekeringen en financiële planning.
            </p>
          </div>


          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfDocuments.map((doc, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow fade-in">
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-lg mb-4 mx-auto ${
                  doc.isExternal ? 'bg-blue-100' : 'bg-red-100'
                }`}>
                  {doc.isExternal ? (
                    <FaLink className="w-8 h-8 text-blue-600" />
                  ) : (
                    <FaFilePdf className="w-8 h-8 text-red-600" />
                  )}
                </div>

                {/* Document Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {doc.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleViewPDF(doc.filename, doc.isExternal)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
                  >
                    {doc.isExternal ? (
                      <>
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Bezoek</span>
                      </>
                    ) : (
                      <>
                        <FaEye className="w-4 h-4" />
                        <span>Bekijken</span>
                      </>
                    )}
                  </button>
                  {!doc.isExternal && (
                    <button
                      onClick={() => handleDownloadPDF(doc.filename, doc.name)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                    >
                      <FaDownload className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hulp Nodig?
            </h3>
            <p className="text-gray-600 mb-6">
              Als u vragen heeft over deze documenten of hulp nodig heeft bij het invullen van formulieren, 
              neem dan gerust contact met ons op.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center space-x-2 bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Contact Opnemen</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Links
