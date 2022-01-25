// window.scroll({
// 	top: 0,
// 	left: 0,
// })

const maxWidth = window.innerWidth * 1.1
const maxHeight = window.innerHeight * 1.1

const animate = document.querySelectorAll(".animate")
const container = document.querySelector(".container")
const hero = document.querySelector(".hero")
const info_me = document.querySelector(".info_me")
const info_side = document.querySelector(".info_side")
const job_and_xp = document.querySelector(".job_and_xp")
const effect = document.querySelectorAll(".effect")
const modal1 = document.querySelector(".modal1").innerText
const height = document.body.offsetHeight
const bubbles = document.querySelectorAll(".bubble")
const counter = document.querySelector(".bubbleCounter")
const startBtn = document.querySelector(".btn-start")
const stopBtn = document.querySelector(".btn-stop")
const btnDestroyBubbles = document.querySelector(".btn-destroy-bubbles")
const dashboard = document.querySelector(".dashboard")
const gameDash = document.querySelector(".gameDashboard")
const score = document.querySelector("#score")
const bubbleCounter = document.querySelector(".bubbleCounter")
const game = document.querySelector(".game")
const difficulty = document.querySelector("#difficulty")
const hell = document.querySelector("#hell")
const heaven = document.querySelector("#heaven")
const btnPlus = document.querySelector(".btn-plus")
const show = document.querySelectorAll(".hide")
const empty1 = document.querySelector(".empty1")
const empty3 = document.querySelector(".empty3")

let dashOpen = false
let gameStarted = false
let stop = false
let level = 3
let bubbleCount = 0
let player_score = 0
const arrayOfBubbles = []

const modals = document.querySelectorAll(".modal")

//				FUNCTIONS

const startTheGame = () => {
	gameStarted = true
	let my_interval = setInterval(() => {
		if (arrayOfBubbles.length == 100) clearInterval(my_interval)
		if (level === 0) clearInterval(my_interval)
		let new_bubble = new Bubble()
		new_bubble.createAndAnimate()
		new_bubble.move()
		bubbleCount += 1

		counter.innerText = bubbleCount < 0 ? 0 : bubbleCount

		arrayOfBubbles.push(new_bubble)
	}, 1000)
}
const randomColor = () => {
	let letters = "0123456789ABCDEF"
	let color = "#"
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
const timer = (ms) => new Promise((res) => setTimeout(res, ms))

const addEffect = async () => {
	for (let e of effect) {
		e.classList.add("tremble")
		await timer(300)
	}
}
const popEmAll = async () => {
	for (let b of arrayOfBubbles) {
		b.pop()
		let t = Math.floor(Math.random() * 100)
		await timer(t)
	}
}
const getSign = () => {
	let number = Math.round(Math.random()) * 2 - 1

	return number
}
//				EVENT LISTENRS
stopBtn.addEventListener("click", () => {
	if (gameStarted) {
		level = 0
		popEmAll()
	}
})
document.addEventListener("click", (e) => {
	if (!gameStarted) {
		if (
			(dashOpen && !dashboard.contains(e.target)) |
			(dashOpen && !dashboard.contains(e.target.parentElement))
		) {
			show.forEach((h) => h.classList.add("hide"))
			dashOpen = false
		}
	}
})
btnPlus.addEventListener("click", () => {
	if (!dashOpen) {
		console.log("ici?")
		dashOpen = true
		show.forEach((h) => h.classList.remove("hide"))
	} else if (dashOpen) {
		show.forEach((h) => h.classList.add("hide"))
		dashOpen = false
	}
})
difficulty.addEventListener("input", (e) => {
	let speed = e.target.value
	if (speed > 4.5) {
		heaven.style.color = "green"
		hell.style.color = "black"
	}
	if (speed < 3) {
		hell.style.color = "red"
		heaven.style.color = "black"
	}
	if ((speed > 3) & (speed < 4.5)) {
		heaven.style.color = "black"
		hell.style.color = "black"
	}

	document
		.querySelectorAll(".bubble")
		.forEach((b) => (b.style.transition = `all ${speed}s linear`))

	level = speed
})
btnDestroyBubbles.addEventListener("click", popEmAll)
startBtn.addEventListener("click", startTheGame)

//				ANIMATIONS
if (history.scrollRestoration) {
	history.scrollRestoration = "manual"
} else {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0)
	}
}
window.addEventListener("DOMContentLoaded", () => {
	const tlbefore = gsap.timeline()
	const tl = gsap.timeline({ delay: 6 })
	const tl2 = gsap.timeline({ delay: 8 })
	const tl3 = gsap.timeline({ delay: 12 })

	tlbefore

		.from(".textAnimation", { y: 0, opacity: 0 })
		.to(".textAnimation", {
			y: -200,
			duration: 2,
			opacity: 1,
			ease: "expo.out",
		})
		.to(
			".modal1",
			{
				ease: "sine.out",
				clipPath: "circle(100% at 50% 50%)",
				duration: 3,
			},
			"-=2"
		)
		// .from(".letter", { y: -400, opacity: 1 }, "-=2")
		.to(
			".letter",
			{
				opacity: 1,
				top: 0,
				duration: 2,
				stagger: {
					from: "random",
					amount: 1,
					ease: "slow(0.7, 0.7, false)",
				},
			},
			"-=2"
		)

		.to("body", {
			backgroundImage: "url(./imgs/montagnes2.jpg)",
		})
		.to(".modal1", {
			background: "transparent",
			backgroundImage: "none",
		})
	tl.to(".modal", {
		duration: 1,
		x: -4000,
		ease: "none",
		stagger: { from: "random", amount: 0.3 },
	})
		.to(".container", {
			y: -height,
			duration: 1,
			opacity: 1,
		})
		.fromTo(
			".animate",
			{
				opacity: 0,
				duration: 1,
			},
			{
				opacity: 1,
				duration: 1,
				ease: "elastic",
				stagger: { from: "random", amount: 1 },
			}
		)
	tl2.to(".m2", {
		duration: 1,
		x: 8000,
		ease: "power1.inOut",
		stagger: { from: "random", amount: 0.3 },
	})

		.to(".container", {
			backgroundColor: "rgba(56,56,56,0.8)",
		})
		.to(".empty1", {
			opacity: 1,
		})
		.to(".empty3", {
			opacity: 1,
		})
		.call(() => {
			dashboard.style.opacity = 1
			document.body.style.overflow = "visible"
			setTimeout(() => {
				for (let modal of modals) {
					modal.remove()
				}
				// container.style.overflow = "visible"
			}, 3000)
		})
	tl3.call(addEffect)
})

