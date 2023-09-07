/**
 * 计算class
 * @param props 组件传入值
 * @param prefix 类名前缀
 * @param preClass 类名前缀
 */
const filterClass = (
  props: object,
  prefix: string,
  preClass: string[]
): string[] => {
  let r1 = [];
  let r2 = [];

  for (let key in props) {
    if (preClass.includes(key)) r1.push(`${prefix}${props[key]}`);
    if (key === "class") r2 = props[key].split(" ");
  }

  return [...r1, ...r2];
};

export { filterClass };
