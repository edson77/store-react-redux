import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './lib/store'
import { BrowserRouter as Router } from 'react-router-dom';
import { addToCart } from './lib/actions';
// import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import { AppContainer } from './views/containers';
//import reportWebVitals from './reportWebVitals';

const unsubscribe = store.subscribe(() => {
  // console.log(store.getState())
})

// const item ={
//   ref : "fruit_1",
//   category : 0,
//   name : "Citrons",
//   price : "2.2",
//   unit : "pièce",
//   image : "citron.jpeg",
//   description : "Je teste cette section",
// }
// const item2 ={
//   ref : "fruit_3",
//   category : 0,
//   name : "Babana",
//   price : "2.2",
//   unit : "pièce",
//   image : "baba.jpeg",
//   description : "Je teste",
// }

// //ici on dispatch nos actions
// store.dispatch(addToCart(item,2))
// store.dispatch(addToCart(item2,3))

// unsubscribe()
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Router>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//Section Redux sans react

// let id = 3
// const INITIAL_STATE = [
//   {
//     'id' : 1,
//     'titre' : 'enregistrer un tuto',
//     'completed': true
//   },
//   {
//     'id' : 2,
//     'titre' : 'faire les achats',
//     'completed': false
//   }
// ]

// //creation de nos action
// const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

// function TodoReducer(state = INITIAL_STATE, action){
//   //si l'action a un type particulier
//   switch (action.type) {
//     //si l'action est ADD_TODO_ACTION on va vouloir modifier l'etat (nouvel etat)
//     case ADD_TODO_ACTION:
      
//       return [...state,{id: id++, completed:false, ...action.payload}];
  
//     default:
//       return state;
//   }

// }

// const store = createStore(
//   TodoReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// store.subscribe(() => {
//   console.log(store.getState())
// })

// //envoyer une action avec redux
// store.dispatch({type: ADD_TODO_ACTION, payload : {'titre': "je teste le reducer"}})
// //ici c est sans redux
// // const state = TodoReducer(undefined,{})
// // const newState = TodoReducer(state, {type: ADD_TODO_ACTION, payload : {'titre': "je teste le reducer"}})
// // console.log(state, newState)
// //import reportWebVitals from './reportWebVitals';


