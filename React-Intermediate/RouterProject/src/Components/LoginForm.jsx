import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })


    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input 
                required
                type= 'password'
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
            />

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button>
            Sign In
        </button>

    </form>
  )
}


export default LoginForm
