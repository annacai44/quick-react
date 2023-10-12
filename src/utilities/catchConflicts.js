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

const validateDays = (time) => {
  const inputDays = time.split(" ")[0];
  const days = ["M", "Tu", "W", "Th", "F"];

  const presentDays = [];

  for (const day of days) {
    const regex = new RegExp(day, "g");
    const matches = (inputDays.match(regex) || []).length;

    if (matches > 1) {
      return false;
    }

    if (matches === 1) {
      presentDays.push(day);
    }
  }

  return presentDays.join("") === inputDays;
};

const validateTime = (time) => {
  const inputTime = time.split(" ")[1];

  const [start, end] = inputTime.split("-");

  const startNum = convertTimeToNumber(start);
  const endNum = convertTimeToNumber(end);
  const lastPossibleNum = convertTimeToNumber("23:59");

  if (
    startNum >= endNum ||
    startNum > lastPossibleNum ||
    endNum > lastPossibleNum
  ) {
    return false;
  }

  return true;
};

export const validateMeetingTime = (meetingTime) => {
  if (meetingTime === "") {
    return true;
  }

  const validRegex = /\b[A-Za-z]+ \d{1,2}:\d{2}-\d{1,2}:\d{2}\b/;

  if (!validRegex.test(meetingTime)) {
    return false;
  }

  return validateDays(meetingTime) && validateTime(meetingTime);
};
