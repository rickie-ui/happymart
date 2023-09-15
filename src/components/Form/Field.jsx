import { useField } from "formik";
const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="my-1 block font-semibold capitalize">
        {label}
        <input {...field} {...props} className="w-full rounded-md px-4 py-2" />
      </label>
      {meta.touched && meta.error ? (
        <div className="mt-1 text-sm font-medium text-red-400">
          {meta.error}
        </div>
      ) : null}

      {/* usage */}
      {/* <CustomField name="address" type="text" label="Address" placeholder="enter address" /> */}
    </>
  );
};

export default CustomField;
