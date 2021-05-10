import React from "react"

const Form = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange = (event) => {
        console.log("event:" , event)
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.movieSearch(formData.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="on">
                <br />
                Let's find the movie your're looking for
                <br />
                <br />
                <input
                    className ="inputBar"
                    placeholder="Search Here!"
                    type="text"
                    name="searchTerm"
                    value={formData.searchTerm}
                    onChange={handleChange}
                />
                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;