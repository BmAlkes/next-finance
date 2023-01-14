const useGetCurrency = (amount) => {
  const currency = new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "nis",
  }).format(amount);

  return currency;
};

export default useGetCurrency;
