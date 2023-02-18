import html from '../js/core.js'
import {connect} from '../js/store.js'



function Todos({todo, index, editIndex}) {
    return html`
    <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed && 'checked'} 
            oninput="dispatch('check',${index})">
            <label ondblclick="dispatch('startEdit', ${index})">${todo.content}</label>
            <button class="destroy" onclick="dispatch('delete',${index})"></button>
        </div>
        <input class="edit" value="${todo.content}" 
        onkeyup="event.keyCode === 13 && dispatch('endEdit', ${editIndex}, this.value.trim()) 
                || event.keyCode === 27 && dispatch('cancelEdit')"
        onblur="dispatch('endEdit', ${editIndex}, this.value.trim())">
    </li>
    `
}


export default connect()(Todos)
