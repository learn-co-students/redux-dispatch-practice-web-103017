export let state;


export function managePets(state = {pets: [ ] }, action){
  switch(action.type){
    case "ADD_PET":
      return {pets: [...state.pets,action.pet]}
      break;
    case "REMOVE_PET":
      return {pets: state.pets.filter(pet => pet.id !== action.id)}
      break
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
  let allPets = ""
  state.pets.forEach(pet => allPets += `<li>${pet.name}</li>`)
  document.body.innerHTML = `<div id='container'><ul>${allPets}</ul></div>`
}
