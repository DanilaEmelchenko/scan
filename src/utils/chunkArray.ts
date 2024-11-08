// Разделяет массив на подмассивы по указанному размеру.
//  @param array - Исходный массив.
//  @param size - Количество элементов в каждом подмассиве.
//  @returns Массив подмассивов.

export const chunkArray = <T>(arr: T[], size : number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
