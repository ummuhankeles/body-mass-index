import React, { useState, useEffect } from 'react';
import '../calculate/Calculate.css';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Calculate = ({user,setUser}) => {

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

    const [weight, setWeight] =  useState(0);
    const [height, setHeight] =  useState(0);
    const [bmi, setBmi] = useState(0);
    const [result, setResult] = useState({})

    function calculate() {
        let calculated = weight/(height**2/100**2)
        setBmi(calculated.toFixed(2));
        if(calculated<18.5){
            setResult({ad:"Düşük Kilolu",color:"lightblue"})
        }else if(calculated<24.9){
            setResult({ad:"Normal Kilolu",color:"green"})
        }else if(calculated<29.9){
            setResult({ad:"Fazla Kilolu",color:"gold"})
        }else if(calculated<34.9){
            setResult({ad:"1. sınıf Obez",color:"orange"})
        }else if(calculated<44.9){
            setResult({ad:"2. sınıf Obez ",color:"orangered"})
        }else{
            setResult({ad:"3. sınıf Obez ",color:"firebrick"})
        }
    }

    useEffect(() => {
        if(user !== null) {
            console.log(user)
            let newUser = user
            if(bmi !== 0) {
                newUser.bmiData.push(bmi)
                setUser(newUser)
                localStorage.setItem('user', JSON.stringify(newUser))
            }
        }
    },[result])

    return (
        <div className="calculate text-center">
            <div>
                <div>
                    <h5 className="calculate-title">Kilo Giriniz:</h5>
                    <input 
                        className="calculate-weight" 
                        value={weight}
                        type="number" 
                        name="weight" 
                        onChange={e => setWeight(e.target.value)}>
                    </input>
                </div>
                <br/>
                <div className="mb-4">
                    <h5 className="calculate-title">Boy Giriniz:</h5>
                    <input 
                        className="calculate-height"
                        value={height}
                        type="number" 
                        name="height" 
                        onChange={e => setHeight(e.target.value)}>
                    </input>
                </div>
                <div className="form-btn mb-4">
                    <Button type="submit" onClick={calculate}>Hesapla</Button>
                </div>
                <div className="show-result mb-4">
                    <h5>Result: <span>{bmi}</span></h5>
                </div>
            </div>
        </div>
    )
}

Calculate.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.func
}

export default Calculate;