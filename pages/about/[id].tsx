import {getPagesIds, getPageDataById} from "../../lib/pages";
import Transition from "../../components/Transition";
import { useRouter } from "next/router";
import React, { useEffect } from 'react'
import {getTransitionImg, getTransitionText } from "../../components/Transitions/transition";
import { Sidebar } from "../../components/Sidebar";

export default function Page({pageData}) {
    const {text, title, id} = pageData;

    const router = useRouter();

    const [prevPage, setPrevPage] = React.useState(null);
   
    useEffect(() => () => setPrevPage(router.query.id), [router.asPath])
   
    return (
        
                <div className="about">   
                    <Sidebar current={id}/>
                    <div className="about__info">
                        <Transition location={router.asPath} config={getTransitionText}>
                            <div>
                                <h1 className="about__title">{title}</h1>
                                <p className="about__text">{text}</p>
                            </div> 
                        </Transition>
                    </div>
            
                    <div className="about__image-wrap">

                        <img className="img-placeholder" src={`/images/${id}.png`} alt=""/>
                        <Transition className="wrap" location={router.asPath} config={getTransitionImg} style={{
                            transition: `height ${400}ms ease-in-out`
                        }}>
                                <div>
                                    {prevPage && <img src={`/images/${prevPage}.png`} alt=""/>}
                                </div>
                        </Transition>

                    </div>
                </div>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id

    const paths = getPagesIds();
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const pageData = await getPageDataById(params.id);

    return {
        props: {
            pageData
        }
    }
}