import data from "./data";

const vendorsAlpha = data.slice();
vendorsAlpha.sort((a, b) =>
  a.display_name.toLowerCase().localeCompare(b.display_name.toLowerCase())
);
const vendorsAlphaReverse = vendorsAlpha.slice();
vendorsAlphaReverse.reverse();

const tagsReducer = (accumulator, current) => {
  current.tags.forEach((tag) => {
    accumulator[tag] = accumulator[tag] || 0;
    accumulator[tag] += 1;
  });

  return accumulator;
};

const tags = Object.entries(data.reduce(tagsReducer, {})).map(
  ([name, count]) => ({
    value: name,
    displayName: `${name} (${count})`,
  })
);
tags.sort((a, b) => a.value.localeCompare(b.value));

export { data, vendorsAlpha, vendorsAlphaReverse, tags };
