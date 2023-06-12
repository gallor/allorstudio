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
      <p>Jennifer Allor is a pianist and vocal coach in the Chicago area and has recently completed her second year in the Chicago Opera Theater/Chicago College of the Performing Arts at Roosevelt University Professional Diploma and Young Artist Program. This summer, she will join Chicago Summer Opera as pianist and coach for their production of <i>Le Nozze di Figaro</i>.</p>
      <p>During the 2021-2023 seasons, she worked on productions of <i>Carmen</i>, <i>The Cook-Off</i> (Shawn Okpebholo), <i>Becoming Santa Claus</i> (Adamo), <i>The Beekeeper</i> (Wang Lu), <i>Król Roger</i> (Szymanowski), and the world premieres of <i>The Life and Death(s) of Alan Turing</i> (Justine F. Chen) and <i>Quamino’s Map</i> (Errollyn Wallen) with COT. She has also been an apprentice coach with Prague Summer Nights (<i>Don Giovanni</i>, <i>Die Zauberflöte</i>) and served as pianist and coach for Soo Opera Theatre  (<i>La Traviata</i>, <i>La Bohème</i>).</p>
      <p>She holds a Professional Diploma in opera from Roosevelt University, a Master of Music degree in piano performance from the Cleveland Institute of Music and a Bachelor of Music degree in piano performance from the University of North Carolina at Chapel Hill.</p>
    </PageLayout>
  </Layout>
)

export default AboutPage
