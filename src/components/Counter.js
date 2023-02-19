import "./Counter.css";

const Counter = () => {
    const toggleCounterHandler = () => {};

    return (
        <main className="counter">
            <h1>Redux Counter</h1>
            <div className="value">-- COUNTER VALUE --</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
