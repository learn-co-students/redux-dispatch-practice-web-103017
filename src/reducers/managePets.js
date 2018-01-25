export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let sadPet = state.pets.findIndex(p => p.id === action.id)
      return {pets: [...state.pets.slice(0, sadPet), ...state.pets.slice(sadPet + 1)]}
    default :
      return state
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let contaier = document.getElementById('container')
  let pets = state.pets.map(p => {
    return `<li>${p.name}</li>`
  }).join('')
  contaier.innerHTML = `<ul>${pets}</ul>`
}
