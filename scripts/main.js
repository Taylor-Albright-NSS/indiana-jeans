import { OwnsJeansChoices } from "./JeansOwner.js"
import { LocationTypeChoices } from "./Locations.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"

const mainContainer = document.querySelector('#container')

const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const saveSubmission = await SaveSubmission()
    const submissionListHTML = await SubmissionList()
    mainContainer.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${saveSubmission}
    ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)
render()