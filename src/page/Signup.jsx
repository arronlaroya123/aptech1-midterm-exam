import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // onChange handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;