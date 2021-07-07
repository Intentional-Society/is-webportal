import React from "react"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Resources</Typography>
      <p></p>
      <Typography variant="h4">Relational Practices</Typography>
      <p>We have tried and enjoyed the following practices:</p>
      <Typography variant="h5">Authentic Relating</Typography>
      <ul>
        <li>This is a large collection of games/practices, best represented by the manual assembled 
          by Sara Ness. We've used the Noticing game (closely related to Circling), Hotseat, and others 
          as building blocks of culture and communication.</li>
        <li><a href="https://www.authrev.org/what-is-authentic-relating">Authentic Revolution's</a> <a 
          href="https://authrev.gumroad.com/l/AR-Games">Games Manual</a></li>
        <li><a href="https://authenticrelating.co/">ART International's</a> <a 
          href="https://authenticrelating.co/five-practices/">Five Practices of Authentic Relating</a></li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-i-notice-you-seem/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Collective Presencing</Typography>
      <ul>
        <li>A circle practice of group sense-making, developed by Ria Baeck. Exploring the space of 
          a preselected open question, participants bring their observations "to the center" of the 
          circle, where deep listening weaves reflections together in a super-mind-ish phenomenon.

        </li>
        <li><a href="https://www.collectivepresencing.org/">Website (with full book)</a></li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-unfolding-the-collective/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Inquiry Spiraling</Typography>
      <ul>
        <li>Closely related to Collective Presencing, this practice circles around exploring the 
          question space itself, weaving together a simultaneous mix of diverging and converging questions 
          while staying in curiosity. Designed as question-finding, it can be paired with another 
          question-answering/exploring practice.
        </li>
        <li><a href="https://www.intentionalsociety.org/files/Inquiry_Spiraling.pdf">Instructions</a></li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-staying-in-curiosity-with-inquiry-spiraling/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Empathy Circling</Typography>
      <ul>
        <li>This practice is, very simply, listening to someone and reflecting back their thoughts. 
          The sweet spot is a balance of maintaining accuracy and fidelity to their original expression 
          while also using one's own representations (rather than parroting back word-for-word).
        </li>
        <li><a href="http://www.empathycircle.com/">Website</a>
          <a href="https://944144c2-a-62cb3a1a-s-sites.googlegroups.com/site/empathycircleswebsite/how-to-empathy-circle/520_n.jpg">Instructions</a></li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-reflecting-and-empathy/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Peer Coaching</Typography>
      <ul>
        <li>Taken as a general concept, this practice is “pure” coaching, defined by the stance that 
          the coachee already holds in themselves everything that's necessary to resolve their own challenge(s). 
          The act of coaching, rather than advising or consulting, is to ask questions that merely help 
          direct the coachee's awareness to notice possible blind spots or unrealized connections - sparking 
          the click of insight or integration that's waiting there for them. This can be done with a 
          question bank of “clean” questions, or we've used a fixed script of a question sequence.
        </li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-looking-towards-what-we-avoid/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">T-group</Typography>
      <ul>
        <li>Adopted via our friends 
          at <a href="https://www.startercultures.us/creative-offerings/communication-dojo">Communication Dojo</a>, 
          this is the granddaddy practice of expressing one's present moment experience in a group setting.</li>
        <li><a href="https://en.wikipedia.org/wiki/T-groups">
          reference</a> <a href="https://infed.org/kurt-lewin-groups-experiential-learning-and-action-research/#tgroups">
          links</a> (TODO: can instructions doc be publicly posted?)</li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-t-group-practice/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Glass Bead Game</Typography>
      <ul>
        <li>Inspired by <a href="https://en.wikipedia.org/wiki/The_Glass_Bead_Game">a novel</a>, this is a 
        (usually) two-player game in which players take turns riffing off a concept and each other in a 
        kind of improv philosophy jam.</li>
        <li>(glassbeadgames.com currently offline as of July 2021)</li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-improv-philosophy/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Agile Retrospectives</Typography>
      <ul>
        <li>Widespread in agile software development and elsewhere, literally “learning from looking 
          back” as a group. This can take many forms, from simple rubrics like “start stop continue” 
          or "rose thorn bud” to timeline reconstruction to structural tension analysis. It's a 
          fundamental learning move to "go meta" and many books and guides have been written 
          exploring the domain.
        </li>
        <li><a href="https://pragprog.com/titles/dlret/agile-retrospectives/">Book by Esther Derby and Diana Larsen</a></li>
      </ul>
      <Typography variant="h4">Friends of Intentional Society</Typography>
      <p>We consider these entities, organizations, or people to be allied, aligned, or inspiring to us:</p>
      <Typography variant="h5">Starter Cultures</Typography>
      <ul>
        <li>A lovely group of humans exploring community-building, better work, and new economic 
          models for livelihoods and co-ops. We picked up T-group from 
          their <a href="https://www.startercultures.us/creative-offerings/communication-dojo">Communication 
          Dojo</a>.
          </li>
        <li><a href="https://www.startercultures.us/">Website</a></li>
      </ul>
      <Typography variant="h5">Microsolidarity</Typography>
      <ul>
        <li><a href="http://richdecibels.com">Rich Bartlett</a> assembled this framework and 
          vocabulary for decentralized organizing, from which we reference the “fractal of 
          belonging” and other labels like “crews” and “caller”.</li>
        <li><a href="https://www.microsolidarity.cc/">Microsolidarity website</a> <a 
        href="https://www.thehum.org/microsolidarity">Training</a></li>
      </ul>
      <Typography variant="h5">The Bridge Community</Typography>
      <ul>
        <li>This is a Discord community organized around Evan McMullen's Stoa talks by the same name.</li>
        <li>If you dig the talks, we can get you an invite.</li>
        <li>Original Youtube <a href="https://www.youtube.com/watch?v=ss2_PIzl9ik">video</a></li>
      </ul>
      <Typography variant="h5">Enspiral</Typography>
      <ul>
        <li>Originally a collective of New Zealand-based freelancers, Enspiral has been hugely influential
           in the domain of co-ops and self-managed organizations. We've taken wisdom from 
           their <a href="https://handbook.enspiral.com/">handbook</a>, practices, and various ventures 
          including Greaterthan, The Hum, and Loomio.
        </li>
        <li><a href="https://www.enspiral.com/">Website</a></li>
      </ul>
      <Typography variant="h5">Sacred Ground</Typography>
      <ul>
       <li>A “We-Space community on the evolving edge of Mutuality” organized by Stephen Marcus 
          that also serves as a base for the Collective Presencing community.</li>
          <li>Mighty Networks <a href="https://community.sacredground.us/landing">Website</a></li>
      </ul>
      <Typography variant="h5">Building Belonging</Typography>
      <ul>
        <li>A “home for people committed to building a world where everyone belongs” sourced by Brian Stout, 
          which has some community overlap with Starter Cultures and Microsolidarity fans.
        </li>
        <li><a href="https://www.buildingbelonging.us/">Website</a> <a 
          href="https://citizenstout.substack.com/">Newsletter</a></li>
      </ul>
      <ul>

      </ul>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;