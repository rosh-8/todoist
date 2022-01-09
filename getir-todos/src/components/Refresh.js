import React from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from "../features/todoSlice";
import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import useAudio from "../features/useAudio";

const Refresh = ({refreshUrl, totalItems}) => {
    const dispatch = useDispatch();
    const [playing, toggle] = useAudio(refreshUrl);
    function refreshList() {
        !playing && toggle();
        dispatch(refresh({}))
    }
    return (
        <Button className="refresh__todo hidden-phone" disabled={totalItems ? '' : 'disabled'} variant="outlined" onClick={refreshList} startIcon={<RefreshIcon />}>
           Start Over
        </Button>
    )
}

export default Refresh
