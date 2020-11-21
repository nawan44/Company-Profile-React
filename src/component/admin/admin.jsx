import React from 'react';
import './css/admin.css';

class Admin extends React.Component {
    render() {
        return (
            <div className="container-admin">
                <div className="admin">
                    <div className="rule-admin">
                        <div className="rule-posting">
                            <h1> RULE POSTING
                        </h1>
                            <hr className="hr-admin" />
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Data Perusahaan</legend>
                                    <ol>
                                        <li>Media Sosial berupa link dengan format http://</li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Media Pertner</legend>
                                    <ol>
                                        <li>Ukuran Gambar : 80px x 50px</li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Portofolio</legend>

                                    <ol>
                                        <li>Ukuran Gambar : 300px x 500px</li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Youtube</legend>
                                    <ol>
                                        <li>Format video berupa Iframe dari Youtube</li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Logo Client</legend>
                                    <ol>
                                        <li>Ukuran Gambar : 80px x 50px</li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>
                                    </ol>
                                </fieldset>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin;