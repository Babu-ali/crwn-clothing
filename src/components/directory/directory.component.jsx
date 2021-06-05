import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import hat from '../../hat.jpeg'
import jackets from '../../jackets.jpeg'
import sneakers from '../../sneakers.jpeg'
import women from '../../women.jpeg'
import men from '../../men.jpeg'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: hat, //'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: jackets,//'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: sneakers,//'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: women,//'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: men,//'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;