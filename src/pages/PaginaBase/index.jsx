import React from 'react'
import Cabecera from '../../components/Cabecera/Cabecera'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import FavoritoProvider from '../../context/Favoritos'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Footer />
        </main>
    )
}

export default PaginaBase