/**** ACTIONS 
 * 
 * What is returned    ->>>   ACTION
 * The function itself ->>>   ACTION CREATOR
 * 
 * *******/

let nextTodoId = 0

// actions arent anything but objects!
export const addTodo = item => {
  console.log(`ADD TODO action dispatched. CONTENT: ${item.name}`)
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    item  //this represents the content/payload
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  type: 'TOGGLE_TODO',
  id
}

export const pushInput = input => {
  type: 'PUSH_INPUT',
  input
}