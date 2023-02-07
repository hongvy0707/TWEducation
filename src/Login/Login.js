import React from 'react';

export default function Login() {
  return(
    <form>
      <label>
        <p>Tài khoản</p>
        <input type="text" />
      </label>
      <label>
        <p>Mật khẩu</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Đăng nhập</button>
      </div>
    </form>
  )
}