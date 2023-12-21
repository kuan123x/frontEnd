<!-- Products.vue -->

<template>
  <div>
    <div v-for="team in teams" :key="team.id" class="team-box">
      <h3>{{ team.team_name }}</h3>
      <p>Description {{ team.description }}</p>
      <p>Trophies {{ team.trophies }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
      {
    "id": 11,
    "team_name": "MDC Seagulls",
    "description": "Only the best is good enough.",
    "trophies": "12",
    "thumbnail": "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/330983659_580210970816585_7314156666787721404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeET1v6wu2muMbPnAah__D5V-K3R4y_BnYP4rdHjL8GdgzuvK2iaGoBmCQ9ciH-zj2wkuyJoI1PBrS650JjoweRG&_nc_ohc=nwvC4wd-WycAX-tyuAW&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfAGl1t6i82xX-f6vjrgghWiT5-MnNqn3sRnOHerXl2oNA&oe=6587483A",
    "created_at": "2023-12-11T09:45:25.000000Z",
    "updated_at": "2023-12-20T03:41:02.000000Z",
    "players": [
      {
        "id": 17,
        "team_id": 11,
        "name": "Franz",
        "ingame_name": "Guiseppe Koelpin III",
        "rank": "Mythic",
        "role": "Exp lane",
        "created_at": "2023-12-11T09:45:26.000000Z",
        "updated_at": "2023-12-11T09:45:26.000000Z"
      }
    ]
  },
  {
    "id": 25,
    "team_name": "HNU Falcons",
    "description": "2nd placer",
    "trophies": "02",
    "thumbnail": "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/330992722_1501178253624848_1585474886782197866_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGUUpcT7zfaGx2zkNNOuOlcVE89NwP94ANUTz03A_3gA4kcBMACoB3CwIhS_NfbkL2hrx0OMnibOg-JhivOr7Wm&_nc_ohc=FIj37JEVe7AAX_Op7-m&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfDXHqQOgK1uckuvwhTw-szvXA_kaom_tjtXdlS5J7RDnA&oe=6587005C",
    "created_at": "2023-12-20T03:41:17.000000Z",
    "updated_at": "2023-12-20T03:41:17.000000Z",
    "players": []
  },
  {
    "id": 21,
    "team_name": "BREN Esports",
    "description": "2x MPL Champion, 1x MSC Champion, 2x Mseries Champion",
    "trophies": "5",
    "thumbnail": "https://cdn.oneesports.gg/cdn-data/2023/02/MLBB_MPL_PH_S11_BrenEsports.webp",
    "created_at": "2023-12-11T10:29:15.000000Z",
    "updated_at": "2023-12-11T10:29:15.000000Z",
    "players": []
  },
  {
    "id": 10,
    "team_name": "University of Bohol",
    "description": "3rd placers",
    "trophies": "3",
    "thumbnail": "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/331343496_881955179780516_2251873987702078772_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFMkCsKdyNo5TfAe2I4rii5FbFcZ_XND98VsVxn9c0P3wNGnU-iRIFn2j_EHr8tLyiZfGc1KMcP65EUJ-RbOTwN&_nc_ohc=swSubS6R9mgAX-j7hlr&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfAYtv_oIIJ9CyThC5jZTxhOLaJH_MPgH5j7yj9TcoZTSA&oe=6586B07D",
    "created_at": "2023-12-11T09:45:25.000000Z",
    "updated_at": "2023-12-11T09:45:25.000000Z",
    "players": []
  },
  {
    "id": 5,
    "team_name": "Crystal E",
    "description": "First round exit",
    "trophies": "0",
    "thumbnail": "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/332120451_712627500532524_1030863086471325589_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFi_eGCdFJqgMNoxOR-xPjzuQygSUPp7pq5DKBJQ-nummSoImYo60AZguAp9jsL7lW-v3kTvbgDqljr8d4z613R&_nc_ohc=IU0vuGqvUSIAX-ptDP4&_nc_oc=AQlECM07QX4oHEdT8NtZOy9yvg81gKTBtz1mFf1lwExwE_QNFhEf7EbMwAiZ2o5DfKU&_nc_ht=scontent.fceb2-2.fna&oh=00_AfCxHiwAAaKRfWiFTHGPtZvYbowQd8E885VuluEj-O3WUg&oe=6587D56F",
    "created_at": "2023-12-11T09:45:25.000000Z",
    "updated_at": "2023-12-11T09:45:25.000000Z",
    "players": [
      {
        "id": 9,
        "team_id": 5,
        "name": "Montana",
        "ingame_name": "Orpha Champlin",
        "rank": "Legend",
        "role": "Gold lane",
        "created_at": "2023-12-11T09:45:26.000000Z",
        "updated_at": "2023-12-11T09:45:26.000000Z"
      }
    ]
  },
  {
    "id": 6,
    "team_name": "ONIC eSports",
    "description": "Gipildi sa AP BREN pag finals",
    "trophies": "1",
    "thumbnail": "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/315087054_1315791685660171_7352527251701524621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeF9ox4Q8p8YfhHuPChbvFpByKap_DO0t1PIpqn8M7S3U6GMeddrLPJt3CyRt8PiZX_Sa2miFNDxVGaecRf9ItIG&_nc_ohc=rubmW1GNVxkAX_WYNTc&_nc_ht=scontent.fceb2-2.fna&oh=00_AfBZTNz7sDAze_wE-TN1Rml9Wg_6AZL9E2oNc1CnthopuQ&oe=658789FE",
    "created_at": "2023-12-11T09:45:25.000000Z",
    "updated_at": "2023-12-11T09:45:25.000000Z",
    "players": [
      {
        "id": 10,
        "team_id": 6,
        "name": "Allan",
        "ingame_name": "Grace Littel",
        "rank": "Mythical Glory",
        "role": "Mid lane",
        "created_at": "2023-12-11T09:45:26.000000Z",
        "updated_at": "2023-12-11T09:45:26.000000Z"
      }
    ]
  },
  {
    "id": 69,
    "team_name": "Omega Empress",
    "description": "Mga bae ni sila",
    "trophies": "2",
    "thumbnail": "https://storage.googleapis.com/mb-mkt-neo-prod-1-uploads/60225_cb06a2af59/60225_cb06a2af59.jpeg",
    "created_at": "2023-12-11T10:29:15.000000Z",
    "updated_at": "2023-12-11T10:29:15.000000Z",
    "players": []
  },
  {
    "id": 70,
    "team_name": "NXP Evos",
    "description": "Sige rag pagwapo mga way galaw",
    "trophies": "0",
    "thumbnail": "https://blogger.googleusercontent.com/img/a/AVvXsEhU15sU-EGpf_01bHb5dyxAkWBdJ2Da2qt0zn-dTO0Q0208kSEQTY_8EerZaDF5CvrM9D4E3s-8jzWIByGM6rVgo2Gn9Hshf8HyfiSFI_VZy9xq6gGSR7FDfwT9soLEs5UeVsjdw0cRTiur-yjrl6dndAS9wOMDITy3CZNkaf5f9bAsjFghFqYHl7bHPw=w640-h360",
    "created_at": "2023-12-11T10:29:15.000000Z",
    "updated_at": "2023-12-11T10:29:15.000000Z",
    "players": []
  }
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styling for the product boxes here */
.team-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
