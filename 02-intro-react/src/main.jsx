import { createElement, render } from 'preact'
import './index.css'

import { HelloWorldApp } from './HelloWorldApp.jsx'

const h1 = createElement('h1', null, 'Hola mundo')

render(
    <HelloWorldApp
        user={ {name: 'Jhon', lastName: 'Doe'} }
        id={ 10 }
        title='Hola Mundooooo'
    />
    , document.getElementById('app')
)
