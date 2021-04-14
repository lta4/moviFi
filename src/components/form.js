import React from "react"

const Form = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange = (event) => {
        // console.log("event:" , event)
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.movieSearch(formData.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    value={formData.searchTerm}
                    onChange={handleChange}
                />
                <input type="submit"        value="submit" />
            </form>
        </div>
    );
};

export default Form;