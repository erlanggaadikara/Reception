export const getDiffDate = (date1: any, date2: any) => {
  let date_1 = new Date(date1);
  let date_2 = new Date(date2);
  if (date_2 >= date_1) {
    return true;
  } else {
    return false;
  }
};

export const formatUSDate = (date: any) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  return dateTimeFormat.format(date);
};

export const hoursDiffNow = (time: any) => {
  let date_now = new Date();
  let date_other = new Date(time);
  let getDiffHour = (date_now.getTime() - date_other.getTime()) / 1000;
  getDiffHour /= 60 * 60;
  let diffHour = Math.abs(Math.round(getDiffHour));
  return diffHour;
};

export const hoursDiffTwoDate = (time1: any, time2: any) => {
  let date_now = new Date(time1);
  let date_then = new Date(time2);
  let getDiffHour = (date_now.getTime() - date_then.getTime()) / 1000;
  getDiffHour /= 60 * 60;
  let diffHour = Math.abs(Math.round(getDiffHour));
  return diffHour;
};

export const setCountByDay = (date: any, count: number, add: boolean) => {
  let dates = new Date(date);
  if (add) {
    dates.setDate(dates.getDate() + count);
  } else {
    dates.setDate(dates.getDate() - count);
  }
  return dates.toISOString();
};

export const setCountByHour = (date: any, count: number, add: boolean) => {
  let dates = new Date(date);
  if (add) {
    dates.setHours(dates.getHours() + count);
  } else {
    dates.setHours(dates.getHours() + count);
  }
  return dates.toISOString();
};
