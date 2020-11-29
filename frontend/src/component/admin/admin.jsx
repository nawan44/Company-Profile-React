import React from 'react';
import './css/admin.css';
import Profile from '../img/profile.png';


class Admin extends React.Component {
    render() {
        return (
            <div className="container-admin">
                <div className="admin">
                    <div className="rule-admin">
                        <div className="rule-posting">
                            <img src={Profile} className="logo-admin" alt=" " />
                            <h1> RULE POSTING
                        </h1>
                            <hr className="hr-admin" />
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Data Perusahaan</legend>
                                    <ol>
                                        <li>Media Sosial berupa link dengan format http://</li>
                                        <li>Logo Perusahaan berukuran width 300px</li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>

                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto">Logo Media Pertner</legend>
                                    <ol>
                                        <li>Ukuran Gambar : 80px x 50px</li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> What We Do</legend>
                                    <ol>
                                        <li>Ukuran Gambar dengan width : 20px </li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Portofolio Flyer</legend>

                                    <ol>
                                        <li>Ukuran Gambar : 300px x 500px</li>
                                        <li>Format Gambar : .jpg .JPEG .png </li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto">Portofolio Youtube</legend>
                                    <p>Format video berupa Iframe dari Youtube</p>
                                    <ol>
                                        <li>Dengan Google Chrome</li>
                                        <li>Buka https://www.youtube.com/</li>
                                        <li>Pilih Video</li>
                                        <li>Pilih Share</li>
                                        <li>Pilih Embed</li>
                                        <li>Copy Paste antara tag iframe</li>
                                    </ol>
                                </fieldset>
                            </p>
                            <p>
                                <fieldset class="border p-2">
                                    <legend class="w-auto"> Logo Client</legend>
                                    <ol>
                                        <li>Ukuran Gambar lebar : 80px </li>
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