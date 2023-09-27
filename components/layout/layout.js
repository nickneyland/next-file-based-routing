import { frangment } from 'react'
import MainHeader from './main-header'

function Layout(props) {
    return (
        <frangment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </frangment>
    )
}

export default Layout