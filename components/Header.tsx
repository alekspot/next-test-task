import Link from 'next/link';
import * as cn from 'classnames'
import { useRouter } from 'next/router';
import {getMenu} from '../lib/pages';
import { useEffect, useRef, useState } from 'react';
import {Transition} from "react-transition-group";
import { getHoverTransitionBar, getEndTransitionBar } from './Transitions/transition';


export function Header() {
    const router = useRouter();
    const menu = getMenu()

    const [indexCurrent, setCurrent] = useState(menu.findIndex(item => item.href.includes(router.asPath.split('/')[1])))
    
    const [hoveredIndex, setHovered] = useState({
        index: null,
        distance: null
    });

    const [lastHovered, setLastHovered] = useState(null);
    
    useEffect(() => () => setHovered({index: null, distance: null}), [indexCurrent])

    const onMouseEnter = (index) => (e) => {
        if(indexCurrent !== index) {
            const {left: hoverLeft, right: hoverRight} = (e.target as HTMLElement).getBoundingClientRect();
            const {left: activeLeft, right: activeRight} = (ref.current as HTMLElement).getBoundingClientRect();
            
            setHovered({
                index,
                distance: `${indexCurrent < index ? (hoverRight - activeLeft) : (activeRight - hoverLeft)}px`
            })
            setLastHovered(index)
        }
    };
    const onMouseLeave = () => {
         setLastHovered(hoveredIndex.index)
         setHovered({
            index: null,
            distance: null
         })
    }
    
    const [prevIndex, setPrevIndex] = useState(null);
    const [distance, setDistance] = useState(null);
    
    const onClick = (index) => () => {
        setDistance(hoveredIndex.distance);
        setPrevIndex(indexCurrent)
        setCurrent(index)
    }
    const ref = useRef();

    return (
        <header className="header">
            <span className="header__box header__box--left"></span>
            <Link href={'/'}><a className="header__title">Первомайская</a></Link>
            <nav className="header__nav">
                <ul className="header__menu menu-header">
                    
                    
                    {
                        menu.map((item, index) => 
                        <li className="menu-header__item" key={index}>
                           <Link href={item.href}><a className="menu-header__link" onClick={onClick(index)} onMouseEnter={onMouseEnter(index)} onMouseLeave={onMouseLeave}>{item.title}</a></Link>
                           {indexCurrent === index && <>
                            
                            <Transition appear={true} timeout={300} in={prevIndex !== null}>
                             {status => (
                                 <span className="menu-header__bar" style={
                                    {
                                    transition: `width ${300}ms ease-in-out`,
                                    left: prevIndex > index ? 0 : 'auto',
                                    right: prevIndex > index ? 'auto' : 0,
                                     ...getEndTransitionBar(distance)[status]
                                    }
                                 }></span>
                             )}
                            </Transition>

                            <Transition timeout={300} in={hoveredIndex.index !== null &&  hoveredIndex.index !== index}>
                             {status => (
                                 <span ref={ref} className="menu-header__bar" style={
                                    {
                                    transition: `width ${300}ms ease-in-out`,
                                    left: lastHovered > index ? 0 : 'auto',
                                    right: lastHovered > index ? 'auto' : 0,
                                    ...getHoverTransitionBar(hoveredIndex.distance)[status],
                                    }
                                 }></span>
                             )}
                            </Transition>
                         </>
                           }
                        </li>)
                    }
                </ul>
               
            </nav>
            <span className="header__phone">8 888 888 88 88</span>
            <span className="header__box header__box--right">
                <div className="header__burger"></div> 
            </span>
        </header>
    )
}