import React, { useState } from 'react';
import Select from 'react-select';
import './customselect.css';

export const CustomSelect = () => {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: '#242E42',
            color: '#FFFFFFDE',
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: '#242E42',
            border: '1px solid #1176B7',
            color: '#FFFFFFDE',
        }),
        singleValue: (provided) => ({
            ...provided,
            backgroundColor: '#242E42',
            color: '#FFFFFFDE',
        }),
        menuList: (provided) => ({
            ...provided,
            backgroundColor: '#242E42',
            border:'1px solid #1176B7',
            borderRadius:'5px',
            color: '#FFFFFFDE',
        }),
    }
    const [profession, setProfession] = useState([]);
    const options = [
        {value: 'Enfermeira(o)', label:'Enfermeira(o)'},
        {value: 'Médica(o)', label:'Médica(o)'},
        {value: 'Técnica de Enfermagem', label:'Técnica de Enfermagem'},
        {value: 'Recepcionista', label:'Recepcionista'},
        {value: 'Perito Papiloscopista', label:'Perito Papiloscopista'},
    ];

    function handleSubmit() {
        // e.preventDefault();
       console.log("Profissão escolhida: ", profession.value);
    }
    return(
        <>
            <Select options={options} onChange={setProfession} styles={customStyles} placeholder="Selecione uma profissão..."/>
        </>
    );
}