const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.price = validText(data.price) ? data.price : "";
  data.startdate = validText(data.startdate) ? data.startdate : "";
  data.enddate = validText(data.enddate) ? data.enddate : "";
  data.type = validText(data.type) ? data.type : "";
  data.description = validText(data.description) ? data.description : "";
  data.pickup = validText(data.pickup) ? data.pickup: "";

  ////////Description
  if (!Validator.isLength(data.description, { min: 5, max: 200 })) {
    errors.description = "Description must be between 5 and 200 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  ////////price
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  ///////start and end date
  if (Validator.isEmpty(data.startdate)) {
      errors.startdate = "start date field is required";
  }

  if (Validator.isEmpty(data.enddate)) {
      errors.enddate = "end sdate field is required";
  }


  //////type
  if (Validator.isEmpty(data.type)) {
    errors.type = "Type of vehicle field is required";
  }

  if (!Validator.isLength(data.type, { min: 2, max: 10 })) {
    errors.type = "Type of vehicle must be at least 10 characters";
  }

  //////pickup
  if (Validator.isEmpty(data.pickup)) {
    errors.pickup = "Pick up field is required";
  }

  if (!Validator.isLength(data.pickup, { min: 2, max: 30 })) {
    errors.pickup = "Pick up address must be between 2 to 30 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
