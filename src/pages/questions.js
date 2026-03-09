import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';

const NamedDefault = ({ data }) => {
  const qas = [
    [`I'm unsure/nervous/introverted — is this relational stuff a fit for me?`,
    <>We love to support people at their growth edges, but only you (mind and body in conversation) really know. You could try one <Link to="/get-involved">Connection Call</Link> and see how that feels. Some of us are highly adept in relational attunement, and others come to improve their interpersonal skills... really we're all relating all the time already: to ourselves, to others, to our environment and the world around us. We're quite warm and supportive relative to conventional society. 🫂</>],
    [`Will I offend anyone if I join, don't like it, and then leave?`,
    `On the contrary, we'll count that as a success - you learned something and potentially navigated tension! We celebrate arrivals, departures, and boundary-setting with equanimity, as we care about intentionality and integrity over any specific outcomes.`],
    ['Does membership in Intentional Society cost any money?',
    `No, membership is completely free and we don't ever want to put a financial barrier in front of participation in our relational web. (We don't prohibit members from any kind of value exchanges they want to do, or from inviting people to paid offerings, but our norm is mostly "gift culture".)`],
    ['Who pays the bills, then? Is this unsustainable?',
    `IS has a sustainable funding commitment through 2035 from a small family foundation, and we gratefully use this bubble of abundance to operate our lean internal infrastructure as well as supporting other field-builders.`],
    ['What time zones does IS cater to?',
    `Traditional "IS Time" is 4pm Eastern (USA-based for DST calculations) which allows early-bird Aussies & Kiwis as well as night-owl Africans and Europeans to join in. Large-group activities usually stick with this standard time, while small-group activities can happen at any convenient time.`],
    ['Is IS virtual only? Are there any physical locations or meetups?',
    `Yes, we are a distributed virtual village, and we're "finding the others" across the globe, so our biggest IS meetup to date (as of 2025) was 8 people. As we go, though, we're starting to "know a few people" in a remarkable number of cities and are interested in facilitating local connections as opportunities grow.`],
    ['How many people are in IS?',
    `This is fuzzy based on where you draw the line, but it's fair to say that our total active membership is under 100, and within that our synchronous spaces fit "a few dozen" people each. Within those, we spend most of our conversational time in small "crew"-sized breakouts of 3-6. We don't anticipate having a hard cap at "the Dunbar number" of 150 for the network level, but we feel the other, smaller Dunbar numbers are even more important and build multi-scale principles into our social system designs.`],
    [`Are y'all some utopians that think you're gonna save the world?`,
    `"Saving the world" is explicitly a non-goal of ours, as we don't buy that frame as it's usually used. Do we long for a more beautiful world that our hearts know is possible, a wiser weller world, and to play our part in humanity growing to dissolve the metacrisis by expanding our wisdom capacity big enough to handle our power and create a surviving and thriving world for our descendants? You betcha. But we're well aware that "the world" is a really complex system that is quite resistant to white-knight savior-complex change-making efforts, so we aim to remain connected to our bodies and families and daily lives as we "be the change" and seek integrity at all scales in our actions.`],
    [`Aw, but I want to save the world! Should I go elsewhere then?`,
    `The world is perfect exactly as it is... and this includes our desire to change it. We welcome "achiever" energy and frankly there's a lot to do around here! As long as we don't get sucked into attaching our value or worthiness as a human being to how much other people praise us or how proud we can feel of our accomplishments, we embrace that we are always already in active creation of this world and in service to something so much greater than ourselves (whether you call it society, humanity, life, the universe, or God).`],
    ['Who holds the power in Intentional Society? What happens in a conflict?',
    `Everybody hates centralized rigid command-and-control hierarchies by now. But we also don't do the "tyranny of structurelessness" egalitarianism that pretends that power doesn't exist or that everyone has equal power. We strive for natural, contextual, fluid power dynamics and to make leadership and influence accessible and talk-about-able in our culture. Note from James: as founder, I have held and still (2026) hold a large amount of source-keeper energy and influence in this system. I also hold the ownable "keys" legally - stuff like domain names, digital assets, and an llc for payroll. I hope you'd hear my stance of open and collaborative power-holding reflected in the perception of anyone you ask, and I look to continue distributing leadership at the fastest right pace. (After our 2026 funding announcement, stronger governance accountability is also on the horizon after years of not-needed-yet.)`],
    [`Can I trust that power won't be hoarded or abused down the road?`,
    `I mean, first, no - not absolutely. There is no system that can replace the need for virtue in humans. Within our intentions and expertise, however, are leading-edge best practices for self-aware metamodern governance: Sociocratic decision-making and circles, Teal (Reinventing Organizations by Laloux) culture, Deliberately Developmental (An Everyone Culture by Kegan & Lahey) and Metasystematic (by Chapman) mindset, and Agile/XP feedback loops. This toolkit, along with our awareness and relational skills, can help us evolve as-and-into a world-class organization as much as we're called to.`],
    ['What is the legal structure behind IS?',
    `Intentional Society was an unincorporated association for about five years. Upon the creation of the IS Workteam in late 2025, an LLC was created to administer contractor agreements. The spirit of IS is very much beyond conventional corporate structures, but it's unclear when the practical operation of IS will benefit from more complex legal structure such as "non-profit holding corp with unrestricted subsidiaries" or "PBC / B-corp with golden shares" etc.`],
    ['Is this yet another playground for privileged people?',
    `We're proud to have a fairly broad range of socioeconomic experiences represented in our members. At the same time it's true that, on top of "having a working mic/camera/computer/internet", having time and energy available to dedicate to self-development, social, and meaning-making activities requires a level of material and mental security and slack that isn't available to at least half the humans in the world.`],
    ['What does success look like?',
    `TODO: So many dominos *could* tip, one after the other, larger and larger: Personal transformation, self-authoring, and self-actualization left and right. Diverse Dunbar-scale communities of high trust, mutual support, and capacity to serve. A network of virtual communities with emergent cooperation and a meta-tribe with shared goals and non-naive reciprocal trust. A thriving start-up ecosystem of internal and external services owned as member co-ops. Organizing physical communities in new and existing cities to extend development across more socioeconomic strata. Political projects to raise governmental competence supported by a large virtual society. Personal development norms and expectations rising in nations and societies around the globe. But. Everything we do at every point - every stage along the way - must be worth it for its own sake. If any of this is just a stepping stone to greatness and glory, then we will have fallen right back into the "save the world" trap.`],
    ['What does failure look like?',
    `TODO: James here: Speaking for myself, all of this is one no-regrets move after another. Either I learn some valuable lessons while making some friends along the way, or we find that something fantastic emerges. There's nothing else I'd rather dance with for the next 40 years, and even the first six months has been so richly rewarding.`],
    ['What would you say that you actually *do* here?',
    `TODO`],
    ['Is there one best way to get started?',
    `TODO`],
    ['Is this therapy? Is this a substitute for therapy?',
    `TODO`],
    ['Does IS promote any religion or flavor of spirituality?',
    `TODO`],
    [`My life is pretty busy/full already, what if I can't keep up with things here?`,
    `TODO`],
    ['Do I need any tech savvy to fit in here? What computer skills do I need?',
    `TODO`],
    ['Who founded this?',
    `TODO`],
    ['What makes IS unique compared to other communities and networks out there?',
    `TODO`],
  ];

  return <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <Typography variant="h2">Common Questions</Typography>
      {qas.map((qa) => <>
        <h4>Q: {qa[0]}</h4>
        <p>A: {qa[1]}</p>
      </>)}

      <p>Have more questions? Bring them to an <Link to="/get-involved">orientation call</Link>!</p>

      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        Next page: <Link to="/resources">Resources</Link>
      </div>
    </CenteredColumn>
  </Layout>;
};
export default NamedDefault;