import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


export default function ViewPupil() {

    const [pupil, setPupil] = useState({
    })

    const {id} = useParams();

    useEffect(() => {
        loadPupil()
    });


    const loadPupil = async () => {
        const result = await axios.get(`http://localhost:8080/pupils/all/${id}`)
        setPupil(result.data)
    }


    

    return (
        <div className="container ">
            <div className ="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Pupil Details</h2>
                    <div className="card">
                        <div className="card-header">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>ID</b>
                                    </th>
                                    <th scope="row" className="border border-black-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.id}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Ime</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.firstName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Prezime</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.lastName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>E-mail</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.email}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Broj mobitela</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.phoneNumber}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Škola</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.schoolName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Prebivalište</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.residence}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Poznate tehnologije</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.familiarTechnologies}</b>
                                    </th>
                                </tr>

                                

                                </thead>
                            </table>
                        </div>
                    </div>
                    <Link type="button" className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
                          to={"/pupils"}>
                        Natrag
                    </Link>
                </div>
            </div>

        </div>
    )

}
