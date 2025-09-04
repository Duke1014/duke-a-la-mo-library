export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const setUsers = (users: any[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};