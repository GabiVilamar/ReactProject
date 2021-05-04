import React from 'react';

export default props =>
    <div>
        <h2>Os Filhos:</h2>
        <div>
            {props.titulo}
            {props.children}
        </div>
    </div>