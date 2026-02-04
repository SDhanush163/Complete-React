import React from "react";
import { formatter } from "../../util/investment";
import profitArrow from "../../assets/up-arrow-green.png";
import lossArrow from "../../assets/down-arrow-red.png";

const FinalResult = ({
  inputs,
  result: { year, valueEndOfYear, interest, annualInvestment },
}) => {
  const totalInterest =
    valueEndOfYear - annualInvestment * year - Number(inputs.initialInvestment);
  const totalAmountInvested = valueEndOfYear - totalInterest;
  const isProfit = valueEndOfYear > totalAmountInvested;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Total Value </label>
          <p>
            {formatter.format(valueEndOfYear)}{" "}
            {isProfit ? (
              <img src={profitArrow} style={{ height: "1rem" }} alt="" />
            ) : (
              <img src={lossArrow} style={{ height: "1rem" }} alt="" />
            )}
          </p>
        </p>
        <p>
          <label htmlFor="">Estimated Returns </label>
          <p>
            {formatter.format(totalInterest)}{" "}
            {isProfit ? (
              <img src={profitArrow} style={{ height: "1rem" }} alt="" />
            ) : (
              <img src={lossArrow} style={{ height: "1rem" }} alt="" />
            )}
          </p>
        </p>
        <p>
          <label htmlFor="">Invested Capital </label>
          <p>{formatter.format(totalAmountInvested)}</p>
        </p>
      </div>
    </section>
  );
};

export default FinalResult;
