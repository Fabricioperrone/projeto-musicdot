var Today = new Date();
var HourNow = today.getHours();
var greeting;

if (HourNow >18) {
    greeting = 'Good evening!';
} else if (HourNow >12) {
    greeting ='Good Morning"';
} else if (HourNow >0) {
    greeting = 'Good morning"';
} else {
    greeting = 'Welcome"';
}
document.write('<h3>' + greeting + '</h3>');