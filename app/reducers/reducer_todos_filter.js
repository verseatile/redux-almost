const initState = [
    {
        name: "init state!"
    }
]

export default function(state=[], action) { // take in old state
    switch(action.type) {
        case 'ADD_TODO':
         console.log('this has been dispatched', action)
            //push new todo object into state array, but make state an array first

            /**
             * return the contents of state(current todos), AND an object with the new additional todo
             */
            return [
                ...state,
                {
                    id: action.id,
                    text: action.item.name,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO': //complete work in progress, probably doesnt work
            return state.map(todo =>
                (todo.id === action.id)
                  ? {todo, completed: !todo.completed}
                  : todo
            )

        // case 'PUSH_INPUT':
        //     return [
        //         ...state,
        //         {
        //             state.'object with input'
        //         }
        //     ]

        default:
            return state
            
            // action.item;
            // break;
    }
    return state // return new state
}


/* 
* reducers should be taking in state and an action
* as parameters and returning the new state
*/