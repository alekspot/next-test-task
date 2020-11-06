import '../styles/index.scss';
import {Layout} from '../components/Layout';

export default function MyApp({ Component, pageProps, router }) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}