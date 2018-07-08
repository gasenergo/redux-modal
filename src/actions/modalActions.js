
import {OPEN_MODAL, CLOSE_MODAL} from './types';

export const handleOpen = () => {
    return {
        type: OPEN_MODAL
    }
} 
export const handleClose = () => {
    return {
        type: CLOSE_MODAL
    }
} 