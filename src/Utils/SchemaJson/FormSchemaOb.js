import { JobTitle, JobField, JobLocation, CompanySector, CompanySize, Currency } from "../../Data/Data"


const  FormSchemaOb = {
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

export default FormSchemaOb;


/*const formSchema = {
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
    

} */