export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, {name: action.pet.name, species: action.pet.species, id: action.pet.id}]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter(el => el.id !== action.id)}
    default: 
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  document.getElementById('container').innerHTML = `<ul>${state.pets.map(pet => `<li>${pet.name}</li>`)}</ul>`
}