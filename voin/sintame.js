let configValue1 = true;
let configValue2 = false;

if (configValue1 && configValue2) {
    console.log("Both config values are true!");
} else if (configValue1 || configValue2) {
    console.log("At least one config value is true!");
} else {
    console.log("Both config values are false!");
}
