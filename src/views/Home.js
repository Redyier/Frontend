import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {

    const[users, setUsers] = useState([])

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/getAllPupils");
        setUsers(result.data);
    }
    

  return (
        <div className='py-20 '> 
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    # 
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ime 
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Prezime
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    E-mail
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Broj mobitela
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Škola
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                    Action
                </th>

        
                
            </tr>
        </thead>
        <tbody>

            {
                users.map((user, index)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                        <th scope="row" key= {index} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index+1} 
                        </th>
                        <td className="px-6 py-4">
                            {user.firstName}
                        </td>
                        <td className="px-6 py-4">
                            {user.lastName}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4">
                            {user.phoneNumber}
                        </td>
                        <td className="px-6 py-4">
                            {user.schoolName}
                        </td>
                        <td className="px-6 py-4 text-center ">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5">
                            View
                            </button>
                            <button type="button" className="text-white border border-blue-700 hover:text-white-300 hover:bg-blue-700 focus:ring-4 focus:outline-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 mx-5">
                            Edit
                            </button>
                            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mx-5">
                            Delete
                            </button>
                        </td>
                    </tr>

                ))
            }
            
        </tbody>
    </table>
</div>

            </div>
        </div>
  )
}