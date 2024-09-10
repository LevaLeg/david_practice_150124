import { useState } from "react";
import SimpleHeader from "../inputViews/SimpleHeader";
import { ThemeContext } from "../context/ThemeContext";

function LoginForm( {handleLogin} ) {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  return (
    <ThemeContext.Provider value="dark">
      <div>
        <SimpleHeader textContent="Login Form"/>
        <input value={login} onChange={ (e) => setLogin(e.target.value) } type="text" placeholder="Login"/>
        <input value={passwd} onChange={ (e) => setPasswd(e.target.value) } type="password" placeholder="Password"/>
        <button onClick={ () => handleLogin(login, passwd) }>Login</button>
      </div>
    </ThemeContext.Provider>
  )
}

export default LoginForm;