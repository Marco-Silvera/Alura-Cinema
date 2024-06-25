import Footer from "./components/Footer/index"
import Cabecera from "./components/Cabecera/Cabecera"
import Favoritos from "./pages/Favoritos";
import { default as Inicio } from "./pages/Inicio/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import FavoritoProvider from "./context/Favoritos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritoProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes