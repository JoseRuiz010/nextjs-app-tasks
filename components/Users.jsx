'use client'
import Link from "next/link"

const Users = ({ users }) => {
  return (
    <ul>
      {
        users.map(us => (
          <Link href={`/users/${us.id}`}>
            <li className="flex justify-between bg-slate-400 mb-4 p-3 rounded-md text-black cursor-pointer " key={us.id}>
              <div>
                <h5 className="font-bold hover:text-gray-600">{us.id}- {us.first_name} {us.last_name}</h5>
                <p className="text-slate-100">email: {us.email}</p>
              </div>
              <img src={us.avatar} alt="img" className="rounded-full w-20" />
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default Users