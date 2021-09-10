import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"

import Footer from "./components/Footer"
import ItemDetailConteiner from "./components/ItemDetailConteiner"
import ItemListConteiner from "./components/ItemListConteiner"
import Navbar from "./components/Navbar"

function App() {
    
    return(
        <BrowserRouter>
        <Navbar />
            {/* <ItemListConteiner greeting="Productos"/> */}
            {/* <ItemDetailConteiner greeting="Productos" /> */}
            <Switch>
                <Route path="/" component={ItemListConteiner} exact />
                <Route path="/categoria/:id" component={ItemListConteiner} />
                <Route path="/item/:id" component={ItemDetailConteiner} />
            </Switch>
        <Footer/>
        </BrowserRouter>
                    
    )
}

export default App