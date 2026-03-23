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
    navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Signup Page</h1>

      <input {...register("firstName", { required: "Required", minLength: { value: 2, message: "Min 2 chars" }, pattern: { value: /^[A-Za-z]+$/, message: "Letters only" } })} placeholder="First name" />
      {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}

      <input {...register("surname", { required: "Required", minLength: { value: 2, message: "Min 2 chars" }, pattern: { value: /^[A-Za-z]+$/, message: "Letters only" } })} placeholder="Surname" />
      {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}

      <input {...register("username", { required: "Required", pattern: { value: /^[A-Za-z0-9._-]+$/, message: "Invalid username" } })} placeholder="Username" />
      {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}

      <input type="password" {...register("password", { required: "Required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/, message: "Invalid password" } })} placeholder="Password" />
      {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

      <input type="email" {...register("email", { required: "Required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} placeholder="Email" />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <button type="button" onClick={() => console.log("Clicked")}>Test</button>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
}

export default Signup;