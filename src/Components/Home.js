import { React } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../Queries/Queries";
import { Link } from 'react-router-dom';
import { useGlobalState } from 'state-pool';

const Home = () => {

    let [pageNumber, setPageNumber] = useGlobalState("pageNumber");

    let queryPeople = {
        variables: {
            pageNumber: pageNumber,
        }
    }

    const { loading, error, data } = useQuery(GET_PEOPLE, queryPeople);

    const handlePageClick = (value) => {
        let number = value.selected + 1;
        setPageNumber(number);
    }

    const handleSelection = (name) => {
        console.log(name);
    }

    if (loading) return (
        <div className="card-body">
            <div className="list-group">
                <div style={{ backgroundColor: 'black' }}>
                    <div className="card-title">
                        <br /><br /><h1 style={{ color: 'white' }}>Starwars Directory</h1><br />
                    </div>
                </div>
            </div>
            <p>Loading Results...</p>
        </div>
    )

    if (error) {
        return (
            <div className="card-body">
                <div className="list-group">
                    <div style={{ backgroundColor: 'black' }}>
                        <div className="card-title">
                            <br /><br /><h1 style={{ color: 'white' }}>Starwars Directory</h1><br />
                        </div>
                    </div>
                </div>
                <p> Something went wrong</p>
            </div>
        )
    }

    if (data) {
        return (
            <div className="page">
                <div className="card-body">
                    <div className="list-group">
                        <div style={{ backgroundColor: 'black' }}>
                            <div className="card-title">
                                <br /><br /><h1 style={{ color: 'white' }}>Starwars Directory</h1><br />
                            </div>
                        </div>
                        <ul className="list-group">
                            {data.people.map(p => (
                                <Link to={`/persondetails/${p.name}`} style={{ textDecoration: 'none' }}>
                                    <li className="card-body list-group-item items-in-list" onClick={(e) => handleSelection(p.name)} key={p.name}>
                                        <br /> {p.name} <br />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center pagination-pad">
                        <ReactPaginate
                            containerClassName="pagination pagination-sm"
                            breakClassName="page-item"
                            breakLabel={<a className="page-link">...</a>}
                            pageClassName="page-item"
                            previousClassName="page-item"
                            nextClassName="page-item"
                            pageLinkClassName="page-link"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                            activeClassName="active"
                            pageCount={9}
                            pageRangeDisplayed={9}
                            marginPagesDisplayed={1}
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            forcePage={pageNumber - 1}
                            onPageChange={handlePageClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
