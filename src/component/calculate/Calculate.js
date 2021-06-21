import React, { useState } from 'react';
import '../calculate/Calculate.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Calculate() {
    const Button = styled.button`
        width: 350px;
        padding: 5px;
        border-radius: 10px;
        background-color: #fff;
        border: 1px solid #079D01;
        color: #079D01;
        :hover {
            background-color: #079D01;
            color: #fff;
        }
    `

    const [state, setState] =  useState({
        weight: "",
        height: ""
    })

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        setState({
            [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="calculate text-center">
            <form onSubmit={handleSubmit}>
                <div>
                    <h5 className="calculate-title">Kilo Giriniz:</h5>
                    <input className="calculate-weight" type="number" name="weight" onChange={handleChange}></input>
                </div>
                <br/>
                <div className="mb-5">
                    <h5 className="calculate-title">Boy Giriniz:</h5>
                    <input className="calculate-height" type="number" name="height" onChange={handleChange}></input>
                </div>
                <div className="form-btn">
                    <Link to="/output">
                        <Button type="submit">Hesapla</Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default Calculate;