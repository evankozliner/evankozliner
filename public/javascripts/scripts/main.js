import Request from './request'

// consider document.querySelector?
document.getElementById("blog").onclick = () => {
	let blogRequest = new Request()
	blogRequest.get('/posts').then( res => {
		console.log(res)
	})
}

document.getElementById("about").onclick = () => {
	let aboutRequest = new Request()
	aboutRequest.get('/about').then( res => {
		console.log(res)
	})
}


