let houseBlueprint = {
    adress: this.adress,
    date: this.date,
    description: this.description,
    owner: this.owner,
    size: this.size,
    getDaysToBuild: function(){
        return this.size / this._building_speed
    }
}
// houseBlueprint._building_speed = 0.5

function HouseBuilder(adress, description, owner, size, roomCount, _building_speed, date){
    this.adress = adress;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this.getDaysToBuild = this.getDaysToBuild
    this._building_speed = 0.5
    this.date = {
        toDateString: function(){
            return new Date();
        }
    }
}

HouseBuilder.prototype = houseBlueprint;

const house = new HouseBuilder('88 Crescent Avenue', 
                                'Spacious town house with wood flooring, 2-car garage, and a back patio.',
                                'J. Smith',
                                110,
                                5);
console.log(house.adress)
// '88 Crescent Avenue'
console.log(house.description)
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'
console.log(house.size)
// 110
console.log(house.date.toDateString())
// [the current date], for example: 'Tue Aug 11 2020'
console.log(house.owner)
// J. Smith
console.log(house._building_speed)
// 0.5
console.log(house.getDaysToBuild())
// 220
console.log(house.roomCount)
// 5