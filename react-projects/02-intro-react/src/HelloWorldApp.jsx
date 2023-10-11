

import PropTypes from 'prop-types'
import { Title } from './components/Title'
import { UserDetails } from './components/UserDetails'
import { Book } from './components/Book'

export const HelloWorldApp = ({user, id, title, book }) => {

    return (
        <>
            <Title title={ title }/>
            <UserDetails user={ user } id={ id }/>
            <Book book={ book }/>
        </>
    )
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object
}

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo',
    book: 'UML'
}