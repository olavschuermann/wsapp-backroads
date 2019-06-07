import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';

const App = () => {
    return (    
        <Layout>
             <SimpleHero />
             <Link to='/blog'>Blog</Link>
        </Layout>
    )}

export default App;