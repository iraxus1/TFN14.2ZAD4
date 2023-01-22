//@flow
import React, { useState } from 'react';


type Props = {
  onSubmit: (data: Object) => void,
  initialValues: {
    login: string,
    password: string,
    birthdate?: string,
    photo?: Object,
    acceptTerms: boolean,
    email: string
  }
};

const RegistrationForm = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>
          Login:
          <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Hasło:
          <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Data urodzenia:
          <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Zdjęcie:
          <input
              type="file"
              name="photo"
              onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Akceptuję regulamin:
          <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Zarejestruj się</button>
      </form>
  );
};

export default RegistrationForm;