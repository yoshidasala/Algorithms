function model(state: {value: string}, element: HTMLInputElement) {
  element.value = state.value;
  element.addEventListener('change', function(event) {
    element.value = event.target.value;
  });

  Object.defineProperty(state, 'value', {
    get: () => element.value,
    set: (val) => element.value = val,
  })
}


