const question_1 = async (page) => {
  try {
    const res = await page.evaluate(() => {
      const el = document.querySelector('#\\36 21156558_4082339251');
      if (el) {
        el.checked = true;
        el.setAttribute('aria-checked', 'true');
        return el.checked;
      } else {
        return false;
      }
    });
    return res;
  } catch (err) {
    return err;
  }
};

module.exports = question_1;
