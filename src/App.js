import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
    const [dob, setDob] = useState(data);

    const handleBirthday = () => {
        setDob([]);
    };

    console.log(dob);
    return (
        <main>
            <section className="container">
                <h3>
                    {dob.length
                        ? `${dob.length} birthdays today`
                        : "no birthday"}{" "}
                </h3>
                {dob.map((person) => {
                    return (
                        <List
                            key={person.id}
                            {...person}
                        />
                    );
                })}
                <button
                    onClick={handleBirthday}
                    className="btn"
                >
                    Clear
                </button>
            </section>
        </main>
    );
}

export default App;
