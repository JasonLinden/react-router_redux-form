import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    {...field.input} // ES6 => onChange={field.input.onChange}
                    type="text"
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>);
    }

    onSubmit(values) {
        const { categories, title } = values;

        console.log(categories);
        console.log(title);
    }

    render() {
        // { propOnObj } = this.awe
        // var propOnObj = awe.propOnObj
        const { handleSubmit } = this.props; // prop added from redux form.

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title" // name prop must match errors object on validate
                    component={this.renderField}
                    label="Title"
                />
                <Field
                    name="categories"
                    component={this.renderField}
                    label="Categories"
                />
                <Field
                    name="content"
                    component={this.renderField}
                    label="Post Content"
                />
                <button
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
            </form>
        )
    }
}

// Will be called automatically at certain points during our form ie on submit
function validate(values) { // <-- object for all the different values from the form
    const errors = {};

    // validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters"; // name prop must match errors object on validate
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content please!";
    }

    // if errors is empty the form is fine to submit.
    // if errors has anu properties, redux assumes that the form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);