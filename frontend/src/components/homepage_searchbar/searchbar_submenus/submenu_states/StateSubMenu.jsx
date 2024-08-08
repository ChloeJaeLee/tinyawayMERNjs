import { useState, useEffect } from "react";
import { apiAllStates } from "../../../../apiUrl.js"; 

function StateSubMenu({ selectedCountry }) {
    const [stateShown, setStateShown] = useState([]); 

    const url = apiAllStates

    useEffect(() => {
        if (selectedCountry === '') {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setStateShown(data)
                    console.log(data)
                }); 
        } else {
            console.log('country selected'); 
        }
    },[selectedCountry])

    return(
        <>
            state
        </>
    )
}

export default StateSubMenu; 

// australia - 21
// europe - regionid 2
// malaysia - 5
// new zealand - 615
// taiwan - 7
