import AuthHeader from "../components/authHeader/AuthHeader";
import RegistrationForm from "../components/registration/RegistrationForm";

const Registration = () => {
  return (
    <div className="wrapper wrapper__bg bg__img">
      {/* auth header  */}
      <AuthHeader />

      {/* Registration Form start here */}
      <RegistrationForm />
    </div>
  );
};

export default Registration;

Registration.getLayout = function getLayout(page) {
  return <>{page}</>;
};
