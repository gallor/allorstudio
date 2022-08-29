import React from "react"

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import Seo from "../components/seo"
import AboutImage from '../components/AboutImage';

const AboutPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
      <Seo title="About" />
      <AboutImage />
      <p>Jennifer Allor has established herself as a pianist and vocal coach in the Chicago area and is currently entering her second year as a Young Artist with Chicago Opera Theater. During the 2021-2022 season, she worked on productions of Carmen, Becoming Santa Claus (Adamo), The Beekeeper (Wang Lu), and the world premiere of Quamino’s Map
(Errollyn Wallen) with COT. She also appeared with COT Young Artist singers in recitals and performances. For the summer of 2022, she joined Prague Summer Nights as apprentice coach for their production of Don Giovanni and served as pianist and coach for Soo Opera Theatre’s production of La Bohème. She has appeared as soloist with multiple orchestras including the Charlotte and Raleigh Symphonies. She holds a Master of Music degree in piano performance from the Cleveland Institute of Music and a Bachelor of Music degree in piano performance from the University of North Carolina at Chapel Hill.</p>
    </PageLayout>
  </Layout>
)

export default AboutPage
