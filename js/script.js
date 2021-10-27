let config = [
	{name: "github", link: 'https://github.com/Vins2106'},
	{name: "github-notif", link: 'https://github.com/notification'},
	{name: "gmail", link: 'https://gmail.com'},
	{name: "youtube", link: 'https://youtube.com'},
	{name: "youtube-channel", link: 'https://youtube.com/c/Vins2106'},
	{name: "own", link: 'https://vinsdev.xyz'}
]

let googleSearch = 'https://www.google.com/search?q=';

let quotes = [
	"Any fool can write code that a computer can understand.",
	"First, solve the problem.",
	"Experience is the name everyone gives to their mistakes.",
	" In order to be irreplaceable, one must always be different.",
	"Java is to JavaScript what car is to Carpet.",
	"Knowledge is power.",
]

let quoteDock = document.getElementById("quotes");

quoteDock.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

setInterval(() => {
	quoteDock.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}, 2 * 60000)


function winOpen(name) {
	let find = config.find(x => x.name === name);
	if (!find) return;

	location.href = find.link
}

let form = document.getElementById('form');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let input = document.getElementById('input');
	let search = input.value.split(/ +/g).join("+")

	location.href = googleSearch + search
	return;
})

let time = document.getElementById("time");

time.innerHTML = formatAMPM(new Date());

setInterval(() => {
	time.innerHTML = formatAMPM(new Date())
}, 1 * 1000)

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}