// This is the initial state of a submission
let surveyChoices = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}

export const broadCastStateChanged = () => {
    document.dispatchEvent(new CustomEvent("transientStateChanged"))
}

/*
    Functions to update state
*/
export const setOwnsBlueJeans = (owns) => {
    surveyChoices.ownsBlueJeans = owns
    console.log(surveyChoices)
}

export const setPricePaid = (amount) => {
    surveyChoices.pricePaid = amount
    console.log(surveyChoices)
}

export const setSocioLocationId = (locationId) => {
    surveyChoices.socioLocationId = locationId
    console.log(surveyChoices)
}

/*
    Function to get current transient state
*/
export const getTransientState = () => {
    return {...surveyChoices}
}

/*
    Function to save user choice to permanent state in the API
*/
export const saveSubmission = async () => {
    const requestDetails = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(surveyChoices)
    }

    const response = await fetch("http://localhost:8088/submissions", requestDetails)
    const newSubmission = await response.json()

    surveyChoices = {
        "ownsBlueJeans": false,
        "pricePaid": 0,
        "socioLocationId": 0
    }

    broadCastStateChanged()
}
