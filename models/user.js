
const mongoose= require('mongoose');

const userSchema= mongoose.Schema({

    name:{
        type:String,
        require: true
    },
    password:{
        type:String,
        minlength:6
    },
    mail:{
        type:String
    },
    status:{
        type: String,
        default:"not worker"
    }

})

module.exports= mongoose.model('User', userSchema);

//אני לא יודעת איך מגדירים ערך דיפולטיבי
///אני רוצה לבדוק אם שאר הפונקציות עובדות ובשביל זה אני צריכה כמה עובדים שהסטטוס שלהם הוא worker