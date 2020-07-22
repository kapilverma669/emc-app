import React, {useState} from 'react';
import classes from './Form.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import axios from 'axios';


const Form = (props) => {

    const [inputValue, setInputValue] = useState({
        eutName: '' ,
        slNo: ''

    });

    const inputValueHandler = (event) => {
        const inputElement = event.target;
 
        setInputValue ((preValue) => {
             return ({
                 ...preValue,
                 [inputElement.name] : inputElement.value
             });
         });
    }

    const submitButtonHandler = (event) => {
        console.log(JSON.stringify(inputValue));
        axios.post('http://localhost:4040/post', inputValue)
        .then((res)=>{
            console.log(res); 
        }
        ).catch((err)=>{
            console.log(err);
        });
    }


    // console.log(classes.Form);
    return(
        <div className= {classes.Form}>
            <Input 
                type='text'
                name='eutName'
                placeholder='Enter EUT Name Here' 
                changed= {inputValueHandler}
                value={inputValue.eutName}
                />
            <Input 
                type='text'
                name='slNo'
                placeholder='Enter EUT Serial Number Here' 
                changed= {inputValueHandler}
                value={inputValue.slNo} 
                />
                
            <Button 
            clicked = {submitButtonHandler}
            buttonName='Submit' />
        </div>
    );
}

export default Form;