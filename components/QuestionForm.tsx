import { Formik, Field, Form } from "formik";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

const QuestionFormComponent = ({
  onSuccess,
  color,
  questionName,
  answer,
  errorMessage,
  buttonText,
}): JSX.Element => {
  function validateAnswer(value) {
    let error;
    if (!value) {
      error = "That's a very empty answer.";
    } else if (value.trim().toLowerCase() !== answer.trim().toLowerCase()) {
      error = errorMessage;
    }
    return error;
  }

  const initialValues = {};
  initialValues[questionName] = "";

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={initialValues}
      onSubmit={(_, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          onSuccess();
        }, 1000); // simulate wait.
      }}>
      {props => (
        <Form>
          <Field name={questionName} validate={validateAnswer}>
            {({ field, form }) => {
              return (
                <FormControl
                  isInvalid={
                    form.errors[questionName] && form.touched[questionName]
                  }>
                  <Input
                    {...field}
                    id={questionName}
                    placeholder="Ho Ho Ho Ho!"
                  />
                  <FormErrorMessage>
                    {form.errors[questionName]}
                  </FormErrorMessage>
                </FormControl>
              );
            }}
          </Field>
          <Flex flexDirection="column">
            <Button
              mt={4}
              colorScheme={color}
              isLoading={props.isSubmitting}
              type="submit">
              {buttonText}
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionFormComponent;
