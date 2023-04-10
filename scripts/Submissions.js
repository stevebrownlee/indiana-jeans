
export const Submissions = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let choicesHTML = ""
    for (const submission of submissions) {
        choicesHTML += `<div class="submission">
            <div>Owns jeans? ${submission.ownsBlueJeans}</div>
            <div>Location ${submission.socioLocationId}</div>
        </div>`
    }

    return choicesHTML
}
