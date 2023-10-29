import Users from "@/components/Users";

const fetchUser = async () => {
  const res = await fetch('https://reqres.in/api/users?page=1');
  const data = await res.json();
  return data.data;
}
const HomePage = async () => {
  const users = await fetchUser();
  console.log(users);
  return (
    <Users users={users} />
  )
}

export default HomePage