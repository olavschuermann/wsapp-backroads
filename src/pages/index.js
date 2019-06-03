import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const App = () => {
    return (    
        <Layout>
             Hello world<br /> 
             <Link to='/blog'>Blog</Link>
        </Layout>
    )}

export default App;