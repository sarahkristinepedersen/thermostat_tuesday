function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
};

Thermostat.prototype.upTemp = function() {
  if (this.temperature >= this.maxTemp) {
    throw ('Maximum temperature reached');
  };
  this.temperature += 1;
};

Thermostat.prototype.downTemp = function() {
  if (this.temperature <= this.minTemp) {
    throw ('Minimum temperature is reached');
  };
  this.temperature -= 1;
};

Thermostat.prototype.powerSaving = function(boolean) {
  this.maxTemp = boolean ? 25 : 32;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.efficency = function() {
  if (this.temperature < 18) return ('green');
  if (this.temperature < 25) return ('yellow');
  return ('red');
};
