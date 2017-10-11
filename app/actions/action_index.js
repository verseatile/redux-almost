/**** ACTIONS 
 * 
 * What is returned    ->>>   ACTION
 * The function itself ->>>   ACTION CREATOR
 * 
 * *******/

let nextTodoId = 0

// actions arent anything but objects!
export const addMsg = buff => {
  console.log(`new msg added. contents: ${buff}`)
  return {
    type: 'ADD_MSG',
    id: nextTodoId++,
    msg: buff, //this represents the content/payload
    time: new Date().toTimeString()
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