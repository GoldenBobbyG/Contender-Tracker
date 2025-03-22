// TODO: Create an interface for the Candidate objects returned by the API


export default interface Candidate 
{
    avatar_url: string;
    login: string;
    location?: string |null;
    email?: string | null;
    company?: string | null;
    bio?: string | null;
    html_url: string;
}
