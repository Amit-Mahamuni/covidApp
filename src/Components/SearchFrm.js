import React, { useState, useEffect } from "react";
import { Card, Button, Col, Form, ListGroup } from "react-bootstrap";
import axios from 'axios';
import CenterTable from "./CenterTable";

function SearchFrm() {

    const [state, setstate] = useState({ id: "", name: "" });
    const [srchstate, setsrchstate] = useState(false);
    const [city, setcity] = useState({ id: "", name: "" });
    const [stateList, setstateList] = useState({});
    const [distList, setdistList] = useState({});
    const [filterstateList, setfilterstateList] = useState({ states: [], show: false });
    const [filterdistList, setfilterdistList] = useState({ dist: [], show: false });
    const [centerListpss, setcenterListpss] = useState();

    useEffect(() => {
        getList();
        getLocalValue();
    }, []);

    function getList() {
        axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((response) => {
            setstateList(response.data);
            console.log(stateList.states);
        });
    }

    function getLocalValue() {
        if (localStorage.getItem("state") != null &&
            localStorage.getItem("state") != "" &&
            localStorage.getItem("state") != undefined) {
            setstate(JSON.parse(localStorage.getItem("state")));
            axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + JSON.parse(localStorage.getItem("state")).id).then((response) => {
                setdistList(response.data);
                console.log(response.data);
            });
        }
        if (localStorage.getItem("district") != null &&
            localStorage.getItem("district") != "" &&
            localStorage.getItem("district") != undefined) {
            setcity(JSON.parse(localStorage.getItem("district")));
        }
        if (localStorage.getItem("centerlist") != null &&
            localStorage.getItem("centerlist") != "" &&
            localStorage.getItem("centerlist") != undefined) {
            setcenterListpss(JSON.parse(localStorage.getItem("centerlist")));
        }
    }

    function onstate(event) {
        setstate({ name: event.target.value });
        if (stateList) {
            setfilterstateList({ states: stateList.states.filter((state) => { return state.state_name.toLowerCase().includes((event.target.value).toLowerCase()) }), show: true });
        } else {
            console.log("empty");
        }
    }

    function oncity(event) {
        setcity({ name: event.target.value });
        if (stateList) {
            setfilterdistList({ dist: distList.districts.filter((dist) => { return dist.district_name.toLowerCase().includes((event.target.value).toLowerCase()) }), show: true });
        } else {
            console.log("empty");
        }
    }

    function setState(id, name) {
        setstate({ name: name, id: id });
        setfilterstateList({});
        localStorage.setItem("state", JSON.stringify({ name: name, id: id }));
        localStorage.setItem("district", null);
        setcity({ name: "", id: "" });
        axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + id).then((response) => {
            setdistList(response.data);
            console.log(response.data);
        });
    }

    function setDistrict(id, name) {
        setcity({ name: name, id: id });
        localStorage.setItem("district", JSON.stringify({ name: name, id: id }));
        setfilterdistList({});
    }

    function searchCal(dis_id) {
        axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + dis_id + "&date=" + getCurrDate()).then((response) => {
            setcenterListpss(response.data);
            localStorage.setItem("centerlist", JSON.stringify(response.data));
            setsrchstate(true)
        });
    }

    function getCurrDate() {
        return new Date().toISOString().slice(0, 10).split("-").reverse().join("-");
    }

    function StateList() {
        return (
            <ListGroup >
                {
                    filterstateList.show ?
                        filterstateList.states.map((state) =>
                            <ListGroup.Item action onClick={() => setState(state.state_id, state.state_name)}>{state.state_name}</ListGroup.Item>
                        )
                        : <span></span>
                }
            </ListGroup>
        );
    }

    function CityList() {
        return (
            <ListGroup >
                {
                    filterdistList.show ?
                        filterdistList.dist.map((dist) =>
                            <ListGroup.Item action onClick={() => setDistrict(dist.district_id, dist.district_name)}>{dist.district_name}</ListGroup.Item>
                        )
                        : <span></span>
                }
            </ListGroup>
        );
    }

    return (
        <Card className="bg-white shadow">
            <Card.Body>
                <Card.Title><h5>Search vaccination center near you.</h5></Card.Title>
                <Form.Row>
                    <Col md={4} sm={12}>
                        <Form.Group>
                            <Form.Control onChange={onstate} value={state.name}
                                type="text" placeholder="State" id="inpState" name="inpState" autocomplete="off"/>
                            <Form.Text className="text-muted">
                                Enter State Name 
                            </Form.Text>
                            <StateList />
                        </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group>
                            <Form.Control onChange={oncity} value={city.name}
                                type="text" placeholder="City" id="inpCity" name="inpCity" autocomplete="off"/>
                                <Form.Text className="text-muted">
                                Enter District Name 
                            </Form.Text>
                            <CityList />
                        </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Button className="searchBtn" onClick={() => searchCal(city.id)} variant="outline-dark">Search</Button>
                    </Col>
                </Form.Row>
                <hr />
                {
                    centerListpss ?
                        <CenterTable centerList={centerListpss} srchstate={srchstate} setrchstate={setsrchstate} />
                        : <p>Select Sate and Dist</p>
                }

            </Card.Body>
        </Card>
    );
}

export default SearchFrm;