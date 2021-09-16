import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"

import AccountView from "./components/AccountView"
import Cart from "./components/Cart"
import CartContext from "./components/CartContext"
import Footer from "./components/Footer"
import ItemDetailConteiner from "./components/ItemDetailConteiner"
import ItemListConteiner from "./components/ItemListConteiner"
import Navbar from "./components/Navbar"

function App() {
    
    return(
        <BrowserRouter>
            <CartContext>
                <Navbar />
                <Switch>
                    <Route path="/" component={ItemListConteiner} exact />
                    <Route path="/Account" component={AccountView} />
                    <Route path="/categoria/:id" component={ItemListConteiner} />
                    <Route path="/item/:id" component={ItemDetailConteiner} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer/>        
            </CartContext>
        </BrowserRouter>
                    
    )
}

export default App