import { useEffect, useState } from "react";
import PatientsTable from "./patientsTable/patientsTable";
import { User, users } from "../../types/user";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Patients: React.FC = () => {

    // const { data: users, isLoading, isError, error } = useQuery(['users'], fetchUsers);


    return (
        <div className="brown" style={{ display: 'flex', justifyContent: 'center' }}>
            {/* {isLoading ? <div>Loading...</div> : error ? <div>Loading...</div> :  */}
            <PatientsTable users={users}/>
            {/* } */}
        </div>
    )
}


export default Patients;


