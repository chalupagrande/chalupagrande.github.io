import React from 'react'

export function East(props) {
    return (
        <>
            <div className="intro">
                <h1 className="title">🎉 Your invited!! 🎉</h1>
                <h2 className='subtitle'>East Austin Studio Tour (#549)</h2>

            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img className="img medium" src="https://sudo-portfolio-space.sfo2.cdn.digitaloceanspaces.com/images/mac.jpg"></img>
                <div style={{ margin: '1rem' }}>
                    <p>Hey! I'm opening up my house for East Austin Studio Tour where I'll be showing my art. I've never done anything like this before, but I've been working hard on a lot of new pieces and would love for you to come check them out! So swing by! Here are the details:</p>
                    <ul>
                        <li>When: 2 weekends in November!
                            <ul>
                                <li><strong>Nov. 11-12th 12pm - 5pm</strong></li>
                                <li><strong>Nov. 18-19th 12pm - 5pm</strong></li>
                            </ul>
                        </li>
                        <li>Where: <ul>
                            <li>In my backyard!</li>
                            <li><strong><a href="https://maps.app.goo.gl/dsdJUEetSWt1mdYZ7">1110 Mason Ave. Austin Tx. 78721</a></strong></li>
                        </ul></li>
                    </ul>

                    <br />
                    <p>Hope to see you there!</p>
                    <p>Here is a <a href='https://austinstudiotour.org/#/artists/25073'>link to my official page</a></p>
                </div>
            </div >


        </>
    )
}

