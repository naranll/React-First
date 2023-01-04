import "/Users/morning/Desktop/React-projects/first-app/src/stackOverflow/style/Center.css";
import SingleResult from "./SingleResult";

const results = [
  {
    title: "Loop Inside React JSX",
    description:
      "why this isn't valid JSX, since JSX maps to function calls. … However, coming from template land and being new",
    vote: 100,
    answer: 32,
  },
  {
    title: "force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 100,
    answers: 2,
  },
  {
    title: "rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 20,
    answers: 3,
  },
];

export default function Center() {
  return <div id="center">
    <SingleResult 
    title = {results[0].title}
    description = {results[0].title}
    vote = {results[0].vote}
    />
    <SingleResult 
    title = {results[1].title}
    description = {results[1].title}
    vote = {results[1].vote}
    />
    <SingleResult 
    title = {results[2].title}
    description = {results[2].title}
    vote = {results[2].vote}
    />
  </div>;
}
