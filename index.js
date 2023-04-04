const express = require("express");
const path = require("path");
const { check, validationResult } = require("express-validator");

let myApp = express();

myApp.use(express.static(__dirname + "/public"));
myApp.set("view engine", "ejs");
myApp.set("views", path.join(__dirname, "views"));

// set up body parser
myApp.use(express.urlencoded({ extended: false }));

// set up database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dallasStore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// creating schema for mongodb document
const custDetails = mongoose.model("Customer", {
  name: String,
  address: String,
  province: String,
  city: String,
  email: String,
  phone: String,
  tax: Number,
  prod1Quant: Number,
  prod2Quant: Number,
  prod3Quant: Number,
  total: Number,
  taxCal: Number,
  finalTotal: Number,
});

// render form on landing page
myApp.get("/", function (req, res) {
  res.render("form");
});

// render data from db on details page
myApp.get("/details", async (req, res) => {
  // get data from db
  const data = await custDetails.find();
  res.render("details", { data });
});

// phone number regex
const phoneRegex = /^[0-9]{10}$/;

// generic method to check input value in particular format
const checkRegex = (value, regex) => {
  return regex.test(value) ? true : false;
};

// method to check phon number format
const checkPhone = (value) => {
  if (!checkRegex(value, phoneRegex)) {
    throw new Error(
      "Please enter 10 digit phone number in format - 1234567890"
    );
  }
  return true;
};

let items = {};
let itemsArray = [];

// validating form values using express-validator on form submit
myApp.post(
  "/submitform",
  [
    check("name", "Please enter name").notEmpty(),
    check("address", "Please enter address").notEmpty(),
    check("province", "Please select province").notEmpty(),
    check("city", "Please select city").notEmpty(),
    check("phone").custom(checkPhone),
    check("email").isEmail().withMessage("Please enter valid email"),
    check("prod1", "Please enter numeric quantity for Jasmines").isNumeric(),
    check("prod2", "Please enter numeric quantity for Roses").isNumeric(),
    check("prod3", "Please enter numeric quantity for Orchids").isNumeric(),
  ],

  function (req, res) {
    //fetch data
    let name = req.body.name;
    let address = req.body.address;
    let province = req.body.proVal;
    let city = req.body.city;
    let tax = req.body.gst;
    let email = req.body.email;
    let phone = req.body.phone;
    let prod1Quant = req.body.prod1;
    let prod2Quant = req.body.prod2;
    let prod3Quant = req.body.prod3;

    let total = 0;
    let errorData = [];
    let totCount = 0;
    let emptyField = 0;
    let posVal = 0;
    let totalItems =
      parseInt(prod1Quant) + parseInt(prod2Quant) + parseInt(prod3Quant);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      emptyField = 1;
      // if there are errors
      errorData = errors.array();
    }

    // if negative value is entered in product quantity
    if (prod1Quant < 0 || prod2Quant < 0 || prod3Quant < 0) {
      posVal = 1;
      errorData.push({
        msg: "Please enter positive value in product quantity",
      });
    }

    // if no item is selected
    if (totalItems == 0) {
      totCount = 1;
      errorData.push({
        msg: "Please select at least one item",
      });
    }

    // render errors on form page if present
    if (totCount > 0 || emptyField > 0 || posVal > 0) {
      res.render("form", { errors: errorData });
    } else {
      // if there are no errors
      //process data
      const cost1 = 5;
      const cost2 = 10;
      const cost3 = 15;
      if (prod1Quant != 0) {
        let subTotal = prod1Quant * cost1;
        total += subTotal;
        items = {
          name: "Jasmines ($5)",
          qty: prod1Quant,
        };
        itemsArray.push(items);
      }
      if (prod2Quant != 0) {
        let subTotal = prod2Quant * cost2;
        total += subTotal;
        items = {
          name: "Roses ($10)",
          qty: prod2Quant,
        };
        itemsArray.push(items);
      }
      if (prod3Quant != 0) {
        let subTotal = prod3Quant * cost3;
        total += subTotal;
        items = {
          name: "Orchids ($15)",
          qty: prod3Quant,
        };
        itemsArray.push(items);
      }
      let taxCal = (total * tax) / 100;
      let finalTotal = total + taxCal;

      // send data to view
      let displayData = {
        name: name,
        address: address,
        province: province,
        city: city,
        tax: tax,
        email: email,
        phone: phone,
        total: total,
        taxCal: taxCal,
        final: finalTotal,
        items: itemsArray,
      };

      // saving data into db
      let details = new custDetails({
        name,
        address,
        province,
        city,
        email,
        phone,
        tax,
        prod1Quant,
        prod2Quant,
        prod3Quant,
        total,
        taxCal,
        finalTotal,
      });

      details.save();

      res.render("receipt", displayData);
      itemsArray = [];
    }
  }
);

//listen at a port
myApp.listen(8080);
console.log("Open http://localhost:8080 in your browser");
