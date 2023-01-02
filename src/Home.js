import { useState } from "react"

const Home = () => {
    const [name, setName] = useState('riley')
    const [age, setAge] = useState(50)

    // e = all the information about the event happening
    const handleClick = () => {
        if(name == 'riley') {
            setName('Ashley')
        } else if(name == 'Ashley') {
            setName('riley')
        }
    }

    const handleAge = () => {
        if(age == 50) {
            setAge(100)
        } else if(age == 100) {
            setAge(50)
        }
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleAge}>Click me Again</button>
            <p>{age}</p>
        </div>
    );
}
 
export default Home;