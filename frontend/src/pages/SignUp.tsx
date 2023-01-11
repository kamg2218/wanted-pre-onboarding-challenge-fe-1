import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
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

  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const handlePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPasswordConfirm(value);
  }

  const handleCancel = () => {
    navigate(-1);
  }
  const handleOk = () => {
    navigate('/');
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div>
      <strong>SIGN UP</strong>
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
          Password Confirm
          <input type="text" name="password" value={passwordConfirm} onChange={handlePasswordConfirm} />
        </div>
        <div>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleOk}>확인</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
