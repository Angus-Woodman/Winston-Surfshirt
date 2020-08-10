import React from "react";

class Albums extends React.Component {
  state = {
    albums:[
      { id:100,
        albumName: 'Spong Cake',
        songs:[
            {
              id:1,
              title: 'Juan',
              length: '',
              likes: 0
            },
            {
              id:2,
              title: 'Ali D',
              length: '',
              likes: 0
            },
            {
              id:3,
              title: 'Nowhere',
              length: '',
              likes: 0
            },
            {
              id:4,
              title: 'Be About You',
              length: '',
              likes: 0
            },
            {
              id:5,
              title: 'FreeForYou',
              length: '',
              likes: 0
            },
            {
              id:6,
              title: 'The Moments',
              length: '',
              likes: 0
            },
            {
              id:7,
              title: 'TwennyFive',
              length: '',
              likes: 0
            },
            {
              id:8,
              title: 'On a Lock',
              length: '',
              likes: 0
            },
            {
              id:9,
              title: 'Slip',
              length: '',
              likes: 0
            },
            {
              id:10,
              title: 'When You\'re Ready',
              length: '',
              likes: 0
            },
            {
              id:11,
              title: 'Same Same',
              length: '',
              likes: 0
            },
            {
              id:12,
              title: 'Project Redo',
              length: '',
              likes: 0
            },
            {
              id:13,
              title: 'For Real',
              length: '',
              likes: 0
            },
            {
              id:14,
              title: 'Round & Round',
              length: '',
              likes: 0
            },
            {
              id:15,
              title: 'Easy Bruisily',
              length: '',
              likes: 0
            },
            {
              id:16,
              title: 'Cast in Stone',
              length: '',
              likes: 0
            }
          ]
      },
      { id:101,
        albumName: 'Apple Crumble',
        songs:[
            {
              id:1,
              title: 'Need you',
              length: '',
              likes: 0
            },
            {
              id:2,
              title: 'For The Record',
              length: '',
              likes: 0
            },
            {
              id:3,
              title: 'Since I Saw You There',
              length: '',
              likes: 0
          },
            {
              id:4,
              title: 'That Just Don\'t Sit Right',
              length: '',
              likes: 0},
            {
              id:5,
              title: 'NobodyLikeYou',
              length: '',
              likes: 0},
            {
              id:6,
              title: 'Show Love',
              length: '',
              likes: 0
            },
            {
              id:7,
              title: 'Smile',
              length: '',
              likes: 0
            },
            {
              id:8,
              title: 'Where Did All Your Love Go?',
              length: '',
              likes: 0
            },
            {
              id:9,
              title: 'Make A Move',
              length: '',
              likes: 0
            },
            {
              id:10,
              title: 'Crypto',
              length: '',
              likes: 0
            },
            {
              id:11,
              title: 'Somone New',
              length: '',
              likes: 0
            },
            {
              id:12,
              title: 'Bolney Stage 2',
              length: '',
              likes: 0
            }
      ]
      }
    ]

  };

  handleClick = (songId, albumId) => {
    this.setState(prevState => ({likes: prevState.albums.find(st => st.id === albumId).songs.find(st => st.id === songId).likes++}))
  };


  render() {
    const renderAlbum = this.state.albums.map(st => <div key={st.id}><h3> {st.albumName}</h3><ul> {st.songs.map(item => <div key={item.id} className="song"><li>{item.title}</li><button onClick={() => this.handleClick(item.id, st.id)}>Like</button></div>)} </ul></div>)
    return (
      <>
          <div id="albumSec"> {renderAlbum} </div>
      </>
    );
  }
}
export default Albums;
