import React from "react"

const Pin = ({label}) => (
  <div>
    <div style={{position: 'relative', transform: 'translate(-20px, -100%)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px"><path d="M12 0C7.6 0 4 3.6 4 8c0 1.4.4 2.8 1 3.9l.3.6L11.9 24l6.6-11.5c.1-.2.2-.3.3-.5l.1-.1c.6-1.2 1-2.5 1-3.9.1-4.4-3.5-8-7.9-8zm0 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" fill="#666"/><path d="M12 3C9.2 3 7 5.2 7 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z" fill="#333"/></svg>
      <div style={{position: 'absolute', top: '7px', left: '40px', width: '200px', fontFamily: 'Gill Sans, Gill Sans MT, sans-serif', textTransform: 'uppercase', letterSpacing: '0.0.03125rem'}}>{label}</div>
    </div>
  </div>
)

export default Pin