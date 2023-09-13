import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: (values) => {
      let errors = {};
      // errors.firstName, errors.lastName, errors.email, errors.password
      if (!values.firstName) {
        errors.firstName = "First name is required!";
      }
      if (!values.lastName) {
        errors.lastName = "Last name is required!";
      }
      if (!values.email) {
        errors.email = "Email  is required!";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "You have entered invalid email address";
      }
      if (!values.password) {
        errors.password = "Password  is required!";
      } else if (values.password.length < 6) {
        errors.password = "Minimum of 6 characters are required!";
      }
      return errors;
    },
  });

  console.log(formik.errors);
  return (
    <div className="mx-auto w-11/12 pt-4 antialiased">
      <div>
        <BsArrowLeft />
      </div>

      <h3 className="my-4 text-2xl font-semibold">Sign Up</h3>

      <Link
        to=""
        className="flex items-center justify-center gap-2 rounded-3xl border-0 bg-white px-4 py-2 text-xl font-semibold outline-0"
      >
        <FcGoogle />
        Google
      </Link>

      <p className="my-6 font-medium opacity-50">Or sign up with email</p>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName" className="my-1 block font-semibold">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-md px-4 py-2"
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="my-1 text-sm font-medium text-red-400">
            {formik.errors.firstName}
          </p>
        ) : null}
        <label htmlFor="lastName" className="my-1 block font-semibold">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter last name"
          className="w-full rounded-md px-4 py-2"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="my-1 text-sm font-medium text-red-400">
            {formik.errors.lastName}
          </p>
        ) : null}
        <label htmlFor="email" className="my-1 block font-semibold">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter email address"
          className="w-full rounded-md px-4 py-2"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="my-1 text-sm font-medium text-red-400">
            {formik.errors.email}
          </p>
        ) : null}
        <label htmlFor="password" className="my-1 block font-semibold">
          Password
        </label>
        <input
          type="text"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter password"
          className="w-full rounded-md px-4 py-2"
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="my-1 text-sm font-medium text-red-400">
            {formik.errors.password}
          </p>
        ) : null}

        <button
          type="submit"
          className="mb-4 mt-8 w-full rounded-md bg-[#FFBD5A] px-4 py-2 font-semibold"
        >
          Sign Up
        </button>

        <p className="font-semibold opacity-50">
          Already have an account?{" "}
          <Link to="/signin" className="underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
