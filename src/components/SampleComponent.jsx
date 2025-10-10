import { useState } from 'react'

const SampleComponent = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Component</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              isVisible 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          
          <span className="text-sm text-gray-600">
            Status: {isVisible ? 'Visible' : 'Hidden'}
          </span>
        </div>

        {isVisible && (
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4">
            <p className="text-gray-700">
              This is a sample component demonstrating Tailwind CSS classes in action!
              Notice the smooth transitions, gradients, and responsive design.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleComponent
