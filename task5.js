class ElectricalAppliance {
    constructor(amperage) {
        this.on = false;
        this.voltage = 230;
        this.amperage = 0 || amperage
    }

    switch() {
        if (this.on == false){
            this.on = true
        } else {
            this.on = false
        }
    }
    getPower() {
        console.log(`Потребляемая мощность - ${this.voltage * this.amperage} Вт`);
    }
}


class Kettle extends ElectricalAppliance {
    constructor(volume, material, amperage) {
        super(amperage);
        this.volume = volume;
        this.material = material
    }
}

class Monitor extends ElectricalAppliance {
    constructor(diagonal, amperage) {
        super(amperage);
        this.diagonal = diagonal;
    }
}

// Проверка
const kettle1 = new Kettle(volume = 2, material = 'plastic', amperage = 8.7)
kettle1.switch()

const monitor1 = new Monitor(diagonal = 21, amperage = 0.2)

console.log(kettle1);
console.log(monitor1);
kettle1.getPower()
monitor1.getPower()
