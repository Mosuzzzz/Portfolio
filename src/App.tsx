import './App.css'
import LeftSection from './section/LeftSection'
import RightSection from './section/RightSection'

function App() {
  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-4 lg:grid-cols-[40%_60%]'>
      {/* left */}
      <LeftSection/>
      {/* right */}
      <RightSection/>
    </div>
  )
}
export default App
