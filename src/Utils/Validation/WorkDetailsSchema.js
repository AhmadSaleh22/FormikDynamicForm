import * as yup from 'yup';

const WorkDetailsSchema = yup.object().shape({
    name: yup.string()
          .required('Required')
          .min(5, "Required"),
    email: yup.string().email()
        .required('Required')
        .min(1, "Required"),
    role: yup.string().oneOf(['admin', 'user'])
          .required('Required')
          .min(1, "Required"),
});

export default WorkDetailsSchema;