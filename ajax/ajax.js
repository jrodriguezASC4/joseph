var YOUR_ID = "5c707018";
var YOUR_KEY = "f2a361d66db781af23dd23e79ddbb66f";

var bigMacUrl = "https://api.nutritionix.com/v1_1/search/Mcdonalds?results=0:50&fields=item_name,nf_calories&appId=" + YOUR_ID + "&appKey=" + YOUR_KEY;

$.ajax({
    url:bigMacUrl,
}).done(function(data){   // success:function(data){
                            // console.log(data);
        var randomNumber = Math.floor(Math.random()*49);
        // console.log(randomNumber);
        var food = data.hits[randomNumber];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        var totalFat = food.fields.nf_total_fat;
        var servings = food.fields.nf_serving_size_qty;
        var servingSizeType = food.fields.nf_serving_size_unit;

        if (name != null) {
            $("body").append("<h2>" + name + "</h2>");
        }

        if (cals != null) {
            $("body").append("<p>" + cals + " kilo-calories</p>");
        }

        if (totalFat != null) {
            $("body").append("<p>Fat: " + totalFat + "</p>")
        }

        if (servings != null && servings == 1) {
            $("body").append("<p>" + servings + " serving</p>")
        } else if (servings != null && servings > 1) {
                $("body").append("<p>" + servings + " servings</p>")
            }
        
        if (cals > 500) {
            $("body").append("<p> That should be enough to fill you up!</h2>");
        } else if (cals < 500) {
            $("body").append("<p>You might want something else with that...</h2>")
            if (name != null) {
            $("body").append("<h2>" + name + "</h2>");
        }
        }
});


