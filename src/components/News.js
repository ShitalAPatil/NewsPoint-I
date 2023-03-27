import React, { Component } from 'react'
 import NewsItem from './NewsItem';

export class News extends Component {

articles=[
   {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Eric Cheung",
      "title": "Honduras establishes diplomatic ties with China, severs them with Taiwan - CNN",
      "description": "Honduras has formally established diplomatic ties with China and severed them with Taiwan, ending a decades-long relationship and dealing a blow to the self-ruled island democracy in its struggle for recognition.",
      "url": "https://www.cnn.com/2023/03/25/asia/honduras-cuts-diplomatic-ties-with-taiwan-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230326011647-01-honduras-cuts-diplomatic-ties-taiwan-intl-hnk.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-26T06:28:00Z",
      "content": "Honduras has formally established diplomatic ties with China and severed them with Taiwan, ending a decades-long relationship and dealing a blow to the self-ruled island democracy in its struggle for… [+6912 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "March Madness 2023: FAU's improbable Final Four run isn't as shocking once you know these anonymous Owls - CBS Sports",
      "description": "FAU may seem like a Cinderella, but 35-3 is no accident and the Owls have what it takes to win the national championship",
      "url": "https://www.cbssports.com/college-basketball/news/march-madness-2023-faus-improbable-final-four-run-isnt-as-shocking-once-you-know-these-anonymous-owls/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/26/8ddb247b-d871-418e-be9e-e6c6e99fbe86/thumbnail/1200x675/c1a0207f2d6c91fdf76c093313522464/gettyimages-1476350987-1-1.jpg",
      "publishedAt": "2023-03-26T05:02:00Z",
      "content": "NEW YORK FAU coach Dusty May greeted Johnell Davis with a big bear hug. Time expired, the horns blared, the backboards flashed red and the party was on. \r\nThe Beach Boys 79, Kansas State 76. God only… [+8171 chars]"
    },
    {
      "source": { "id": null, "name": "MMA Fighting" },
      "author": "MMA Fighting Newswire",
      "title": "UFC San Antonio post-fight show: Reaction to Cory Sandhagen’s big win, controversial judging - MMA Fighting",
      "description": "MMA Fighting reacts to Saturday’s UFC San Antonio card, Cory Sandhagen’s massive win over Marlon Vera in the main event, and more.",
      "url": "https://www.mmafighting.com/2023/3/26/23656975/ufc-san-antonio-post-fight-show-reaction-to-cory-sandhagens-big-win-controversial-judging",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/rOjlMjd5A5f5ueUidXkIff2dbEw=/0x0:6928x3627/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24537403/1476381419.jpg",
      "publishedAt": "2023-03-26T04:42:15Z",
      "content": "Cory Sandhagen looked sensational over 25 minutes to defeat Marlon Vera in the main event of UFC San Antonio. However, one judge scored the bout for Vera which left the MMA community scratching their… [+883 chars]"
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Fox News",
      "title": "Delta passenger detained at LAX after opening exit door, activating emergency slide minutes before takeoff - New York Post ",
      "description": "“You always tell yourself, when you see these things on TV, that I would have done this or that, but honestly, it was so quick, there was no way to react.”",
      "url": "https://nypost.com/2023/03/26/delta-airline-passenger-opens-exit-door-activates-emergency-slide-before-takeoff/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/delta-passenger-comp-1.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2023-03-26T04:37:00Z",
      "content": "A Delta Airlines passenger on a flight from Los Angeles International Airport (LAX) on Saturday was arrested for allegedly opening an emergency exit door aboard the plane and causing the plane’s emer… [+2594 chars]"
    },
    {
        "source": { "id": null, "name": "New York Post" },
        "author": "Patrick Reilly",
        "title": "Biden's pick to head FAA withdraws name from nomination: reports - New York Post ",
        "description": "Phillip Washington, decided to pull his name from consideration due to “an onslaught of unfounded Republican attacks” on his service and experience, a White House official told CNN on Saturday.",
        "url": "https://nypost.com/2023/03/25/bidens-pick-to-head-faa-withdraws-name-from-nomination-reports/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008795409.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-03-26T03:44:00Z",
        "content": "President Joe Bidens pick to lead the Federal Aviation Administration is withdrawing his name from the nomination weeks after he was grilled by Republican lawmakers for not being qualified to head th… [+1879 chars]"
      },
      {
        "source": { "id": null, "name": "YouTube" },
        "author": null,
        "title": "UConn vs. Gonzaga - Elite Eight NCAA tournament extended highlights - March Madness",
        "description": "UConn cruised past Gonzaga 82-54 to advance to the Final Four in Houston, Texas. Watch the extended highlights here.Watch the Condensed Game from Gonzaga Bul...",
        "url": "https://www.youtube.com/watch?v=UgnKgGyvvZE",
        "urlToImage": "https://i.ytimg.com/vi/UgnKgGyvvZE/maxresdefault.jpg",
        "publishedAt": "2023-03-26T03:30:39Z",
        "content": null
      },
      {
        "source": { "id": null, "name": "Seeking Alpha" },
        "author": "The Asian Investor",
        "title": "First Republic Bank Stock: Why I Am Sticking To My Investment (NYSE:FRC) - Seeking Alpha",
        "description": "Recent liquidity measures have proven to support First Republic, while deposit outflows appear to have stabilized lately. See why FRC stock is a Speculative Buy.",
        "url": "https://seekingalpha.com/article/4590106-first-republic-bank-stock-why-i-am-sticking-to-my-investment",
        "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1433448487/image_1433448487.jpg?io=getty-c-w1536",
        "publishedAt": "2023-03-26T03:28:04Z",
        "content": "Anne Czichos\r\nA couple of things have happened to First Republic Bank (NYSE:FRC) since I submitted a contrarian call to buy the community bank's shares about two weeks ago. FRC stock has whiplashed e… [+8269 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Andy Rose",
        "title": "Actor Jonathan Majors is arrested on assault charge in New York, police say - CNN",
        "description": "Actor Jonathan Majors, who has recently starred in \"Creed III\" and \"Ant-Man and the Wasp: Quantumania,\" was arrested Saturday morning in an alleged domestic dispute, New York police say.",
        "url": "https://www.cnn.com/2023/03/25/us/jonathan-majors-arrest-new-york/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230325221038-jonathan-majors-file-032523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-26T03:28:00Z",
        "content": "Actor Jonathan Majors, who has recently starred in Creed III and Ant-Man and the Wasp: Quantumania, was arrested Saturday morning in an alleged domestic dispute, New York police say.\r\nMajors, 33, was… [+662 chars]"
      },
      {
        "source": { "id": "cbs-news", "name": "CBS News" },
        "author": "Omar Villafranca, Camille C. Knox",
        "title": "At least 26 dead after tornado causes destruction across Mississippi and Alabama - CBS News",
        "description": "A string of deadly storms swept across the Southeast, causing catastrophic damage.",
        "url": "https://www.cbsnews.com/news/at-least-26-dead-after-tornadoes-in-mississippi/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/26/7acf00c8-f237-48c1-a446-c18206d87d95/thumbnail/1200x630/97a135863429751a91e34bb655209226/gettyimages-1249444244.jpg",
        "publishedAt": "2023-03-26T03:12:00Z",
        "content": "At least 25 people are dead in Mississippi, and one person in Alabama, after a tornado touched down just after sundown Friday in a storm system that delivered twisters, heavy rain, wind gusts and hai… [+4670 chars]"
      },
]


    constructor(){
        super();
        this.state ={
            articles: this.articles,
            loading:false
}
      }
      
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsPoint - Top Headlines</h2>
       
        <div className='row'>
        {this.state.articles.map((element)=> {
            return(
                <div className='col-md-4' key={element.url}>
            <NewsItem  title={element.title.slice(0,65)} description={element.description.slice(0,120)}  imgurl={element.urlToImage} newsUrl={element.url}/>
            </div>
                
            )

        })}
            
            
          

        </div>
        
      </div>
     
    )
  }
}

export default News;