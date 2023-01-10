import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const handleId = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(value);
  }

  const [password, setPassword] = useState<string>('');
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  }

  const handleCancel = () => {
    navigate('/');
  }
  const handleOk = () => {
    navigate('/list');
  }
  const handleSignUp = () => {
    navigate('/signup');
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div>
      <strong>SIGN IN</strong>
      <form onSubmit={handleSubmit}>
        <div>
          ID
          <input type="text" name="id" value={id} onChange={handleId} />
        </div>
        <div>
          Password
          <input type="text" name="password" value={password} onChange={handlePassword} />
        </div>
        <div>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleOk}>확인</button>
        </div>
      </form>
      <div>
        <button onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  )
}

export default SignIn;
