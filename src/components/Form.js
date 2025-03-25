import React, { useState } from 'react';
import { sendToGoogleSheets } from '../utils/googleSheetsAPI';

const Form = () => {
    const [guestName, setGuestName] = useState('');
    const [familyMembers, setFamilyMembers] = useState(['']);

    const handleFamilyMemberChange = (index, value) => {
        const updatedMembers = [...familyMembers];
        updatedMembers[index] = value;
        setFamilyMembers(updatedMembers);
    };

    const addFamilyMember = () => {
        setFamilyMembers([...familyMembers, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            guestName,
            familyMembers: familyMembers.filter(member => member !== ''),
        };
        await sendToGoogleSheets(data);
        setGuestName('');
        setFamilyMembers(['']);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Confirmação de Presença</h2>
            <label>
                Nome do Convidado:
                <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                />
            </label>
            <h3>Membros da Família:</h3>
            {familyMembers.map((member, index) => (
                <label key={index}>
                    Nome do Membro da Família:
                    <input
                        type="text"
                        value={member}
                        onChange={(e) => handleFamilyMemberChange(index, e.target.value)}
                    />
                </label>
            ))}
            <button type="button" onClick={addFamilyMember}>Adicionar Membro da Família</button>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;