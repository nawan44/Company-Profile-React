import React from 'react';
import './css/entry-portofolio.css';
import { Table } from 'reactstrap';
import SideBar from './sideBar';
import './css/admin.css';

class EntryPortofolio extends React.Component {
    render() {
        return (
            <div className="entry">
                <SideBar />
                <div className="admin">
                    Portofolio
                </div>
            </div >
        );
    }

}
export default EntryPortofolio;