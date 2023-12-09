import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "./Shared/ChatContainer" 

const Dashboard = () => {
  const characters = [
    {
      name: "maria",
      url: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/385788605_1992758081079286_4923410960573563109_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE5WB1SAH7ya2hNlIfs-Bp6eRmkc5zMHGR5GaRznMwcZE1GR4r2K-xPvkUtdfUHcbKr7CnyA_fXG4CB5jLsnhDa&_nc_ohc=wQ6tAhmZYj0AX-8t1_e&_nc_ht=scontent.fdac24-2.fna&oh=00_AfC30UeEX--Ig1rlvW1ERNimYtzaQjAOzv4CoJYARKWSbA&oe=6576232A",
    },
    {
      name: "Saznu",
      url: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/271979151_3201348926790471_1316497044262601981_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFvWSuV6mUmkkhPOyVrk8rsikJmKcHKfoGKQmYpwcp-gb1zewdEU-BSWDBU8UnQBYVFFiG1OlvdnpnOLKFP77c2&_nc_ohc=iGl4gHWxsecAX8qWRwh&_nc_ht=scontent.fdac24-1.fna&oh=00_AfA9wsSldNIFWJHbT6hulliRMz_r_T4biKFOHbd92CgM5g&oe=6575A4D7",
    },
    {
      name: "Arshi",
      url: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/255080241_1237312246765920_7744032660831123394_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFhRF262ZJi-ucRCdVJbPqOFoEVx5iBRRkWgRXHmIFFGabICkHn17dvsC-xGNOG9zGP3eJUuPO6e6zPuF3T5Nw8&_nc_ohc=K12CEJecsZUAX-Mhb8E&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAv2H6kcAbDX0yhYLbgDJvTK_pdHIIoPOAP5Pc9k08m4Q&oe=6576691B",
    },
    {
      name: "Kanon",
      url: "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/348280444_922712252294864_1556136006178002383_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHLxFLsLca8j_3fYgL7hxCLXNSIjm5iyTFc1IiObmLJMfiVUUb5NkOt_7FzBrzVaAjr90ytD1maO5JuqYY3lUNY&_nc_ohc=Ze9B_AFvs-YAX-MOv1a&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAI8xN0bQZh3KUuGqQ7ullMxWuiUi4tgU90B2qR8N-9gg&oe=6574FB13",
    },
    {
      name: "Pinky",
      url: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/349955380_641465544146413_277658840671061755_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHCOjHXqmvaNsw74ffmu8ggG5PQ9lPdLikbk9D2U90uKfuZuFVIvslxKEQTSXYmQdtMeGNIrbi6_Q4wvrm45u9-&_nc_ohc=bQEuIOlUBfwAX-NMhCN&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCNYtt-raQ9364KXhXEIGv7_v1wLecRM5BPus1XPtTVzw&oe=656C62F3",
    },
  ];
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  
  return (
    <div className="dashBoard">
      <ChatContainer />
      <div className="swiper_container">
        <div className="cardContainer">
        {characters.map((character) =>
          <TinderCard className='swipe'
          key={character.name} 
          onSwipe={(dir) => swiped(dir, character.name)} 
          onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
         <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
         </div>
        </div>
      
      </div>
    </div>
  );
};

export default Dashboard;
