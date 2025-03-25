import React from 'react';

const Confirmation = ({ guestName, familyMembers }) => {
    return (
        <div className="confirmation">
            <h2>Confirmação de Presença</h2>
            <p>Obrigado, {guestName}, por confirmar sua presença!</p>
            <p>Você estará acompanhado por:</p>
            <ul>
                {familyMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
            <p>Estamos ansiosos para celebrar juntos os 100 anos da vovó!</p>
        </div>
    );
};

export default Confirmation;