import React from 'react';

// Import the DogList component
import DogList from './DogList'

function App() {
    return (
        <article>
            <h1>Dog names</h1>
            {/* Display the DogList component */}
            <DogList />

            {/* TODO: Add message */}
            <div>Hosted on Azure Static Web Apps</div>
            

        </article>
    )
}

export default App;