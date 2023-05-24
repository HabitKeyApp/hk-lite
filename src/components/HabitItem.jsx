import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@mui/material';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const HabitItem = ({ habit }) => {
    const [user] = useAuthState(auth);

    const handleCheck = async () => {
        const habitRef = doc(db, `users/${user.uid}/habits/${habit.id}`);


        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        await updateDoc(habitRef, {
            completedDates: arrayUnion(formattedDate)
        });
    };


    return (
        <ListItem>
            <Checkbox onChange={handleCheck} />
            <ListItemText primary={habit.name} />
        </ListItem>
    );
};

export default HabitItem;
