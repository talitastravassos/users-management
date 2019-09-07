import React from 'react'
import TableUsers from '../../components/TableUsers';
import Navbar from '../../components/NavBar';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div style={{margin: 20}}>
                <TableUsers />
            </div>
        </React.Fragment>
    )
}

export default Home
