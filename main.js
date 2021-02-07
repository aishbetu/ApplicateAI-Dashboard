const data = {

    "todayorders": 26,
    "currentweeksorder": 250,
    "todaysorderamount": 2000,
    "currentweekamount": 15000,
    "mtdorder": 1500,
    "lastmonthorder": 2200,
    "mtdamount": 6500,
    "lastmonthamount": 82000
};

const orderDetails = [
    {
        "order_no": 1,
        "order_date": "2018-06-07",
        "totalproducts": 5,
        "total_amount": 150,
        "total_qty": 2,
        "status": "approved",
        "user_name": "Jimmy",
        "city": "Brooklyn"
    },
    {
        "order_no": 2,
        "order_date": "2018-05-08",
        "totalproducts": 1,
        "total_amount": 550,
        "total_qty": 4,
        "status": "pending",
        "user_name": "Alice",
        "city": "Manhattan"
    },
    {
        "order_no": 3,
        "order_date": "2018-01-03",
        "totalproducts": 3,
        "total_amount": 850,
        "total_qty": 5,
        "status": "pending",
        "user_name": "Aishwary",
        "city": "New Delhi"
    },
    {
        "order_no": 4,
        "order_date": "2019-05-08",
        "totalproducts": 8,
        "total_amount": 540,
        "total_qty": 5,
        "status": "approved",
        "user_name": "Stephen",
        "city": "St Petersburg"
    },
    {
        "order_no": 5,
        "order_date": "2019-08-05",
        "totalproducts": 11,
        "total_amount": 690,
        "total_qty": 8,
        "status": "approved",
        "user_name": "Rakesh",
        "city": "Agra"
    },
    {
        "order_no": 6,
        "order_date": "2020-01-09",
        "totalproducts": 3,
        "total_amount": 345,
        "total_qty": 1,
        "status": "pending",
        "user_name": "Rajat",
        "city": "Merrut"
    },
    {
        "order_no": 7,
        "order_date": "2020-02-01",
        "totalproducts": 8,
        "total_amount": 990,
        "total_qty": 4,
        "status": "approved",
        "user_name": "Varun",
        "city": "Noida"
    },
    {
        "order_no": 8,
        "order_date": "2020-05-24",
        "totalproducts": 2,
        "total_amount": 150,
        "total_qty": 1,
        "status": "pending",
        "user_name": "Ashish",
        "city": "Noida"
    },
    {
        "order_no": 9,
        "order_date": "2020-06-11",
        "totalproducts": 9,
        "total_amount": 478,
        "total_qty": 3,
        "status": "pending",
        "user_name": "Ibrahim",
        "city": "Kabul"
    },
    {
        "order_no": 10,
        "order_date": "2019-08-19",
        "totalproducts": 15,
        "total_amount": 1120,
        "total_qty": 9,
        "status": "approved",
        "user_name": "Priya",
        "city": "Gurugram"
    },
];
// Chart Data
const chartData = {
    Dates:["05/08/2020", "05/09/2020", "05/10/2020"],
    Data: [1500, 1200, 1750]
};

let lastfive = orderDetails.slice(Math.max(orderDetails.length - 5, 1));
let firstfive = orderDetails.slice(0, 5);
// console.log(firstfive);
// console.log(lastfive);


let firstFiveOrders = orderDetails.slice(0, 5);
let lastFiveOrders = orderDetails.slice(Math.max(orderDetails.length - 5, 1));


// for cards
let card = $('#card').html();
let cardScript = Handlebars.compile(card);
let cardhtml = cardScript(data);
    $(document.body).append(cardhtml);

// Rendering Line Chart with data
let lineChart = $('#lineChart').html();
let lineChartScript = Handlebars.compile(lineChart);
let linehtml = lineChartScript(chartData);
$(document.body).append(linehtml);

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  chartData.Dates,
        datasets: [
            {
                label: "Order Amount",
                fill: false,
                lineTension: 0,
                borderColor: "#0d6efd",
                data:  chartData.Data,
            },
        ]
    }
});

// For Data table of Top 5 users
let tableTop = $('#topfivedatatable').html();
let tableTopScript = Handlebars.compile(tableTop);
let tableTophtml = tableTopScript(firstFiveOrders);
    $(document.body).append(tableTophtml);

// For Data table of Bottom 5 users
let tableBottom = $('#bottomfivetable').html();
let tableBottomScript = Handlebars.compile(tableBottom);
let tableBottomhtml = tableBottomScript(lastFiveOrders);
    $(document.body).append(tableBottomhtml);

// For Top 5 users table
let topUser = $('#usertopfive').html();
let topUserScript = Handlebars.compile(topUser);
let topUserhtml = topUserScript(firstFiveOrders);
    $(document.body).append(topUserhtml);

// For Bottom 5 users table
let bottomUser = $('#userbottomfive').html();
let bottomUserScript = Handlebars.compile(bottomUser);
let bottomUserhtml = bottomUserScript(lastFiveOrders);
    $(document.body).append(bottomUserhtml);

// For Complete Order Details
let ordersDetail = $('#ordersdetail').html();
let ordersDetailScript = Handlebars.compile(ordersDetail);
let ordersDetailhtml = ordersDetailScript(orderDetails); // passing all users array of object
    $(document.body).append(ordersDetailhtml);

