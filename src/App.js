import ItemDetailConteiner from "./components/ItemDetailConteiner"
import ItemListConteiner from "./components/ItemListConteiner"
import Navbar from "./components/Navbar"

function App() {
    
    return(
        <>
            <Navbar />
            {/* <ItemListConteiner greeting="Productos"/> */}
            <ItemDetailConteiner greeting="Productos" />
        </>
    )
}

export default App