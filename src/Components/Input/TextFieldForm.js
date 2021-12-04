import React from "react"
import { ErrorMessage, Field } from "formik"


function TextFieldForm (props) {
    const { name, label, placeholder, ...rest } = props
    return (
        <>
            {label && <label for={name}>{label}</label>}
            <Field
                className="form-control"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export default TextFieldForm ;