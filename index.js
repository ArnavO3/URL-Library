let myLeads = []
let oldLeads = []

let input_Btn = document.getElementById("inputBtn")

const ulEl = document.getElementById("ulEL")

const deleteBTN = document.getElementById("deleteBtn")

const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsLocalStorage) {
    myLeads = leadsLocalStorage
    render(myLeads)
}

const tabs = [{ url: "https://www.linkedin.com/in/arnav-tiwari-994a4622a/" }]
const tabBtn = document.getElementById("tabBTN")
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
         <a target= '_blank' href='${leads[i]}'> 
            ${leads[i]} 
         </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

deleteBTN.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

input_Btn.addEventListener("click", function () {
    myLeads.push(inputElement.value)
    inputElement.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

