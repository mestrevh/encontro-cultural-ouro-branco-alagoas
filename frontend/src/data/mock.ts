export const artistas = [
  { id: 1, name: 'João das Neves', genre: 'Forró Pé de Serra', time: '20:00', image: 'https://images.unsplash.com/photo-1516280440502-a7f4ebdf42da?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Trio Nordestino', genre: 'Forró', time: '22:00', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Banda Raízes', genre: 'Cultura Popular', time: '19:00', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=400&auto=format&fit=crop' }
];

export const agenda = [
  {
    dia: 'Sexta-feira, 15 de Julho',
    palco: 'Palco Principal',
    shows: [
      { horario: '19:00', artista: 'Banda Raízes' },
      { horario: '20:30', artista: 'João das Neves' }
    ]
  },
  {
    dia: 'Sábado, 16 de Julho',
    palco: 'Palco Principal',
    shows: [
      { horario: '22:00', artista: 'Trio Nordestino' }
    ]
  }
];

export const sobre = {
  historia: "O Encontro Cultural de Ouro Branco é um marco na tradição alagoana, celebrando a música, a dança e a cultura da região nordeste do Brasil com paixão e alegria.",
  edicao: "15ª Edição"
};
