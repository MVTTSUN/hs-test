const getAdaptiveClients = (clients) =>
  clients.map(({ id, name, email, address, phone, company }) => ({
    id,
    name,
    email,
    img: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
    address: `${address.street}, ${address.suite}`,
    phone,
    company: company.name,
  }));

export { getAdaptiveClients };
