import Input from "./Input"

const PersonForm = ({submitHandler, name, nameHandler, phone, phoneHandler}) => {
    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input text="Name:" value={name} changeHandler={nameHandler}/>
                <Input text="Number:" value={phone} changeHandler={phoneHandler}/>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm