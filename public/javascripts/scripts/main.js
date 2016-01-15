import Request from './request'

// consider document.querySelector?
document.getElementById("blog").onclick = (e) => {
	e.preventDefault()
	let blogRequest = new Request()
	blogRequest.get('/posts').then( res => {
		document.getElementById('blogContent').style.display = 'block'
		let listItems = document.getElementById('blogContent').children
		let postData = JSON.parse(res).posts.Items
		postData.forEach( (e, i) => {
			let anchor = listItems[i].children[0]
			console.log(listItems[i].children[0])
			listItems[i].style.display = 'block'
			anchor.textContent = e['name']['S']
			anchor.addEventListener("click", (e) => { loadPost(anchor, e) })
		})
		document.getElementById('aboutContent').style.display = 'none'
	})
}
/*document.getElementsByClassName("hidden-li").onlick = (e) => {
	console.log(e)
	e.preventDefault()
	console.log('hi')
	console.log(this)
}*/

document.getElementById("about").onclick = (e) => {
	e.preventDefault()
	let aboutRequest = new Request()
	aboutRequest.get('/about').then( res => {
		document.getElementById('aboutContent').style.display = 'block'
		document.getElementById('blogContent').style.display = 'none'
	})
}

let loadPost = (anchor, e) => {
	e.preventDefault()
	console.log("hi")
	console.log(anchor)
	let blogRequest = new Request()
	blogRequest.get("/posts/" + anchor.text.replace(/ /g, "_")).then( res => {
		console.log(res)
	})
}
