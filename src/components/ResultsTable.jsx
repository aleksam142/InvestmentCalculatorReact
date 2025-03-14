import { calculateInvestmentResults, formatter } from '../util/investment.js'

function ResultsTable({ userInputObject }){

    console.log(userInputObject);

    const results = calculateInvestmentResults(userInputObject);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    
    console.log(results);

    return(
        <table id='result'>
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interests (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {results.map((row) => {
                    const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                    const totalAmountInvested = row.valueEndOfYear - totalInterest;

                    return (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ResultsTable