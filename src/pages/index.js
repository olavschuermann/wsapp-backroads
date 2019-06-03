import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const App = () => {
    return (    
        <Layout>
                Hello world<br /> (Website-App React/Gatsby 0.0.7 - 03.06.19)<br />
                <Link to='/blog'>Blog</Link>
        </Layout>
    )}

export default App;