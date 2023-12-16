import { useDispatch, useSelector } from 'react-redux';
import { dicrement, incriment } from './slice/counterSlice';
import { useState } from 'react';
import { addUser } from '././slice/userSlice';

function Slice() {
  const counter = useSelector(state => state.counter);
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({})

  const changeInput = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  }


  
  return (
    <div className="Slice">
      <h1>{counter}</h1>
      <button onClick={() => {dispatch(incriment())}}>incriment</button>
      <button onClick={() => {dispatch(dicrement())}}>dicrement</button><br/><br/>


    <input name='name' placeholder='Name' onChange={changeInput}/>
    <input name='surName' placeholder='surName' onChange={changeInput}/>
    <button onClick={() => {dispatch(addUser(info))}}>Add</button>

    {users.map((user) => (
      <li key={user.id}>
        <p>name: {user.name}</p>
        <p>SurName: {user.surName}</p>
      </li>
    ))}

    </div>
  );
}

export default Slice;
