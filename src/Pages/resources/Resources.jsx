import Nav from "../../Component/Nav"
import { Hero } from "../../Component/Hero"
import Footer from "../../Component/Footer"
import Eachresources from "./Eachresources"
const Resources = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <main className="md:px-20 px-6 pb-10 mb-14">
            <Eachresources />
        </main>
        <Footer />
    </div>
  )
}

export default Resources