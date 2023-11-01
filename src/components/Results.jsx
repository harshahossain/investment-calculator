import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  //console.log(resultsData);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  const data = resultsData.map((result) => {
    const totalInterstValue =
      result.valueEndOfYear -
      initialInvestment -
      result.annualInvestment * result.year;

    const totalAmountInvested = result.valueEndOfYear - totalInterstValue;

    return (
      <tr key={result.year}>
        <td>{result.year}</td>
        <td>{formatter.format(result.valueEndOfYear)}</td>
        <td>{formatter.format(result.interest)}</td>
        <td>{formatter.format(totalInterstValue)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
}
