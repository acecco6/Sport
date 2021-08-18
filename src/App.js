import ItemListConteiner from "./components/ItemListConteiner"
import Navbar from "./components/Navbar"

function App() {
    return(
        <>
            <Navbar />
            <ItemListConteiner greeting="Productos Mas Vendidos"/>
        </>
    )
}

export default App