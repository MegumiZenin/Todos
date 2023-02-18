import html from '../js/core.js'
import Todos from './Todos.js'

function Main({todos, filter, filters}) {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox"
            oninput="dispatch('checkAll', this.checked)"
           ${todos.every(todo => todo.completed == true) && 'checked'}>
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list" >
                ${todos.filter(filters[filter]).map( (todo, index) => `${Todos({todo, index})}` )}
            </ul>
        </section>
    `
}

export default Main