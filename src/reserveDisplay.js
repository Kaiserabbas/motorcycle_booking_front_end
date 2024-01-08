const reserveDisplayName = (id, itemArray) => {
  const element = itemArray.filter((el) => el.id === id);
  const itemName = element[0]?.name;
  return itemName;
};

export default reserveDisplayName;
