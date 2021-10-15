import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from "@apollo/client";
import { GET_PERSON_BY_NAME } from "../Queries/Queries";

function PersonDetails({ match }) {

    const { name } = useParams();

    let queryPerson = {
        variables: {
            personName: name,
        }
    }

    const { loading, error, data } = useQuery(GET_PERSON_BY_NAME, queryPerson);

    if (loading) return (
        <div className="card-body" >
            <div className="list-group">
                <div style={{ backgroundColor: 'black' }}>
                    <div className="card-title">
                        <br /><br /> <h1 style={{ color: 'white' }}>{name}</h1> <br /><br />
                    </div>
                </div>
                <p> Getting Details for: {name}  </p>
            </div>
        </div>
    );

    if (error) return (
        <div className="card-body" >
            <div className="list-group">
                <div style={{ backgroundColor: 'black' }}>
                    <div className="card-title">
                        <br /><br /> <h1 style={{ color: 'white' }}>oh no :(</h1> <br /><br />
                    </div>
                </div>
                <p> Something went wrong</p>
            </div>
        </div>
    )

    if (data) {
        return (
            <div className="card-body" >
                <div className="list-group">
                    <div style={{ backgroundColor: 'black' }}>
                        <div className="card-title">
                            <br /><br /> <h1 style={{ color: 'white' }}>{data.person.name}</h1> <br /><br />
                        </div>
                    </div>

                    <div className="card-text">
                        Name: <br /> {data.person.name} <br /><br />
                    </div>
                    <div className="card-text">
                        Height: <br /> {data.person.height} <br /><br />
                    </div>
                    <div className="card-text">
                        Mass: <br /> {data.person.mass} <br /><br />
                    </div>
                    <div className="card-text">
                        Gender: <br /> {data.person.gender} <br /><br />
                    </div>
                    <div className="card-text" >
                        Homeworld: <br /> <a href={data.person.homeworld} style={{ textDecoration: 'none' }}> {data.person.homeworld} </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default PersonDetails
