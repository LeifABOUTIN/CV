import trad from "./trad.js"
let language = document.querySelector("#language")
let flag = document.querySelector(".fa-flag-usa")
let slider = document.querySelector(".slider")
let title = document.querySelector(".title")
let subtitle = document.querySelector(".subtitle")
let skill_title = document.querySelector(".skill_title")
let skill_1 = document.querySelector(".skill_1")
let skill_2 = document.querySelector(".skill_2")
let skill_3 = document.querySelector(".skill_3")
let skill_4 = document.querySelector(".skill_4")
let skill_5 = document.querySelector(".skill_5")
let skill_6 = document.querySelector(".skill_6")
let skill_7 = document.querySelector(".skill_7")
let skill_8 = document.querySelector(".skill_8")
let skill_9 = document.querySelector(".skill_9")
let job_1 = document.querySelector(".job_1")
let job_2 = document.querySelector(".job_2")
let job_3 = document.querySelector(".job_3")
let job_4 = document.querySelector(".job_4")
let job_5 = document.querySelector(".job_5")
let job_6 = document.querySelector(".job_6")
let job_7 = document.querySelector(".job_7")
let job_8 = document.querySelector(".job_8")
let job_9 = document.querySelector(".job_9")
let job_10 = document.querySelector(".job_10")
let job_11 = document.querySelector(".job_11")
let job_12 = document.querySelector(".job_12")
let job_13 = document.querySelector(".job_13")
let job_14 = document.querySelector(".job_14")
let school_1 = document.querySelector(".school_1")
let school_2 = document.querySelector(".school_2")
let school_3 = document.querySelector(".school_3")
let school_4 = document.querySelector(".school_4")
console.log(language)
language.addEventListener("input", () => {
	if (language.checked === true) {
		englishVersion("en")
		slider.style.backgroundImage = 'url("./imgs/flag_usa.png")'
	} else {
		englishVersion("fr")
		slider.style.backgroundImage = 'url("./imgs/flag_fra.png")'
	}
})
function englishVersion(langue) {
	if (langue === "en") {
		title.innerText = trad.english.title
		subtitle.innerText = trad.english.subtitle
		skill_title.innerText = trad.english.skill_title
		skill_1.innerText = trad.english.skill_1
		skill_2.innerText = trad.english.skill_2
		skill_3.innerText = trad.english.skill_3
		skill_4.innerText = trad.english.skill_4
		skill_5.innerText = trad.english.skill_5
		skill_6.innerText = trad.english.skill_6
		skill_7.innerText = trad.english.skill_7
		skill_8.innerText = trad.english.skill_8
		skill_9.innerText = trad.english.skill_9
		job_1.innerText = trad.english.job_1
		job_2.innerText = trad.english.job_2
		job_3.innerText = trad.english.job_3
		job_4.innerText = trad.english.job_4
		job_5.innerText = trad.english.job_5
		job_6.innerText = trad.english.job_6
		job_7.innerText = trad.english.job_7
		job_8.innerText = trad.english.job_8
		job_9.innerText = trad.english.job_9
		job_10.innerText = trad.english.job_10
		job_11.innerText = trad.english.job_11
		job_12.innerText = trad.english.job_12
		job_13.innerText = trad.english.job_13
		job_14.innerText = trad.english.job_14
		school_1.innerText = trad.english.school_1
		school_2.innerText = trad.english.school_2
		school_3.innerText = trad.english.school_3
		school_4.innerText = trad.english.school_4
	}
	if (langue === "fr") {
		title.innerText = trad.french.title
		subtitle.innerText = trad.french.subtitle
		skill_title.innerText = trad.french.skill_title
		skill_1.innerText = trad.french.skill_1
		skill_2.innerText = trad.french.skill_2
		skill_3.innerText = trad.french.skill_3
		skill_4.innerText = trad.french.skill_4
		skill_5.innerText = trad.french.skill_5
		skill_6.innerText = trad.french.skill_6
		skill_7.innerText = trad.french.skill_7
		skill_8.innerText = trad.french.skill_8
		skill_9.innerText = trad.french.skill_9
		job_1.innerText = trad.french.job_1
		job_2.innerText = trad.french.job_2
		job_3.innerText = trad.french.job_3
		job_4.innerText = trad.french.job_4
		job_5.innerText = trad.french.job_5
		job_6.innerText = trad.french.job_6
		job_7.innerText = trad.french.job_7
		job_8.innerText = trad.french.job_8
		job_9.innerText = trad.french.job_9
		job_10.innerText = trad.french.job_10
		job_11.innerText = trad.french.job_11
		job_12.innerText = trad.french.job_12
		job_13.innerText = trad.french.job_13
		job_14.innerText = trad.french.job_14
		school_1.innerText = trad.french.school_1
		school_2.innerText = trad.french.school_2
		school_3.innerText = trad.french.school_3
		school_4.innerText = trad.french.school_4
	}
}
