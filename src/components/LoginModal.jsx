import React, { useState } from 'react';

function LoginModal({ isOpen, onClose, onSignup, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="modal fixed inset-0   backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div onClick={onClose} className="float-right text-gray-600 text-2xl cursor-pointer border-1 px-1 rounded-lg hover:bg-red-500">×</div>
        <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
        <p className="text-gray-600 mb-6">Login to access your dashboard</p>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 mb-4 border rounded" />
          <button type="submit" className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-700">Login</button>
        </form>
        <p className="text-center mt-4 text-gray-600">Don't have an account? <span onClick={onSignup} className="text-blue-600 cursor-pointer">Sign up</span></p>
      </div>
    </div>
  );
}

export default LoginModal;