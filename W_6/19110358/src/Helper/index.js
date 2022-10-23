export const getData = () => {
  const data = localStorage.getItem("posts");
  return JSON.parse(data)
};

export const setData = (value) => {
  localStorage.setItem("posts", JSON.stringify(value));
};

export const removeData = () => {
  localStorage.removeItem("posts");
};
