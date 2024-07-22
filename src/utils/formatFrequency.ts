// utils/formatFrequency.ts

function formatFrequency(interval: string): string {
  const match = interval.match(/(?:(\d+) (\w+))/g);
  if (!match) return "Invalid frequency";

  const parts = match.map((part) => {
    const [amount, unit] = part.split(" ");
    return { amount: parseInt(amount), unit };
  });

  if (parts.length === 1) {
    const { amount, unit } = parts[0];
    switch (unit) {
      case "day":
      case "days":
        if (amount === 1) return "Once per day";
        if (amount === 2) return "Every other day";
        return `Every ${amount} days`;
      case "week":
      case "weeks":
        if (amount === 1) return "Once per week";
        if (amount === 2) return "Bi-weekly";
        return `Every ${amount} weeks`;
      case "month":
      case "months":
        if (amount === 1) return "Once per month";
        return `Every ${amount} months`;
      case "year":
      case "years":
        if (amount === 1) return "Once per year";
        return `Every ${amount} years`;
      default:
        return `Every ${amount} ${unit}`;
    }
  } else if (
    parts.length === 2 &&
    parts[0].unit === "days" &&
    parts[1].unit === "hours"
  ) {
    const totalHours = parts[0].amount * 24 + parts[1].amount;
    const timesPerWeek = Math.round(168 / totalHours);
    if (timesPerWeek === 2) return "Twice per week";
    return `${timesPerWeek} times per week`;
  }

  return interval; // If we can't parse it, return the original string
}

export default formatFrequency;
