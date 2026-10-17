cat > src/data/guides.js <<'EOF'
// Sample guides. Later these will come from Firestore instead.
export const guides = [
  {
    id: 'elden-ring-full-walkthrough',
    game: 'Elden Ring',
    title: 'Elden Ring Full Written Walkthrough',
    type: 'link',
    author: 'Fextralife',
    url: 'https://eldenring.wiki.fextralife.com/Walkthrough',
    summary: 'Step-by-step route through every area, boss, and NPC questline.',
  },
  {
    id: 'totk-great-sky-island',
    game: 'Zelda: Tears of the Kingdom',
    title: 'Zelda: Tears of the Kingdom Full Walkthrough',
    type: 'video',
    author: 'xspinchx',
    summary: 'The complete main story from start to finish.',
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
EOF
