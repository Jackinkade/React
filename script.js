'use strict';
let employers = ['АртеМ', 'максим', 'Владимир', 'сергей',
 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
let nameCourse = 'Базовый React';
let command = [];

for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() !== '') {
		command.push(employers[i]);
	}
}
for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = own => {

	own = own || 0;
	let everyCash = Array.prototype.slice.call(arguments);
	let total = own;
		for (let i = 0; i < everyCash[1].length; i++) {
			total += +everyCash[1][i];
		}
};								

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {

	teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартует новый курс: ${director} . Всего уроков: ${allModule} 
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]} . Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);

};

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);





