import React from 'react'

export function ReelGolf(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">ReelGolf</h1>
      </div>
      <div>
        <h3>Challenge</h3>
        <p>
          How might we bring the tech of the PGA tour to a golf course near you.
        </p>

        <h3>Context</h3>
        <p>
          After spending years mastering their game, golfers want a way to capture their progress! And to show it off too!
        </p>

        <h3>Outcome</h3>
        <p>
          ReelGolf.com - an web application that interfaces with cameras at your local golf course, to capture, measure, share, and perhaps even gamble on the beauty and precision that is your golf swing!
        </p>
        <h3>The Product</h3>
        <p>
          When golfers arrived at a golf hole enabled with ReelGolf, they would have the opportunity to scan a QR Code taking them to the web application experience. The'd be able to login/sign up and choose from several different products that ReelGolf provided (depending on the partnership with the golf course).
        </p>

        <ul>
          <li>
            <h4>ReelGolf Premier</h4>
            <p>
              Capture the video of your swing, the flight of your ball (with ball tracing) and finally the ball landing on the green ( 🤞 ) . These videos would be spliced together along with the Golfers name, as well as some promotional material from the Golf Course, and then sent over to the user.
            </p>
          </li>
          <li>
            <h4>Closest to the Pin</h4>
            <p>
              Place a wager on a day long challenge with other players to see who can get closest to the pin.
            </p>
          </li>
          <li>
            <h4>Ring of Fire</h4>
            <p>
              Place a 1 time wager on your shot. The closer you get to the pin, the more money you win!
            </p>
          </li>
        </ul>

        <h3>My Contribution</h3>
        <h3>Role - Product Owner/Technical Project Manager</h3>

        <p>
          My role with this client was less technical, and more product focused. I functioned as the single point of contact between the (stakeholders) and the technical team. I managed the direction of the project while also writing technical tickets, fielded implementation concerns from the technical team, and interfaced with the design team to reach our desired goals.
        </p>

        <video width="600" controls>
          <source src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/Tony_Giovannoli.mp4" type="video/mp4" />
        </video>

        <h3>Role - Engineer</h3>
        <p>
          Despite my product focus, I did do some significant engineering as well. I was responsible for understanding and educating the rest of the technical team on camera operations and api. We used specialized 4K security cameras to capture and triangulate the position of the golf balls. In order to do that, we had to understand deeply the capabilities and limitations of the camera and its API.
        </p>
        <p>
          Part of my engineering initiatives, I built a suite of tools to pan, tilt and zoom the cameras where we needed as well as correct for image distortion. I spent many hours out in the field, installing, testing and refining our algorithms. In addition to the cameras own interface, we had to know the precise location of the cameras in order to accurately triangulate the ball position. I worked with other engineers to develop a cost effective GPS system that could be used at golf courses to determine the installation location of the cameras.
        </p>
      </div>
    </>
  )
}
