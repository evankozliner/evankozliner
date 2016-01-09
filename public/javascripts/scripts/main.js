import Person from './person'
import Request from './request'

// consider document.querySelector?
document.getElementById("blog").onclick = () => {
	let blogRequest = new Request()
	blogRequest.get('/posts').then( res => {
		console.log(res)
	});
}



