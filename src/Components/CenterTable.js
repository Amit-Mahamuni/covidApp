import React, { useState, useEffect } from "react";
import { Table, Badge, Row, Col, Modal, ListGroup, ButtonGroup, Button, Form } from "react-bootstrap";

function CenterTable(props) {

    const [filterlist, setfilterlist] = useState({ "fee": "All", "availbility": "All", "age": "All", "vaccine": "All", "block_name": "All" });
    const [filterCenterList, setfilterCenterList] = useState();
    const [blockSelect, setblockSelect] = useState();
    const [show, setShow] = useState(false);
    const [centDetail, setcentDetail] = useState({ "center": "", "session": "" });

    useEffect(() => {
        setFilter();
        setShow(false);
    }, [filterlist]);

    useEffect(() => {
        console.log(centDetail);
    }, [centDetail]);


    const dateset = [];

    const filterOptSet = {
        "fee": [],
        "availbility": ["Available", "Book"],
        "age": [],
        "vaccine": [],
        "block_name": []
    }

    props.centerList.centers.map((cent) => {
        if (!filterOptSet.block_name.includes(cent.block_name)) { filterOptSet.block_name.push(cent.block_name) }
        if (!filterOptSet.fee.includes(cent.fee_type)) { filterOptSet.fee.push(cent.fee_type) }
        cent.sessions.map((sess) => {
            if (!dateset.includes(sess.date)) { dateset.push(sess.date) }
            if (!filterOptSet.vaccine.includes(sess.vaccine)) { filterOptSet.vaccine.push(sess.vaccine) }
            if (!filterOptSet.age.includes(sess.min_age_limit)) { filterOptSet.age.push(sess.min_age_limit) }
        }
        )
    }
    )

    function setFilter() {

        // if (id == 1) {
        //     setfilterlist({ All: false, Paid: true, Free: false });
        //     setfilterCenterList({ centers: props.centerList.centers.filter((center) => { return center.fee_type.toLowerCase().includes(("Paid").toLowerCase()) }) });
        //     // console.log(filterCenterList);
        // } else if (id == 2) {
        //     setfilterlist({ All: false, Paid: false, Free: true });
        //     setfilterCenterList({ centers: props.centerList.centers.filter((center) => { return center.fee_type.toLowerCase().includes(("Free").toLowerCase()) }) });
        //     // console.log(filterCenterList);
        // } else {
        //     setfilterlist({ All: true, Paid: false, Free: false });
        //     setfilterCenterList();
        // }
        console.log("render");
        let temp = props.centerList.centers;
        props.setrchstate(false)
        if (filterlist.fee != "All") {
            temp = temp.filter((center) =>
                center.fee_type.toLowerCase().includes((filterlist.fee).toLowerCase())
            )
            // setfilterCenterList({ centers: temp });
        }

        if (filterlist.block_name != "All") {
            temp = temp.filter((center) =>
                center.block_name == filterlist.block_name
            )
            // setfilterCenterList({ centers: temp });
        }

        if (filterlist.age != "All") {
            // temp = props.centerList.centers;
            let ageTemp;
            temp = temp.filter((center) => {
                ageTemp = center.sessions.filter(sess => sess.min_age_limit === filterlist.age)
                if (ageTemp.length === 0) {
                    return false;
                }
                center.sessions = ageTemp;
                return true;
            }
            );
            // setfilterCenterList({ centers: temp });
        }

        if (filterlist.vaccine != "All") {
            // temp = props.centerList.centers;
            let ageTemp;
            temp = temp.filter((center) => {
                ageTemp = center.sessions.filter(sess =>
                    sess.vaccine.toLowerCase().includes((filterlist.vaccine).toLowerCase())
                )
                if (ageTemp.length === 0) {
                    return false;
                }
                center.sessions = ageTemp;
                return true;
            }
            );
            // setfilterCenterList({ centers: temp });
        }

        if (filterlist.availbility != "All") {
            // temp = props.centerList.centers;
            let ageTemp;
            temp = temp.filter((center) => {
                ageTemp = center.sessions.filter(sess =>
                    filterlist.availbility === "Available" ?
                        sess.available_capacity > 0 : sess.available_capacity == 0
                )
                if (ageTemp.length === 0) {
                    return false;
                }
                center.sessions = ageTemp;
                return true;
            }
            );
            // setfilterCenterList({ centers: temp });
        }

        if (filterlist.fee == "All" && filterlist.age == "All" &&
            filterlist.vaccine == "All" && filterlist.availbility == "All"
            && filterlist.block_name == "All") {
            setfilterCenterList();
        } else {
            setfilterCenterList({ centers: temp });
        }

        // setfilterCenterList(
        //     {
        //         centers: props.centerList.centers.filter((center) =>
        //             center.fee_type.toLowerCase().includes((filterlist.fee).toLowerCase())
        //         ).filter((center) =>
        //             center.sessions.map((sess) => { if (sess.min_age_limit == 18) { return true } else { return false } }
        //             )
        //         )
        //     }
        // );

    }

    function dateformat(date) {
        const dateObject = new Date((date).split("-").reverse().join("/"));
        // const humanDateFormat = dateObject.toLocaleString();
        var option = { day: "numeric", month: "short", year: "numeric" };
        return dateObject.toLocaleString(undefined, option);
    }

    function setFitopt(opt, val) {
        if (opt.split(" ")[0] == "block_name") {
            setblockSelect(val);
            console.log(opt + " = " + val);
        }
        setfilterlist({ ...filterlist, [opt]: val });
    }

    function FilterOpt() {

        return (
            Object.keys(filterOptSet).map(function (opt) {
                if (opt != "block_name") {
                    return (
                        <div className="mr-2 my-2" key={opt}>
                            <ButtonGroup >
                                <Button size="sm" variant="outline-secondary"
                                    className={filterlist[opt] == "All" ? "active" : "inactive"}
                                    onClick={() => setFitopt(opt, "All")}>All</Button>
                                {
                                    filterOptSet[opt].map((fee) =>
                                        <Button size="sm" variant="outline-secondary" key={opt + "_" + fee}
                                            className={filterlist[opt] == fee ? "active" : "inactive"}
                                            onClick={() => setFitopt(opt, fee)}>{fee}
                                        </Button>
                                    )
                                }

                            </ButtonGroup>
                            <small class="text-muted form-text">{opt}</small>
                        </div >
                    )
                } else {
                    return (
                        <Form.Group controlId="exampleForm.ControlSelect1" className="mr-2 my-2" key={opt}>
                            <Form.Control as="select" value={blockSelect} onChange={(event) => setFitopt("block_name", event.target.value)}>
                                <option>All</option>
                                {
                                    filterOptSet[opt].map((fee) =>
                                        <option>{fee}</option>
                                    )
                                }
                            </Form.Control>
                            <small class="text-muted form-text">{opt}</small>
                        </Form.Group>
                    )
                }

            })
        )

    }

    function restsetFitopt(opt) {
        console.log(opt);
    }

    function CenterDetail() {
        return (
            centDetail.center && centDetail.session ?
                <Modal show={show} onHide={() => setShow(false)} centered>
                    <Modal.Header closeButton>
                        <h5>Center Details</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Row>
                                <Col>
                                    <span>
                                        <span className="centerTitle">{centDetail.center.name} </span><br />
                                        <span className="centerSubTitle">{centDetail.center.block_name + ", " + centDetail.center.district_name + ", " + centDetail.center.state_name + "," + centDetail.center.pincode}</span>
                                    </span>
                                    <a href={"https://www.google.co.in/maps/search/"+centDetail.center.name} target="blank" className="btn btn-outline-secondary searchBtn">Get Direction</a>
                                </Col>
                                <Col>
                                    <ListGroup variant="flush" className="modelList">
                                        <ListGroup.Item>{centDetail.session.vaccine}</ListGroup.Item>
                                        <ListGroup.Item>Fee : <Badge variant="info">{centDetail.center.fee_type}</Badge> </ListGroup.Item>
                                        <ListGroup.Item>
                                            {
                                                centDetail.session.available_capacity != 0 ?
                                                    <Badge pill variant="info" className="border">{"Available : " + centDetail.session.available_capacity}</Badge>
                                                    : <Badge pill variant="danger" className="border">Booked</Badge>
                                            }
                                        </ListGroup.Item>
                                        <ListGroup.Item>{"Age " + centDetail.session.min_age_limit + "+"}</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div>
                            <h5>Slot Details</h5>
                            <Row>
                                <Col>
                                    <h6>Time</h6>
                                    <ListGroup className="modeltimeSlotList">
                                        {
                                            centDetail.session.slots.map((time) =>
                                                <ListGroup.Item>{time}</ListGroup.Item>
                                            )
                                        }
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <h6>Vaccin </h6>
                                    <ListGroup className="list-group-numbered">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span>1st Dose :</span><span>{centDetail.session.available_capacity_dose1}</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <span>2nd Dose :</span><span>{centDetail.session.available_capacity_dose2}</span></ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>
                : <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                </Modal>
        )
    }

    function scrollDiv(dir) {
        if(dir == "L"){
            document.getElementById("wrapper").scrollLeft -= 100;
        }else{
            document.getElementById("wrapper").scrollLeft += 100;
        }
        
    }

    const slotDetail = (cent_id, sess_id) => {
        console.log(cent_id + "=" + sess_id);
        let cent_temp = props.centerList.centers.find((cent) => cent_id === cent.center_id);
        let sess_temp = cent_temp.sessions.find((sess) => sess_id === sess.session_id);
        // setcentDetail({"center":cent_temp, "session":sess_temp})
        setcentDetail({ ...centDetail, "center": cent_temp, "session": sess_temp })

        console.log(cent_temp);
        console.log(sess_temp);
        setShow(true);
    }

    return (
        <div>
            <CenterDetail />
            <div className="filterSec">
                <h5>Filter</h5>
                <div className="filterOptSec">
                    <FilterOpt />
                </div>
            </div>
            <hr />
            <br />
            <div >
                <Row><Col className="d-flex my-1 align-items-center" sm={8}>
                    {
                        Object.keys(filterOptSet).find((sess) => filterlist[sess] != "All") ?
                            <div className="filterOptSec"><h5 className="filterTitleTxt">Result For :</h5>
                                {
                                    Object.keys(filterOptSet).map((opt) => {
                                        if (filterlist[opt] != "All") {
                                            return (
                                                <Button size="sm" variant="outline-dark" key={opt + "_Tag"}
                                                    className="filterTag mx-1" onClick={() => restsetFitopt(opt)}>
                                                    {opt == "age" ? "Age " + filterlist[opt] + "+" : filterlist[opt]}
                                                </Button>
                                            )
                                        }
                                    }

                                    )
                                }</div> : <h5 className="filterTitleTxt">{props.centerList.centers.length +" - Result"}</h5>
                    }
                </Col><Col className="d-flex flex-row-reverse my-1 align-items-center" sm={4}>
                        <ButtonGroup className="ml-2" aria-label="First group">
                            <Button variant="outline-secondary" size="sm"
                                onClick={() => scrollDiv("L")}
                            >Prev</Button>
                            <Button variant="outline-secondary" size="sm"
                                onClick={() => scrollDiv("R")}
                            >Next</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
            <div className="wrapper" id="wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="sticky-col first-col">Center</th>
                            {
                                dateset.map((keyName) => {
                                    return (
                                        <th key={keyName} >
                                            {dateformat(keyName)}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterCenterList && !props.srchstate ?
                                filterCenterList.centers.map((cent) =>
                                    <tr>
                                        <td className="sticky-col first-col">
                                            <span className="centerTitle">{cent.name} </span>
                                            {cent.fee_type == "Paid" ? <Badge variant="info">{cent.fee_type}</Badge> : <span></span>} <br />
                                            <span className="centerSubTitle">{cent.block_name + ", " + cent.district_name + ", " + cent.state_name + "," + cent.pincode}</span>
                                            {cent.vaccine_fees ? cent.vaccine_fees.map((fee) => { return (<span className="feetext"><br /><span>{fee.vaccine + " : ₹" + fee.fee} </span><br /></span>) }) : <span></span>}
                                        </td>
                                        {
                                            dateset.map((datecol) => {
                                                let temp;
                                                temp = cent.sessions.find((sess) => datecol === sess.date)
                                                return (
                                                    <td className="text-center ">
                                                        {
                                                            temp !== undefined ?
                                                                <span>
                                                                    {
                                                                        temp.available_capacity != 0 ?
                                                                            <Badge pill variant="info" className="border">{"Available : " + temp.available_capacity}</Badge>
                                                                            : <Badge pill variant="danger" className="border">Booked</Badge>
                                                                    }
                                                                    <br /><span className="centerTitle " > {temp.vaccine}</span><br />
                                                                    <span className="centerSubTitle ">{"Age " + temp.min_age_limit + "+"}</span><br />
                                                                    <Button variant="outline-secondary" size="sm" className="detailBtn"
                                                                        onClick={() => slotDetail(cent.center_id, temp.session_id)}>Detail</Button>

                                                                </span>
                                                                :
                                                                <span>
                                                                    <Badge pill variant="light" className="border">N/A</Badge>
                                                                </span>
                                                        }

                                                    </td>
                                                )
                                            }
                                            )
                                        }
                                    </tr>
                                )
                                :
                                props.centerList ?
                                    props.centerList.centers.map((cent) =>
                                        // console.log(cent)
                                        <tr>
                                            <td className="sticky-col first-col">
                                                <span className="centerTitle">{cent.name} </span>
                                                {cent.fee_type == "Paid" ? <Badge variant="info">{cent.fee_type}</Badge> : <span></span>} <br />
                                                <span className="centerSubTitle">{cent.block_name + ", " + cent.district_name + ", " + cent.state_name + "," + cent.pincode}</span>
                                                {cent.vaccine_fees ? cent.vaccine_fees.map((fee) => { return (<span className="feetext"><br /><span>{fee.vaccine + " : ₹" + fee.fee} </span><br /></span>) }) : <span></span>}
                                            </td>

                                            {
                                                dateset.map((datecol) => {
                                                    let temp;
                                                    temp = cent.sessions.find((sess) => datecol === sess.date)
                                                    return (
                                                        <td className="text-center ">
                                                            {
                                                                temp !== undefined ?
                                                                    <span>
                                                                        {
                                                                            temp.available_capacity != 0 ?
                                                                                <Badge pill variant="info">{"Available : " + temp.available_capacity}</Badge>
                                                                                : <Badge pill variant="danger">Booked</Badge>
                                                                        }
                                                                        <br /><span className="centerTitle " > {temp.vaccine}</span><br />
                                                                        <span className="centerSubTitle ">{"Age " + temp.min_age_limit + "+"}</span><br />
                                                                        <Button variant="outline-secondary" size="sm" className="detailBtn"
                                                                            onClick={() => slotDetail(cent.center_id, temp.session_id)}>Detail</Button>

                                                                    </span>
                                                                    :
                                                                    <span>
                                                                        <Badge pill variant="light" className="border">N/A</Badge>
                                                                    </span>
                                                            }

                                                        </td>
                                                    )
                                                }
                                                )
                                            }
                                        </tr>
                                    )
                                    : <p></p>
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CenterTable;