import React from 'react';
import PropTypes from 'prop-types';
import FormInputFields from './FormInputFields';
import FormSubmitButton from './FormSubmitButton';

function FormSkeleton({
  data, setData, fieldValidities, setFieldValidities,
  loading, formIsValid, handleSubmit, setSubmitError,
}) {
  return (
    <form onSubmit={handleSubmit} className={formIsValid ? 'outline outline-blue-100 bg-slate-100' : 'outline outline-red-200 bg-red-100'}>
      <FormInputFields
        data={data}
        setData={setData}
        fieldValidities={fieldValidities}
        setFieldValidities={setFieldValidities}
        loading={loading}
        setSubmitError={setSubmitError}
      />
      <FormSubmitButton
        loading={loading}
      />
    </form>
  );
}

export default FormSkeleton;

FormSkeleton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setData: PropTypes.func.isRequired,
  fieldValidities: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setFieldValidities: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setSubmitError: PropTypes.func.isRequired,
};
