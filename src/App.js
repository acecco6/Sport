import ItemCount from "./components/ItemCount"
import ItemListConteiner from "./components/ItemListConteiner"
import Navbar from "./components/Navbar"

function App() {
    
    return(
        <>
            <Navbar />
            <ItemListConteiner greeting="Productos Mas Vendidos"/>
            <ItemCount initial={1} stock={5} onAdd={""} />
        </>
    )
}

export default App