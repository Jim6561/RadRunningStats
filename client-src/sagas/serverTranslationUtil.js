const convertToNumber = function(row, property) {
  if (row[property]) {
    row[property] = Number(row[property]);
  }
}

export function replaceDataTypes(data) {
  data.map((row) => {
    convertToNumber(row, 'winning_time');
    convertToNumber(row, 'first_quartile_time');
    convertToNumber(row, 'median_time');
    convertToNumber(row, 'third_quartile_time');
    convertToNumber(row, 'last_time');
    convertToNumber(row, 'net_time');
    convertToNumber(row, 'gun_time');
    convertToNumber(row, 'split_time');
    convertToNumber(row, 'pace');
    convertToNumber(row, 'distance_miles');
  });
};