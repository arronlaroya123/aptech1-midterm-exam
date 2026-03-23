import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      surname: "",
      username: "",
      password: "",
      email: ""
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
    navigate(`/profile/${data.username}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h1>Signup Page</h1>

        <input {...register("firstName", { required: "Required", minLength: { value: 2, message: "Min 2 chars" }, pattern: { value: /^[A-Za-z]+$/, message: "Letters only" } })} placeholder="First name" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        {errors.firstName && <p style={{ color: "red", fontSize: '14px' }}>{errors.firstName.message}</p>}

        <input {...register("surname", { required: "Required", minLength: { value: 2, message: "Min 2 chars" }, pattern: { value: /^[A-Za-z]+$/, message: "Letters only" } })} placeholder="Surname" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        {errors.surname && <p style={{ color: "red", fontSize: '14px' }}>{errors.surname.message}</p>}

        <input {...register("username", { required: "Required", pattern: { value: /^[A-Za-z0-9._-]+$/, message: "Invalid username" } })} placeholder="Username" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        {errors.username && <p style={{ color: "red", fontSize: '14px' }}>{errors.username.message}</p>}

        <input type="password" {...register("password", { required: "Required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/, message: "Invalid password" } })} placeholder="Password" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        {errors.password && <p style={{ color: "red", fontSize: '14px' }}>{errors.password.message}</p>}

        <input type="email" {...register("email", { required: "Required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} placeholder="Email" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        {errors.email && <p style={{ color: "red", fontSize: '14px' }}>{errors.email.message}</p>}

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="button" onClick={() => console.log("Clicked")} style={{ padding: '8px 16px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>Test</button>
          <button type="submit" disabled={Object.keys(errors).length > 0} style={{ padding: '8px 16px', background: Object.keys(errors).length > 0 ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: Object.keys(errors).length > 0 ? 'not-allowed' : 'pointer' }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;