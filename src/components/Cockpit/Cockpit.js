import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
        //http request

        // const timer = setTimeout(() => {
        //     alert("Saved data to cloud")
        // }, 1000)

        // click on toggle button
        toggleButtonRef.current.click();

        return () => {
            //clearTimeout(timer)
            console.log("[Cockpit.js] Cleanup work in use effect")
        }
    }, []) // [] empty array for only run first time

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect")
        return () => {
            console.log("[Cockpit.js] Cleanup work in 2nd useEffect")
        }
    })

    // useEffect();

    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }



    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold) // classes = ['red bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{ props.title }</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>

            <button 
            ref={toggleButtonRef}
            className={btnClass}
                onClick={props.clicked}

            >Switch Name
                    </button>
                    <button onClick={props.login}>Log in</button>
        </div>
    )
}

export default React.memo(Cockpit); // optimization for every change update