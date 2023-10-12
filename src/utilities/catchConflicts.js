const doDaysOverlap = (courseDataOne, courseDataTwo) => {
  const meetsOne = courseDataOne.meets.substring(
    0,
    courseDataOne.meets.indexOf(" ")
  );
  const meetsTwo = courseDataTwo.meets.substring(
    0,
    courseDataTwo.meets.indexOf(" ")
  );

  const days = ["M", "Tu", "W", "Th", "F"];

  for (const day of days) {
    if (meetsOne.search(day) != -1 && meetsTwo.search(day) != -1) {
      return true;
    }
  }
  return false;
};

const areTermsSame = (courseDataOne, courseDataTwo) =>
  courseDataOne.term === courseDataTwo.term;

const doTimesOverlap = (courseDataOne, courseDataTwo) => {
  const timeRanges = [
    courseDataOne.meets.split(" ")[1],
    courseDataTwo.meets.split(" ")[1],
  ];

  timeRanges.sort(
    (rangeOne, rangeTwo) =>
      convertTimeToNumber(rangeOne.split("-")[0]) -
      convertTimeToNumber(rangeTwo.split("-")[0])
  );

  const [firstStart, firstEnd] = timeRanges[0].split("-");
  const [secondStart, secondEnd] = timeRanges[1].split("-");

  return convertTimeToNumber(firstEnd) > convertTimeToNumber(secondStart);
};

function convertTimeToNumber(time) {
  const hours = Number(time.split(":")[0]);
  const minutes = Number(time.split(":")[1]) / 60;
  return hours + minutes;
}

export const doCoursesOverlap = (courseDataOne, courseDataTwo) =>
  doDaysOverlap(courseDataOne, courseDataTwo) &&
  areTermsSame(courseDataOne, courseDataTwo) &&
  doTimesOverlap(courseDataOne, courseDataTwo);
