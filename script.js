//your JS code here. If required.
const form = document.querySelector('form');

form.addEventListener('submit' , async (e) => {
	e.preventDefault();;
	const age = form.age.value;
	const name = form.name.value;
	promisecall(age).then(() =>{
		alert(`Welcome, ${name}. You can vote.`);
	}).catch(() => {
		alert(`Oh sorry ${name}. You aren't old enough.`);
	});

	form.reset();
});

function promisecall(age){ return new Promise((res , rej) => {
	if(age > 18){
		setTimeout(((age) => {
			res();
		}) , 4000);
	}else{
		rej();
	}
});
					 }