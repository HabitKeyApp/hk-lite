// AddHabit.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full`,
    button: `w-[20%]`,
  };

const AddHabit = () => {
  const [user] = useAuthState(auth);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = async (e) => {
    e.preventDefault();
    if (newHabit.trim() === '') {
      return;
    }
    await addDoc(collection(db, `users/${user.uid}/habits`), {
      name: newHabit,
      completedDates: [],
    });
    setNewHabit('');
  };

  return (
    <form onSubmit={addHabit} className={style.form}>
      <TextField 
        value={newHabit} 
        onChange={(e) => setNewHabit(e.target.value)} 
        className={style.input}
        label="New Habit" 
        variant="outlined" 
      />
      <Button type="submit" className={style.button} variant="contained" color="primary">
        Add Habit
      </Button>
    </form>
  );
};

export default AddHabit;
