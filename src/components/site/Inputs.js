//IMPORTS
import {
    Form,
    InputGroup,
    Input,
    Button
} from 'reactstrap';



const Inputs = (props) => {
  
    
    const clearInputs = (props) => {
        document.getElementById("nameInput").value = " ";
        document.getElementById("ageInput").value = 0;
        document.getElementById("hobbiesInput").value=" ";
        // nameInput.value(" ");
        //name.setName(" ");
        // props.setName(" ");
        // props.setAge(" ");
        // props.setHobbies(" ");
};
    
    return (
        <div className="form">
            <h2>Let's get to know each other</h2>
            <br />
            <Form>
                <InputGroup>
                    <Input
                        id="nameInput"
                        placeholder={props.name}
                        onChange={e=>props.setName(e.target.value)}
                        >
                    </Input>
                </InputGroup>
                <br />
                 <br />
                <InputGroup>
                    <Input
                        id="ageInput"
                        placeholder={props.age}
                        type="number"
                        onChange={e => props.setAge(e.target.value)}
                    >
                    </Input>
                </InputGroup>
                <br />
                 <br />
                <InputGroup>
                    <Input
                        id="hobbiesInput"
                        placeholder={props.hobbies}
                        onChange={e=>props.setHobbies(e.target.value)}>
                    </Input>
                </InputGroup>
                <br />
                <Button onClick={clearInputs}>clear
                </Button>
                <br />
                
            </Form>
        </div>
)

}

export default Inputs;

