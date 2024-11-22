import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard({ time }){
return (
    <Button sx={{ minWidth: 275, backgroundColor: 'lightgrey' }}>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                {time}
            </Typography>
        </CardContent>
    </Button>
);
}
