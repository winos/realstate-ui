import Link from "next/link";
import { useState } from 'react';

const RegistrationForm = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = {
      name : formData.get("name"),
      lastname : formData.get("lastname"),
      email : formData.get("email"),
      password : formData.get("password"),
      terms : formData.get("terms")
    }
    
    try {

      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.message);
      } else {
        setResponse('Error al registrar');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error al conectar con el servidor');
    }
  };

  return (
    <section className="registration clear__top">
      <div className="container">
        <div className="registration__area">
          <h4 className="neutral-top">Registration</h4>
          <p>
            Already Registered? <Link href="/login">Login</Link>
          </p>
          <form name="registration__form" onSubmit={handleSubmit}>
            <div className="regi__type">
              <label htmlFor="typeSelect">You are?</label>
              <div className="type__select select px-1 px-sm-3">
                <select className="w-100 h-100 text-capitalize" id="typeSelect">
                  <option value="Agente">Agente</option>
                  <option value="Inversor">Inversor</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="lastName">Last Name*</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastName"
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="input input--secondary">
              <label htmlFor="registrationMail">Email*</label>
              <input
                type="email"
                name="email"
                id="registrationMail"
                placeholder="Enter your email"
                required="required"
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="regiPass">Password*</label>
                  <input
                    type="password"
                    name="password"
                    id="regiPass"
                    placeholder="Password"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="passCon">Password Confirmation*</label>
                  <input
                    type="password"
                    name="passCon"
                    id="passCon"
                    placeholder="Password Confirm"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  id="acceptterms"
                  name="acceptterms"
                  value="agree"
                  required
                />
                <span className="checkmark"></span>I have read and I agree to
                the <Link href="/key-risks"> Privacy Policy</Link>
              </label>
            </div>
            <div className="input__button">
              <button type="submit" className="button button--effect">
                Create My Account
              </button>
            </div>
          </form>
           {response && <p>{response}</p>}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
