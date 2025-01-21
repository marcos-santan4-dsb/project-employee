export const authenticateUser = async (email, password) => {
  const mockUsers = [
    { email: "admin", password: "admin123", role: "admin" },
    { email: "user", password: "user123", role: "user" },
  ];

  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
