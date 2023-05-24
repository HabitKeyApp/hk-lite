import React, { useState, useEffect } from 'react';
import HabitItem from './HabitItem';
import AddHabit from './AddHabit';
import { List } from '@mui/material';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const HabitList = () => {
    const [user] = useAuthState(auth);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        if (user) {
            const q = query(collection(db, `users/${user.uid}/habits`));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const habits = [];
                querySnapshot.forEach((doc) => {
                    habits.push({ id: doc.id, ...doc.data() });
                });
                setHabits(habits);
            });

            // Clean up the subscription
            return unsubscribe;
        }
    }, [user]);

    return (
        <div>
            <AddHabit />
            <List>
                {habits.map((habit) => (
                    <HabitItem key={habit.id} habit={habit} />
                ))}
            </List>
        </div>
    );
};

export default HabitList;
