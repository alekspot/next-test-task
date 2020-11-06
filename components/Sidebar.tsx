import Link from 'next/link';
import {getPageData, getMenu} from '../lib/pages';
import * as cn from 'classnames';

export function Sidebar({current}) {

    const itemClass = (key) => cn('menu-about__item', {
        'menu-about__item--active': key === current
    })

    const menu = getPageData();
    
    const menuItems = Object.keys(menu).map((key, index) => 
        <li className={itemClass(key)} key={index}>
            <Link href={`/about/${key}`}>
                <a className="menu-about__link">{menu[key]['title']}</a>
            </Link>
        </li>
    )

    return (
        <div className="about__sidebar">
            <ul className="about__menu menu-about">
                {
                    menuItems
                }
            </ul>
        </div>
    )
}

