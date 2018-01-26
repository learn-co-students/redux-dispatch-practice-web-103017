export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] };
    case "REMOVE_PET":
      let pets = state.pets.filter(pet => {
        return pet.id !== action.id;
      });
      return { pets: pets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let container = document.getElementById("container");
  let pet = state.pets.map(pet => {
    return `<li>${pet.name}</li>`;
  });
  container.innerHTML = `<ul>${pet}</ul>`;
}
