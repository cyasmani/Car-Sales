import configureStore from './configureStore'
import {engineAdded, spoilerAdded, soundAdded, detailAdded} from './reducer'


const store = configureStore();
console.log(store)
store.dispatch(engineAdded({name:"V-6 engine"}))

console.log(store.getState())