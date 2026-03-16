import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const validationSchema = yup.object({
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(/[A-Z]/, "must Include atleast 1 caps Letter")
      .matches(/[a-z]/, "must Include atleast 1 small Letter")
      .matches(/[0-9]/, "must Include atleast 1 Number")
      .matches(/[!@#~$&]/, "must Include at least 1 symbol")
      .min(6, "must have atleast of 6 characters"),
  });

  const navigate = useNavigate();

  const initialState: LoginFormValues = {
    email: "",
    password: "",
  };

  const Users: Record<string, string> = {
    "sakthivel2004it@gmail.com": "Sakthi@123",
  };

  const handleSubmit = (values: LoginFormValues) => {
    localStorage.removeItem("user");
    localStorage.removeItem("logged");
    localStorage.setItem("data", "");

    const user = Users[values.email];

    if (!user) {
      toast.error("user not signedin", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (user !== values.password) {
      toast.error("invalid password", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    localStorage.setItem("user", values.email);
    localStorage.setItem("logged", "true");

    toast.success("logged succesfully", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
      onClose: () => navigate("/item"),
    });

    setTimeout(() => {
      navigate("/item");
    }, 3500);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik<LoginFormValues>
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">

              <div>
                <label className="block text-sm/6 font-medium text-gray">
                  Email address
                </label>

                <div className="mt-2">
                  <Field
                    name="email"
                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-black"
                  />
                </div>

                <ErrorMessage
                  component="p"
                  className="text-red-500 text-sm"
                  name="email"
                />
              </div>

              <div>
                <label className="block text-sm/6 font-medium text-gray">
                  Password
                </label>

                <div className="mt-2">
                  <Field
                    name="password"
                    type="password"
                    className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-black"
                  />
                </div>

                <ErrorMessage
                  component="p"
                  className="text-red-500 text-sm"
                  name="password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
                >
                  Login
                </button>
              </div>

            </Form>
          </Formik>
        </div>

        <ToastContainer transition={Bounce} />
      </div>
    </>
  );
};

export default Login;