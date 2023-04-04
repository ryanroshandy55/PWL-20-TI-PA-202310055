import React from 'react'
import Footers from './components/footers/Footers'
import HeaderNav from './components/headers/HeaderNav'
import ModalPopUp from './components/modals/ModalPopUp'

export default function Layouts(props) {
    return (
        <div id="main-layout">
            <div className='position-relative'>
                <HeaderNav />
            </div>
            
            <main className='mt-20 py-10 position-relative'>
                {props.children}
            </main>

            <Footers />
            <ModalPopUp />
        </div>
    )
}