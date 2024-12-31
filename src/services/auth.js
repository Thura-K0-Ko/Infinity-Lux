export const login = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

