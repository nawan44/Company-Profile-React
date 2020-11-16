import React from 'react';
import './css/rekap-pesanan.css';
import { Table } from 'reactstrap';
import SideBar from './sideBar';
import './css/admin.css';

class RekapPesanan extends React.Component {
    render() {
        return (
            <div className="admin">
                <div className="side">
                    <SideBar />
                </div>

                <div className="daftar-pesanan">
                    <Table size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Paket Pesanan</th>
                                <th>Tanggal Pengiriman</th>
                                <th>Jam Pengiriman</th>
                                <th>Total Bayar</th>
                                <th>Status Pesanan</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Rachmat</td>
                                <td>Paket 1</td>
                                <td>15 Oktober 2020</td>
                                <td>13.00</td>
                                <td>100.000</td>
                                <td>Delivery</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Paket 1</td>
                                <td>6 April 2020</td>
                                <td>19.00</td>
                                <td>50.000</td>
                                <td>Belum Bayar</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div >
        );
    }

}
export default RekapPesanan;