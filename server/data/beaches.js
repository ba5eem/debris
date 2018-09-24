const beaches = [{ lat: 21.3530895,
  lon: -158.1304156,
  name: 'Kahe Point Beach Park\t' },
{ lat: 21.332684, lon: -158.123113, name: 'Lanikūhonua Beach\t' },
{ lat: 21.3268248,
  lon: -158.122106,
  name: 'Ko Olina Beach Park\t' },
{ lat: 21.3774982,
  lon: -158.1426706,
  name: 'Nānākuli Beach Park\t' },
{ lat: 21.4370675,
  lon: -158.1865922,
  name: 'Lualualei Beach Park\t' },
{ lat: 21.360082,
  lon: -158.1314691,
  name: 'Tracks Beach Park (Hawaiian Electric Beach Park)\t' },
{ lat: 21.4191739,
  lon: -158.1778478,
  name: 'Māʻili Beach Park\t' },
{ lat: 21.3938292,
  lon: -158.1593506,
  name: 'Ulehawa Beach Park\t' },
{ lat: 21.4393464,
  lon: -158.1883223,
  name: 'Pōkaʻī Bay Beach\t' },
{ lat: 21.4599926,
  lon: -158.2070468,
  name: 'Mauna Lahilahi Beach Park\t' },
{ lat: 21.4502595,
  lon: -158.1939403,
  name: 'Waiʻanae Regional Park\t' },
{ lat: 21.6342287, lon: -158.0647356, name: 'Turtle Beach\t' },
{ lat: 21.4763581,
  lon: -158.2203658,
  name: 'Makana Beach Park\t' },
{ lat: 21.5177261,
  lon: -158.2290319,
  name: 'ʻŌhikilolo Beach\t' },
{ lat: 21.4686065, lon: -158.2176126, name: 'Aki\'s Beach\t' },
{ lat: 21.4763581,
  lon: -158.2203658,
  name: 'Mākaha Beach Park\t' },
{ lat: 21.4856905,
  lon: -158.229943,
  name: 'Keaʻau Beach Park\t' },
{ lat: 21.5319042, lon: -158.2294045, name: 'Mākua Beach\t' },
{ lat: 21.5487753, lon: -158.2420384, name: 'Keawaʻula Beach\t' },
{ lat: 21.5744101,
  lon: -158.2799891,
  name: 'Kaʻena Point (Yokohama Bay)\t' }, { lat: 21.643423, lon: -157.9189687, name: 'Laniloa Beach' },
{ lat: 21.5452011,
  lon: -157.8460053,
  name: 'Kalaeʻōʻio Beach Park' },
{ lat: 21.5144922,
  lon: -157.8370963,
  name: 'Kualoa Regional Park' },
{ lat: 21.6327357, lon: -157.9204125, name: 'Pounders Beach' },
{ lat: 21.5110886, lon: -157.8484342, name: 'Secret Island' },
{ lat: 21.6286111, lon: -157.9230556, name: 'Kokololio Beach' },
{ lat: 21.3259486, lon: -157.6828251, name: 'Kaiona Beach Park' },
{ lat: 21.5975, lon: -157.8977778, name: 'Kaluanui Beach' },
{ lat: 21.6709853, lon: -157.938228, name: 'Mālaekahana Beach' },
{ lat: 21.6528887,
  lon: -157.9283273,
  name: 'Hukilau Beach Park' },
{ lat: 21.6121413,
  lon: -157.9112979,
  name: 'Hauʻula Beach Park' },
{ lat: 21.4582034,
  lon: -157.8409573,
  name: 'Kahaluʻu Regional Park' },
{ lat: 21.5572383, lon: -157.8566991, name: 'Makaua Beach Park' },
{ lat: 21.6658333, lon: -157.9255556, name: 'Mokuʻauia Beach' },
{ lat: 21.626431, lon: -157.9438136, name: 'Temple Beach' },
{ lat: 21.576613,
  lon: -157.881444,
  name: 'Punaluʻu Beach Park' },
{ lat: 21.5566967, lon: -157.8534389, name: 'Swanzy Beach Park' },
{ lat: 21.3930533, lon: -157.715435, name: 'Lanikai Beach' },
{ lat: 21.412735, lon: -157.786322, name: 'Kāneʻohe Beach Park' },
{ lat: 21.4407696, lon: -157.8099396, name: 'Heʻeia State Park' },
{ lat: 21.4073336, lon: -157.7487385, name: 'Kalama Beach' },
{ lat: 21.3574924,
  lon: -157.7089521,
  name: 'Bellows Field Beach Park' },
{ lat: 21.311051,
  lon: -157.6601154,
  name: 'Makapuʻu Beach Park' },
{ lat: 21.6320605, lon: -157.9210441, name: 'Lāʻie Beach' },
{ lat: 21.6785362,
  lon: -157.9409986,
  name: 'Kahuku Golf Course Beach' },
{ lat: 21.3975937, lon: -157.7270894, name: 'Kailua Beach Park' },
{ lat: 21.5559903,
  lon: -157.8763274,
  name: 'Ahupuaʻa ʻO Kahana Bay Beach Park' },
{ lat: 21.4433045,
  lon: -157.7489524,
  name: 'Marine Corps Base Hawaiʻi - Kāneʻohe Bay' },
{ lat: 21.4849367,
  lon: -157.8475068,
  name: 'Waiāhole Beach Park' },
{ lat: 21.4593812,
  lon: -157.8344887,
  name: 'Laenani Beach Park' },
{ lat: 21.3216789, lon: -157.6734878, name: 'Kaupō Beach Park' },
{ lat: 21.5452011,
  lon: -157.8460053,
  name: 'Kaʻaʻawa Beach Park' },
{ lat: 21.3321621,
  lon: -157.6956381,
  name: 'Waimānalo Beach Park' },
  { lat: 21.6172053, lon: -158.0873414, name: 'Laniākea Beach' },
{ lat: 21.6132365, lon: -158.0923783, name: 'Papaʻiloa Beach' },
{ lat: 21.6833128,
  lon: -158.0224132,
  name: 'Waialeʻe Beach Park' },
{ lat: 21.6847222, lon: -158.0361111, name: 'Kaunala Beach' },
{ lat: 21.5924646,
  lon: -158.1089043,
  name: 'Haleʻiwa Aliʻi Beach Park' },
{ lat: 21.7051661, lon: -157.9962896, name: 'Kaihalulu Beach' },
{ lat: 21.6237185, lon: -158.0808206, name: 'Kawailoa Beach' },
{ lat: 21.5869221,
  lon: -158.1160983,
  name: 'Kaiaka Bay Beach Park' },
{ lat: 21.6736609, lon: -158.0511417, name: 'Banzai Beach' },
{ lat: 21.6269444,
  lon: -158.0838889,
  name: 'Chun\'s Reef Beach' },
{ lat: 21.5769162,
  lon: -158.1655338,
  name: 'Makaleha Beach Park' },
{ lat: 21.665019, lon: -158.050805, name: 'ʻEhukai Beach Park' },
{ lat: 21.5997667,
  lon: -158.1027674,
  name: 'Haleʻiwa Beach Park' },
{ lat: 21.6525201,
  lon: -158.0619721,
  name: 'Pūpūkea Beach Park' },
{ lat: 21.5818774,
  lon: -158.2074194,
  name: 'Mokulēʻia Army Beach' },
{ lat: 21.6650376, lon: -158.0531989, name: 'The Pipeline' },
{ lat: 21.6973731, lon: -158.0067635, name: 'Kawela Bay Beach' },
{ lat: 21.639814,
  lon: -158.0633629,
  name: 'Waimea Bay Beach Park' },
{ lat: 21.7022589, lon: -157.9999643, name: 'Turtle Bay Beach' },
{ lat: 21.5820619,
  lon: -158.1353164,
  name: 'Puʻuiki Beach Park' },
{ lat: 21.5822816,
  lon: -158.1400477,
  name: 'ʻĀweoweo Beach Park' },
{ lat: 21.581543, lon: -158.1923532, name: 'Mokulēʻia Beach' },
{ lat: 21.674266, lon: -158.042569, name: 'Sunset Beach' },
{ lat: 21.6525201, lon: -158.0619721, name: 'Kē Iki Beach Park' },
{ lat: 21.7050467,
  lon: -157.9975089,
  name: 'Bayview Beach (Kuilima Cove)' },
{ lat: 21.6337041,
  lon: -158.0698133,
  name: 'Leftovers Beach Access Park' },
  { lat: 21.2792765,
  lon: -157.7448327,
  name: 'Kawaikuʻi Beach Park\t' },
{ lat: 21.2909938,
  lon: -157.8572951,
  name: 'Kewalo Basin Park\t' },
{ lat: 21.3056121,
  lon: -158.0301899,
  name: 'Oneʻula Beach Park\t' },
{ lat: 21.3314897,
  lon: -157.9684622,
  name: 'Aloha ʻĀina Park\t' },
{ lat: 21.2547183, lon: -157.7929798, name: 'Kaʻalāwai Beach\t' },
{ lat: 21.299765, lon: -158.0666611, name: 'Nimitz Beach\tK' },
{ lat: 21.2937729,
  lon: -157.8642225,
  name: 'Kakaʻako Waterfront Park (Point Panic Beach Park)\t' },
{ lat: 21.3319238,
  lon: -157.8970574,
  name: 'Keʻehi Lagoon Beach Park\t' },
{ lat: 21.3211111,
  lon: -157.9608333,
  name: 'Fort Kamehameha Beach\t' },
{ lat: 21.2847222, lon: -157.7316667, name: 'Paikō Beach\t' },
{ lat: 21.2763073,
  lon: -157.7602943,
  name: 'Wailupe Beach Park\t' },
{ lat: 21.3856998,
  lon: -157.9547487,
  name: 'Neal S. Blaisdell Park (Pearl Harbor Park)\t' },
{ lat: 21.2799994, lon: -157.8423873, name: 'Gray\'s Beach\t' },
{ lat: 21.2817025,
  lon: -157.6775393,
  name: 'Eternity Beach (Hālona Cove)\t' },
{ lat: 21.3662789,
  lon: -158.0183144,
  name: 'West Loch Shoreline Park\t' },
{ lat: 21.2732231,
  lon: -157.8240979,
  name: 'Kūhiō Beach Park (Waikīkī Beach Center)\t' },
{ lat: 21.2615009,
  lon: -157.711209,
  name: 'Koko Kai Beach Park\t' },
{ lat: 21.2608412,
  lon: -157.8074787,
  name: 'Kuilei Cliffs Beach Park\t' },
{ lat: 21.2803467, lon: -157.738386, name: 'Niu Beach\t' },
{ lat: 21.2922443,
  lon: -157.6612641,
  name: 'Kaloko Beach' },
{ lat: 21.2826776,
  lon: -157.8393088,
  name: 'Duke Paoa Kahanamoku Lagoon\t' },
{ lat: 21.317092,
  lon: -157.9509877,
  name: 'Hickam Harbor Beach\t' },
{ lat: 21.2796438,
  lon: -157.8342508,
  name: 'Fort DeRussy Beach\t' },
{ lat: 21.2565363,
  lon: -157.8150228,
  name: 'Lēʻahi Beach Park\t' },
{ lat: 21.269608,
  lon: -157.777658,
  name: 'Waiʻalae Beach Park\t' },
{ lat: 21.3035275,
  lon: -158.0452282,
  name: 'White Plains Beach\t' },
{ lat: 21.2845109,
  lon: -157.7206191,
  name: 'Kuliʻouʻou Beach Park\t' },
{ lat: 21.3188889, lon: -157.9852778, name: 'Iroquois Beach\t' },
{ lat: 21.2827221,
  lon: -157.9686019,
  name: 'Outrigger Canoe Beach\t' },
{ lat: 21.2904334,
  lon: -157.8520564,
  name: 'Ala Moana Beach Park\t' },
{ lat: 21.2837497,
  lon: -157.7172941,
  name: 'Maunalua Bay Beach Park\t' },
{ lat: 21.2657565,
  lon: -157.822363,
  name: 'Kaimana Beach (Sans Souci Beach)\t' },
{ lat: 21.2706994,
  lon: -157.6971102,
  name: 'Hanauma Bay Beach Park\t' },
{ lat: 21.2662472,
  lon: -157.7121308,
  name: 'Kōkeʻe Beach Park\t' },
{ lat: 21.2691874, lon: -157.7769669, name: 'Kāhala Beach\t' },
{ lat: 21.2793139, lon: -157.7087741, name: 'Portlock Beach\t' },
{ lat: 21.257632,
  lon: -157.817006,
  name: 'Mākālei Beach Park\t' },
{ lat: 21.314394, lon: -157.991777, name: 'ʻEwa Beach Park\t' },
{ lat: 21.3774515,
  lon: -157.9356809,
  name: 'ʻAiea Bay State Recreation Area\t' },
{ lat: 21.2840141,
  lon: -157.6844877,
  name: 'Sandy Beach Park\t' },
{ lat: 21.271847,
  lon: -157.773651,
  name: 'Kāhala Mandarin Oriental Beach (Kāhala Hilton Beach)\t' },
{ lat: 21.2708526,
  lon: -157.825081,
  name: 'Queen\'s Surf Beach Park\t' },
{ lat: 21.2549473,
  lon: -157.807105,
  name: 'Diamond Head Beach Park\t' },
{ lat: 21.301369,
  lon: -157.882124,
  name: 'Sand Island State Beach Park\t' },
{ lat: 21.2967993,
  lon: -158.1040576,
  name: 'Barber\'s Point Beach Park' }];

module.exports = beaches;
