export const formatDate = (d: Date) =>
  `${d.getFullYear()}年${
    d.getMonth() + 1
  }月${d.getDate()}日 ${d.getUTCHours()}:${d.getUTCMinutes()}`.replace(
    /\n|\r/g,
    ''
  );
