/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum dayWork{
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
};

function isWeekend(day: dayWork ): boolean {
  return(day === dayWork.Saturday || day === dayWork.Sunday)
};
