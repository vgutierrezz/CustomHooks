import { useForm } from "../hooks/useForm"

export const FormsApp = () => {
    
    const initialForm = {
        userName : '',
        email : '',
        password : ''
    }

    const {userName, email, password, onInputChange} = useForm(initialForm)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userName, email, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userName"
                        name="userName" 
                        value={userName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email" 
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
