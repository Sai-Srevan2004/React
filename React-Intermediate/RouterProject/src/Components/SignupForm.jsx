import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
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
      if(formData.password != formData.confirmPassword) {
          return ;
      }

      const accountData = {
          ...formData
      };
      setIsLoggedIn(true)
      console.log("printing account data ");
      console.log(accountData);

      navigate("/dashboard");

  }

  return (
    <div>
      <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} >
            <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"

                            placeholder="Enter First Name"
                            onChange={changeHandler}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            onChange={changeHandler}

                        />
                    </label>
            </div>
           
            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter Email Address "
                        onChange={changeHandler}

                    />
            </label>

            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type= 'password'
                        name="password"
                        placeholder="Enter Password"
                        onChange={changeHandler}

                    />
                    <span >
                        eye
                    </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type= 'password'
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={changeHandler}

                    />
                    <span>
                        eye
                    </span>
                </label>
            </div>
        <button>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
