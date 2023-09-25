import { createElement, render } from 'preact'
import { App } from './app.jsx'
import './index.css'

const h1 = createElement('h1', null, 'Hola mundo')

render(
    h1


, document.getElementById('app'))
