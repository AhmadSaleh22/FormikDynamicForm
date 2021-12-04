import { useFormikContext } from "formik";
import React from "react";


function SubmitBtn(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
    )
}

export default SubmitBtn;