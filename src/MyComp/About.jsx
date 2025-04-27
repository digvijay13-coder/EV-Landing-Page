import React from 'react'
import Layout from '../MyComp/Layout.jsx'
import Aboutimg from '../images/Aboutimg.jpg'
import imp from '../images/imp.jpg'
import '../Style/about.css'

const About = () => {
  return (
    <>
      <Layout>
        <section className="about-container">
          <div>
            <img src={Aboutimg} alt="About EVs" />
          </div>
        </section>

        <section className="about-container">
          <div className="about-header">
            <h1>Electric Vehicles (EVs)</h1>
            <p>EVs are motor vehicles powered by electricity, offering an environmentally friendly alternative to traditional gasoline-powered cars.</p>
          </div>

          <section className="types">
            <h2>Types of Electric Vehicles</h2>
            <div className="type-cards">
              <div className="type-card">
                <h3>Battery Electric Vehicles (BEVs)</h3>
                <p>These are fully electric, using a battery pack to power the electric motor. They offer zero emissions and can be charged at home or public charging stations.</p>
              </div>
              <div className="type-card">
                <h3>Plug-in Hybrid Electric Vehicles (PHEVs)</h3>
                <p>These have both an electric motor and a gasoline engine, allowing for electric-only driving for a certain distance and the ability to be charged from a power outlet.</p>
              </div>
              <div className="type-card">
                <h3>Hybrid Electric Vehicles (HEVs)</h3>
                <p>These use a combination of an electric motor and a gasoline engine, with the electric motor assisting at lower speeds and the battery being charged by the engine or during braking.</p>
              </div>
            </div>
          </section>

          <section className="features">
            <h2>Key Features and Benefits</h2>
            <ul>
              <li><strong>Zero Emissions:</strong> EVs produce no tailpipe emissions, contributing to cleaner air and reducing greenhouse gas emissions.</li>
              <li><strong>Low Maintenance:</strong> EVs have fewer moving parts than gasoline cars, resulting in lower maintenance costs.</li>
              <li><strong>Quiet Operation:</strong> Electric motors are much quieter than gasoline engines, reducing noise pollution.</li>
              <li><strong>Convenient Charging:</strong> EVs can be charged at home or at public charging stations, offering flexibility.</li>
              <li><strong>Government Incentives:</strong> Many governments offer incentives to encourage the adoption of EVs, such as tax credits and rebates.</li>
            </ul>
          </section>

          <section className="how-it-works">
            <h2>How Electric Vehicles Work</h2>
            <div className="work-card">
              <h3>Charging</h3>
              <p>The battery pack is charged by plugging the vehicle into a power outlet or a charging station.</p>
            </div>
            <div className="work-card">
              <h3>Power Delivery</h3>
              <p>The electric motor draws power from the battery to drive the wheels.</p>
            </div>
            <div className="work-card">
              <h3>Regenerative Braking</h3>
              <p>When braking, the electric motor can convert kinetic energy back into electricity, recharging the battery.</p>
            </div>
          </section>
        </section>

        <section className="about-container">
          <div>
            <img src={imp} alt="Important EV information" />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About;
