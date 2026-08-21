export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  filename: string;
  original_filename?: string;
  shortcode?: string;
  instagram_url?: string;
  date?: string;
  caption?: string;
  source: 'local' | 'instagram';
  title: string;
}

export interface EdicaoCultural {
  year: number;
  title: string;
  editionName: string;
  description: string;
  coverImage: string;
  items: MediaItem[];
}

export const EDICOES_CULTURAIS: Record<number, EdicaoCultural> = {
  2017: {
    year: 2017,
    title: "Encontro Cultural 2017",
    editionName: "1ª Edição (2017)",
    description: "A primeira edição do Encontro Cultural de Ouro Branco - AL, marcando o início da celebração das tradições e da cultura regional.",
    coverImage: "/media/2017/local_IMG_20170817_160034540.jpg",
    items: [
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170817_160034540.jpg",
            "filename": "local_IMG_20170817_160034540.jpg",
            "original_filename": "IMG_20170817_160034540.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170817_160034540"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170817_160036505.jpg",
            "filename": "local_IMG_20170817_160036505.jpg",
            "original_filename": "IMG_20170817_160036505.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170817_160036505"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170817_160113326.jpg",
            "filename": "local_IMG_20170817_160113326.jpg",
            "original_filename": "IMG_20170817_160113326.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170817_160113326"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170817_160133090.jpg",
            "filename": "local_IMG_20170817_160133090.jpg",
            "original_filename": "IMG_20170817_160133090.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170817_160133090"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170817_160223168.jpg",
            "filename": "local_IMG_20170817_160223168.jpg",
            "original_filename": "IMG_20170817_160223168.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170817_160223168"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170819_170145711.jpg",
            "filename": "local_IMG_20170819_170145711.jpg",
            "original_filename": "IMG_20170819_170145711.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170819_170145711"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170819_170212076.jpg",
            "filename": "local_IMG_20170819_170212076.jpg",
            "original_filename": "IMG_20170819_170212076.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170819_170212076"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170819_170254145.jpg",
            "filename": "local_IMG_20170819_170254145.jpg",
            "original_filename": "IMG_20170819_170254145.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170819_170254145"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170819_171123419.jpg",
            "filename": "local_IMG_20170819_171123419.jpg",
            "original_filename": "IMG_20170819_171123419.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170819_171123419"
      },
      {
            "type": "image",
            "src": "/media/2017/local_IMG_20170819_171128893.jpg",
            "filename": "local_IMG_20170819_171128893.jpg",
            "original_filename": "IMG_20170819_171128893.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto IMG_20170819_171128893"
      },
      {
            "type": "image",
            "src": "/media/2017/local_PicsArt_08-19-10.06.55.jpg",
            "filename": "local_PicsArt_08-19-10.06.55.jpg",
            "original_filename": "PicsArt_08-19-10.06.55.jpg",
            "source": "local",
            "title": "Encontro Cultural 2017 - Foto PicsArt_08-19-10.06.55"
      },
      {
            "type": "image",
            "src": "/media/2017/ig_BweiwrdhyhR.jpg",
            "filename": "ig_BweiwrdhyhR.jpg",
            "shortcode": "BweiwrdhyhR",
            "instagram_url": "https://www.instagram.com/p/BweiwrdhyhR/",
            "date": "2019-04-20 12:24:07",
            "caption": "Família ❤👏 EC 2k19🇧🇷🌵 Ouro Branco Alagoas 🌵",
            "source": "instagram",
            "title": "Encontro Cultural 2017 - Foto BweiwrdhyhR"
      },
      {
            "type": "image",
            "src": "/media/2017/ig_Bswi4tUB2zR.jpg",
            "filename": "ig_Bswi4tUB2zR.jpg",
            "shortcode": "Bswi4tUB2zR",
            "instagram_url": "https://www.instagram.com/p/Bswi4tUB2zR/",
            "date": "2019-01-18 02:05:58",
            "caption": "Turma 2017 🔥⚡",
            "source": "instagram",
            "title": "Encontro Cultural 2017 - Foto Bswi4tUB2zR"
      },
      {
            "type": "image",
            "src": "/media/2017/ig_BswiyE9hreV.jpg",
            "filename": "ig_BswiyE9hreV.jpg",
            "shortcode": "BswiyE9hreV",
            "instagram_url": "https://www.instagram.com/p/BswiyE9hreV/",
            "date": "2019-01-18 02:05:04",
            "caption": "Divulgação KKK\nHora da vergonha 😅",
            "source": "instagram",
            "title": "Encontro Cultural 2017 - Foto BswiyE9hreV"
      },
      {
            "type": "image",
            "src": "/media/2017/ig_Bswijg4hLCL.jpg",
            "filename": "ig_Bswijg4hLCL.jpg",
            "shortcode": "Bswijg4hLCL",
            "instagram_url": "https://www.instagram.com/p/Bswijg4hLCL/",
            "date": "2019-01-18 02:03:05",
            "caption": "1°Encontro Cultural Ouro Branco Alagoas✓ \nO melhor ⚡",
            "source": "instagram",
            "title": "Encontro Cultural 2017 - Foto Bswijg4hLCL"
      },
      {
            "type": "image",
            "src": "/media/2017/ig_BswiTSbBgsZ.jpg",
            "filename": "ig_BswiTSbBgsZ.jpg",
            "shortcode": "BswiTSbBgsZ",
            "instagram_url": "https://www.instagram.com/p/BswiTSbBgsZ/",
            "date": "2019-01-18 02:00:52",
            "caption": "2017 Ano Chave para O Início desta grande História✓\n\nTurma 1°Encontro Cultural 2017✓",
            "source": "instagram",
            "title": "Encontro Cultural 2017 - Foto BswiTSbBgsZ"
      }
]
  },
  2018: {
    year: 2018,
    title: "Encontro Cultural 2018",
    editionName: "2ª Edição (2018)",
    description: "A consolidação do Encontro Cultural com apresentações folclóricas, música e valorização dos artistas locais.",
    coverImage: "/media/2018/local_IMG_20180120_175700_919.jpg",
    items: [
      {
            "type": "image",
            "src": "/media/2018/local_IMG_20180120_175700_919.jpg",
            "filename": "local_IMG_20180120_175700_919.jpg",
            "original_filename": "IMG_20180120_175700_919.jpg",
            "source": "local",
            "title": "Encontro Cultural 2018 - Foto IMG_20180120_175700_919"
      },
      {
            "type": "video",
            "src": "/media/2018/ig_B0gWBBchvwF_video.mp4",
            "filename": "ig_B0gWBBchvwF_video.mp4",
            "shortcode": "B0gWBBchvwF",
            "instagram_url": "https://www.instagram.com/p/B0gWBBchvwF/",
            "date": "2019-07-29 15:23:01",
            "caption": "EC-18 (Lembranças)💥\n@joaoelmir 🇧🇷✅ #1vs1 #2018 #Winner \n2°Encontro Cultural OB 💥👏👏👏♥️",
            "source": "instagram",
            "title": "Encontro Cultural 2018 - Vídeo B0gWBBchvwF"
      },
      {
            "type": "video",
            "src": "/media/2018/ig_B0eZHB0hN1U_video.mp4",
            "filename": "ig_B0eZHB0hN1U_video.mp4",
            "shortcode": "B0eZHB0hN1U",
            "instagram_url": "https://www.instagram.com/p/B0eZHB0hN1U/",
            "date": "2019-07-28 21:10:06",
            "caption": "BATALHAS KIDS 2018🔥\n\n#EC18 #lembrança \n#BboyDenTricks \nVídeos de 2018/2° Encontro Cultural!!!!",
            "source": "instagram",
            "title": "Encontro Cultural 2018 - Vídeo B0eZHB0hN1U"
      },
      {
            "type": "image",
            "src": "/media/2018/ig_Bswk9aohddB.jpg",
            "filename": "ig_Bswk9aohddB.jpg",
            "shortcode": "Bswk9aohddB",
            "instagram_url": "https://www.instagram.com/p/Bswk9aohddB/",
            "date": "2019-01-18 02:24:05",
            "caption": "2°Encontro Cultural 2k18 🔥🔥🔥🔥🔥🔥🔥🔥🔥",
            "source": "instagram",
            "title": "Encontro Cultural 2018 - Foto Bswk9aohddB"
      },
      {
            "type": "image",
            "src": "/media/2018/ig_Bs_f8fZBSez.jpg",
            "filename": "ig_Bs_f8fZBSez.jpg",
            "shortcode": "Bs_f8fZBSez",
            "instagram_url": "https://www.instagram.com/p/Bs_f8fZBSez/",
            "date": "2019-01-23 21:28:53",
            "caption": "Bboys 1vs1 Campeões 2018💪🔥 #winner's #Bboys1vs1 \n2°Encontro Cultural 2018(Lembranças)",
            "source": "instagram",
            "title": "Encontro Cultural 2018 - Foto Bs_f8fZBSez"
      }
]
  },
  2019: {
    year: 2019,
    title: "Encontro Cultural 2019",
    editionName: "3ª Edição (2019)",
    description: "Uma edição vibrante com grande participação popular, cortejos culturais e shows musicais memoráveis.",
    coverImage: "/media/2019/ig_ByfY-owB9oY.jpg",
    items: [
      {
            "type": "video",
            "src": "/media/2019/ig_Byp_W6EBn_O_video.mp4",
            "filename": "ig_Byp_W6EBn_O_video.mp4",
            "shortcode": "Byp_W6EBn_O",
            "instagram_url": "https://www.instagram.com/p/Byp_W6EBn_O/",
            "date": "2019-06-13 16:26:32",
            "caption": "Cypher💥\n\n#3EncontroCultural \n#Bboys #Breaking \nVídeo By Jhonw Oficial 👏💥",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo Byp_W6EBn_O"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_ByjcbN-BIFa_video.mp4",
            "filename": "ig_ByjcbN-BIFa_video.mp4",
            "shortcode": "ByjcbN-BIFa",
            "instagram_url": "https://www.instagram.com/p/ByjcbN-BIFa/",
            "date": "2019-06-11 03:09:59",
            "caption": "#BboyBeat 🌵\n\n#3EncontroCultural \n@bboybeat_eletro_break_crew",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo ByjcbN-BIFa"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_Bym9nZXBvTP_video.mp4",
            "filename": "ig_Bym9nZXBvTP_video.mp4",
            "shortcode": "Bym9nZXBvTP",
            "instagram_url": "https://www.instagram.com/p/Bym9nZXBvTP/",
            "date": "2019-06-12 12:01:16",
            "caption": "#BboyJoedson🔥 \n#AbstractStyle #InhapiAL #3EncontroCultural \n@joedson785gmail.com_ ☝️",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo Bym9nZXBvTP"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_BymH8qVhruM_video.mp4",
            "filename": "ig_BymH8qVhruM_video.mp4",
            "shortcode": "BymH8qVhruM",
            "instagram_url": "https://www.instagram.com/p/BymH8qVhruM/",
            "date": "2019-06-12 10:39:46",
            "caption": "#BboyClif💥\n\n#Session #AracajuSE #3EncontroCultural \n@clifmoura 🔥",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo BymH8qVhruM"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_ByjcNzWh9oK_01.mp4",
            "filename": "ig_ByjcNzWh9oK_01.mp4",
            "shortcode": "ByjcNzWh9oK",
            "instagram_url": "https://www.instagram.com/p/ByjcNzWh9oK/?img_index=2",
            "date": "2019-06-11 03:05:55",
            "caption": "#BboyJefferson🌵\n\n#Recap #3EncontroCultural \n@bboyjefferson12",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Post ByjcNzWh9oK (1)"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_ByjcNzWh9oK_02.mp4",
            "filename": "ig_ByjcNzWh9oK_02.mp4",
            "shortcode": "ByjcNzWh9oK",
            "instagram_url": "https://www.instagram.com/p/ByjcNzWh9oK/?img_index=2",
            "date": "2019-06-11 03:05:55",
            "caption": "#BboyJefferson🌵\n\n#Recap #3EncontroCultural \n@bboyjefferson12",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Post ByjcNzWh9oK (2)"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_ByjXDA2hwo0_01.mp4",
            "filename": "ig_ByjXDA2hwo0_01.mp4",
            "shortcode": "ByjXDA2hwo0",
            "instagram_url": "https://www.instagram.com/p/ByjXDA2hwo0/?img_index=1",
            "date": "2019-06-11 02:20:46",
            "caption": "#BboyCiel🌵\n\n#Recap #3EncontroCultural 🔥🔥🔥🔥 @bboy_ciel ☝️❕",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Post ByjXDA2hwo0 (1)"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_ByjXDA2hwo0_02.mp4",
            "filename": "ig_ByjXDA2hwo0_02.mp4",
            "shortcode": "ByjXDA2hwo0",
            "instagram_url": "https://www.instagram.com/p/ByjXDA2hwo0/?img_index=1",
            "date": "2019-06-11 02:20:46",
            "caption": "#BboyCiel🌵\n\n#Recap #3EncontroCultural 🔥🔥🔥🔥 @bboy_ciel ☝️❕",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Post ByjXDA2hwo0 (2)"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_ByjSdWnhcmU_video.mp4",
            "filename": "ig_ByjSdWnhcmU_video.mp4",
            "shortcode": "ByjSdWnhcmU",
            "instagram_url": "https://www.instagram.com/p/ByjSdWnhcmU/",
            "date": "2019-06-11 01:45:26",
            "caption": "#BboyCaranguejo 🔥🌵 #Recap #Vib \n@mestrevh ☝️",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo ByjSdWnhcmU"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_BygCQbyBNKt_video.mp4",
            "filename": "ig_BygCQbyBNKt_video.mp4",
            "shortcode": "BygCQbyBNKt",
            "instagram_url": "https://www.instagram.com/p/BygCQbyBNKt/",
            "date": "2019-06-09 19:22:24",
            "caption": "Aquele Escovão Pelo Chão da Battle kkkk\n\n@luis_break_foster 💥\n\nEdição by JRproductions 🌵",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo BygCQbyBNKt"
      },
      {
            "type": "image",
            "src": "/media/2019/ig_ByfY-owB9oY.jpg",
            "filename": "ig_ByfY-owB9oY.jpg",
            "shortcode": "ByfY-owB9oY",
            "instagram_url": "https://www.instagram.com/p/ByfY-owB9oY/",
            "date": "2019-06-09 13:20:41",
            "caption": "Nordeste ECOB💥\n\n#Logo #ByJRproductions",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Foto ByfY-owB9oY"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_Bxi5k4Uhbch_video.mp4",
            "filename": "ig_Bxi5k4Uhbch_video.mp4",
            "shortcode": "Bxi5k4Uhbch",
            "instagram_url": "https://www.instagram.com/p/Bxi5k4Uhbch/",
            "date": "2019-05-17 01:49:16",
            "caption": "React!!!!💥👏🇧🇷 @bboyjuniorgs_official \n3°Encontro Cultural 2019 💥\n\n#Bboyworld #Bboying #PowerStyle #StyleMove",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo Bxi5k4Uhbch"
      },
      {
            "type": "image",
            "src": "/media/2019/ig_BxTB3wRB0NF.jpg",
            "filename": "ig_BxTB3wRB0NF.jpg",
            "shortcode": "BxTB3wRB0NF",
            "instagram_url": "https://www.instagram.com/p/BxTB3wRB0NF/",
            "date": "2019-05-10 21:36:29",
            "caption": "Tbt❤️💥😉📸 #OuroBrancoAL",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Foto BxTB3wRB0NF"
      },
      {
            "type": "video",
            "src": "/media/2019/ig_BwPtXP0hJ2l_video.mp4",
            "filename": "ig_BwPtXP0hJ2l_video.mp4",
            "shortcode": "BwPtXP0hJ2l",
            "instagram_url": "https://www.instagram.com/p/BwPtXP0hJ2l/",
            "date": "2019-04-14 18:09:13",
            "caption": "Batalhas 2vs2 2019🌵👏🇧🇷 #BboyDino #Chaverico \n#EC2019\n\n@ailon_silva  @luis_break_foster",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Vídeo BwPtXP0hJ2l"
      },
      {
            "type": "image",
            "src": "/media/2019/ig_Btd5ZYsh5Ay.jpg",
            "filename": "ig_Btd5ZYsh5Ay.jpg",
            "shortcode": "Btd5ZYsh5Ay",
            "instagram_url": "https://www.instagram.com/p/Btd5ZYsh5Ay/",
            "date": "2019-02-04 16:48:30",
            "caption": "Bboy Beat and Bboy Junior Gs\n3°Encontro Cultural 2019🔥👏",
            "source": "instagram",
            "title": "Encontro Cultural 2019 - Foto Btd5ZYsh5Ay"
      }
]
  },
  2020: {
    year: 2020,
    title: "Encontro Cultural 2020",
    editionName: "4ª Edição (2020)",
    description: "Registros e memórias da celebração cultural que une toda a comunidade ourobranquense.",
    coverImage: "/media/2020/local_20200104_212806.jpg",
    items: [
      {
            "type": "image",
            "src": "/media/2020/local_20200104_212806.jpg",
            "filename": "local_20200104_212806.jpg",
            "original_filename": "20200104_212806.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200104_212806"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200104_212814.jpg",
            "filename": "local_20200104_212814.jpg",
            "original_filename": "20200104_212814.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200104_212814"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200104_212815.jpg",
            "filename": "local_20200104_212815.jpg",
            "original_filename": "20200104_212815.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200104_212815"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200104_213125.jpg",
            "filename": "local_20200104_213125.jpg",
            "original_filename": "20200104_213125.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200104_213125"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200104_213126.jpg",
            "filename": "local_20200104_213126.jpg",
            "original_filename": "20200104_213126.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200104_213126"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200104_213128.jpg",
            "filename": "local_20200104_213128.jpg",
            "original_filename": "20200104_213128.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200104_213128"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200105_092804.jpg",
            "filename": "local_20200105_092804.jpg",
            "original_filename": "20200105_092804.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200105_092804"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200105_092827.jpg",
            "filename": "local_20200105_092827.jpg",
            "original_filename": "20200105_092827.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200105_092827"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200105_092829.jpg",
            "filename": "local_20200105_092829.jpg",
            "original_filename": "20200105_092829.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200105_092829"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200105_092838.jpg",
            "filename": "local_20200105_092838.jpg",
            "original_filename": "20200105_092838.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200105_092838"
      },
      {
            "type": "image",
            "src": "/media/2020/local_20200105_092840.jpg",
            "filename": "local_20200105_092840.jpg",
            "original_filename": "20200105_092840.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto 20200105_092840"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20191225-WA0004.jpg",
            "filename": "local_IMG-20191225-WA0004.jpg",
            "original_filename": "IMG-20191225-WA0004.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20191225-WA0004"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20191225-WA0005.jpg",
            "filename": "local_IMG-20191225-WA0005.jpg",
            "original_filename": "IMG-20191225-WA0005.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20191225-WA0005"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20191225-WA0006.jpg",
            "filename": "local_IMG-20191225-WA0006.jpg",
            "original_filename": "IMG-20191225-WA0006.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20191225-WA0006"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20191225-WA0007.jpg",
            "filename": "local_IMG-20191225-WA0007.jpg",
            "original_filename": "IMG-20191225-WA0007.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20191225-WA0007"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20191225-WA0008.jpg",
            "filename": "local_IMG-20191225-WA0008.jpg",
            "original_filename": "IMG-20191225-WA0008.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20191225-WA0008"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20200101-WA0045.jpeg",
            "filename": "local_IMG-20200101-WA0045.jpeg",
            "original_filename": "IMG-20200101-WA0045.jpeg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20200101-WA0045"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG-20200105-WA0007.jpg",
            "filename": "local_IMG-20200105-WA0007.jpg",
            "original_filename": "IMG-20200105-WA0007.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG-20200105-WA0007"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG_20200105_084359_357.jpg",
            "filename": "local_IMG_20200105_084359_357.jpg",
            "original_filename": "IMG_20200105_084359_357.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG_20200105_084359_357"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG_20200105_084908_858.jpg",
            "filename": "local_IMG_20200105_084908_858.jpg",
            "original_filename": "IMG_20200105_084908_858.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG_20200105_084908_858"
      },
      {
            "type": "image",
            "src": "/media/2020/local_IMG_20200105_093431_897.jpg",
            "filename": "local_IMG_20200105_093431_897.jpg",
            "original_filename": "IMG_20200105_093431_897.jpg",
            "source": "local",
            "title": "Encontro Cultural 2020 - Foto IMG_20200105_093431_897"
      }
]
  },
};

export const getAllEdicoes = (): EdicaoCultural[] => {
  return Object.values(EDICOES_CULTURAIS).sort((a, b) => b.year - a.year);
};

export const getEdicaoByYear = (year: number): EdicaoCultural | undefined => {
  return EDICOES_CULTURAIS[year];
};

export const getAllMedia = (): MediaItem[] => {
  return Object.values(EDICOES_CULTURAIS).flatMap(e => e.items);
};
