import React, { ChangeEvent, useState } from 'react';

const SignIn = () => {
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

  return (
    <div>
      <div>
        <label>Sign In</label>
        <div>
          <label>ID</label>
          <input type="email" value={id} onChange={handleId} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;