export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionHTML = ""
    submissions.map(submission => {
        submissionHTML += `<section class='submission'>
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foreign key ${submission.socioLocationId}</div>
    </section>
    `
    })
    return submissionHTML
}