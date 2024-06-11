import lifts from "./lifts.json";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRoutine = (number) => (
    Object.keys(lifts).map(type => (
        <h2 key={`${type}${number}`}>{type} - {lifts[type][getRandomInt(lifts[type].length)]}</h2>
    ))
)

const App = () => (
    <>
        {getRoutine(1)}
        {getRoutine(2)}
    </>
);

export default App;