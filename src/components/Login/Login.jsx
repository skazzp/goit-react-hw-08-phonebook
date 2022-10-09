const Login = () => {
  return (
    <form action="submit">
      <label>
        Email
        <input type="email" name="email" value={''} onChange={() => {}} />
      </label>
      <label>
        Password
        <input type="password" name="password" value={''} onChange={() => {}} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
