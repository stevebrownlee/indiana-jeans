import { JeanPriceInput } from "./JeanPrice.js"
import { OwnJeansChoices } from "./OwnsJeans.js"
import { Submissions } from "./Submissions.js"
import { broadCastStateChanged, saveSubmission } from "./TransientState.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

document.addEventListener(
    "click",
    async (clickEvent) => {
        if (clickEvent.target.id === "submit") {
            await saveSubmission()
        }
    }
)

const render = async () => {
    const ownsJeansComponentHTML = OwnJeansChoices()
    const locationComponentHTML = await LocationTypeChoices()
    const submissionComponentHTML = await Submissions()

    const surveyHTML = `
        <article class="transientState">
            ${ownsJeansComponentHTML}
        </article>

        <article class="transientState">
            ${locationComponentHTML}
        </article>

        <button id="submit">Submit Info</button>

        <article class="transientState">
            <h2>Submissions</h2>
            ${submissionComponentHTML}
        </article>

    `

    container.innerHTML = surveyHTML

}

document.addEventListener("transientStateChanged", render)
broadCastStateChanged()
