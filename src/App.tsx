import './App.css'
import Hero from './components/Home/Hero'
// import Partners from './components/Home/Partners'
import Login from './components/Login/Login'

function App() {

  return (
    <div className="bg-linear-to-br from-blue-500 via-teal-500 to-cyan-500">
      {/* <Header /> */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center min-h-[calc(100vh-68px)] px-4 sm:px-8 md:px-16 py-6 gap-8">

        {/* Left Section */}
        <div className="flex flex-col justify-between flex-1 w-full">
          <Hero />
        </div>

        {/* Right Section (Login box) */}
        <div className="w-full max-w-md lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start">
          <Login />
        </div>
      </div>

      {/* Partners Section */}
      {/* <div className="px-4 sm:px-8 md:px-16 py-8">
        <Partners bg="bg-white/60" />
      </div> */}
      <footer className="text-white py-6 text-sm text-center">
        <a href="http://cdsr.com.bd" target="_blank">Developed by Centre for Data Science Research (CDSR)</a>
      </footer>
    </div>
  )
}

export default App
