import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  const handleSumNumbers = ()  => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = ()  => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = ()  => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
    }
  }

  const handleDivNumbers = ()  => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      if (Number(currentNumber) === 0) {
        setCurrentNumber('Error');
      } else {
        const result = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(result));
      }
      setOperation('');
    }
  }

  const handleBackspace = () => {
    setCurrentNumber(prev => {
      if (prev.length <= 1 || prev === 'Error') {
        return '0';
      }
      return prev.slice(0, -1);
    });
  };
  

  const handleEquals = ()  => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
            break;
        case '-':
          handleMinusNumbers();
            break;
        case '*':
          handleMultNumbers();
            break;
        case '/':
          handleDivNumbers();
            break;
            default:
            break;
      }
    }
  }


  return (
    <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="*" onClick={handleMultNumbers}/>
        <Button label="/" onClick={handleDivNumbers}/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="X" onClick={handleBackspace}/>
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={handleMinusNumbers}/>
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumbers}/>
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>
    </Content>
    </Container>
  );
}

export default App;
