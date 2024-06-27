import React from 'react';

const Transacoes = ({ transacao }) => {
    return (
        <div>
            <h2>Transações</h2>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Entrada</th>
                        <th>Saída</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {transacao.map((transf) => (
                        <tr key={transf.codigo}>
                            <td>{transf.codigo}</td>
                            <td>{transf.descricao}</td>
                            <td>{transf.entrada}</td>
                            <td>{transf.saida}</td>
                            <td>{transf.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transacoes;
