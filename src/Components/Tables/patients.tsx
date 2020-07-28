import React, {useEffect, useState} from "react";
import styles from './/patients.module.scss';
import _ from 'lodash';
import {IPatient} from "../../Types/data.dto";
import client from "../../Utils/client";
import {DataEntitiesTypes} from "../../Enums/api.enums";
import {api} from "../../Config/config";
import {AxiosError, AxiosResponse} from "axios";
import {Clipboard} from "react-feather";

interface ITableData {
    data: IPatient[] | null
}

const PatientsTable = () => {

    let apiUrl: string = `${api.protocol}://${api.host}:${api.port}/`;

    const [state, setState] = useState<ITableData>({
        data: null,
    });

    let {data} = state;

    const fetchData = async () => {
        return await client.get(`${apiUrl}${DataEntitiesTypes.GetPatientsList}`).then((response: AxiosResponse) => {
            if (response) {
                return response.data;
            }
        }).then().catch((error: AxiosError) => {
            return {done: false, message: error.response ? error.response.data.message : 'Unknown error'};
        });    }


    useEffect(() => {
        fetchData().then(v => setState({data:v}))
    },[])

    return (
        <>
            <div>LIST OF POTENTIAL PATIENTS</div>
            <table className={styles.table}>
                <thead className={styles.thread}>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                    <th scope="col">Disease</th>
                    <th scope="col">DocLink</th>
                </tr>
                </thead>
                <tbody>
                {_.map(data, ({
                                  firstName,
                                  lastName,
                                  email,
                                  phone,
                                  country,
                                  disease,
                                  docLink
                              }) => (
                    <tr key={phone} onClick={() => {
                        console.log('clicked', phone)
                    }} className={styles.tr}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{country}</td>
                        <td>{disease}</td>
                        <td>{<div className={styles.docLink}><Clipboard onClick={() => {
                            console.log(docLink)}}/></div>}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default PatientsTable;






