const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-300">
            Website gemaakt door{' '}
            <a 
              href="https://milanalbertz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors font-semibold"
            >
              Milan Albertz
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
