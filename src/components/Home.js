import React from 'react';

const Home = ({ resumo }) => {
    const totalEntradas = resumo.reduce((x, y) => x + y.entrada, 0);
    const totalSaidas = resumo.reduce((x, y) => x + y.saida, 0);
    const saldoAtual = totalEntradas - totalSaidas;

    return (
        <div>
            <h3>Home</h3>
            <p>Total Entradas: {totalEntradas}</p>
            <p>Total Saídas: {totalSaidas}</p>
            <p>Saldo Atual: {saldoAtual}</p>
        </div>
    );
};

export default Home;
