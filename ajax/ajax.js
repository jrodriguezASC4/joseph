// var appid = "5c707018";
// var appkey = "f2a361d66db781af23dd23e79ddbb66f";
// var nutrition_url = "https://api.nutritionix.com/v1_1/search/Mcdonalds?results=0:50&fields=item_name,nf_calories&appId=" + appid + "&appKey=" + appkey;

const appid = "5c707018";
const appkey = "f2a361d66db781af23dd23e79ddbb66f";
const nutrition_url = "https://api.nutritionix.com/v1_1/search/Mcdonalds?results=0:50&fields=item_name,nf_calories&appId=" + appid + "&appKey=" + appkey;

// // Method #1
// function setup() {
//     // print the calories in a Big Mac
//     $.getJSON(nutrition_url,
//     function(data) {
//         var cals = data.hits[0].fields.nf_calories
//         $('body').append('<h1>There are ' +cals+ ' calories in a a Big Mac</h1>');
//     })
// }



// // Method #2
// function setup() {
//     // print the calories in a Big Mac
//     $.getJSON(nutrition_url,
//     (data) => {
//         let cals = data.hits[0].fields.nf_calories
//         $('body').append('<h1>' +cals+ ' calories</h1>');
//     })
// }

// $(document).ready(setup);



// Method #3 (kinda overkill)
const setup = () => {
    // print the calories in a Big Mac
    $.getJSON(nutrition_url,
    (data) => {
        let cals = data.hits[0].fields.nf_calories
        $('body').append('<h1>' +cals+ ' calories</h1>');
    })

    $.getJSON(nutrition_url,dispalyCals)

}

$(document).ready(setup);


// // Method #4
// var YOUR_ID = "5c707018";
// var YOUR_KEY = "f2a361d66db781af23dd23e79ddbb66f";

// var bigMacUrl = "https://api.nutritionix.com/v1_1/search/Mcdonalds?results=0:50&fields=item_name,nf_calories&appId=" + YOUR_ID + "&appKey=" + YOUR_KEY;

// $.ajax({
//     url:bigMacUrl,
// }).done(function(data){   // success:function(data){
//                             // console.log(data);
//         var randomNumber = Math.floor(Math.random()*49);
//         // console.log(randomNumber);
//         var food = data.hits[randomNumber];
//         var name = food.fields.item_name;
//         var cals = food.fields.nf_calories;
//         var totalFat = food.fields.nf_total_fat;
//         var servings = food.fields.nf_serving_size_qty;
//         var servingSizeType = food.fields.nf_serving_size_unit;

//         if (name != null) {
//             $("body").append("<h2>" + name + "</h2>");
//         }

//         if (cals != null) {
//             $("body").append("<p>" + cals + " kilo-calories</p>");
//         }

//         if (totalFat != null) {
//             $("body").append("<p>Fat: " + totalFat + "</p>")
//         }

//         if (servings != null && servings == 1) {
//             $("body").append("<p>" + servings + " serving</p>")
//         } else if (servings != null && servings > 1) {
//                 $("body").append("<p>" + servings + " servings</p>")
//             }
        
//         if (cals > 500) {
//             $("body").append("<p> That should be enough to fill you up!</h2>");
//         } else if (cals < 500) {
//             $("body").append("<p>You might want something else with that...</h2>")
//             if (name != null) {
//             $("body").append("<h2>" + name + "</h2>");
//         }
//         }
// });


