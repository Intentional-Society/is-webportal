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
  }
];

const FriendsPage = () => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Friends of Intentional Society</Typography>
      <div style={{ height: "1px", backgroundColor: "#ccc", width: "100%", margin: "10px 0" }}></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {friendsList.map((friend, index) => (
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

