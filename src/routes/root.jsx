import { useLoaderData, Link } from 'react-router-dom';

export async function loader() {
    const url = 'https://api.github.com/repos/facebook/create-react-app/issues';
    const issueList = await fetch(url).then(response => response.json());
    console.log(issueList);
    return { issueList };
}

export default function Root() {
    const { issueList } = useLoaderData();
    return (
        <>
            <h1>Github Issue List</h1>
            <ul>
                {issueList.map(issue => {
                    return (
                        <li 
                        key={issue.id}>
                        <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}