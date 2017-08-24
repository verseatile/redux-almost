
export default function(state=[], action) { // take in old state
    switch(action.type) {
        case 'ADD_TODO':
         console.log('this has been dispatched', action)
            //push new todo object into state array, but make state an array first

            /**
             * return the contents of state(current todos), AND an object with the new additional todo
             */
            return [
                ...state,// return the current state and....the action object
                { // this is the action object. its data is here
                    id: action.id,
                    text: action.item.name,
                    completed: false
                }
            ]
            default:
                return state

    }
    //return state // return new state
}


/* 
* reducers should be taking in state and an action
* as parameters and returning the new state
*/