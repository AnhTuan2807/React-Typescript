import { Stats } from 'fs';
import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import DemoApp from './components/Demo';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliteral/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Test';

function App() {
  const personName = {
    first: 'Nguyen',
    last: 'Anh Tuan',
  }
  const nameList = [
    {  first: 'Nguyen',
    last: 'Anh Tuan',
  },
  {
    first: 'Tran',
    last: 'Thuy Dung',
  },
  {
    first: 'Nguyen',
    last: 'Tuan',
  },
  ]
  
  return (
    <div className="App">
      
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
            <Heading>Oscar goes to Leonardo Discpario!</Heading>
      </Oscar>
      <Greet name='Vishwas' msgCount={20} isLogged={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />

      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/> <br/> <br/>
      <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
      
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br/>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Counter mSG=' &nbsp; The count value is' />

      <Private isLoggedIn={true} component={Profile}/>

      {/* <List 
        items={['Batman', 'Superman', 'Wonder Woman']} 
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}/> */}
      {/* <List
        items={[
          {  
            id: 1,
            first: 'Nguyen',
            last: 'Anh Tuan',
          },
          {
            id: 2,
            first: 'Tran',
            last: 'Thuy Dung',
          },
          {
            id: 3,
            first: 'Nguyen',
            last: 'Tuan',
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */} <br/>
      {/* <RandomNumber value={10} isPositive isNegative isZero/> */}
      <RandomNumber value={10} isPositive />

      <Toast position='left-center'/>
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}> Primary </CustomButton>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text> 
      <Text as='label' size='sm' color='secondary'>Label</Text>
      {/* <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text> */}
    </div>
  );
}

export default App;

