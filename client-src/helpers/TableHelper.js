export const doUpdateColumnGroup = (columns, group, show) => {
  if (show) {
    return columns;
  }
  let newColumns = [];
  columns.map((col) => {
    if (col.group !== group) {
      newColumns.push(col);
    }
  });
  return newColumns;
}