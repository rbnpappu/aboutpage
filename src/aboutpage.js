
import './about.css';

function Aboutpage() {
    return (
        <div className='container'>
            <div className="About-page">
                <div className='principal-info'>
                    <h1>Prinicipal Info</h1>
                    <img src="../images/prinicipal.jpeg" alt="image is not loaded" className='image' />
                </div>
                <div className='infomation'>
                    <h2>Prinicipal Name</h2>
                    <p>Nezu</p>

                    <div className='Contact_Info'>
                        <h2>Contact Info</h2>
                        <table>
                            <tr>
                                <th>Email</th>
                                <th>Contact Number</th>

                            </tr>
                            <tr><td> NezuPrincipal@123455UAHighSchool.com</td>
                                <td>0132420404490</td></tr>
                        </table>
                    </div>

                </div>

            </div>



            <div className="faculty_info">
                <div className='Staff'>
                    <table>
                        <tr>
                            <th>
                                Total Staff
                            </th>

                        </tr>
                        <tr>120</tr>

                    </table>
                </div>
                <div className="stafftable">


                    <table className='staffList'>
                        <tr>
                            <th>
                                Staff of Head
                            </th>
                            <th>
                                Name
                            </th>



                        </tr>
                        <tr>
                            <td>Prinicipal</td>
                            <td>Nezu</td>
                        </tr>
                        <tr>
                            <td>Vice Prinicipal</td>
                            <td>Errsor Head</td>
                        </tr>
                        <tr>
                            <td>Canteen Head</td>
                            <td>Alfes</td>
                        </tr>
                        <tr>
                            <td>Sports Head</td>
                            <td>Stronger</td>
                        </tr>
                        <tr>
                            <td>Clutral Head</td>
                            <td>Nezu Hasas</td>
                        </tr>

                    </table>


                </div>




            </div>






            <div className="facitie_List">

                <div className="facilitiestable">


                    <table>
                        <tr>
                            <th>
                                Facilities
                            </th>
                        </tr>
                        <tr>
                            <td>Wifi</td>

                        </tr>
                        <tr>
                            <td>Audotorium</td>

                        </tr>
                        <tr>

                            <td>Library</td>
                        </tr>
                        <tr>
                            <td>Smart Room</td>

                        </tr>

                    </table>


                </div>




            </div>


        </div >



    );
}

export default Aboutpage;