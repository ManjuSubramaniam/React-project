import React from 'react';
import Button from '../../button/Button';
import './Actions.css';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Actions(){
    return (
     <div className="actions">
        <Button label="LOG IN"/>
        <Button primary label="SIGN UP"/>
        <div className='profile'>
            <PersonIcon className='hoverable'/>
            <ArrowDropDownIcon className='hoverable'/>
        </div>
     </div>
    );
}