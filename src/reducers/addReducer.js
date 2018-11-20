const initialArray = [
  {
    name: "Sample",
    status: true
  },
  {
    name: "Test",
    status: true
  },
  {
    name: "Noni",
    status: true
  }
];
export default function (state = initialArray, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name:action.payload,
          status:true
        }
      ];
      break;
    case "change":
      return state.map(todo =>
        (todo.name === action.payload.name)
          ? {...todo, status: !todo.status}
          : todo
      )
      break;
    default:
      return state;
  }
}
