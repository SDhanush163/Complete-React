export function calculateInvestmentResults({
  initialInvestment,
  monthlyInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  const monthylRate = Math.pow(1 + expectedReturn / 100, 1 / 12) - 1;
  let investmentValue = initialInvestment;

  for (let year = 0; year < duration; year++) {
    let interestEarnedInYear = 0;
    for (let month = 0; month < 12; month++) {
      const interestEarnedInMonth = investmentValue * monthylRate;
      interestEarnedInYear += interestEarnedInMonth;
      investmentValue += interestEarnedInMonth + monthlyInvestment;
    }
    annualData.push({
      year: year + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: monthlyInvestment * 12,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
