import React from 'react';
import './css/admin.css';
import './css/admin.css'

class Admin extends React.Component {
    render() {
        return (
            <div className="container-admin">
                <div className="admin">
                    <div className="rule-admin">
                        <h1> RULE POSTING
                        </h1>
                        <hr />
                        <p>
                            <h2>
                                Data Perusahaan
                                </h2>
                            <ol>
                                <li>Media Sosial berupa link dengan format http://</li>
                            </ol>
                        </p>
                        <hr />

                        <p>
                            <h2>
                                Media Pertner
                            </h2>
                            <ol>
                                <li>Ukuran Gambar : 80px x 50px</li>
                                <li>Format Gambar : .jpg .JPEG .png </li>
                            </ol>
                        </p>

                        <hr />

                        <p><h2>
                            Portofolio
                            </h2>
                            <ol>
                                <li>Ukuran Gambar : 300px x 500px</li>
                                <li>Format Gambar : .jpg .JPEG .png </li>
                            </ol>
                        </p>
                        <hr />

                        <p><h2>
                            Youtube
                            </h2>
                            <ol>
                                <li>Format video berupa Iframe dari Youtube</li>
                            </ol>
                        </p>
                        <hr />

                        <p><h2>
                            Logo Client
                            </h2>
                            <ol>
                                <li>Ukuran Gambar : 80px x 50px</li>
                                <li>Format Gambar : .jpg .JPEG .png </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin;