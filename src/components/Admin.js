import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { PermIdentity, BarChart, Timeline } from "@material-ui/icons";
import { commerce } from '../lib/commerce';

const Admin = () => {

    const [userData, setUserData] = useState([]);
    const [appointmentData, setAppointmentData] = useState([]);
    const [productData, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
        console.log(data);
    };

    const usercolumns = [
        { title: "ID", field: "_id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" }
    ];

    const appointmentColoums = [
        { field: "name", title: "Booked For" },
        { field: "date", title: "Date" },
        { field: "service", title: "Services" },
        { field: "tookBy.name", title: "Booked By" }
    ];

    const productColoums = [
        { field: "id", title: "ID" },
        { field: "name", title: "Name" },
        { field: "price.formatted_with_symbol", title: "Price" },
        { field: "inventory.available", title: "Quatity" }
    ];

    useEffect(() => {
        fetch("/allusers")
            .then(res => res.json())
            .then(resData => {
                setUserData(resData.list)
                // console.log(resData);
            });

        fetch("/allapmnt")
            .then((res) => res.json())
            .then(result => {
                setAppointmentData(result.list);
                // console.log(result);
            });

        fetchProducts();

    }, [])


    return (
        <div className="AdminContainer">
            <div className="AdminPanel">
                <div className="sidebar left">
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <h3 className="sidebarTitle">Dashboard</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem" >
                                    <a class="sidebarListItem" href="#apmnt">
                                        <BarChart className="sidebarIcon" />
                                        Appoinments
                                    </a>
                                </li>
                                <li className="sidebarListItem" >
                                    <a class="sidebarListItem" href="#usr">
                                        <PermIdentity className="sidebarIcon" />
                                        Users
                                    </a>
                                </li>
                                <li className="sidebarListItem" >
                                    <a class="sidebarListItem" href="#prdct">
                                        <Timeline className="sidebarIcon" />
                                        Products
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="UserListContainer right">
                    {/* Appointments Table */}
                    <div className="sectioInside">
                        <section id="apmnt">
                            <div className="UserList">
                                <div>
                                    <MaterialTable
                                        title="Appoinments"
                                        data={appointmentData}
                                        columns={appointmentColoums}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Users Table */}
                    <div className="sectioInside">
                        <section id="usr">
                            <div className="UserList">
                                <div>
                                    <MaterialTable
                                        title="Users"
                                        data={userData}
                                        columns={usercolumns}
                                        options={{ search: false }}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Products Table */}
                    <div className="sectioInside">
                        <section id="prdct">
                            <div className="UserList">
                                <div>
                                    <MaterialTable
                                        title="Products "
                                        data={productData}
                                        columns={productColoums}
                                        options={{ search: false }}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Admin
