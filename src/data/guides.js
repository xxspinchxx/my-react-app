// Sample guides. Later these will come from Firestore instead.
export const guides = [
  {
    id: 'elden-ring-margit',
    game: 'Elden Ring',
    title: 'How to beat Margit, the Fell Omen',
    type: 'written',
    author: 'xspinchx',
    summary: 'Best spirit ash, attack timings, and where to stand.',
    sections: [
      {
        heading: 'Prepare before the fight',
        text: 'Upgrade your main weapon and level up a few times in Limgrave first. Rest at the Site of Grace right outside the fog wall.',
        image: '/screenshots/margit-1.png',
      },
      {
        heading: 'Summon help',
        text: 'Use a spirit ash as soon as the fight starts. It pulls Margit away from you so you can get free hits.',
      },
      {
        heading: 'Watch for delayed attacks',
        text: 'Margit holds his swings longer than you expect. Wait for the weapon to actually move before you dodge.',
      },
    ],
  },
  {
    id: 'totk-great-sky-island',
    game: 'Zelda: Tears of the Kingdom',
    title: 'Great Sky Island full walkthrough',
    type: 'video',
    author: 'xspinchx',
    summary: 'Every shrine and chest in the opening area.',
    videoId: 'U8mo25SNznY',
    sections: [
      {
        heading: 'Get your first abilities',
        text: 'Follow the main path to unlock Ultrahand, Fuse, Ascend, and Recall from the island shrines.',
      },
      {
        heading: 'Collect the chests',
        text: 'Use Ascend to reach high ledges and Ultrahand to build bridges between platforms.',
      },
    ],
  },
  {
    id: 'hollow-knight-wiki',
    game: 'Hollow Knight',
    title: 'Community map and boss guide',
    type: 'link',
    author: 'IGN',
    url: 'https://www.ign.com/wikis/hollow-knight',
    summary: 'A thorough wiki covering every area and boss.',
  },
]
