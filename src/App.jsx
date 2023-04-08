import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='App'>
      {/* header */}
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      {/* footer */}
    </div>
  )
}

export default App
