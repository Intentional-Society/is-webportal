import React from "react";
import { Link } from "gatsby";
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";
import * as GlobalCSS from "../styles/global.module.css";

const friendsList = [
  {
    name: "Second Renaissance",
    description: "This project is a simple introduction to this moment of civilization crisis and awakening — and the emerging ecosystem related to it.",
    website: "https://secondrenaissance.net/",
    image: "/images/logos/second-renaissance.jpg"
  },
  {
    name: "Life Itself",
    description: "A collective committed to practical action for a radically wiser, weller world. They create hubs, start businesses, do research and engage in activism to pioneer a wiser culture.",
    website: "https://lifeitself.org/",
    image: "/images/logos/life-itself.jpg"
  }, 
  {
    name: "Lume",
    description: "An international collective for people with a deep interest in adult development.",
    website: "https://lumenetwork.org/",
    image: "/images/logos/lume.png"
  },
  {
    name: "Starter Cultures",
    description: `A lovely group of humans exploring community-building, better work, and new economic models for livelihoods and co-ops. We picked up T-group from their <a href="https://www.startercultures.us/creative-offerings/communication-dojo" target="_blank" rel="noopener noreferrer">Communication Dojo</a>.`,
    website: "https://www.startercultures.us/",
    image: "/images/logos/starters-culture.png"
  },
  {
    name: "Microsolidarity",
    description: `<a href="http://richdecibels.com/" target="_blank" rel="noopener noreferrer">Rich Bartlett</a> assembled this framework and vocabulary for decentralized organizing, from which we reference the “fractal of belonging” and other labels like “crews” and “caller. You can also check out their
    <a href="https://www.thehum.org/microsolidarity" target="_blank" rel="noopener noreferrer">Training.</a>`,
    website: "https://www.microsolidarity.cc/",
    image: "/images/logos/microsolidarity.jpg"
  },
  {
    name: "Enspiral",
    description: `Originally a collective of New Zealand-based freelancers, Enspiral has been hugely influential in the domain of co-ops and self-managed organizations. We've taken wisdom from their <a href="https://handbook.enspiral.com/" target="_blank" rel="noopener noreferrer">handbook</a>, practices, and various ventures including Greaterthan, The Hum, and Loomio.`,
    website: "https://www.enspiral.com/",
    image: "/images/logos/enspiral.png"
  },
  {
    name: "Building Belonging",
    description: `A “home for people committed to building a world where everyone belongs” sourced by Brian Stout, which has some community overlap with Starter Cultures and Microsolidarity fans. Check out their <a href="https://citizenstout.substack.com/" target="_blank" rel="noopener noreferrer">newsletter</a>.`,
    website: "https://www.buildingbelonging.us/",
    image: "/images/logos/building-belonging.png"
  },
  {
    name: "Sacred Ground",
    description: "A “We-Space community on the evolving edge of Mutuality” organized by Stephen Marcus, providing several weekly Sacred Ground Experience sessions of interbeing presence and connection. This network also serves as a base for the Collective Presencing community, and a few other we-space oriented groups.",
    website: "https://community.sacredground.us/landing",
    image: "/images/logos/sacred-ground.png"
  },
  {
    name: "Limicon",
    description: "Limicon is a four-week, mostly online,fan-made open space convention dedicated to strengthening the growing ecosystem of communities spawned from the liminal web.",
    website: "https://www.limicon2025.com/",
    image: "/images/logos/limicon.png"
  },
  {
    name: "Beyond Goals",
    description: "A coaching and development initiative aimed at helping individuals and organizations move beyond traditional goal-setting through intensive online workshops that guides you through a personal trajectory to orient towards your aim, with a combination of plans & creative improvisation.",
    website: "https://gobeyondgoals.com/",
    image: "/images/logos/beyond-goals.png"
  },
  {
    name: "Emergent Commons",
    description: "A member and volunteer-supported community that emerged from the work of Rebel Wisdom. It is also a collaborative space for systems change practitioners, offering discussions and shared resources.",
    website: "https://emergent-commons.mn.co/",
    image: "/images/logos/emergent-commons.png"
  },
  {
    name: "New Republic of the Heart",
    description: "A transformative community reimagining spiritual practice for collective awakening and societal evolution.",
    website: "https://newrepublicoftheheart.org/",
    image: "/images/logos/new-republic-of-the-heart.png"
  },
  {
    name: "The Ecoversities Alliance",
    description: "A global network of alternative education spaces promoting regenerative learning and ecological awareness.",
    website: "https://ecoversities.org/",
    image: "/images/logos/ecoversities.png"
  },
  {
    name: "Global Bildung Network",
    description: "A worldwide movement dedicated to holistic education and lifelong learning.",
    website: "https://www.globalbildung.net/",
    image: "/images/logos/global-bildung.png"
  },
  {
    name: "Our Emerging Future",
    description: "An initiative fostering conversations and connections around transformative social change from The Future of Work, Awareness-Based Education, Planetary Health to Generative and Regenerative Living.",
    website: "https://www.ouremergingfuture.com/",
    image: "/images/logos/our-emerging-future.png"
  },
    {
    name: "The Connection Project",
    description: "The Connection Project is a new peer led practice community that is focused on the relational and collaborative development space. They offer free online AR practice sessions, and also an innovative free facilitation training program that is peer designed and delivered.",
    website: "https://theconnectionproject.nz/",
    image: ""
  },
  {
    name: "Communication Dojo",
    description: "A structured practice space for improving relational and communication skills such as such as nonviolent communication, liberating structures, circling, microsolidarity, theory U, t-group, Bohm dialogue, and authentic relating.",
    website: "https://www.startercultures.us/creative-offerings/communication-dojo",
    image: "/images/logos/communication-dojo.png"
  },
  {
    name: "The Stoa",
    description: "A digital campfire for cohering, philosophical inquiry and dialogue on what matters most on the knife's edge. The Stoa is stewarded by Peter Limberg",
    website: "https://www.youtube.com/c/TheStoa",
    image: "/images/logos/the-stoa.png"
  },
  {
    name: "Collective Presencing",
    description: "A collective practice, with many different elements. Its purpose is to act – collectively – in more life-affirming ways, using the collective wisdom of the people gathered thereby enabling emergent dialogue.",
    website: "https://www.collectivepresencing.org/",
    image: "/images/logos/collective-presencing.png"
  },
  {
    name: "Interbeing",
    description: "A movement and innovative platform dedicated to improve the mental health & well-being of all humans using multiplayer meditation practices.",
    website: "https://interbe.ing/",
    image: "/images/logos/interbeing.png"
  },
  {
    name: "Denizen",
    description: "A platform for conversations and learning about systems change, governance, and future societies.",
    website: "https://www.becomingdenizen.com/",
    image: "/images/logos/denizen.jpeg"
  }

];

const FriendsPage = () => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Friends of Intentional Society</Typography>
      <div style={{ height: "1px", backgroundColor: "#ccc", width: "100%", margin: "10px 0" }}></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {friendsList.sort((a,b)=>a.name.localeCompare(b.name)).map((friend, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={friend.image} alt={friend.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            <div>
              <Typography variant="h5">
                <a href={friend.website} target="_blank" rel="noopener noreferrer">{friend.name}</a>
              </Typography>
              <p dangerouslySetInnerHTML={{ __html: friend.description }} />
            </div>
          </div>
        ))}
      </div>
    </CenteredColumn>
  </Layout>
);

export default FriendsPage;

