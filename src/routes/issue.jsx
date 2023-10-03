import { useLoaderData, Link } from 'react-router-dom';

export async function loader({ params }) {
    const url = `https://api.github.com/repos/facebook/create-react-app/issues/${params.issueId}`;
    const issue = await fetch(url).then(response => response.json());
    console.log(issue);
    return { issue };
}

export default function Issue() {
    const { issue } = useLoaderData();

    return (
        <>
            <nav>
            <Link to="/">Back to issues list</Link>
            </nav>
            <div className="issue_info">
                <p>{issue.title}</p>
                <p>{issue.body}</p>
                <p>Created at: {issue.created_at}</p>
                <p>Updated at: {issue.updated_at}</p>
            </div>
        </>
    )
}