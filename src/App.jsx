import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 relative overflow-hidden flex flex-col pt-3'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlNWU3ZWIiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-red-50"></div>
      
      {/* Navbar */}
      <div className="relative w-full px-3">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className='relative flex-grow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <main>
            <MainRoutes/>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App