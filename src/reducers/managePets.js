export let state;


export function managePets( state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      const removeIndex = state.pets.findIndex(pet => pet.id === action.id)
      return { pets: [...state.pets.slice(0, removeIndex), ...state.pets.slice(removeIndex + 1)]}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const parentDom = document.getElementById('container')
  const html = state.pets.map(pet => `<li>${pet.name}</li>`).join('')
  parentDom.innerHTML = `<ul>${html}</ul>`

}
