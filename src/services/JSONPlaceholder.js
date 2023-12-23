const BASE_URL = "https://jsonplaceholder.typicode.com";

const getClients = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();

  return data;
};

const getClient = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();

  return data;
};

const updateClients = async (data) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export { getClients, getClient, updateClients };
