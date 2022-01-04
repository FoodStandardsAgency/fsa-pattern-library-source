function generateDatepickerContent(content) {
    const currentYear = new Date().getFullYear();
    switch (content) {
      case 'days':
        let days = [...Array(32).keys()];
        days.shift();
        return days;
      case 'months':
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
      case 'years':
        return Array(currentYear - 1990 + 1).fill().map((_, idx) => 1990 + idx);
    }
}

export default generateDatepickerContent;