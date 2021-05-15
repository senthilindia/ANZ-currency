/**
 *
 * @param currencyList
 * @param currencyId
 * @param number
 * @returns {string}
 */
export function displayCurrency({
  currencyList = [],
  currencyId = "AUD",
  number = 0
}) {
  const displayedCurrency = currencyName({ currencyList, currencyId });
  let formatting = number;
  

  return `${formatting} ${displayedCurrency}`;
}

/**
 *
 * @param currencyList
 * @param currencyId
 * @returns {*}
 */
export function currencyName({ currencyList = [], currencyId = "AUD" }) {
  return currencyList.find(currency => currency.id === currencyId).currencyName;
}

/**
 *
 * @param amount
 * @param data
 * @param mode
 * @returns {number}
 */
export function convert({ amount = 0, state = {}, mode ='from' }) {
  const rate = Object.values(state.data)[0];

  let result;

  if (mode === "from") {
    result = amount * rate;
  }
  if (mode === "to") {
    result = amount * (1 / rate);
  }
  result = Math.round(result * 1000) / 1000;
  return  result.toFixed(2);
}
