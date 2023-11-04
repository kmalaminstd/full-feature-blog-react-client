export default function duplicateArray(array) {
    const result = [];
    for (const item of array) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    return result;
}