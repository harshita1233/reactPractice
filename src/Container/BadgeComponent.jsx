import React from 'react'
import Badge from '../ReusableComponent/Badge'
function BadgeComponent() {
    return (
    <section>
      <h1>Check out these badges!</h1>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge color="blue" onClick={()=>console.log("Clicked")}>Beta</Badge> This is in progress. <br />
    </section>
    )
}

export default BadgeComponent
