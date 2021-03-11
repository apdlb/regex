export default max => {
  const output = [];
  const sNumber = max.toString();
  for (let index = 0; index < sNumber.length; index++) {
    output.push(+sNumber.charAt(index));
  }
  const outputLength = output.length;
  const regex = [];
  if (outputLength > 1) {
    for (let i1 = 0; i1 < outputLength - 1; i1++) {
      let reg = "[1-9]";
      for (let i2 = 0; i2 < i1; i2++) {
        reg = `${reg}[0-9]`;
      }
      regex.push(reg);
    }
  }
  for (let i1 = 0, len = outputLength; i1 < len; i1++) {
    const element = output[i1];
    if (len > 1 && i1 === 0 && element === 1) continue;
    const isLastElement = i1 === len - 1;
    const rangeOutput = [...output];
    const rangeStart = i1 === 0 ? 1 : 0;
    const rangeEnd = isLastElement ? element : element - 1 <= 0 ? 1 : element - 1;
    rangeOutput[i1] = `[${rangeStart}-${rangeEnd}]`;
    for (let i2 = i1 + 1; i2 < rangeOutput.length; i2++) {
      rangeOutput[i2] = "[0-9]";
    }
    regex.push(rangeOutput.join(""));
  }
  const regexString = `^(${regex.join("|")})$`;
  return regexString;
};
