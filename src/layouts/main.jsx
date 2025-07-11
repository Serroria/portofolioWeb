import Navbar from "../components/Navbar"
import Footer from "../components/footer"
const Layout = ({ children }) => {
    return (
        <div>
            <header>
            <Navbar />
            </header>

            <main>
               {children} 
               
            </main>

            <Footer />
        </div>
        
    )
}

export default Layout