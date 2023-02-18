import html from '../js/core.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import {connect} from '../js/store.js'

function App({todos, filter, filters}) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${Main({todos, filter, filters})}
            ${Footer({todos, filter, filters})}
        </section>
    `
}

export default connect()(App)