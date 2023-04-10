import { setOwnsBlueJeans } from "./TransientState.js"


const handleOwnsChange = (changeEvent) => {
    if (changeEvent.target.name === "owns") {
        setOwnsBlueJeans(JSON.parse(changeEvent.target.value))
    }
}

export const OwnJeansChoices = () => {
    document.removeEventListener("change", handleOwnsChange)
    document.addEventListener("change", handleOwnsChange)


    let choicesHTML = "<h1>Do you own jeans?</h1>"
    choicesHTML += "<input type='radio' name='owns' value=true /> Yes"
    choicesHTML += "<input type='radio' name='owns' value=false /> No"

    return choicesHTML
}