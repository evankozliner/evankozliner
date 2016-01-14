import Request from './request'

// consider document.querySelector?
document.getElementById("blog").onclick = () => {
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
		})
		document.getElementById('aboutContent').style.display = 'none'
	})
}

document.getElementById("about").onclick = () => {
	let aboutRequest = new Request()
	aboutRequest.get('/about').then( res => {
		document.getElementById('aboutContent').style.display = 'block'
		document.getElementById('blogContent').style.display = 'none'
	})
}


