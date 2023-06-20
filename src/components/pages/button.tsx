import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
type ColorButtonsType ={
    nameButton:string
}
export default function ColorButtons(props:ColorButtonsType) {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success">
                {props.nameButton}
            </Button>
        </Stack>
    );
}
