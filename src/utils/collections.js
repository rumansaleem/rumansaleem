export function groupBy(
  items,
  groupFn
) {
  return items.reduce((grouped, item) => {
    const group = groupFn(item);
    const groupValues = grouped[group] ?? [];

    return Object.assign(grouped, { [group]: [...groupValues, item] });
  }, {});
}