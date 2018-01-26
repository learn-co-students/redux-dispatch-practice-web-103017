export let state;


export function managePets(state = {pets: []}, action) {
  switch (action.type) {
      case 'ADD_PET':
        return {pets: state.pets.concat({name: action.pet.name, species: action.pet.species, id: action.pet.id})}
      case 'REMOVE_PET':
        let newPets = state.pets.filter((pet) => {
          return pet.id !== action.id;
        });
        return {pets: newPets}
      default:
        return state;
    }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  document.getElementById('container').innerHTML = ''
  let ul = document.createElement('ul')
  state.pets.forEach(function(pet) {
    let petNameLi = document.createElement('li');
    petNameLi.innerHTML = pet.name;
    ul.appendChild(petNameLi);
  })
  document.getElementById('container').appendChild(ul);
}
