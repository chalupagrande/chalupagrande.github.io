import React from 'react'
import { useLocation } from '@reach/router'
import axios from 'axios'
import ls from 'local-storage'

export function East(props) {
    const hasRSVPd = ls.get("rsvp")
    const [name, setName] = React.useState('')
    const [rsvpCount, setRSVPCount] = React.useState(1)
    const [canMakeIt, setCanMakeIt] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(hasRSVPd)

    const location = useLocation()
    const partyInvite = location.search.includes('party=true')

    function updateName(e) {
        setName(e.target.value)
    }

    function updateRSVPCount(e) {
        setRSVPCount(e.target.value)
    }

    function updateCanMakeIt(e) {
        setCanMakeIt(e.target.checked)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        alert("RSVPs are closed. Sorry!")
        return
        // blocking this behavior
        // setSubmitted(true)
        // ls.set("rsvp", "true")
        // try {
        //     const data = { name, rsvpCount, canMakeIt }
        //     const response = await axios({
        //         method: 'post',
        //         url: '/api/rsvp',
        //         data: { name, canMakeIt, rsvpCount }
        //     })
        //     console.log(response)
        //     if (canMakeIt) {
        //         alert("GREAT! I'm excited. See you there")
        //     } else {
        //         alert("Booooooo, you suck.")
        //     }
        // } catch (err) {
        //     console.log(err)
        //     alert("whoops! something went wrong.")
        // }
    }

    return (
        <>
            <div className="intro">
                <h1 className="title">🎉 You're invited!! 🎉</h1>
                <h2 className='subtitle'>East Austin Studio Tour (#549)</h2>

            </div>
            <img className="img small" src="https://sudo-portfolio-space.sfo2.cdn.digitaloceanspaces.com/images/mac.jpg"></img>
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
                    <li>What:
                        <ul>
                            <li>Art!</li>
                            <li>Paintings of Rappers!</li>
                            <li>Abstract paintings!</li>
                            <li>This weird 3D photobooth thing!</li>
                            <li>Maybe some other stuff if I can finish it in time!</li>
                        </ul>
                    </li>
                </ul>

                <br />
                <p>Hope to see you there!</p>
                <p>Here is a <a href='https://austinstudiotour.org/#/artists/25073'>link to my official page</a></p>
            </div>



            <div></div>
            {partyInvite &&
                <div style={{ margin: '1rem' }}>
                    <h1 className="title">🎉 BUT WAIT! THERES MORE!!🎉</h1>
                    <h2 className='subtitle'>Party at my house!</h2>
                    <p>Because you are a very special person to me, I would like to also extend an invite to a <strong>HOUSE WARMING ART PARTY THING</strong>. All the above details are the same, and feel free to attend any of the days/times above, but...</p>
                    <h3>IN ADDITION</h3>
                    <ul>
                        <li><strong>SATURDAY NOVEMBER 18th 2023</strong></li>
                    </ul>
                    <p>after the regular Austin Studio Tour ends, I'm going to bust out the keg, and just have a regular ass party. So, you should come through! Here are some more details: </p>
                    <ul>
                        <li><strong>Drinks: </strong> A keg will be present, but if you want something else, bring it!</li>
                        <li><strong>Parking: </strong> Street parking.!</li>
                        <li><strong>Can I bring a friend: </strong> Only if they're cool.</li>
                        <li><strong>Hours: </strong> 5pm - 12am.</li>
                        <li><strong>Afters: </strong> Sahara Lounge is walking distance</li>
                    </ul>
                    <p>please RSVP below:</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__item--row">
                            <label htmlFor='name'>Name</label>
                            <input id="name" onChange={updateName} value={name}></input>
                        </div>
                        <div className="form__item--row">
                            <label htmlFor='canMakeIt'>I'll be there</label>
                            <input type="checkbox" onChange={updateCanMakeIt} checked={canMakeIt}></input>
                        </div>
                        <div className="form__item--row ">
                            {canMakeIt && <>
                                <label>Number of RSVPs</label>
                                <input type="number" min="1" max="3" onChange={updateRSVPCount} value={rsvpCount}></input>
                            </>
                            }
                        </div>
                        <button disabled={submitted}>{submitted ? "Thanks for RSVPing" : "Submit"}</button>
                    </form>

                </div>}


        </>
    )
}

