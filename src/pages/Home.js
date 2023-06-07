import { Box } from '@mui/material';
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
    return (
        <div>
            <Box>
                <HeroBanner />
                <SearchExercises />
                <Exercises />
            </Box>
        </div>
    );
};

export default Home;