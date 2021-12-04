import {Formik, Field, ErrorMessage} from 'formik';
import './App.css';
import * as yup from 'yup';
import JobForm from './Components/Form/JobForm'
import TextFieldForm from './Components/Input/TextFieldForm';
import SelectFieldForm from './Components/SelectField/SelectFieldForm';
import {useState, useEffect} from 'react'
import WorkDetailsSchema from './Utils/Validation/WorkDetailsSchema';
import SubmitBtn from './Components/Buttons/SubmitBtn'
const formSchema = {
  name: {
      type: "text",
      label: "Name",
      required: true
  },
  email: {
      type: "email",
      label: "Email",
      required: true
  },
  role: {
      type: "select",
      label: "Role",
      required: true,
      options: [
          {
              label: "Admin",
              value: "admin"
          },
          {
              label: "User",
              value: "user"
          }
      ]
  }
}

/***
 * const formSchema = {
    JobTitle: {
        type:'select',
        label: "Role",
        required: true,
        options: JobTitle
    },
    JobField: {
        type:'select',
        label: "Role",
        required: true,
        options: JobField
    },
    JobLocation: {
        type:'select',
        label: "Role",
        required: true,
        options: JobLocation
    },
    StartDate: {
        type: 'text',
        label: 'Start Date',
        required: true,
    },
    EndDate: {
        type: 'text',
        label: 'End Date',
        required: true
    },
    CompanyName: {
        type: 'text',
        label: 'Company Name',
        required: true
    },
    CompanyAddress: {
        type: 'text',
        label: 'Company Name',
        required: true
    },
    CompanyIndustry: {
        type: 'select',
        label: 'Company Name',
        required: true,
        options: CompanySector
    },
    CompanySize:{
        type: 'select',
        label: 'Company Size',
        required: true,
        options: CompanySize
    },
    CompanySector: {
        type: 'select',
        label: 'Company Name',
        required: true,
        options: CompanySector
    },
    SupervisorName: {
        type: 'text',
        label: 'Supervisor Name',
        required: true
    },
    NumSupervised: {
        type: 'text',
        label: 'Num of Supervised before',
        required: true
    },
    Leaving: {
        type: 'text',
        label: 'Reason Leaving',
        required: true
    },
    Compensation: {
        StartSalary:{
            type: 'text,
            label: 'Start Salary',
            required: true
        },
        StartSalary:{
            type: 'text,
            label: 'End Salary',
            required: true
        },
        Currency:{
            type: 'select',
            label: 'Currency',
            required: true,
            options: Currency
        }
    }
    

}
 */


function App() {


  const [formData, setFormData] = useState({});
    const [validationSchema, setValidationSchema] = useState({});

    useEffect(() => {
        initForm(formSchema);
    }, []);

    const initForm = (formSchema) => {
        let _formData = {};
        let _validationSchema = {};

        for(var key of Object.keys(formSchema)){
            _formData[key] = "";

            if(formSchema[key].type === "text"){
                _validationSchema[key] = yup.string();
            }else if(formSchema[key].type === "email"){
                _validationSchema[key] = yup.string().email()
            }else if(formSchema[key].type === "select"){
                _validationSchema[key] = yup.string().oneOf(formSchema[key].options.map(o => o.value));
            }

            if(formSchema[key].required){
                _validationSchema[key] = _validationSchema[key].required('Required');
            }
        }

        setFormData(_formData);
        setValidationSchema(yup.object().shape({ ..._validationSchema }));
    }

    const getFormElement = (elementName, elementSchema) => {
        const props = {
            name: elementName,
            label: elementSchema.label,
            options: elementSchema.options
        };

        if (elementSchema.type === "text" || elementSchema.type === "email") {
            return <TextFieldForm {...props} />
        }

        if (elementSchema.type === "select") {
            return <SelectFieldForm  {...props} />
        }

    }

    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        console.log(values);
        setSubmitting(false);
    }

    return (
      <div className="App">
          <JobForm
              enableReinitialize
              initialValues={formData}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
          >

              {Object.keys(formSchema).map( (key, ind) => (
                  <div key={key}>
                      {getFormElement(key, formSchema[key])}
                  </div>
              ))}
              <SubmitBtn title='Save'/>
          </JobForm>
      </div>
  );
}

export default App;
