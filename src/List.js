import React from "react";

const List = (props) => {
    const { name, age, image } = props;
    return (
        <React.Fragment>
            <article className="person">
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        </React.Fragment>
    );
};

export default List;
