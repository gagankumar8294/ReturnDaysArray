function returnDay(day) {
  if ((day <= 7) & (day >= 1)) {
    var arr = [
      "",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  } else {
    return null;
  }
  return arr[day];
}

console.log(returnDay(1));
