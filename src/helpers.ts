export const temperatureConverter = (temperature: number): string => {
  return ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
};

export const updatedDate = (): string => {
  const today: Date = new Date();
  const monthArr: string[] = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const day: number = today.getDate();
  const month: number = today.getMonth();
  const year: number = today.getFullYear();

  return `${monthArr[month]} ${day}, ${year}`;
};
