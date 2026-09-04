import React from 'react';
import {
  serif, ACCENT_DARK, bodyP,
  Head2026, HeaderBand, Page2026, Article2026,
} from '../components/design2026/chrome';

// 2026 redesign of the Friends page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).
// Logos live in static/images/logos/; entries without a logo render an
// initials circle.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Fellow travelers in the wider ecosystem',
  metaTitle: 'Friends',
  metaDescription: 'Fellow travelers in the wider ecosystem of inner development, relational culture, and collective wisdom.',
};

const friendsList = [
  { name: 'Beyond Goals', website: 'https://gobeyondgoals.com/', image: '/images/logos/beyond-goals.png', description: 'A coaching and development initiative helping individuals and organizations move beyond traditional goal-setting through intensive online workshops.' },
  { name: 'Building Belonging', website: 'https://www.buildingbelonging.us/', image: '/images/logos/building-belonging.png', description: 'A home for people committed to building a world where everyone belongs, sourced by Brian Stout.' },
  { name: 'Collective Presencing', website: 'https://www.collectivepresencing.org/', image: '/images/logos/collective-presencing.png', description: 'A collective practice using the wisdom of the people gathered to act in more life-affirming ways through emergent dialogue.' },
  { name: 'Communication Dojo', website: 'https://www.startercultures.us/creative-offerings/communication-dojo', image: '/images/logos/communication-dojo.png', description: 'A structured practice space for relational and communication skills — nonviolent communication, liberating structures, circling, theory U, T-group, Bohm dialogue, authentic relating.' },
  { name: 'Denizen', website: 'https://www.becomingdenizen.com/', image: '/images/logos/denizen.jpeg', description: 'A platform for conversations and learning about systems change, governance, and future societies.' },
  { name: 'Emergent Commons', website: 'https://emergent-commons.mn.co/', image: '/images/logos/emergent-commons.png', description: 'A member- and volunteer-supported community that emerged from the work of Rebel Wisdom — a collaborative space for systems-change practitioners.' },
  { name: 'Enspiral', website: 'https://www.enspiral.com/', image: '/images/logos/enspiral.png', description: 'Originally a collective of New Zealand freelancers, hugely influential in co-ops and self-managed organizations. We\'ve taken wisdom from their handbook, practices, and ventures including Greaterthan, The Hum, and Loomio.' },
  { name: 'Global Bildung Network', website: 'https://www.globalbildung.net/', image: '/images/logos/global-bildung.png', description: 'A worldwide movement dedicated to holistic education and lifelong learning.' },
  { name: 'Interbeing', website: 'https://interbe.ing/', image: '/images/logos/interbeing.png', description: 'A movement and platform dedicated to improving mental health and well-being through multiplayer meditation practices.' },
  { name: 'Life Itself', website: 'https://lifeitself.org/', image: '/images/logos/life-itself.jpg', description: 'A collective committed to practical action for a radically wiser, weller world — hubs, businesses, research, and activism pioneering a wiser culture.' },
  { name: 'Limicon', website: 'https://www.limicon2025.com/', image: '/images/logos/limicon.png', description: 'A four-week, mostly online, fan-made open space convention strengthening the ecosystem of communities spawned from the liminal web.' },
  { name: 'Lume', website: 'https://lumenetwork.org/', image: '/images/logos/lume.png', description: 'An international collective for people with a deep interest in adult development.' },
  { name: 'Microsolidarity', website: 'https://www.microsolidarity.cc/', image: '/images/logos/microsolidarity.jpg', description: 'Rich Bartlett\'s framework and vocabulary for decentralized organizing — we reference the "fractal of belonging" and labels like "crews" and "caller" from here.' },
  { name: 'New Republic of the Heart', website: 'https://newrepublicoftheheart.org/', image: '/images/logos/new-republic-of-the-heart.png', description: 'A transformative community reimagining spiritual practice for collective awakening and societal evolution.' },
  { name: 'Our Emerging Future', website: 'https://www.ouremergingfuture.com/', image: '/images/logos/our-emerging-future.png', description: 'An initiative fostering conversations around transformative social change — from the future of work to planetary health and regenerative living.' },
  { name: 'Sacred Ground', website: 'https://community.sacredground.us/landing', image: '/images/logos/sacred-ground.png', description: 'A "we-space community on the evolving edge of mutuality," organized by Stephen Marcus, offering weekly Sacred Ground Experience sessions of interbeing presence.' },
  { name: 'Second Renaissance', website: 'https://secondrenaissance.net/', image: '/images/logos/second-renaissance.jpg', description: 'A simple introduction to this moment of civilizational crisis and awakening, and the emerging ecosystem related to it.' },
  { name: 'Starter Cultures', website: 'https://www.startercultures.us/', image: '/images/logos/starters-culture.png', description: 'A group of humans exploring community-building, better work, and new economic models for livelihoods and co-ops — we picked up T-group from their Communication Dojo.' },
  { name: 'The Connection Project', website: 'https://theconnectionproject.nz/', initial: 'TC', description: 'A peer-led practice community focused on the relational and collaborative development space, with free AR practice sessions and a peer-designed facilitation training program.' },
  { name: 'The Ecoversities Alliance', website: 'https://ecoversities.org/', image: '/images/logos/ecoversities.png', description: 'A global network of alternative education spaces promoting regenerative learning and ecological awareness.' },
  { name: 'The Stoa', website: 'https://www.youtube.com/c/TheStoa', image: '/images/logos/the-stoa.png', description: 'A digital campfire for cohering, philosophical inquiry, and dialogue on what matters most — stewarded by Peter Limberger.' },
];

const NamedDefault = () => (
  <Page2026 active="/friends">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="moss-roots.jpg" credit="Bill Claff"
      title={PAGE.title}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={{ ...bodyP, margin: '0 0 2.5rem' }}>
        We are one node in a much larger, loosely-connected web of communities, practices,
        and projects working on inner development, relational culture, and collective wisdom.
        Here are some of the friends whose thinking and practice we've borrowed from,
        co-hosted with, or simply admire.
      </p>

      {friendsList.map(f => (
        <div key={f.name} style={{
          display: 'flex', alignItems: 'flex-start', gap: '1.2rem',
          paddingBottom: '1.4rem', marginBottom: '1.4rem', borderBottom: '1px solid rgba(42,42,36,0.08)',
        }}>
          {f.image ? (
            <img src={f.image} alt={f.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, background: '#F2EDE4' }} />
          ) : (
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', flexShrink: 0, background: '#E5EDE6',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: serif, fontStyle: 'italic', color: '#7A9E8A', fontSize: '22px',
            }}>{f.initial}</div>
          )}
          <div>
            <h4 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.15rem', margin: '0 0 0.4rem' }}>
              <a href={f.website} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_DARK }}>{f.name}</a>
            </h4>
            <p style={{ ...bodyP, margin: 0 }}>{f.description}</p>
          </div>
        </div>
      ))}

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
