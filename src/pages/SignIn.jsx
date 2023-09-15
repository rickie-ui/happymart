import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  //  validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("enter a valid email address")
      .required("email is required"),
    password: Yup.string()
      .min(6, "minimum of 6 characters is required")
      .required("password is required"),
  });

  const navigate = useNavigate();
  // handle navigation
  const handleNavigate = () => {
    // Use the navigate function to go to a specific page
    // Replace "/target-page" with the desired route path
    navigate(-1);
  };

  const onSubmit = (values) => {
    // Save the form data to localStorage
    localStorage.setItem("formData", JSON.stringify(values));

    navigate("/home");

    // console.log(values);
  };
  return (
    <div className="mx-auto w-11/12 pt-4 antialiased">
      <button onClick={handleNavigate}>
        <BsArrowLeft />
      </button>

      <h3 className="my-4 text-2xl font-semibold">Sign In</h3>

      <Link
        to=""
        className="flex items-center justify-center gap-2 rounded-3xl border-0 bg-white px-4 py-2 text-xl font-semibold outline-0"
      >
        <FcGoogle />
        Google
      </Link>

      <p className="my-6 font-medium opacity-50">Or sign in with email</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email" className="my-1 block font-semibold">
              Email
            </label>
            <Field
              type="text"
              name="email"
              placeholder="Enter email address"
              className="w-full rounded-md px-4 py-2"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="my-1 text-sm font-medium text-red-500 first-letter:capitalize"
            />
            <label htmlFor="password" className="my-1 block font-semibold">
              Password
            </label>
            <Field
              type="text"
              name="password"
              placeholder="Enter password"
              className="w-full rounded-md px-4 py-2"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="my-1 text-sm font-medium text-red-500 first-letter:capitalize"
            />

            <button
              type="submit"
              className="mb-4 mt-8 w-full rounded-md bg-[#FFBD5A] px-4 py-2 font-semibold"
            >
              {isSubmitting ? "Processing..." : "Sign In"}
            </button>

            <p className="font-semibold opacity-50">
              Don't have an account?{" "}
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
