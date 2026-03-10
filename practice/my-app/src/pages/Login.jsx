import  { ErrorMessage,Formik,Form,Field } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const validationShcema = yup.object({
    email:
      yup.string()
         .email("invalid email")
         .required("Email is required"),
    password:
      yup.string()
        .required("password is required")
        .matches(/[A-Z]/, "must Include atleast 1 caps Letter")
        .matches(/[a-z]/, "must Include atleast 1 small Letter")
        .matches(/[0-9]/, "must Include atleast 1 Number")
        .matches(/[!@#~$&]/, "must Include at least 1 symbol")
        .min(6, "must have atleast of 6 characters")
  });

  const initialStated = { email: "", password: "" };
  const Users = {"sakthivel2004it@gmail.com":"Sakthi@123"};
 

  const handleSubmit = (values) => { 
    localStorage.removeItem("user");
    localStorage.removeItem("logged");
    localStorage.setItem("data","");
    const user = Users[values.email];
    if(!user) return alert("user not signedin");
    if(user!==values.password) return alert("invalid password");
    localStorage.setItem("user",values.email);
    localStorage.setItem("logged",true);
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Login</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik initialValues={initialStated} validationSchema={validationShcema} onSubmit={handleSubmit}>
            <Form className="space-y-6">

              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray">
                  Email address
                </label>
                <div className="mt-2">
                  <Field
                    name="email"
                    className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
                <ErrorMessage name='email'/>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray">
                    Password
                  </label>
                  <div className="text-sm">

                  </div>
                </div>
                <div className="mt-2">
                  <Field
                    name="password"
                    className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
                <ErrorMessage name='password'/>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  Login
                </button>
              </div>
            </Form>
          </Formik>

        </div>
      </div>
    </>);
}

export default Login;