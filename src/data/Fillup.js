export default class {
/**
* Fillup class constructor method
*   Stores information about a fillup for a specific car.
*
* @param id The id of the fillup. Should always be in UUID format
*   will autogenerate if left undefined
* @param carId The id of the car the fillup was for
* @param price The cost per gallon of fuel, to tenths of a cent
* @param amount The amount of fuel purchased
* @param milage The milage on the car at the time of fillup
* @param station The station where the gas was purchased
* @param notes A freeform field for users to enter any data they may want
*
* @return an instance of the Fillup class
*
* @TODO autogenerate id.
*/
  constructor(id, carId, price, amount, milage, station, notes) {
    this._price = price;
    this._amount = amount;
    this._milage = milage;
    this._station = station;
    this._notes = notes;
    this._car = carId;
    this._uuid = id;
  }
}
