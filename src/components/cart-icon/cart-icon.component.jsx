import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggelCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';

const CartIcon = ({ toggelCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggelCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggelCartHidden: () => dispatch(toggelCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);