import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';

const App = () => {
    return (    
        <Layout>
             <SimpleHero>
                <Banner title="Title" info="text for value proposition and such">
                    <Link to="/tours" className="btn-white"
                        >explore tours
                    </Link>
                </Banner>
             </SimpleHero>   
        </Layout>
    )}

export default App;