import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <Logo className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);
export default CartIcon;