class Bubble {
	constructor() {
		this.bubble = undefined
	}

	pop() {
		this.bubble.style.transform = "scale(4)"
		setTimeout(() => {
			this.bubble.remove()
			bubbleCount -= 1
			counter.innerText = bubbleCount < 0 ? 0 : bubbleCount
		}, 200)
	}
	popOne(bubble) {
		let span = document.createElement("span")
		span.innerText = "F*** YEAH!! +1pts!"
		span.style.position = "absolute"
		span.style.top = bubble.y + "px"
		span.style.left = bubble.x - 300 + "px"
		span.className = "fyeah"
		player_score += 1
		score.innerText = player_score
		container.append(span)
		setTimeout(() => {
			span.remove()
		}, 2000)
		bubble.target.style.transform = "scale(4)"
		setTimeout(() => {
			bubble.target.remove()
		}, 500)
		bubbleCount -= 1
		counter.innerText = bubbleCount < 0 ? 0 : bubbleCount
	}
	createAndAnimate() {
		let parent = container
		let bubble = document.createElement("div")
		this.bubble = bubble
		this.bubble.addEventListener("click", (e) => {
			this.popOne(e)
		})
		let size = Math.random() * 100
		this.bubble.style.height = `${size}px`
		this.bubble.style.width = `${size}px`
		this.bubble.style.top = Math.random() * maxHeight

		this.bubble.style.left = Math.random() * maxWidth
		this.bubble.className = "bubble"
		this.bubble.style.opacity = 0

		this.bubble.style.background = randomColor()

		parent.append(this.bubble)
	}
	move() {
		this.bubble.style.opacity = 1

		let b = this.bubble
		const repeatTimeout = function () {
			console.log("level", level)
			if (level === 0) {
				console.log("0, i ll clear")
				clearTimeout(repeatTimeout)
			} else {
				b.style.transform = `translate(${Math.floor(
					Math.random() * maxWidth * getSign()
				)}px, ${Math.floor(Math.random() * maxHeight * getSign())}px)`
				setTimeout(repeatTimeout, level * 1000)
			}
		}
		setTimeout(repeatTimeout, level)
	}
}
