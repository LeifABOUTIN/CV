const animate = document.querySelectorAll(".animate")
const container = document.querySelector(".container")
const hero = document.querySelector(".hero")
const info_me = document.querySelector(".info_me")
const info_side = document.querySelector(".info_side")
const job_and_xp = document.querySelector(".job_and_xp")
const all_divs = document.querySelectorAll("div")
const modal1 = document.querySelector(".modal1").innerText
const height = document.body.offsetHeight

const modals = document.querySelectorAll(".modal")
modals.forEach((letter) => (letter.style.opacity = 1))

const timer = (ms) => new Promise((res) => setTimeout(res, ms))
const addEffect = async () => {
	for (let div of all_divs) {
		div.classList.add("tremble")
		await timer(300)
	}
}

const tl = gsap.timeline({ delay: 0.3 })
const tl2 = gsap.timeline({ delay: 4 })
const tl3 = gsap.timeline({ delay: 7 })

tl.to(".modal", {
	duration: 1,
	x: -4000,
	ease: "power1.inOut",
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
}).to(".container", {
	backgroundColor: "#383838",
})
tl3.call(addEffect)
setTimeout(() => {
	for (let modal of modals) {
		modal.remove()
	}
	container.style.overflow = "visible"
}, 7000)
