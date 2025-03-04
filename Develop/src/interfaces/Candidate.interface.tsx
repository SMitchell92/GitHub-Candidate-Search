// TODO: Create an interface for the Candidate objects returned by the API
//     and use it in the CandidateSearch component
//     to type the candidate state variable.
//     The interface should have the following properties:

export default interface Candidate {
name: string
location: string
email: string
company: string
bio: string
avatar_url: string
html_url: string
login: string
}