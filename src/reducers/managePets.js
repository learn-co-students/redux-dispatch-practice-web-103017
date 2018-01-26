export let state;


export function managePets(state, action){
  if (!state) {
    state = {pets: []}
  }
  switch (action.type) {
    case 'ADD_PET':
      return { pets:
        [
        ...state.pets,
        action.pet
      ]
    }
    case 'REMOVE_PET':
      let newPets = state.pets.filter(p => p.id != action.id)
      return { pets: newPets }

  //
  //
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let pets = state.pets.map(p => {
    return `<li>${p.name}</li>`
  })
  container.innerHTML = `<ul>${pets}</ul>`;


}
