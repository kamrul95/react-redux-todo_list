
export const addTodo = (value) => {
  console.log(value);
  return({
    type: "add",
    payload: value
  });

};