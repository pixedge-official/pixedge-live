import React, { useState } from 'react';

function SignupModal({ isOpen, onClose, onLogin, onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(name, email, password);
  };

  return (
    <div className="modal active fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div onClick={onClose} className="float-right text-gray-700 text-2xl cursor-pointer border-1 px-1 rounded-lg hover:bg-red-500">×</div>

        <h2 className="text-2xl font-bold mb-4">Create your account</h2>
        <p className="text-gray-600 mb-6">Get started with PixEdge today</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 mb-4 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="text-center mt-4 text-gray-600">Already have an account? <span onClick={onLogin} className="text-blue-600 cursor-pointer">Login</span></p>
      </div>
    </div>
  );
}

export default SignupModal;