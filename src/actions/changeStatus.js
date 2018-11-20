export const changeStatus = (value) => {
  console.log(value);
  return ({
    type:"change",
    payload:value
  });
}