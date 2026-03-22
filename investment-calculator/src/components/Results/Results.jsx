import { calculateInvestmentResults, formatter } from "../../util/investment";
import FinalResult from "./FinalResult";

/* --------------------------------------------------------
Results component - Provides the final result at the xth 
    year and also provides a year by year computation

  - results > Computed using the calculateInvestmentResults
      method from utils which provides an array for each year
      From this, we can get the result for the last year and 
      send to the FinalResult component and render the table
      for each year
-------------------------------------------------------- */

const Results = ({ inputs }) => {
  const computedInputs = Object.fromEntries(
    Object.entries(inputs).map(([key, value]) => [key, +value]),
  );
  const results = calculateInvestmentResults(computedInputs);

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
  return (
    <>
      <FinalResult inputs={inputs} result={results[results.length - 1]} />
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
        <tbody>
          {results.map(
            ({ year, valueEndOfYear, interest, annualInvestment }) => {
              const totalInterest =
                valueEndOfYear -
                annualInvestment * year -
                computedInputs.initialInvestment;
              const totalAmountInvested = valueEndOfYear - totalInterest;

              return (
                <tr key={year}>
                  <td>{year}</td>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </>
  );
};

export default Results;
