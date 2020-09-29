import React from 'react';
import { Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';

const AirplaneCard = (props) => {
    return (
            <Col>
                <Card>
                    <CardBody>
                        <CardTitle>Flt Number: {props.flight}</CardTitle>
                        <CardText>Country: {props.country}</CardText>
                        <CardText>Latitude: {props.latitude}</CardText>
                        <CardText>Longitude: {props.longitude}</CardText>
                    </CardBody>
                </Card>
            </Col>
    )   
}

export default AirplaneCard