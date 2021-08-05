// Create A Data File
// Gives arrays of objects
let data = [
	{
		name: 'vicki',
		age: 23,
	},
	{
		name: 'radha',
		age: 21,
	},
	{
		name: 'gcool',
		age: 22,
	},
	{
		name: 'yogendra',
		age: 23,
	},
	{
		name: 'Anshi',
		age: 22,
	},
	{
		name: 'sankya',
		age: 20,
	},
];

const info = document.querySelector('#info');

const details = data.map((vicky) => {
	return '<div>' + vicky.name + ' ' + vicky.age + '</div>';
});
info.innerHTML = details.join('\n');
