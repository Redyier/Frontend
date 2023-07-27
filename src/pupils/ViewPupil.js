import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


export default function ViewPupil() {

    const [pupil, setPupil] = useState({
    })

    const {id} = useParams();

    useEffect(() => {
        loadPupil();

    });

    const loadPupil = async () => {
        const result = await axios.get(`http://localhost:8080/pupils/all/${id}`)
        setPupil(result.data)
    }

    return (
        <div className="container ">
            <div className ="row">

                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                    <div className="card">
                        <div className="card-header">
                            <ul className="list-group list-group-flush my-10">
                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly px-100">
                                        <b>Ime:</b>
                                        <b>{pupil.firstName}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Prezime:</b>
                                        <b>{pupil.lastName}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Datum rođenja:</b>
                                        <b>{pupil.dateOfBirth}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Ime škole:</b>
                                        <b>{pupil.schoolName}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Smjer školovanja:</b>
                                        <b>{pupil.courseOfStudies}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Broj telefona::</b>
                                        <b>{pupil.phoneNumber}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>email:</b>
                                        <b>{pupil.email}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Prebivalište:</b>
                                        <b>{pupil.residence}</b>
                                    </li>
                                </li>

                                <li className="list-group-item my-5">
                                    <li className="flex justify-evenly">
                                        <b>Poznate tehnologije:</b>
                                        <b>{pupil.familiarTechnologies}</b>
                                    </li>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                
                    <Link type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
                            to={"/pupils"}>
                            Natrag
                    </Link>

                </div>

            </div>

        </div>
    )

}