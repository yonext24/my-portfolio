import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import Quote from './components/Quote'
import WelcomeSection from './components/WelcomeSection'


function App() {
  return (
    <div className="relative flex flex-col w-screen overflow-x-hidden after:content-[''] after:fixed after:top-0 after:left-0 after:bg-[url('/background.svg')]
    after:w-screen after:h-screen after:-z-50 dark:after:invert-[.95] after:transition-[filter] [&>section]:transition-colors [&>section]:duration-200">
      {/* The background was provided by svgbackgrounds.com completly free with mention ^^ really good backgrounds */}
      <Navbar />
      <WelcomeSection />
      <AboutMe />
      <Quote />
      <ProjectSection />
    </div>
  )
}

export default App
