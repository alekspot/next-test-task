import HeadMeta from 'next/head';
import { useRouter } from 'next/router';
import { Header } from './Header';
import Transition from './Transition';
import { fadeIn } from './Transitions/transition';


export function Layout({children, title = 'Next App'}) {
    const router = useRouter();
    return (
        <>
        <HeadMeta>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </HeadMeta>
        <div className="page">

        
            <Header/>
            
                <main className="main">
                    <Transition 
                    location={router.pathname} 
                    config={fadeIn} 
                    style={
                        {
                            transition: `opacity ${400}ms ease-in-out`,
                        }
                    }>{children}
                    </Transition>
                </main>
           
            <footer>
                ccsssss
            </footer>
        </div>
        </>
    )
}