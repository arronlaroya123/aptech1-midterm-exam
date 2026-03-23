import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    username: "",
    password: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};

      const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setErrors(validate(updated));
  };


     const validate = (data = formData) => {
    const newErrors = {};
    if (!nameRegex.test(data.firstName)) newErrors.firstName = "Invalid first name";
    if (!nameRegex.test(data.surname)) newErrors.surname = "Invalid surname";
    if (!usernameRegex.test(data.username)) newErrors.username = "Invalid username";
    if (!passwordRegex.test(data.password)) newErrors.password = "Invalid password";
    if (!emailRegex.test(data.email)) newErrors.email = "Invalid email";
    return newErrors;
    return newErrors;
  };

    if (!nameRegex.test(formData.firstName)) newErrors.firstName = "Invalid first name";
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted!");
      console.log(formData);
      // optional form reset:
      // setFormData({ firstName:"", surname:"", username:"", password:"", email:"" });
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>

      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" />
      {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

      <br /><br />

      <input name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" />
      {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}

      <br /><br />

      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <br /><br />

      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <br /><br />

      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <br /><br />

      <button type="button" onClick={() => console.log("Clicked")}>Test</button>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;