import React, { useState } from 'react'

import styles from "./Form.module.css"

const Form = ({ setYearlyData }) => {
    const [currentSavingsInput, setCurrentSavingsInput] = useState(0);
    const [yearlyContributionInput, setYearlyContributionInput] = useState(0);
    const [expectedReturnInput, setExpectedReturnInput] = useState(0);
    const [durationInput, setDurationInput] = useState(0);

    const resetFormInputs = () => {
        setCurrentSavingsInput(0);
        setYearlyContributionInput(0);
        setExpectedReturnInput(0);
        setDurationInput(0)
    }

    const calculateHandler = (e) => {
        e.preventDefault();

        const yearlyData = []; // per-year results

        const initialInvestment = +currentSavingsInput;
        let currentSavings = +currentSavingsInput;
        const yearlyContribution = +yearlyContributionInput;
        const expectedReturn = +expectedReturnInput / 100;
        const duration = +durationInput;

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;

            yearlyData.push({
                year: i + 1,
                initialInvestment: initialInvestment,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        setYearlyData(yearlyData)
        resetFormInputs();
    }


    return (
        <form onSubmit={calculateHandler} className={styles["form"]}>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(e) => setCurrentSavingsInput(e.target.value)} value={currentSavingsInput} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(e) => setYearlyContributionInput(e.target.value)} value={yearlyContributionInput} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label >
                    <input onChange={(e) => setExpectedReturnInput(e.target.value)} value={expectedReturnInput} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(e) => setDurationInput(e.target.value)} value={durationInput} type="number" id="duration" />
                </p>
            </div>
            <p className={styles["actions"]}>
                <button onClick={resetFormInputs} type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form