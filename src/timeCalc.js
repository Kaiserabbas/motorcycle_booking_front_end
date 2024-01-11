const today = new Date();

const timeCalculation = (fulldate) => {
  if (fulldate.fromFullDate && fulldate.toFullDate) {
    const dateTimeDiferenceMs = (fulldate.toFullDate - fulldate.fromFullDate);
    const dateTimeDiferenceS = dateTimeDiferenceMs / 1000;
    const dateTimeDiferenceM = dateTimeDiferenceS / 60;
    const dateTimeDiferenceH = dateTimeDiferenceM / 60;
    return dateTimeDiferenceH.toFixed(1);
  }
  return null;
};

const moneyDisplay = (money) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(money);

function validateTime1(time) {
  if (time) {
    const time1 = new Date(time);
    if (time1.getFullYear() > today.getFullYear()) {
      return true;
    }

    if (time1.getFullYear() === today.getFullYear()) {
      if (time1.getMonth() > today.getMonth()) {
        return true;
      }
      if (time1.getMonth() === today.getMonth()) {
        if (time1.getDate() >= today.getDate()) {
          return true;
        }
        return false;
      }
    }
  }
  return false;
}

function validateTime2(timeFrom, timeTo) {
  if (timeTo) {
    const time1 = new Date(timeFrom);
    const time2 = new Date(timeTo);
    if (today.getFullYear() < time2.getFullYear() && time2.getFullYear() > time1.getFullYear()) {
      return true;
    }

    if (time2.getFullYear() === today.getFullYear()
      && time2.getFullYear() === time1.getFullYear()) {
      if (time2.getMonth() > time1.getMonth()) {
        return true;
      }
      if (time2.getMonth() === time1.getMonth()) {
        if (time2.getDate() * 1 >= time1.getDate() * 1) {
          return true;
        }
      }
    }
  }
  return false;
}

export {
  timeCalculation, moneyDisplay, validateTime1, validateTime2,
};
