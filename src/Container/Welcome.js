import React from "react";

class Welcome extends React.Component {
  render() {

    const artistName = 'Winston Surfshirt'

    const introPara = `Introducing Winston Surfshirt, the Sydney-based band quickly winning over fans and industry alike with their unique blend of soul and hip-hop – the auditory equivalent of A Tribe Called Quest splitting spliffs with your parent’s favourite band. \n\n Having developed a cult following with their smooth style and raucous live shows, the band originally emerged as the solo project of singer/rapper/producer Winston Surfshirt, before organically adopting other local artists and snowballing into what is now a six-piece musical collective.\n While cutting their teeth on the Sydney underground scene in 2014, Winston Surfshirt quickly won over a religiously loyal fan base. Thereafter, 2016 saw namesake Winston earn nods from Triple J and Majestic Casual for the buttery-smooth solo vocal feature he laid on Polographia’s hit track, ‘Sly’. \n\n In 2017 Winston Surfshirt are “the stars of the show”, as touted by Sir Elton John, who counts himself a vocal fan, among others including Zane Lowe (Beats1), Jason Bentley (KCRW) and Huw Stephens (BBC Radio 1). After a shining start to the year supporting RÜFÜS on their Australian tour and Midnight Oil at their comeback show before their world tour, the band released two critically acclaimed singles - ‘Be About You and ‘Ali D’. With both singles drifting through radio speakers, stereos and headphones around the globe, it\'d be hard to miss the rapid rise of Winston Surfshirt - \'Ali D\' even nabbed most played track of the week on triple j for two consecutive weeks. Going on to sell out all 7 shows of their debut national tour, Winston rounded it off with a coveted spot on the renowned Splendour In The Grass bill. \n \n ‘Same Same’ is the latest offering from the band -  armed with a throbbing bassline, catchy chorus,  vibrant jazz-infused interludes, and, as always, complemented perfectly by Winston’s signature vocals. With their debut album Sponge Cake set for release September 29 via Sweat It Out, and a national tour to celebrate, Winston Surfshirt are fast becoming one of Australia’s most prolific acts. If you know, you know.`

    return (
      <>
      <header>
          <h1 className="title">{artistName}</h1>
      </header>

      <div>{introPara}</div>
      </>
    );
  }
}
export default Welcome;
