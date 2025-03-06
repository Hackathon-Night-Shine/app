const daysOfWeekHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  ];

const generateDateWithDayHebrew = (date: Date) => {
    return `יום ${daysOfWeekHebrew[date.getDay()]} ${date.toLocaleDateString(
      "en-GB"
    )}`;
};

export { daysOfWeekHebrew, generateDateWithDayHebrew };

