import React from 'react'
import formatter
    from '../utils/formater'
import styles from "./Results.module.css"

const Results = ({ yearlyData }) => {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map(data => {
                    return <tr key={Math.random()}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.savingsEndOfYear)}</td>
                        <td>{formatter.format(data.yearlyInterest)}</td>
                        <td>{formatter.format(data.savingsEndOfYear - yearlyData[0].initialInvestment - data.yearlyContribution * data.year)}</td>
                        <td>{formatter.format(data.initialInvestment + data.yearlyContribution * data.year)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results