let 회원들: (number | string)[] = [1, '2', 3];
let 오브젝트: { x: string | number } = { x: '123' };

function 함수(x?: string): void {
	if (x) {
		console.log('이름이 없습니다');
	} else {
		console.log('입력하셈');
	}
}

함수();

function 자릿수세기(num: number | string): number {
	return num.toString().length;
}

function 결혼가능여부(money: number, house: boolean, charm: string) : string|void {
	let score: number = 0;

	score += money / 10000;
	
	if (house) {
		score += 500;
	} 

	if (charm === '상') {
		score += 100;
	} 

	if (score >= 600) {
		return '결혼가능';
	}
}

console.log(결혼가능여부(1000000, true, '상'));

function 클리닝함수(x: (string | number)[]) {
	let 클리닝완료된거: number[] = [];

	// for (let x of x) {
	// 	if (typeof x === 'string') {
	// 		클리닝완료된거.push(parseInt(x));
	// 	} else {
	// 		클리닝완료된거.push(x);
	// 	}
	// }

	x.forEach((b) => {
		if (typeof b === 'string') {
			클리닝완료된거.push(parseFloat(b));
		} else {
			클리닝완료된거.push(b);
		}
	})

	return 클리닝완료된거;
}

console.log(클리닝함수(['1', 2, '3']));

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject: ['science', 'art', 'korean'] }

function 만들함수(x: { subject: string | string[] }) {
	if (typeof x.subject === 'string') {
		return x.subject;
	} else if (Array.isArray(x.subject)) {
		return x.subject[x.subject.length -1];
	} else {
		return '없음';
	}
}

type 학생1 = { name: string, age: number };
type 학생2 = { name: string, age: number };

type Students = 학생1 & 학생2;

let Heroine : Students = { name: '미애', age: 16 };


type MyType = {
	color?: string,
	size: number,
	readonly position: number[]
}

let 테스트: MyType = {
	size: 123,
	position: [1,2,3]
}

type User = {
	name: string,
	phone: number,
	email?: string,
}

type Adult = {
	teen: boolean
}

type NewUser = User & Adult;

let 회원가입정보: User = {
	name: '예나',
	phone: 1000,
}

let 미성년자니: NewUser = {
	name: '뷔',
	phone: 2525,
	teen: true
}

function 놀자(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
	return ['가위'];
}

놀자('가위');

type Member = {
	name: string,
	age: number,
	plusOne: (x: number) => number,
	changeName: () => void
}

let 회원정보 :Member = {
	name: 'kim',
	age: 30,
	plusOne(x) {
		return x + 1;
	},
	changeName: () =>  {
		console.log('안녕');
	}
}

type CutType = (x: string) => string;

let cutZero :CutType = function (x) {
	let result = x.replace(/^0+/, '');
	return result;
}

type RemoveType = (x: string) => number;

let removeDash :RemoveType = function (x) {
	let result = x.replace(/-/g, '');
	return parseInt(result);
}

// type 야호 = (a: string, b: object, c: object) => string;

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 무야호(phone :string, cut :함수타입1, remove :함수타입2) {
	let result = cut(phone);
	let result2 = remove(result);
	console.log(result2);
}

무야호('010-1111-2222', cutZero, removeDash);