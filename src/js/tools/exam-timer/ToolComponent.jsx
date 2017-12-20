import React from 'react'
import Output from '../../components/Output.jsx'
import TextField from '../../components/TextField.jsx'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: "", // User input.
            minutes: "", // User input.
            errorMessage: "", // Error message for the form.
            showForm: true,
            timeStarted: 0, // Time at which timer started.
            timeRemaining: 0, // Time left on the clock.
            timePaused: 0, // Total pause time.
            timeLastUpdated: 0, // Last time updateTime() was called.
            timeStarted: 0, // Start time of timer.
            totalTime: 0, // Total time for exam.
            isPaused: false // true iff the timer is paused.
        };
    }

    onHoursChange(e) {
        this.setState({hours:e.target.value},
            this.updateErrorMessage.bind(this));
    }
    onMinutesChange(e) {
        this.setState({minutes:e.target.value},
            this.updateErrorMessage.bind(this));
    }
    updateErrorMessage() {
        let { hours, minutes } = this.state,
            e = "",
            h = parseFloat(hours),
            m = parseFloat(minutes),
            hEmpty = hours.trim().length == 0,
            mEmpty = minutes.trim().length == 0;

        if (hEmpty && mEmpty) e = "Please specify the time.";
        else if (!hEmpty && (isNaN(h) || h < 0)) e = "Invalid hours.";
        else if (!mEmpty && (isNaN(m) || m < 0)) e = "Invalid minutes.";
        else if (h + m == 0 || !hEmpty + m == 0 || !mEmpty + h == 0)
            e = "Total time cannot be 0.";
        this.setState({ errorMessage: e });
    }

    // To be triggered when <ExamTimerForm> is submitted.
    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        let { hours, minutes } = this.state,
            h = parseFloat(hours),
            m = parseFloat(minutes),
            total = (isNaN(h) ? 0 : h * 3600000) + (isNaN(m) ? 0 : m * 60000);
        this.setState(
            {
                showForm: false,
                isPaused: false,
                timePaused: 0,
                timeLastUpdated: Date.now(),
                timeStarted: Date.now(),
                timeRemaining: total,
                totalTime: total
            },
            this.updateTime.bind(this)
        );
    }

    /**
     * This is the function that counts down the time.
     * This function uses requestAnimationFrame to call itself.
     * This function runs even when the timer is paused (to compute timePaused).
     */
    updateTime() {
        let { showForm, isPaused, timePaused, timeLastUpdated, timeStarted,
            totalTime, timeRemaining } = this.state,
            timeNow = Date.now();

        // Timer has been reset, or time's up.
        if (showForm || timeRemaining <= 0) return false;

        // Too early, come again later.
        if (timeNow - timeLastUpdated < 500)
            return window.requestAnimationFrame(this.updateTime.bind(this));

        // If paused, add to timePaused.
        if (isPaused) timePaused += timeNow - timeLastUpdated;

        // If not paused, subtract from timeRemaining.
        else {
            let timeUsed = timeNow - timeStarted - timePaused;
            timeRemaining = totalTime - timeUsed;
        }

        // Update.
        timeLastUpdated = timeNow;
        let callback = window.requestAnimationFrame.bind(null,
            this.updateTime.bind(this));
        this.setState({ timePaused, timeRemaining, timeLastUpdated }, callback);
    }

    onPause() {this.setState({ isPaused: true });}
    onResume() {this.setState({ isPaused: false });}
    onReset() {this.setState({ showForm: true, errorMessage: "" });}

    render() {
        let { showForm, hours, minutes, errorMessage, timeRemaining, totalTime,
            isPaused } = this.state;

        return (
            <main>
                <div className="container">
                    {showForm ?
                        <ExamTimerForm hours={hours} minutes={minutes}
                            onSubmit={this.onSubmit.bind(this)}
                            onHoursChange={this.onHoursChange.bind(this)}
                            onMinutesChange={this.onMinutesChange.bind(this)}
                            errorMessage={errorMessage} /> : null}
                    {!showForm ?
                        <ExamTimerCountdown timeRemaining={timeRemaining}
                            totalTime={totalTime} isPaused={isPaused}
                            onReset={this.onReset.bind(this)}
                            onPause={this.onPause.bind(this)}
                            onResume={this.onResume.bind(this)} /> : null}
                </div>
            </main>
        );
    }
}


// <ExamTimerCountdown>
const ExamTimerCountdown = ({ timeRemaining, totalTime, onPause, onResume,
    onReset, isPaused }) => {

    let hours = Math.floor(timeRemaining / 3600000),
        minutes = Math.floor((timeRemaining % 3600000)/ 60000),
        seconds = Math.floor((timeRemaining % 60000)/ 1000),
        // Seconds are displayed during the first minute and last 5 minutes.
        showSeconds = totalTime - timeRemaining < 60000 ||
            timeRemaining < 300000;

    let padNumber = x => {
    	x = x.toString();
    	if (x.length < 2) x = "0" + x;
    	return x;
    };

    // Time's up!
    if (timeRemaining <= 0) {
        return (
            <form>
                <p style={{'fontSize': '3em', 'textAlign': 'center',
                    'margin-bottom': '100px'}}>Time's up!</p>
                <div className="buttonrow">
                    <button type="button" onClick={onReset}>RESET</button>
                </div>
            </form>
        );
    }

    return (
        <form>
            <output style={{'fontSize': '5em', 'textAlign': 'center'}}>
                <span style={{"opacity": hours > 0 ? "1" : "0.2"}}>
                    {padNumber(hours)}h
                </span>{" "}
                <span style={{"opacity": hours + minutes > 0 ? "1" : "0.2"}}>
                    {padNumber(minutes)}m
                </span>{" "}
                {showSeconds ? padNumber(seconds) + "s" : null}
            </output>

            {/* Progress bar */}
            <div style={{'width': '100%', 'height': '20px',
                'backgroundColor': 'rgba(0, 0, 0, 0.15)'}}>
                <div className="background-color-green" style={{
                    'width': (totalTime - timeRemaining) * 100 / totalTime + '%',
                    'height': '20px'
                    }}></div>
            </div>

            <div className="buttonrow" style={{'minHeight': '500px'}}>
                {totalTime - timeRemaining < 30000 ? // First 30 seconds.
                    <button type="button"  className="background-color-red"
                        onClick={onReset}>RESET</button> : null}
                {isPaused ?
                    <button type="button" autoFocus={true} onClick={onResume}>
                        RESUME</button> :
                    <button type="button" autoFocus={true} onClick={onPause}>
                        PAUSE</button>}
            </div>
        </form>
    );
}


// Custom TextField styles.
const textFieldStyle = {
    'width': '3em',
    'fontSize': '1.4em'
};

// <ExamTimerForm>
const ExamTimerForm = ({ hours, minutes, onHoursChange, onMinutesChange,
    onSubmit, errorMessage }) => {

    let disableSubmit = errorMessage || (!hours && !minutes);

    return (
        <form onSubmit={onSubmit}>
            <TextField maxLength="2" label="Hours" placeholder="0" autoFocus
                style={textFieldStyle} onChange={onHoursChange}
                value={hours} />
            <TextField maxLength="3" label="Minutes" placeholder="0"
                style={textFieldStyle} onChange={onMinutesChange}
                value={minutes} />
            <p className="errormessage">{errorMessage}</p>
            <div className="buttonrow">
                <button type="submit" disabled={disableSubmit}>START</button>
            </div>
        </form>
    );
}


export default ToolComponent;
