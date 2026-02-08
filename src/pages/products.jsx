import Beams from '../components/background';

function Products() {
  return (
    <><div style={{   width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1  }}>
  <Beams
    beamWidth={1.3}
    beamHeight={30}
    beamNumber={50}
    lightColor="#ffffff"
    speed={2.9}
    noiseIntensity={1.05}
    scale={0.2}
    rotation={30}
  />
</div>
    
    <div className="main-content">
      <h1>Products Page</h1>
      <p>Here are our products 😎</p>
      </div>
      </>
  )
}

export default Products