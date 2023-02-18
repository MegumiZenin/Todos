import html from '../js/core.js'

function Footer({todos, filter, filters}) {
    return html`
        <footer class="footer ${todos.length == 0 && 'hidden'}">
            <span class="todo-count">
                <strong>${todos.filter(todo => !todo.completed).length}</strong> item left
            </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => `
                <li>
                <a class="${filter === type && 'selected'}" href="#/" onclick="dispatch('setFilter', '${type}')">
                    ${type[0].toUpperCase() + type.slice(1)}
                </a>
                </li>`)}
            </ul>
            <button class="clear-completed" 
            onclick="dispatch('clearCompleted')" 
            ${todos.every(todo => !todo.completed) && 'hidden'}>    
                Clear completed
            </button>
        </footer>
    `
}

export default Footer