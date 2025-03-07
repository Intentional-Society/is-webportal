import React from "react";
import { Link } from "gatsby";
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";
import * as GlobalCSS from "../styles/global.module.css";

const friendsList = [
  {
    name: "Second Renaissance",
    description: "Description.",
    website: "Website",
    image: "/images/second-renaissance.jpg"
  },
  {
    name: "Life Itself",
    description: "Description.",
    website: "Website",
    image: "/images/life-itself.jpg"
  }, 
  {
    name: "Starter Cultures",
    description: "A lovely group of humans exploring community-building, better work, and new economic models for livelihoods and co-ops.",
    website: "https://www.startercultures.us/",
    image: "/images/starters-culture.png"
  },
  {
    name: "Microsolidarity",
    description: "A framework and vocabulary for decentralized organizing, referencing the 'fractal of belonging'.",
    website: "https://www.microsolidarity.cc/",
    image: "/images/microsolidarity.jpg"
  },
  {
    name: "Enspiral",
    description: "A collective of New Zealand-based freelancers focused on co-ops and self-managed organizations.",
    website: "https://www.enspiral.com/",
    image: "/images/enspiral.png"
  },
  {
    name: "Building Belonging",
    description: "A 'home for people committed to building a world where everyone belongs', sourced by Brian Stout.",
    website: "https://www.buildingbelonging.us/",
    image: "/images/building-belonging.png"
  },
  {
    name: "The Bridge Community",
    description: "A Discord community organized around Evan McMullen's Stoa talks by the same name.",
    website: "https://www.youtube.com/watch?v=ss2_PIzl9ik",
},
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
              <p>{friend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </CenteredColumn>
  </Layout>
);

export default FriendsPage;
