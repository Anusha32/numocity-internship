function celciusTemp(temperature, tempUnit) {
  if (tempUnit == '') {
    temperature = ((temperature -32)*5/9 );
  }
  return temperature;
}
module.exports = {celciusTemp};
