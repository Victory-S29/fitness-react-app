import { Box } from '@mui/material';
import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
    const [exercise, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <div>
            <Box>
                <HeroBanner />
                <SearchExercises
                    setExercises={setExercises}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
                <Exercises
                    setExercises={setExercises}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
            </Box>
        </div>
    );
};

export default Home;