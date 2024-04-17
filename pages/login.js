import AuthHeader from "../components/authHeader/AuthHeader";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <div className="wrapper wrapper__bg bg__img">
      {/* auth header  */}
      <AuthHeader />

      {/* Login Form here  */}
      <LoginForm />
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
