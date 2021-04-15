import { useForm, ValidationError } from "@formspree/react";
import React from "react";

function ContactForm() {
    const [state, handleSubmit] = useForm("xayanyye");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="firstname"
                type="firstname"
                name="firstname"
                placeholder="First Name"
            />
            <ValidationError
                prefix="First Name"
                field="firstname"
                errors={state.errors}
            />
            <input
                id="lastname"
                type="lastname"
                name="lastname"
                placeholder="Last Name"
            />
            <ValidationError
                prefix="Last Name"
                field="lastname"
                errors={state.errors}
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm