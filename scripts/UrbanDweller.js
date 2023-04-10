import { setSocioLocationId } from "./TransientState.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "location") {
            setSocioLocationId(parseInt(changeEvent.target.value))
        }
    }
)

export const LocationTypeChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = "<h1>In which kind of area do you live?</h1>"

    for (const location of locations) {
        choicesHTML += `<div>
            <input type='radio' name='location' value='${location.id}' /> ${location.label}
        </div>`
    }

    return choicesHTML
}
