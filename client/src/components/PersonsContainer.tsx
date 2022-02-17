import { useEffect, useState } from "react";
import axios from "axios";
import { PersonInterface } from "../interfaces/personInterface";
import PersonList from "./PersonList";

const PersonsContainer = () => {
    const [persons, setPersons] = useState<PersonInterface[]>([])
    //Using useEffect here to call the API on ComponentDidMount
    useEffect( () => {
        const fetchingData = async () => {
            try {
                const personsJsonResult = await axios.get('/api/persons/json')
                const personsXml = await axios.get('/api/persons/xml')

                const personJson = personsJsonResult?.data?.person
                const personXmlObject = personsXml?.data?.persons?.person
                const processedObjectXml = personXmlObject.map( (p : any) => {
                   return { 
                        id : parseInt(p.id[0]),
                        firstName : p.firstName[0],
                        lastName : p.lastName[0]
                    }
                 })
                 const sortedPersons = [...processedObjectXml, ...personJson].sort( (a, b) => (a.id < b.id ? -1 : 1))

                 setPersons([...sortedPersons])
            } catch (error) {
                console.log("An Error Occured")
            }
        }

        fetchingData()
    }, [])

    return (
        <> 
            <div className="overflow-hidden my-8">
                <table className="border-collapse table-auto w-full text-sm w-1/2 m-auto">
                    <thead>
                        <tr>
                            <th className="p-4 border bg-gray-100 ">Id</th>
                            <th className="p-4 border bg-gray-100">First Name</th>
                            <th className="p-4 border bg-gray-100">Last Name</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-center">
                        {
                            persons.length > 0 ? persons.map( (p, idx) => <PersonList key={idx} props={p} /> )
                            : (
                                <tr >
                                    <td  className="p-4 border"></td>
                                    <td  className="p-4 border font-bold">Fetching Data...</td>
                                    <td  className="p-4 border"></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PersonsContainer