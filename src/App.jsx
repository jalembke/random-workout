import lifts from "./lifts.json";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRoutine = (number) => (
    Object.keys(lifts).map(type => {
        const selected = getRandomInt(lifts[type].length);
        const lift_element = <h2 key={`${type}${number}`}>{type} - {lifts[type][selected]}</h2>;
        lifts[type].splice(selected, 1);
        return lift_element;
    })
);

const App = () => (
    <>
        {getRoutine(1)}
        {getRoutine(2)}
    </>
);

export default App;