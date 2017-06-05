/* Supported Actions */

let todoId = 1;
let authorId = 1;

const addTodo = (task) => {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        task,
        isCompleted:false
    };
};

const addAuthor = (name, role) => {
  return {
      type: 'ADD_AUTHOR',
      id: authorId++,
      name,
      role
  };
};


/*reducers*/
const todos = (state = [], action) => {
    let nextState = null;
    console.log('TODOs reducer called...with action ' + action.type)
    switch (action.type) {
        case 'ADD_TODO':
            nextState = [...state, {
                id:action.id,
                task: action.task,
                isCompleted: action.isCompleted
            }];
            break;
        default: nextState = state;
    }
    return nextState;
};

const authors = (state = [], action) => {
    let nextState = null;
    console.log('AUTHORs reducer called...with action ' + action.type)
    switch (action.type) {
        case 'ADD_AUTHOR':
            nextState = [...state, {
                id: action.id,
                name: action.name,
                role: action.role
            }];
            break;
        default: nextState = state;
    }
    return nextState;
};

const appState = (currentState = {}, action) => {
    return {
        todos: todos(currentState.todos, action),
        authors: authors(currentState.authors, action)
    };
};

const { createStore } = Redux;
const appStore = createStore(appState,
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

function render() {
    console.log('Rendering...');
    console.log(appStore.getState());
}

/*Render as and when state changes*/
appStore.subscribe(render);

/*Initial display*/
render();

/*UI events that trigger and send actions to reducers*/
document.getElementById('btnAddTodo').onclick = ()=> {
    appStore.dispatch(addTodo('Simple Task'));
};

document.getElementById('btnAddAuthor').onclick = ()=> {
    appStore.dispatch(addAuthor('Pranati', 'Student'));
};