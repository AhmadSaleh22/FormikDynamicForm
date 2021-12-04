import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
  useFormik
} from 'formik';
import React from 'react';

function JobForm(props) {

    // const submitValue =(values)=>{

    //     console.log(values);
    //   }
    
      // const form =(props)=>{
      //   return <form onSubmit={props.handleSubmit}>
      //     <Field name="name" placeholder="name"/>
      //     <ErrorMessage name='name'/>
      //     <Field name="email" type="email" placeholder="email"/>
      //     <ErrorMessage name='email'/>
      //     <button type='submit'>send</button>
      //   </form>
    
      // }

        // const formik = useFormik({
        //   initialValues: {
        //     jobTitle: JobTitle[0],
        //   },
        // });

    return (
      <Formik
      {...props}
      >
          <FormikForm className="needs-validation" novalidate="">
              {props.children}
          </FormikForm>
      </Formik>
    );
}

export default JobForm;