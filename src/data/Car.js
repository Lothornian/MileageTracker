export default class{
  /**
  * Car class constructor method
  *   Stores car information and a foriegn key to the user
  *
  * @param name The name of the car, for the users reference only
  * @param id The id for the car. Should always be in a UUID format
  *   id will autogenerate if left undefined.
  * @param userId The id of the user who owns the car
  * @param make The make of the car, for user reference only
  * @param model The model of the car, for user reference only
  *
  * @return An instance of the Car class
  *
  * @TODO autogenerate the id.
  * @TODO create getters and setters
  * @TODO add year
  */
  constructor(id, name, userId, make, model){
    this._name = name;
    this._uuid = id;
    this._user = userId;
    this._make = make;
    this._model = model;
  }


}
