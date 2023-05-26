import {ChangeEvent, FormEvent, useState} from "react";


interface FormData {
    first_name: string,
    last_name: string,
    email: string,
}

const initialFormData: FormData = {
    first_name: "",
    last_name: "",
    email: ""

}

function App() {

    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmitted(true)
    }


    return <div className="container">
        <div className={"inner"}>
            {isSubmitted && <div> thanks for registering</div>}
            <input type="text"
                   placeholder={"First name"}
                   className="input"
                   name="first_name"
                   value={formData.first_name}
                   onChange={handleChange}
            />
            <input type="text"
                   placeholder={"Last name"}
                   className="input"
                   name="last_name"
                   value={formData.last_name}
                   onChange={handleChange}
            />
            <input type="text"
                   placeholder={"Email"}
                   className="input"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
            />
            <button
                className="registerBtn"
                onClick={handleSubmit}
            >Register
            </button>
        </div>
    </div>
}

export default App
