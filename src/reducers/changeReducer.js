export default function (state, action) {
  switch (action.type) {
    case "change":
      console.log('tesing change');
      // const person = [...action.payload.state.person];
        // person.splice(personIndex, 1);
        return 
     
      break;
    default:
    console.log('tesing Default');
      return state;
  }
}