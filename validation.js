const moment = require('moment')

const day = moment().format('dddd'); // extracting days to compare with.
const hours = parseInt(moment().format("HH")); // extracting hours to compare with


 const validate = (req, res, next) => {

    if ((day !== "Sunday" && day !== "Saturday") && (hours>9 && hours<17) ) {
        console.log(day,"this is the condition")
        next()
    }
    else {
        console.log("we are closed")
        res.render("closed");
    }
}
module.exports= validate