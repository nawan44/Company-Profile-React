import React from 'react';
import './css/entry-partner.css';
import { Table } from 'reactstrap';
import './css/admin.css';
import SideBar from './sideBar';


class EntryPartner extends React.Component {
    render() {
        return (
            <div className="entry">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">MEDIA PARTNER</h2>
                    <Table size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>No Hp</th>
                                <th>Alamat Pengiriman</th>
                                <th>Paket Pesanan</th>
                                <th>Tanggal Pengiriman</th>
                                <th>Jam Pengiriman</th>
                                <th>Status Bayar</th>
                                <th>Status Pesanan</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Rachmat</td>
                                <td>086363716713</td>
                                <td>Bekasi</td>
                                <td>Paket 1</td>
                                <td>15 Oktober 2020</td>
                                <td>13.00</td>
                                <td>Lunas</td>
                                <td>Delivery</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>086363716713</td>
                                <td>Jakarta</td>
                                <td>Paket 1</td>
                                <td>6 April 2020</td>
                                <td>19.00</td>
                                <td>Belum dibuat</td>
                                <td>Belum Bayar</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}
export default EntryPartner;