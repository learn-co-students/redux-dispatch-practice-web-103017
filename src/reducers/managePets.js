export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {

    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] };
    case 'REMOVE_PET':
      const pets = state.pets.filter(x=> x.id !== action.id)
      return {pets};
    default:
      return state;
  }
}


export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container');
  const pet = state.pets.map(x => {
    return `<li>${x.name}</li>`
  })
  container.innerHTML = `<ul>${pet}</ul>`
}
