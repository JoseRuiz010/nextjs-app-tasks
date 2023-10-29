import React from 'react'

const fetchUser = async (id) => {
  const res = await fetch('https://reqres.in/api/users/' + id);
  const data = await res.json();
  return data.data;
}

const User = async ({ params }) => {
  const user = await fetchUser(params.id)
  const { id: idUser, avatar, email, first_name, last_name } = user
  return (
    <div className='bg-gray-600 mt-2 h-min p-10 rounded-md flex flex-col justify-center'>
      <img src={avatar} alt="img" className="mb-3 rounded-full w-25" />
      <h1 className='font-bold mb-2 text-2xl'>
        {idUser}. {first_name} {last_name}
      </h1>
      <h3 className='text-sm text-center'>
        {email}
      </h3>
    </div>
  )
}

export default User