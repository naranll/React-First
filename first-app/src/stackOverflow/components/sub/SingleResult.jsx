import "/Users/morning/Desktop/React-projects/first-app/src/stackOverflow/style/singleResult.css"

export default function SingleResult(props) {
    console.log("Searcch results: ", props.title);
    return (
        <div className="resultContainer">
            <h4>{props.title}</h4>
            <p>{props.descripton}</p>
            <p>{props.vote}</p>
            <p>{props.answer}</p>
        </div>
    )
}