import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const App = () => {
    return (    
        <Layout>
                Hello world (Website-App React/Gatsby 0.0.5 - 27.05.19)<br />
                <Link to='/blog'>Blog</Link>
        </Layout>
    )}

export default App;