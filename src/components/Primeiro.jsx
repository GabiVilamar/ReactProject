import React from 'react';

//Aqui quando vou criar minha função, posso fazer de algumas formas diferentes:
/*

function Primeiro() {
    return "primeiro";
}aqui, eu não preciso usar o import React, pq estou retornando uma String, e não JSX;

function Primeiro() {
    return (
        <h1> Primeiro</h1>
    )
}aqui, eu preciso do import do React, pq estou usando a sintase JSX;

function Primeiro() {
    return (
        <>
        <h1>Primeiro</h1>
        <h2>Exemplo de um componente React</h2>
        </> ou usar o
    )
}    
    Return (
        <React.Fragment>
        <h1>Primeiro</h1>
        <h2>Exemplo de um componente React</h2>
        </React.Fragment>
    )  
}

export default function () {
    return (
        <>
        <h1>teste</h1>
        <h2>teste2</h2>
        </>
    )
}aqui estou usando função anônima e a tática do react de poder usar duas tags num mesmo componente sem problemas;

export default () => {
    return (
        <>
            <h1>Opa, 1</h1>
            <h2>Opa, 2</h2>
        </>    
    )
}

*/
export default () =>
        <>
            <h1>Primeiro componente</h1>
            <h2>Exemplo de um componente react</h2>
            <h3>Aqui a sintaxe é em arrow function</h3>
        </>    
