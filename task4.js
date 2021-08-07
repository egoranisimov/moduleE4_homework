function ElectricalAppliance() {
    this.on = false,
    this.voltage = 230,
    this.amperage = 0
}
ElectricalAppliance.prototype.switch = function() {
    if (this.on == false){
        this.on = true
    } else {
        this.on = false
    }
}
ElectricalAppliance.prototype.getPower = function() {
    console.log(`Потребляемая мощность - ${this.voltage * this.amperage} Вт`);
}


function Kettle(volume, material) {
    this.volume = volume,
    this.material = material
}
function Monitor(diagonal) {
    this.diagonal = diagonal
}
Kettle.prototype = new ElectricalAppliance()
Monitor.prototype = new ElectricalAppliance()

// Проверка
const kettle1 = new Kettle(volume = 2, material = 'plastic')
kettle1.amperage = 8.7
kettle1.switch()

const monitor1 = new Monitor(diagonal = 21)
monitor1.amperage = 0.2

console.log(kettle1);
console.log(monitor1);
kettle1.getPower()
monitor1.getPower()
