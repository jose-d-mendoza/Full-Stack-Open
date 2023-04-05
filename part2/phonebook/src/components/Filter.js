import Input from "./Input"

const Filter = ({search, handler}) => <Input text="Filter shown with:" value={search} changeHandler={handler}/>

export default Filter