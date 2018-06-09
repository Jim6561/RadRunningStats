//We start with all the columns. Remove any that match the filter.
export const doUpdateColumnGroup = (columns, group, show) => {
  if (show) {
    return columns;
  }

  let newColumns = [];
  columns.map((col) => {
    let remove = col.groups && col.groups.includes(group);
    if (!remove)
    {
      newColumns.push(col);
    }
  });
  return newColumns;
}