import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import React, {
  ReactChildren,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useRef,
} from 'react';
import FormFooterLinks from './FormFooterLinks/FormFooterLinks';
import SnackBarAlert from '../SnackBarAlert/SnackBarAlert';
import useStyles from './FormWrapperStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface IFormWrapperProps {
  avatarIcon: ReactElement | null,
  title: string,
  onFormSubmit: (e: SyntheticEvent) => void,
  children: ReactChildren[],
  errorMessage: string,
  footerLinks: { url: string, text: string, }[],
  successToast: string,
  buttonText: string | null,
  setSuccessToast: (v: string) => void,
}

const FormWrapper = (props: IFormWrapperProps) => {
  const {
    avatarIcon, title, onFormSubmit, children,
    errorMessage,
    buttonText,
    footerLinks,
    successToast,
    setSuccessToast,
  } = props;
  const ref = useRef<ValidatorForm | null>(null);
  const classes = useStyles();

  useEffect(() => {
    if (successToast) { // @ts-ignore
      setTimeout(ref.current.resetValidations, 100);
    }
  }, [successToast]);

  return (
    <>
      <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <div className="wrapper">
            <Avatar className={classes.avatar}>{avatarIcon}</Avatar>
            <Typography component="h1" variant="h5">{title}</Typography>
            <ValidatorForm
              ref={ref}
              onSubmit={onFormSubmit}
              onError={(errors) => console.error(errors)}
              className={classes.form}
              noValidate
            >
              {children}
              <ErrorMessage message={errorMessage} />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                {buttonText || title}
              </Button>
              <FormFooterLinks links={footerLinks} />
            </ValidatorForm>
          </div>
        </Paper>
      </Container>
      <SnackBarAlert
        open={Boolean(successToast)}
        onClose={() => setSuccessToast('')}
        message={successToast}
      />
    </>
  );
};

export default FormWrapper;

FormWrapper.defaultProps = {
  avatarIcon: null,
  errorMessage: '',
  buttonText: null,
  title: '',
  footerLinks: [],
  successToast: '',
};
//
// FormWrapper.propTypes = {
//   avatarIcon: PropTypes.oneOfType([PropTypes.element]),
//   title: PropTypes.string,
//   onFormSubmit: PropTypes.func.isRequired,
//   children: PropTypes.oneOfType([PropTypes.element,
//     PropTypes.arrayOf(PropTypes.element)]).isRequired,
//   errorMessage: PropTypes.string,
//   buttonText: PropTypes.string,
//   footerLinks: PropTypes.oneOfType([PropTypes.array]),
//   successToast: PropTypes.string,
// };
