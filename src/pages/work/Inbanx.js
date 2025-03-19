import React from 'react'

export function Inbanx(props) {
  return (
    <>
      <div className="intro">
        <h2 className="title">Inbanx</h2>
      </div>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            How might we combine a budgeting solution, an expense reporting tool, and an employee card program into one usable platform.
          </p>
        </div>
        <div className="item">
          <h3>Context</h3>
          <p>
            Businesses need a budgeting platform that is flexible to their needs. Most existing solutions require track employee spend via an expense reporting tool. This means employees are required to manually keep track of their expenses and then input these expenses into the company's software. Furthermore, there is no way for employers to put limits on employee spend in this way.
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            An enterprise budgeting tool with a dynamic card program.
          </p>
          <p>
            What does this mean? It means that rather than keeping track of expenses manually, employers can give employees company credit cards with tremendously flexible controls. This means that employees no longer have to keep track of their expenses manually, they just put company spend on the company card. The card can intelligently determine if the spend is a valid business expense and approve or block the transaction at the time of the card swipe. Furthermore, cards can be linked to budgets. And budgets can have more granular control.
          </p>
          <p>
            What does this enable? It enables the employers full control and purview over their companies spend, while removing the ambiguity of what constitutes a legitimate business expense from the employee.
          </p>
          <p>
            Lastly when the time comes for reporting, all the expenses roll up nicely, separated by budget and general ledger code and integrates nicely with the ERP software of your choosing.

          </p>
        </div>
        <div className="item">
          <h3>My Contribution</h3>
          <h3>Role - Technical Project Manager and Product Owner</h3>
          <p>
            My role was primarily to run the product vision — interfacing with the CEO and prioritize and confirm product direction. In addition to this larger strategic planning, I also ran all scrum rituals, wrote technical tickets, fine tuned user experience with the design team, fielded technical customer issues and managed the development teams daily tasks.
          </p>
          <p>
            When I joined the team, the product was at the very early stages of its release to the market. It only had 1 sponsored business (a group that used the platform for free in exchange for valuable user data and research). The card program had not been fully formulated, and the user experience of the product left something to be desired.
          </p>
        </div>
        <div className="item">
          <h4>Card Program</h4>
          <p>
            Aside from my daily duties of running the team, one of my primary contributions to the product was designing the complicated card program.
          </p>
          <p>
            Cards need to be able to take on several different "roles". Spender cards — where a card is associated to a spender (employee) and spend on that card can only be attributed to budgets to which that user belongs. Budget cards — where a card is associated with a budget, and anyone in that budget can use that card. Rechargeable cards — where a credit card acts like a prepaid debit card with a diminishing balance.
          </p>
          <p>
            All of these complex interactions between users, budgets and their cards took a tremendous amount of careful planning and management of edge cases. With the help of my product team and through many meetings with key stakeholders, we arrived at a flexible vision of the card program.
          </p>
        </div>
        <div className="item">
          <h4>Multi Entity Support</h4>
          <p>
            Some of our users needed an even more flexible program for their budgeting needs. Their organizations often included a whole tree of sub companies with different reporting and budgeting needs. One parent company to rule them all.
          </p>
          <p>
            This presented a unique user experience challenge when it comes to roles and permissions. Organizations needed 1 user role that could migrate between all of their sub companies with varying levels of permissions. In addition, users could belong to certain budgets in 1 role, and a different budget in a different company with a completely different set of permissions.
          </p>
          <p>
            In order to accomplish this we went through a period of dramatic restructuring of our core data models. Through this process I managed daily tasks, wrote technical requirement docs, and consulted with the system architects to arrive at the best possible user experience.
          </p>
        </div>
      </div>
    </>
  )
}
