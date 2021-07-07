import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => {
  const qas = [
    [`Is this a fit for me?`,
    `If you've read through this website and are feeling uncertain...
    Well, what was it that kept you reading? The door is open every week - why not 
    come take a look. There's no sales funnel; you can float as close or far as 
    feels comfortable for you.`],
    [`What if I try it and don't like it?`,
    `Well then, count that as a success - you learned something about yourself! Your 
    arrival, learning, and departure will all be celebrated with acceptance and 
    equanimity. The group exists for the sake of people, not the other way around.`],
    [`Does membership in Intentional Society cost any money?`,
    `No, membership is completely free.`],
    [`Well, how do you pay the bills, then?`,
    `Eh, pocket change so far. It's quite early still, and yes we'll have to figure 
    out money and infrastructure at some point but we hope to avoid ever needing to 
    create a financial barrier to entry.`],
    [`Any chance the meeting time could move? That's <asleep> o'clock my time.`,
    `Probably not, but we haven't ruled it out. 1pm Pacific / 4pm Eastern is meant to 
    be feasible from New Zealand to Western Europe and Africa.`],
    [`Is Intentional Society online because of the pandemic?`,
    `A little yes, mainly no. Obviously the pandemic did a lot to spread and normalize 
    the use of video calls - but this is online intentionally and will stay that way 
    at its core, even if we extend ourselves into some future physical activities in 
    high-density locales.`],
    [`Do you have a European/Asian chapter?`,
    `No, sorry, and we don't see having one in our near future. We'd like to find and recommend 
    some similar communities - please let us know if you have candidates.`],
    [`How big are your meetings?`,
    `We've stayed small and fairly quiet in Q1 and Q2, looking for that first handful 
    of passionate co-creators. 60 total orientations, 40 at-least-once attendees, and any given 
    Sunday has been in the 6-12 range. We'll probably cap Q3 at no more than about 25,
    should it come to that. We do intend to grow over time, but resist pursuing growth 
    for the sake of status value`],
    [`Tell me straight, are you utopians? Are you trying to save the world?`,
    `Saving the world is in fact an explicit non-goal of ours. Now, that isn't to say 
    we're against that outcome - we'd like nothing more than for humanity to raise 
    its collective consciousness, solve its hard coordination problems, and rise to 
    meet and defeat the existential risks and challenges facing us as a species. However,  
    we're well aware that "the world" is a really really really complex system that 
    is usually quite resistant to white-knight savior-complex change efforts, so we think 
    the best net effects probably come from not trying at all, or at least in any direct way.`],
    [`Well then, what's the point if we're *not* going to save the world?`,
    `Regardless of our global future, you care about the quality of your own life. 
    You care about your family and friends, and likely for some communities you're in 
    and the localities around you. Maybe we 
    can do some small things, maybe we can have some bigger impacts, and maybe we can 
    find ways to weave our efforts together at some scale we can't even picture right now. 
    We really don't know: Maybe the best way for Intentional Society to *do*, as an 
    organization, is to focus on *being* together, or to hold an open space for members 
    to self-organize independent projects... we look forward to finding out.`],
    [`Who holds the power in Intentional Society? What happens in a conflict?`,
    `James here: People have mostly been too polite to ask this question, but it's 
    a very important one so here it is anyway. I do "hold the keys" currently - 
    intentionally, as I try to balance sharing my calling intention with holding space 
    for co-creation. As we grow, I intend to dilute my control over time until 
    legal ownership and practical governance are both in the hands of the community.`],
    [`How do things run right now?`,
    `We're using some Sociocratic governance practices, with some "Teal" 
    (Reinventing Organizations by Laloux) and "Deliberately Developmental" 
    (An Everyone Culture by Kegan & Lahey) underpinnings, if those terms mean anything to you. 
    In plain language, we run on "consent of the impacted" with "power to all", aiming 
    for agility and effectiveness without the stifling command-and-control 
    culture of most organizations. Some governance decisions show up in the "meta time" of 
    our general sessions, and further coordination happens within our Discord server.`],
    [`Is Intentional Society a non-profit?`,
    `It's not formally anything yet, but this looks quite probable in the near-to-medium-term
    future. There seems like a core not-for-profit organizational mission that would 
    benefit from that legal designation, independent of any other ventures that arise.`],
    [`Is this just another playground for privileged people?`,
    `Right now, honestly, yes, more than we'd like. It's absolutely true that the people 
    most able to dedicate time and energy toward something like this are those who have all 
    their basic needs fulfilled such that they can have the mental space and slack to 
    invest in further self-development. This is in tension with our desire to be accessible 
    and inclusive, and is a tension we must hold in our awareness as our capacities grow.`],
    [`Say everything goes mind-blowingly well - what's the endgame?`,
    `So many dominos *could* tip, one after the other, larger and larger: 
    Personal transformation, self-authoring, and self-actualization left and right. 
    Diverse Dunbar-scale communities of high trust, mutual support, and capacity to serve. 
    A network of virtual communities with emergent cooperation and a meta-tribe with 
    shared goals and non-naive reciprocal trust.
    A thriving start-up ecosystem of internal and external services owned as member 
    co-ops. Organizing physical communities in new and existing cities to extend 
    development across more socioeconomic strata. Political projects to raise 
    governmental competence supported by a large virtual society. Personal development 
    norms and expectations rising in nations and societies around the globe. But. Everything 
    we do at every point - every stage along the way - must be worth it for its own sake. 
    If any of this is just a stepping stone to greatness and glory, then we will have 
    fallen right back into the "save the world" trap.`],
    [`What about if this *doesn't* work?`,
    `James here: Speaking for myself, all of this is one no-regrets move after another. 
    Either I learn some valuable lessons while making some friends along the way, or we 
    find that something fantastic emerges. There's nothing else I'd rather dance with 
    for the next 40 years, and even the first six months has been so richly rewarding.`],
  ];

  return <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Common Questions</Typography>
      {qas.map((qa) => <>
        <h4>Q: {qa[0]}</h4>
        <p>A: {qa[1]}</p>
      </>)}

      <p>Have more questions? Bring them to an <Link to="/get-involved">orientation call</Link>!</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/resources">Resources</Link>
      </div>
    </CenteredColumn>
  </Layout>
};
export default NamedDefault;