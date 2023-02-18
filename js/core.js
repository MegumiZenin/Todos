export default function html([first,...strings],...values) {
    var output = values.reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter(x => (x === 0 || x && x !== true))
    .join('')
    return output
};

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map ();
    function render() {
        for (var [root, component] of roots) {
            root.innerHTML = component();
        } 
    };
    return {
        attach(root, component) {
            roots.set(root, component);
            render();
        },
        connect(selector = (state) => state) {
            return (component) => (props, ...args) => component(Object.assign({}, props, selector(state), ...args));
        },
        dispatch(action, ...args) {
            state = reducer(state, action, ...args);
            render();
        }
    }
}