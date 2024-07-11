// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }
  if (time === "12:00") {
    return "midday";
  }
  // got the hours and minutes
  const [hours, minutes] = time.split(":").map(Number);
  //handle exact time
  if (minutes === 0) {
    const hoursWords = covertNumberToWords(hours);
    return `${hoursWords} o'clock`;
  }
  //handle the time before 30 minutes
  if (minutes <= 30) {
    const hoursWords = covertNumberToWords(hours);
    const minutesWords = covertNumberToWords(minutes);
    return `${minutesWords} past ${hoursWords}`;
  }

  //handle the time after 30 minutes
  if (minutes > 30) {
    const hoursWords = covertNumberToWords(hours + 1);
    const minutesWords = covertNumberToWords(60 - minutes);
    return `${minutesWords} to ${hoursWords}`;
  }

  function covertNumberToWords(number) {
    const words = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "quarter",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
      "twenty one",
      "twenty two",
      "twenty three",
      "twenty four",
      "twenty five",
      "twenty six",
      "twenty seven",
      "twenty eight",
      "twenty nine",
      "half",
    ];
    return words[number];
  }
}

module.exports = { convertTimeToWords };
