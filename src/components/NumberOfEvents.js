const NumberOfEvents = ({ setCurrentNOE, setErrorAlert}) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        if (isNaN(value)) {
            setErrorAlert('value is not a number');
        } else if (value > 50) {
            setErrorAlert('max value is 50');
        } else if (value <= 0) {
            setErrorAlert('min value is 1');
        } else {
            setErrorAlert('');
            setCurrentNOE(value);
        }
    };
    return (
        <div id="number-of-events">
            <input type="text" defaultValue="32" data-testid="numberOfEventsInput" ></input>
        </div>
    );
};

export default NumberOfEvents;