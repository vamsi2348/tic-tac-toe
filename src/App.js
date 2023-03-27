import React ,{useState} from 'react';
import Icon from './components/icons';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';

const itemArray= new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage]= useState("");

  const reload = () =>
  {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty" ,0, 9)
  }

  const checkIsWinner = () =>
  {
    //Ist row
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0]!== "empty")
    {
      setWinMessage(`${itemArray[0]} is the winner`);
    }
    //2nd row
    else if(itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3]!== "empty")
    {
      setWinMessage(`${itemArray[3]} is the winner`);
    }
    //3rd row
    else  if(itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6]!== "empty")
    {
      setWinMessage(`${itemArray[6]} is the winner`);
    }
    //1st column
    else  if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0]!== "empty")
    {
      setWinMessage(`${itemArray[0]} is the winner`);
    }
    //2nd colum
    else if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1]!== "empty")
    {
      setWinMessage(`${itemArray[1]} is the winner`);
    }
    //3rd column
    else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[7] && itemArray[2]!== "empty")
    {
      setWinMessage(`${itemArray[2]} is the winner`);
    }
    //1st diagonal
    else if(itemArray[0] === itemArray[5] && itemArray[0] === itemArray[9] && itemArray[0]!== "empty")
    {
      setWinMessage(`${itemArray[0]} is the winner`);
    }
    //2nd diagonal
    else if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[6] && itemArray[2]!== "empty")
    {
      setWinMessage(`${itemArray[2]} is the winner`);
    }
    
  }

  const changeItem = (itemNumber) =>
  {
    if(winMessage)
    {
      return toast(winMessage, {type: "sucess"});
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);

    }
    else{
      return toast("Already filler" , { type: "error"});
    }

    checkIsWinner();
  }


  return (
    <Container className='p-5'>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md= {6} className= "offset-md-3">
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button color='success' block onClick={reload}>
                  Reload the game
              </Button>
            </div>
          ) : (
            <h1 className='text-cente text-warning'>
              {isCross ? "cross" : "circle"} turns 
            </h1>
          ) }
          <div className='grid'>
            {itemArray.map( (item,index) => ( 
              <Card color="warning" onClick = { () => changeItem(index)}> 
                <CardBody>
                  <Icon name= {item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
