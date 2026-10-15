// Catalogo esercizi Muay Thai — generato, 523 esercizi in 10 categorie.

export type CategoryId = "forza-esplosiva" | "forza-massimale" | "forza-resistente" | "velocita" | "resistenza" | "tecnica" | "mobilita" | "core" | "agilita" | "clinch";

export interface Category {
  id: CategoryId;
  label: string;
  /** Gruppo di appartenenza, es. "Forza" per forza esplosiva / massimale / resistente. */
  group?: string;
  description: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  equipment?: string;
}

export const categories: Category[] = [
  {
    "id": "forza-esplosiva",
    "label": "Forza esplosiva",
    "group": "Forza",
    "description": "Potenza e reattività per calci, pugni, ginocchiate e uscite dal clinch."
  },
  {
    "id": "forza-massimale",
    "label": "Forza massimale",
    "group": "Forza",
    "description": "Carichi alti e poche ripetizioni per costruire la base di forza."
  },
  {
    "id": "forza-resistente",
    "label": "Forza resistente",
    "group": "Forza",
    "description": "Forza mantenuta nel tempo, per reggere 5 riprese di lavoro intenso."
  },
  {
    "id": "velocita",
    "label": "Velocità",
    "description": "Rapidità di esecuzione, reazione e combinazioni veloci."
  },
  {
    "id": "resistenza",
    "label": "Resistenza",
    "description": "Condizionamento aerobico e anaerobico, lavoro a riprese."
  },
  {
    "id": "tecnica",
    "label": "Tecnica",
    "description": "Colpi, combinazioni, difese e contrattacchi della Muay Thai."
  },
  {
    "id": "mobilita",
    "label": "Mobilità",
    "description": "Mobilità articolare e flessibilità per anche, colonna e spalle."
  },
  {
    "id": "core",
    "label": "Core",
    "description": "Stabilità del tronco e resistenza ai colpi al corpo."
  },
  {
    "id": "agilita",
    "label": "Agilità e footwork",
    "description": "Gioco di gambe, coordinazione, cambi di direzione e angoli."
  },
  {
    "id": "clinch",
    "label": "Clinch",
    "description": "Prese, controllo, sbilanciamenti e ginocchiate nel clinch."
  }
];

export const exercises: Exercise[] = [
  {
    "id": "forza-esplosiva--squat-jump",
    "name": "Squat jump",
    "category": "forza-esplosiva",
    "description": "Da mezzo squat, salto verticale massimale e atterraggio morbido.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--box-jump",
    "name": "Box jump",
    "category": "forza-esplosiva",
    "description": "Salto a piedi pari sul box, atterraggio stabile e discesa controllata.",
    "equipment": "Box"
  },
  {
    "id": "forza-esplosiva--salto-in-lungo-da-fermo",
    "name": "Salto in lungo da fermo",
    "category": "forza-esplosiva",
    "description": "Salto orizzontale a piedi pari con slancio delle braccia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--salto-in-lungo-monopodalico",
    "name": "Salto in lungo monopodalico",
    "category": "forza-esplosiva",
    "description": "Salto in avanti su una gamba con atterraggio sulla stessa.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--salti-laterali-sulla-panca",
    "name": "Salti laterali sulla panca",
    "category": "forza-esplosiva",
    "description": "Salti laterali rapidi a piedi pari oltre una panca bassa.",
    "equipment": "Panca"
  },
  {
    "id": "forza-esplosiva--depth-jump",
    "name": "Depth jump",
    "category": "forza-esplosiva",
    "description": "Scendere da un box e rimbalzare subito in un salto verticale.",
    "equipment": "Box"
  },
  {
    "id": "forza-esplosiva--tuck-jump",
    "name": "Tuck jump",
    "category": "forza-esplosiva",
    "description": "Salto verticale portando le ginocchia al petto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--skater-jump",
    "name": "Skater jump",
    "category": "forza-esplosiva",
    "description": "Balzi laterali da una gamba all'altra con stabilizzazione.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--bounding",
    "name": "Bounding",
    "category": "forza-esplosiva",
    "description": "Balzi alternati a lunghi passi, massima spinta da terra.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--affondi-saltati",
    "name": "Affondi saltati",
    "category": "forza-esplosiva",
    "description": "Affondi con cambio gamba in volo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--salti-in-guardia-sul-posto",
    "name": "Salti in guardia sul posto",
    "category": "forza-esplosiva",
    "description": "Saltelli esplosivi mantenendo la posizione di guardia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-al-petto",
    "name": "Lancio palla medica al petto",
    "category": "forza-esplosiva",
    "description": "Spinta esplosiva della palla dal petto contro il muro o al compagno.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-rotazionale",
    "name": "Lancio palla medica rotazionale",
    "category": "forza-esplosiva",
    "description": "Lancio laterale contro il muro ruotando anca e spalle come in un gancio.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--slam-palla-medica",
    "name": "Slam palla medica",
    "category": "forza-esplosiva",
    "description": "Sollevare la palla sopra la testa e schiacciarla a terra con forza.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-da-diretto",
    "name": "Lancio palla medica da diretto",
    "category": "forza-esplosiva",
    "description": "Lancio con una mano imitando il diretto posteriore.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-sopra-la-testa-all-indietro",
    "name": "Lancio palla medica sopra la testa all'indietro",
    "category": "forza-esplosiva",
    "description": "Da mezzo squat, lancio esplosivo della palla all'indietro.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--piegamenti-esplosivi",
    "name": "Piegamenti esplosivi",
    "category": "forza-esplosiva",
    "description": "Piegamento con stacco delle mani da terra.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--piegamenti-con-battuta-di-mani",
    "name": "Piegamenti con battuta di mani",
    "category": "forza-esplosiva",
    "description": "Piegamento esplosivo con battito delle mani in volo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--piegamenti-sfalsati-esplosivi",
    "name": "Piegamenti sfalsati esplosivi",
    "category": "forza-esplosiva",
    "description": "Piegamento esplosivo cambiando la mano su un rialzo.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--kettlebell-swing",
    "name": "Kettlebell swing",
    "category": "forza-esplosiva",
    "description": "Slancio della kettlebell con estensione esplosiva dell'anca.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-esplosiva--kettlebell-swing-a-un-braccio",
    "name": "Kettlebell swing a un braccio",
    "category": "forza-esplosiva",
    "description": "Swing con una mano, controllo della rotazione del tronco.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-esplosiva--power-clean",
    "name": "Power clean",
    "category": "forza-esplosiva",
    "description": "Girata al petto dal pavimento con estensione esplosiva.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-esplosiva--hang-clean",
    "name": "Hang clean",
    "category": "forza-esplosiva",
    "description": "Girata al petto partendo dalle ginocchia.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-esplosiva--push-press",
    "name": "Push press",
    "category": "forza-esplosiva",
    "description": "Spinta sopra la testa aiutata da un piccolo piegamento delle gambe.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-esplosiva--jump-squat-con-carico-leggero",
    "name": "Jump squat con carico leggero",
    "category": "forza-esplosiva",
    "description": "Squat jump con bilanciere o manubri leggeri.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-esplosiva--snatch-con-manubrio",
    "name": "Snatch con manubrio",
    "category": "forza-esplosiva",
    "description": "Strappo con un manubrio dal pavimento a braccio teso sopra la testa.",
    "equipment": "Manubrio"
  },
  {
    "id": "forza-esplosiva--landmine-press-rotazionale",
    "name": "Landmine press rotazionale",
    "category": "forza-esplosiva",
    "description": "Spinta del bilanciere ancorato ruotando il piede come nel diretto.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-esplosiva--landmine-rotazioni-esplosive",
    "name": "Landmine rotazioni esplosive",
    "category": "forza-esplosiva",
    "description": "Rotazioni rapide del bilanciere ancorato da un fianco all'altro.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-esplosiva--spinte-con-elastico-da-diretto",
    "name": "Spinte con elastico da diretto",
    "category": "forza-esplosiva",
    "description": "Diretti esplosivi contro la resistenza di un elastico.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-esplosiva--calci-frontali-con-elastico",
    "name": "Calci frontali con elastico",
    "category": "forza-esplosiva",
    "description": "Teep esplosivi con elastico alla caviglia.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-esplosiva--ginocchiate-con-elastico",
    "name": "Ginocchiate con elastico",
    "category": "forza-esplosiva",
    "description": "Ginocchiate esplosive contro la resistenza dell'elastico.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-esplosiva--calci-circolari-esplosivi-al-sacco",
    "name": "Calci circolari esplosivi al sacco",
    "category": "forza-esplosiva",
    "description": "Serie brevi di calci al massimo della potenza, recupero completo.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--ginocchiate-esplosive-al-sacco",
    "name": "Ginocchiate esplosive al sacco",
    "category": "forza-esplosiva",
    "description": "Ginocchiate singole al massimo della potenza con richiamo rapido.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--diretti-esplosivi-al-sacco",
    "name": "Diretti esplosivi al sacco",
    "category": "forza-esplosiva",
    "description": "Diretti singoli alla massima potenza, piede e anca in rotazione.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--spinta-della-slitta",
    "name": "Spinta della slitta",
    "category": "forza-esplosiva",
    "description": "Spinta della slitta su brevi distanze alla massima velocità.",
    "equipment": "Slitta"
  },
  {
    "id": "forza-esplosiva--sprint-in-salita-brevi",
    "name": "Sprint in salita brevi",
    "category": "forza-esplosiva",
    "description": "Sprint di 10-15 metri in salita con recupero completo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--partenze-da-terra",
    "name": "Partenze da terra",
    "category": "forza-esplosiva",
    "description": "Da sdraiato, alzarsi e scattare per 10 metri.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--salti-alla-corda-doppi",
    "name": "Salti alla corda doppi",
    "category": "forza-esplosiva",
    "description": "Salti con doppio passaggio della corda.",
    "equipment": "Corda"
  },
  {
    "id": "forza-esplosiva--salti-con-ostacoli-bassi",
    "name": "Salti con ostacoli bassi",
    "category": "forza-esplosiva",
    "description": "Salti consecutivi a piedi pari oltre ostacoli bassi.",
    "equipment": "Ostacoli"
  },
  {
    "id": "forza-esplosiva--calci-saltati-jumping-kick",
    "name": "Calci saltati (jumping kick)",
    "category": "forza-esplosiva",
    "description": "Calcio circolare con salto, tecnica e potenza.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--ginocchiata-volante",
    "name": "Ginocchiata volante",
    "category": "forza-esplosiva",
    "description": "Ginocchiata saltata al sacco con slancio delle braccia.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--gomitata-saltata",
    "name": "Gomitata saltata",
    "category": "forza-esplosiva",
    "description": "Gomitata dall'alto al sacco con salto.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--superman-punch",
    "name": "Superman punch",
    "category": "forza-esplosiva",
    "description": "Finta di calcio e diretto saltato al sacco.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-esplosiva--cambio-guardia-saltato",
    "name": "Cambio guardia saltato",
    "category": "forza-esplosiva",
    "description": "Salti esplosivi con cambio guardia in volo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--salto-verticale-su-una-gamba",
    "name": "Salto verticale su una gamba",
    "category": "forza-esplosiva",
    "description": "Salto verticale massimale su una gamba, atterraggio controllato.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--burpee-con-salto-in-alto",
    "name": "Burpee con salto in alto",
    "category": "forza-esplosiva",
    "description": "Burpee chiuso con salto verticale massimale.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-esplosiva--battle-rope-slam",
    "name": "Battle rope slam",
    "category": "forza-esplosiva",
    "description": "Onde verticali con la corda pesante al massimo della forza.",
    "equipment": "Battle rope"
  },
  {
    "id": "forza-esplosiva--lancio-laterale-da-ginocchio",
    "name": "Lancio laterale da ginocchio",
    "category": "forza-esplosiva",
    "description": "In ginocchio, lancio rotazionale della palla medica contro il muro.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--spinte-di-palla-medica-in-affondo",
    "name": "Spinte di palla medica in affondo",
    "category": "forza-esplosiva",
    "description": "In affondo, lancio dal petto con trasferimento del peso in avanti.",
    "equipment": "Palla medica"
  },
  {
    "id": "forza-esplosiva--trap-bar-jump",
    "name": "Trap bar jump",
    "category": "forza-esplosiva",
    "description": "Salto con trap bar caricata leggera.",
    "equipment": "Trap bar"
  },
  {
    "id": "forza-esplosiva--salti-sul-gradino-a-una-gamba",
    "name": "Salti sul gradino a una gamba",
    "category": "forza-esplosiva",
    "description": "Salti ripetuti su un gradino basso con una gamba.",
    "equipment": "Gradino"
  },
  {
    "id": "forza-esplosiva--calcio-laterale-con-elastico",
    "name": "Calcio laterale con elastico",
    "category": "forza-esplosiva",
    "description": "Calci di spinta laterali contro la resistenza dell'elastico.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-massimale--back-squat",
    "name": "Back squat",
    "category": "forza-massimale",
    "description": "Squat con bilanciere sulla schiena, 3-5 ripetizioni pesanti.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--front-squat",
    "name": "Front squat",
    "category": "forza-massimale",
    "description": "Squat con bilanciere sulle spalle anteriori, busto eretto.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--stacco-da-terra",
    "name": "Stacco da terra",
    "category": "forza-massimale",
    "description": "Stacco classico con bilanciere, schiena neutra.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--stacco-sumo",
    "name": "Stacco sumo",
    "category": "forza-massimale",
    "description": "Stacco a gambe larghe, forte richiamo di adduttori e glutei.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--stacco-rumeno",
    "name": "Stacco rumeno",
    "category": "forza-massimale",
    "description": "Stacco a gambe semi-tese per femorali e glutei.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--stacco-con-trap-bar",
    "name": "Stacco con trap bar",
    "category": "forza-massimale",
    "description": "Stacco con trap bar, più sicuro per la schiena.",
    "equipment": "Trap bar"
  },
  {
    "id": "forza-massimale--panca-piana",
    "name": "Panca piana",
    "category": "forza-massimale",
    "description": "Distensione su panca con bilanciere.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--panca-inclinata",
    "name": "Panca inclinata",
    "category": "forza-massimale",
    "description": "Distensione su panca inclinata per petto alto e spalle.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--panca-con-manubri",
    "name": "Panca con manubri",
    "category": "forza-massimale",
    "description": "Distensione su panca con manubri pesanti.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-massimale--military-press",
    "name": "Military press",
    "category": "forza-massimale",
    "description": "Spinta del bilanciere sopra la testa in piedi.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--distensioni-con-manubri-in-piedi",
    "name": "Distensioni con manubri in piedi",
    "category": "forza-massimale",
    "description": "Spinta sopra la testa con manubri pesanti.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-massimale--trazioni-zavorrate",
    "name": "Trazioni zavorrate",
    "category": "forza-massimale",
    "description": "Trazioni alla sbarra con peso aggiuntivo.",
    "equipment": "Sbarra"
  },
  {
    "id": "forza-massimale--trazioni-presa-neutra",
    "name": "Trazioni presa neutra",
    "category": "forza-massimale",
    "description": "Trazioni con presa neutra, lente e pesanti.",
    "equipment": "Sbarra"
  },
  {
    "id": "forza-massimale--rematore-con-bilanciere",
    "name": "Rematore con bilanciere",
    "category": "forza-massimale",
    "description": "Busto flesso, tirata del bilanciere all'ombelico.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--rematore-con-manubrio",
    "name": "Rematore con manubrio",
    "category": "forza-massimale",
    "description": "Tirata pesante con un braccio, appoggio su panca.",
    "equipment": "Manubrio"
  },
  {
    "id": "forza-massimale--pendlay-row",
    "name": "Pendlay row",
    "category": "forza-massimale",
    "description": "Rematore esplosivo da terra a ogni ripetizione.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--dip-zavorrati",
    "name": "Dip zavorrati",
    "category": "forza-massimale",
    "description": "Piegamenti alle parallele con zavorra.",
    "equipment": "Parallele"
  },
  {
    "id": "forza-massimale--hip-thrust",
    "name": "Hip thrust",
    "category": "forza-massimale",
    "description": "Spinta dell'anca con bilanciere, schiena appoggiata alla panca.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--affondi-bulgari",
    "name": "Affondi bulgari",
    "category": "forza-massimale",
    "description": "Squat a una gamba con piede posteriore su panca.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-massimale--affondi-con-bilanciere",
    "name": "Affondi con bilanciere",
    "category": "forza-massimale",
    "description": "Affondi in camminata o sul posto con bilanciere.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--step-up-pesante",
    "name": "Step-up pesante",
    "category": "forza-massimale",
    "description": "Salita su box alto con manubri o bilanciere.",
    "equipment": "Box"
  },
  {
    "id": "forza-massimale--pistol-squat-zavorrato",
    "name": "Pistol squat zavorrato",
    "category": "forza-massimale",
    "description": "Squat su una gamba con peso leggero tenuto davanti.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-massimale--squat-con-pausa",
    "name": "Squat con pausa",
    "category": "forza-massimale",
    "description": "Squat con pausa di 2 secondi in basso.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--box-squat",
    "name": "Box squat",
    "category": "forza-massimale",
    "description": "Squat seduti su box, poi spinta esplosiva.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--good-morning",
    "name": "Good morning",
    "category": "forza-massimale",
    "description": "Flessione del busto con bilanciere sulle spalle.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--floor-press",
    "name": "Floor press",
    "category": "forza-massimale",
    "description": "Distensione da terra con bilanciere, lavoro sul blocco del colpo.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--close-grip-bench",
    "name": "Close grip bench",
    "category": "forza-massimale",
    "description": "Panca presa stretta per tricipiti.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--farmer-walk-pesante",
    "name": "Farmer walk pesante",
    "category": "forza-massimale",
    "description": "Camminata con carichi pesanti nelle mani.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-massimale--suitcase-carry",
    "name": "Suitcase carry",
    "category": "forza-massimale",
    "description": "Camminata con un solo carico, tronco dritto.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-massimale--turkish-get-up-pesante",
    "name": "Turkish get-up pesante",
    "category": "forza-massimale",
    "description": "Alzata turca con kettlebell pesante, lenta e controllata.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-massimale--zercher-squat",
    "name": "Zercher squat",
    "category": "forza-massimale",
    "description": "Squat con bilanciere nell'incavo dei gomiti, utile per il clinch.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--zercher-carry",
    "name": "Zercher carry",
    "category": "forza-massimale",
    "description": "Camminata con bilanciere nell'incavo dei gomiti.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--stacco-su-una-gamba",
    "name": "Stacco su una gamba",
    "category": "forza-massimale",
    "description": "Stacco rumeno su una gamba con kettlebell.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-massimale--nordic-curl",
    "name": "Nordic curl",
    "category": "forza-massimale",
    "description": "Discesa controllata del busto con caviglie bloccate per femorali.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-massimale--calf-raise-con-bilanciere",
    "name": "Calf raise con bilanciere",
    "category": "forza-massimale",
    "description": "Sollevamento sulle punte con carico, per caviglie e spinta.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--shrug-con-bilanciere",
    "name": "Shrug con bilanciere",
    "category": "forza-massimale",
    "description": "Scrollate di spalle pesanti per trapezi e collo.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--ponte-per-il-collo",
    "name": "Ponte per il collo",
    "category": "forza-massimale",
    "description": "Rinforzo del collo in ponte, con cautela e progressione.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-massimale--rinforzo-collo-con-fascia",
    "name": "Rinforzo collo con fascia",
    "category": "forza-massimale",
    "description": "Flessioni ed estensioni del collo con fascia zavorrata.",
    "equipment": "Fascia collo"
  },
  {
    "id": "forza-massimale--pallof-press-pesante",
    "name": "Pallof press pesante",
    "category": "forza-massimale",
    "description": "Resistenza alla rotazione con cavo o elastico pesante.",
    "equipment": "Cavo"
  },
  {
    "id": "forza-massimale--isometria-al-rack-squat",
    "name": "Isometria al rack (squat)",
    "category": "forza-massimale",
    "description": "Spinta isometrica massimale contro le sicure del rack.",
    "equipment": "Rack"
  },
  {
    "id": "forza-massimale--isometria-al-rack-stacco",
    "name": "Isometria al rack (stacco)",
    "category": "forza-massimale",
    "description": "Tirata isometrica massimale dal blocco.",
    "equipment": "Rack"
  },
  {
    "id": "forza-massimale--spinta-isometrica-al-muro",
    "name": "Spinta isometrica al muro",
    "category": "forza-massimale",
    "description": "Spinta massimale contro il muro in posizione di diretto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-massimale--wall-sit-zavorrato",
    "name": "Wall sit zavorrato",
    "category": "forza-massimale",
    "description": "Posizione seduta al muro con peso sulle cosce.",
    "equipment": "Disco"
  },
  {
    "id": "forza-massimale--trazioni-lente-in-eccentrica",
    "name": "Trazioni lente in eccentrica",
    "category": "forza-massimale",
    "description": "Discesa di 5 secondi dalla sbarra, zavorrata.",
    "equipment": "Sbarra"
  },
  {
    "id": "forza-massimale--croci-ai-cavi-pesanti",
    "name": "Croci ai cavi pesanti",
    "category": "forza-massimale",
    "description": "Adduzione del braccio al cavo per la catena del gancio.",
    "equipment": "Cavo"
  },
  {
    "id": "forza-massimale--lat-machine-pesante",
    "name": "Lat machine pesante",
    "category": "forza-massimale",
    "description": "Tirata alla lat machine con carico alto.",
    "equipment": "Macchina"
  },
  {
    "id": "forza-massimale--leg-press",
    "name": "Leg press",
    "category": "forza-massimale",
    "description": "Spinta delle gambe con carico alto.",
    "equipment": "Macchina"
  },
  {
    "id": "forza-massimale--hack-squat",
    "name": "Hack squat",
    "category": "forza-massimale",
    "description": "Squat alla macchina con schiena appoggiata.",
    "equipment": "Macchina"
  },
  {
    "id": "forza-massimale--adduttori-con-cavo",
    "name": "Adduttori con cavo",
    "category": "forza-massimale",
    "description": "Adduzione dell'anca al cavo, importante per il clinch e i calci.",
    "equipment": "Cavo"
  },
  {
    "id": "forza-massimale--abduttori-con-cavo",
    "name": "Abduttori con cavo",
    "category": "forza-massimale",
    "description": "Abduzione dell'anca al cavo per stabilità della gamba d'appoggio.",
    "equipment": "Cavo"
  },
  {
    "id": "forza-massimale--copenhagen-plank-zavorrato",
    "name": "Copenhagen plank zavorrato",
    "category": "forza-massimale",
    "description": "Plank laterale con gamba superiore su panca e peso.",
    "equipment": "Panca"
  },
  {
    "id": "forza-massimale--curl-con-bilanciere",
    "name": "Curl con bilanciere",
    "category": "forza-massimale",
    "description": "Flessione dei gomiti pesante per la presa e il clinch.",
    "equipment": "Bilanciere"
  },
  {
    "id": "forza-massimale--presa-con-pinze-o-asciugamano",
    "name": "Presa con pinze o asciugamano",
    "category": "forza-massimale",
    "description": "Sospensione alla sbarra con asciugamani per la forza della presa.",
    "equipment": "Sbarra"
  },
  {
    "id": "forza-resistente--piegamenti-a-ripresa",
    "name": "Piegamenti a ripresa",
    "category": "forza-resistente",
    "description": "3 minuti di piegamenti con pause brevi, come una ripresa.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--squat-a-corpo-libero-a-tempo",
    "name": "Squat a corpo libero a tempo",
    "category": "forza-resistente",
    "description": "Squat continui per 2-3 minuti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--affondi-in-camminata-lunghi",
    "name": "Affondi in camminata lunghi",
    "category": "forza-resistente",
    "description": "Affondi continui per 30-50 metri.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--burpee-a-ripresa",
    "name": "Burpee a ripresa",
    "category": "forza-resistente",
    "description": "Burpee per 3 minuti a ritmo costante.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--trazioni-a-scala",
    "name": "Trazioni a scala",
    "category": "forza-resistente",
    "description": "Serie crescenti e decrescenti di trazioni con recupero minimo.",
    "equipment": "Sbarra"
  },
  {
    "id": "forza-resistente--dip-a-corpo-libero-ad-alte-ripetizioni",
    "name": "Dip a corpo libero ad alte ripetizioni",
    "category": "forza-resistente",
    "description": "Serie lunghe alle parallele.",
    "equipment": "Parallele"
  },
  {
    "id": "forza-resistente--kettlebell-swing-a-tempo",
    "name": "Kettlebell swing a tempo",
    "category": "forza-resistente",
    "description": "Swing continui per 1-2 minuti.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-resistente--circuito-kettlebell",
    "name": "Circuito kettlebell",
    "category": "forza-resistente",
    "description": "Swing, goblet squat e rematore in sequenza senza pausa.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-resistente--goblet-squat-ad-alte-ripetizioni",
    "name": "Goblet squat ad alte ripetizioni",
    "category": "forza-resistente",
    "description": "Squat con kettlebell al petto, 20-30 ripetizioni.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-resistente--thruster-con-manubri",
    "name": "Thruster con manubri",
    "category": "forza-resistente",
    "description": "Squat e spinta sopra la testa in un unico movimento continuo.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-resistente--manubri-in-guardia",
    "name": "Manubri in guardia",
    "category": "forza-resistente",
    "description": "Tenere manubri leggeri in guardia per 3 minuti.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-resistente--shadow-boxing-con-manubri-leggeri",
    "name": "Shadow boxing con manubri leggeri",
    "category": "forza-resistente",
    "description": "Pugni con manubri da 1-2 kg per una ripresa.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-resistente--sacco-con-cavigliere",
    "name": "Sacco con cavigliere",
    "category": "forza-resistente",
    "description": "Calci al sacco con cavigliere leggere.",
    "equipment": "Cavigliere"
  },
  {
    "id": "forza-resistente--ginocchiate-a-ripresa-al-sacco",
    "name": "Ginocchiate a ripresa al sacco",
    "category": "forza-resistente",
    "description": "Ginocchiate alternate continue per 3 minuti.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-resistente--calci-circolari-a-ripresa",
    "name": "Calci circolari a ripresa",
    "category": "forza-resistente",
    "description": "Calci alternati al sacco per 3 minuti senza fermarsi.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-resistente--teep-continui-al-sacco",
    "name": "Teep continui al sacco",
    "category": "forza-resistente",
    "description": "Calci frontali alternati per una ripresa.",
    "equipment": "Sacco"
  },
  {
    "id": "forza-resistente--wall-sit-a-tempo",
    "name": "Wall sit a tempo",
    "category": "forza-resistente",
    "description": "Posizione seduta al muro per 1-3 minuti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--guardia-isometrica-in-squat",
    "name": "Guardia isometrica in squat",
    "category": "forza-resistente",
    "description": "Mezzo squat in guardia mantenuto a lungo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--plank-con-pugni",
    "name": "Plank con pugni",
    "category": "forza-resistente",
    "description": "In plank, alternare diretti in avanti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--bear-crawl",
    "name": "Bear crawl",
    "category": "forza-resistente",
    "description": "Camminata a quattro zampe a ginocchia sollevate.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--camminata-del-granchio",
    "name": "Camminata del granchio",
    "category": "forza-resistente",
    "description": "Camminata a pancia in su su mani e piedi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--battle-rope-a-ripresa",
    "name": "Battle rope a ripresa",
    "category": "forza-resistente",
    "description": "Onde alternate per 3 minuti.",
    "equipment": "Battle rope"
  },
  {
    "id": "forza-resistente--spinta-della-slitta-lunga",
    "name": "Spinta della slitta lunga",
    "category": "forza-resistente",
    "description": "Spinta su distanze lunghe a ritmo costante.",
    "equipment": "Slitta"
  },
  {
    "id": "forza-resistente--traino-della-slitta-all-indietro",
    "name": "Traino della slitta all'indietro",
    "category": "forza-resistente",
    "description": "Tirata della slitta camminando all'indietro.",
    "equipment": "Slitta"
  },
  {
    "id": "forza-resistente--farmer-walk-lungo",
    "name": "Farmer walk lungo",
    "category": "forza-resistente",
    "description": "Camminata con carichi medi su lunga distanza.",
    "equipment": "Manubri"
  },
  {
    "id": "forza-resistente--sandbag-carry",
    "name": "Sandbag carry",
    "category": "forza-resistente",
    "description": "Trasporto del sacco di sabbia abbracciato al petto.",
    "equipment": "Sandbag"
  },
  {
    "id": "forza-resistente--sandbag-over-the-shoulder",
    "name": "Sandbag over the shoulder",
    "category": "forza-resistente",
    "description": "Sollevare il sandbag da terra e lanciarlo sopra la spalla, a ripetizione.",
    "equipment": "Sandbag"
  },
  {
    "id": "forza-resistente--gomitate-con-elastico-a-tempo",
    "name": "Gomitate con elastico a tempo",
    "category": "forza-resistente",
    "description": "Gomitate continue contro l'elastico per 1 minuto.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-resistente--pugni-con-elastico-a-tempo",
    "name": "Pugni con elastico a tempo",
    "category": "forza-resistente",
    "description": "Diretti continui con elastico alla schiena.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-resistente--rematore-inverso",
    "name": "Rematore inverso",
    "category": "forza-resistente",
    "description": "Trazioni orizzontali sotto la sbarra bassa ad alte ripetizioni.",
    "equipment": "Sbarra"
  },
  {
    "id": "forza-resistente--clean-and-press-con-sandbag",
    "name": "Clean and press con sandbag",
    "category": "forza-resistente",
    "description": "Girata e spinta del sandbag a ripetizione.",
    "equipment": "Sandbag"
  },
  {
    "id": "forza-resistente--step-up-a-tempo",
    "name": "Step-up a tempo",
    "category": "forza-resistente",
    "description": "Salite sul gradino continue per 2 minuti.",
    "equipment": "Gradino"
  },
  {
    "id": "forza-resistente--salti-alla-corda-con-giubbotto-zavorrato",
    "name": "Salti alla corda con giubbotto zavorrato",
    "category": "forza-resistente",
    "description": "Corda a ritmo costante con giubbotto zavorrato.",
    "equipment": "Corda, giubbotto"
  },
  {
    "id": "forza-resistente--squat-con-giubbotto-zavorrato",
    "name": "Squat con giubbotto zavorrato",
    "category": "forza-resistente",
    "description": "Squat continui con giubbotto zavorrato.",
    "equipment": "Giubbotto"
  },
  {
    "id": "forza-resistente--mountain-climber",
    "name": "Mountain climber",
    "category": "forza-resistente",
    "description": "Ginocchia al petto alternate in plank, ritmo sostenuto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--pneumatico-ribaltato",
    "name": "Pneumatico ribaltato",
    "category": "forza-resistente",
    "description": "Ribaltare uno pneumatico pesante per serie lunghe.",
    "equipment": "Pneumatico"
  },
  {
    "id": "forza-resistente--martellate-sul-pneumatico",
    "name": "Martellate sul pneumatico",
    "category": "forza-resistente",
    "description": "Colpi di mazza sul pneumatico alternando i lati.",
    "equipment": "Mazza"
  },
  {
    "id": "forza-resistente--circuito-corpo-libero-5x3",
    "name": "Circuito corpo libero 5x3",
    "category": "forza-resistente",
    "description": "Cinque esercizi a corpo libero in 3 minuti, recupero 1 minuto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--pugni-in-guardia-sotto-sforzo",
    "name": "Pugni in guardia sotto sforzo",
    "category": "forza-resistente",
    "description": "Dopo 20 squat, 30 secondi di pugni veloci, ripetere.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--ginocchiate-sul-posto-a-tempo",
    "name": "Ginocchiate sul posto a tempo",
    "category": "forza-resistente",
    "description": "Ginocchiate alternate in aria tenendo le mani al collo immaginario.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--calci-circolari-in-aria-a-tempo",
    "name": "Calci circolari in aria a tempo",
    "category": "forza-resistente",
    "description": "Calci alternati controllati per 2 minuti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--piegamenti-a-diamante",
    "name": "Piegamenti a diamante",
    "category": "forza-resistente",
    "description": "Piegamenti con mani vicine, serie lunghe.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--piegamenti-sulle-nocche",
    "name": "Piegamenti sulle nocche",
    "category": "forza-resistente",
    "description": "Piegamenti sulle nocche per polsi e pugni.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--affondi-laterali-alternati",
    "name": "Affondi laterali alternati",
    "category": "forza-resistente",
    "description": "Affondi laterali continui per 1 minuto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--pallof-press-a-tempo",
    "name": "Pallof press a tempo",
    "category": "forza-resistente",
    "description": "Resistenza alla rotazione mantenuta per 45 secondi per lato.",
    "equipment": "Elastico"
  },
  {
    "id": "forza-resistente--sumo-squat-con-kettlebell",
    "name": "Sumo squat con kettlebell",
    "category": "forza-resistente",
    "description": "Squat largo con kettlebell, serie lunghe.",
    "equipment": "Kettlebell"
  },
  {
    "id": "forza-resistente--hip-thrust-a-corpo-libero",
    "name": "Hip thrust a corpo libero",
    "category": "forza-resistente",
    "description": "Spinte dell'anca continue, una o due gambe.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--glute-bridge-isometrico",
    "name": "Glute bridge isometrico",
    "category": "forza-resistente",
    "description": "Ponte glutei mantenuto a lungo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--sollevamenti-sulle-punte-a-tempo",
    "name": "Sollevamenti sulle punte a tempo",
    "category": "forza-resistente",
    "description": "Calf raise continui per la resistenza delle caviglie.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--ripresa-di-clinch-con-giubbotto",
    "name": "Ripresa di clinch con giubbotto",
    "category": "forza-resistente",
    "description": "Clinch con il compagno indossando giubbotto zavorrato.",
    "equipment": "Giubbotto"
  },
  {
    "id": "forza-resistente--sprawl-continui",
    "name": "Sprawl continui",
    "category": "forza-resistente",
    "description": "Sprawl ripetuti per 1 minuto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "forza-resistente--tirate-al-cavo-in-guardia",
    "name": "Tirate al cavo in guardia",
    "category": "forza-resistente",
    "description": "Tirate alternate al cavo mantenendo la guardia.",
    "equipment": "Cavo"
  },
  {
    "id": "velocita--diretti-veloci-sul-posto",
    "name": "Diretti veloci sul posto",
    "category": "velocita",
    "description": "10 secondi di diretti alla massima velocità, recupero 20.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--jab-diretto-rapidi-al-sacco",
    "name": "Jab-diretto rapidi al sacco",
    "category": "velocita",
    "description": "Uno-due alla massima velocità per 15 secondi.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--pugni-a-raffica-al-sacco",
    "name": "Pugni a raffica al sacco",
    "category": "velocita",
    "description": "Raffica di pugni corti e veloci per 10 secondi.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--ganci-alternati-a-raffica",
    "name": "Ganci alternati a raffica",
    "category": "velocita",
    "description": "Ganci veloci alternati al sacco per 10 secondi.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--calci-circolari-rapidi",
    "name": "Calci circolari rapidi",
    "category": "velocita",
    "description": "Calci al sacco con ritorno veloce in guardia, 10 secondi.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--teep-veloci",
    "name": "Teep veloci",
    "category": "velocita",
    "description": "Calci frontali con il piede anteriore, ritorno rapido.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--ginocchiate-rapide-alternate",
    "name": "Ginocchiate rapide alternate",
    "category": "velocita",
    "description": "Ginocchiate veloci alternate per 15 secondi.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--doppio-calcio-circolare",
    "name": "Doppio calcio circolare",
    "category": "velocita",
    "description": "Due calci circolari consecutivi con la stessa gamba senza appoggiare.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--calcio-basso-veloce",
    "name": "Calcio basso veloce",
    "category": "velocita",
    "description": "Low kick rapido con richiamo immediato.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--switch-kick-rapido",
    "name": "Switch kick rapido",
    "category": "velocita",
    "description": "Cambio guardia e calcio con la gamba anteriore il più veloce possibile.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--reazione-al-segnale-sonoro",
    "name": "Reazione al segnale sonoro",
    "category": "velocita",
    "description": "Al fischio del maestro, colpire con la combinazione indicata.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--reazione-al-colore",
    "name": "Reazione al colore",
    "category": "velocita",
    "description": "Il maestro mostra un colore, l'allievo esegue il colpo associato.",
    "equipment": "Pao"
  },
  {
    "id": "velocita--reazione-ai-pao",
    "name": "Reazione ai pao",
    "category": "velocita",
    "description": "Colpire i pao appena il maestro li mostra.",
    "equipment": "Pao"
  },
  {
    "id": "velocita--palla-da-tennis-al-muro",
    "name": "Palla da tennis al muro",
    "category": "velocita",
    "description": "Lanciare e afferrare la palla da tennis al muro per la reazione.",
    "equipment": "Palla da tennis"
  },
  {
    "id": "velocita--palla-da-tennis-lasciata-cadere",
    "name": "Palla da tennis lasciata cadere",
    "category": "velocita",
    "description": "Il compagno lascia la palla, l'allievo la afferra prima del secondo rimbalzo.",
    "equipment": "Palla da tennis"
  },
  {
    "id": "velocita--pallina-appesa-reflex-ball",
    "name": "Pallina appesa (reflex ball)",
    "category": "velocita",
    "description": "Colpire la pallina elastica appesa a ritmo continuo.",
    "equipment": "Reflex ball"
  },
  {
    "id": "velocita--pera-veloce",
    "name": "Pera veloce",
    "category": "velocita",
    "description": "Lavoro sulla pera veloce per ritmo e rapidità.",
    "equipment": "Pera"
  },
  {
    "id": "velocita--doppia-elastica",
    "name": "Doppia elastica",
    "category": "velocita",
    "description": "Colpi alla palla doppio elastico per tempismo e precisione.",
    "equipment": "Doppia elastica"
  },
  {
    "id": "velocita--sprint-10-metri",
    "name": "Sprint 10 metri",
    "category": "velocita",
    "description": "Scatti brevi alla massima velocità.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--sprint-20-metri",
    "name": "Sprint 20 metri",
    "category": "velocita",
    "description": "Scatti di 20 metri con recupero completo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--sprint-in-partenza-dalla-guardia",
    "name": "Sprint in partenza dalla guardia",
    "category": "velocita",
    "description": "Dalla guardia, scatto in avanti di 5 metri.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--corsa-calciata-veloce",
    "name": "Corsa calciata veloce",
    "category": "velocita",
    "description": "Calciata dietro alla massima frequenza per 10 metri.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--skip-veloce",
    "name": "Skip veloce",
    "category": "velocita",
    "description": "Skip alto alla massima frequenza per 10 secondi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--scala-di-agilita-rapida",
    "name": "Scala di agilità rapida",
    "category": "velocita",
    "description": "Appoggi veloci nella scaletta a terra.",
    "equipment": "Scaletta"
  },
  {
    "id": "velocita--corda-veloce",
    "name": "Corda veloce",
    "category": "velocita",
    "description": "20 secondi di corda alla massima velocità.",
    "equipment": "Corda"
  },
  {
    "id": "velocita--uno-due-con-elastico-e-rilascio",
    "name": "Uno-due con elastico e rilascio",
    "category": "velocita",
    "description": "Pugni con elastico seguiti subito da pugni liberi.",
    "equipment": "Elastico"
  },
  {
    "id": "velocita--shadow-con-contrasto",
    "name": "Shadow con contrasto",
    "category": "velocita",
    "description": "10 secondi di shadow lento e 10 secondi alla massima velocità.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--pugni-con-palla-da-tennis-in-mano",
    "name": "Pugni con palla da tennis in mano",
    "category": "velocita",
    "description": "Pugni veloci stringendo una pallina, più rapidità e presa.",
    "equipment": "Palla da tennis"
  },
  {
    "id": "velocita--gomitate-rapide-alternate",
    "name": "Gomitate rapide alternate",
    "category": "velocita",
    "description": "Gomitate orizzontali alternate alla massima velocità.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--combinazione-1-2-calcio-veloce",
    "name": "Combinazione 1-2-calcio veloce",
    "category": "velocita",
    "description": "Jab, diretto e calcio circolare il più rapido possibile.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--combinazione-1-2-3-veloce",
    "name": "Combinazione 1-2-3 veloce",
    "category": "velocita",
    "description": "Jab, diretto e gancio con ritorno in guardia.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--cattura-del-teep",
    "name": "Cattura del teep",
    "category": "velocita",
    "description": "Il compagno calcia, l'allievo cattura la gamba il più velocemente possibile.",
    "equipment": "Compagno"
  },
  {
    "id": "velocita--blocco-veloce-del-calcio",
    "name": "Blocco veloce del calcio",
    "category": "velocita",
    "description": "Parata con la tibia appena il compagno accenna il calcio.",
    "equipment": "Compagno"
  },
  {
    "id": "velocita--gioco-del-tocco-ginocchia",
    "name": "Gioco del tocco ginocchia",
    "category": "velocita",
    "description": "Cercare di toccare le ginocchia del compagno proteggendo le proprie.",
    "equipment": "Compagno"
  },
  {
    "id": "velocita--gioco-del-tocco-spalle",
    "name": "Gioco del tocco spalle",
    "category": "velocita",
    "description": "Toccare le spalle del compagno evitando di essere toccati.",
    "equipment": "Compagno"
  },
  {
    "id": "velocita--schivata-della-pallina",
    "name": "Schivata della pallina",
    "category": "velocita",
    "description": "Il compagno lancia palline morbide, l'allievo le schiva.",
    "equipment": "Palline morbide"
  },
  {
    "id": "velocita--slip-line-veloce",
    "name": "Slip line veloce",
    "category": "velocita",
    "description": "Schivate laterali rapide sotto una corda tesa.",
    "equipment": "Corda tesa"
  },
  {
    "id": "velocita--cambio-guardia-rapido",
    "name": "Cambio guardia rapido",
    "category": "velocita",
    "description": "Cambi guardia veloci sul posto per 15 secondi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--pugni-a-terra-da-seduto",
    "name": "Pugni a terra da seduto",
    "category": "velocita",
    "description": "Da seduti, pugni velocissimi per isolare le braccia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--diretto-sul-fiato",
    "name": "Diretto sul fiato",
    "category": "velocita",
    "description": "Diretto veloce espirando con decisione, singolo e preciso.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--contrattacco-al-segnale",
    "name": "Contrattacco al segnale",
    "category": "velocita",
    "description": "Il maestro attacca con i pao, l'allievo para e risponde subito.",
    "equipment": "Pao"
  },
  {
    "id": "velocita--calcio-circolare-al-bastone",
    "name": "Calcio circolare al bastone",
    "category": "velocita",
    "description": "Calciare un bastone tenuto dal maestro in punti diversi.",
    "equipment": "Bastone"
  },
  {
    "id": "velocita--jab-al-guanto-in-movimento",
    "name": "Jab al guanto in movimento",
    "category": "velocita",
    "description": "Il maestro muove il guanto, l'allievo lo colpisce con il jab.",
    "equipment": "Guantone"
  },
  {
    "id": "velocita--quattro-pugni-in-un-secondo",
    "name": "Quattro pugni in un secondo",
    "category": "velocita",
    "description": "Serie da quattro pugni rapidissimi, ripetute con recupero.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--ginocchiata-e-richiamo",
    "name": "Ginocchiata e richiamo",
    "category": "velocita",
    "description": "Ginocchiata rapida e ritorno in guardia, una alla volta al segnale.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--pao-rapidi-alternati",
    "name": "Pao rapidi alternati",
    "category": "velocita",
    "description": "Il maestro cambia rapidamente i bersagli dei pao.",
    "equipment": "Pao"
  },
  {
    "id": "velocita--calci-con-richiamo-veloce-del-piede",
    "name": "Calci con richiamo veloce del piede",
    "category": "velocita",
    "description": "Calcio frontale e ritorno del piede prima del contatto con il pavimento.",
    "equipment": "Sacco"
  },
  {
    "id": "velocita--scatti-laterali-tra-coni",
    "name": "Scatti laterali tra coni",
    "category": "velocita",
    "description": "Scatti laterali tra due coni a 3 metri.",
    "equipment": "Coni"
  },
  {
    "id": "velocita--mani-rapide-al-muro",
    "name": "Mani rapide al muro",
    "category": "velocita",
    "description": "Toccare il muro alternando le mani il più velocemente possibile.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--piedi-rapidi-sul-posto",
    "name": "Piedi rapidi sul posto",
    "category": "velocita",
    "description": "Passettini velocissimi sul posto in guardia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "velocita--ripartenza-dopo-la-parata",
    "name": "Ripartenza dopo la parata",
    "category": "velocita",
    "description": "Parata del calcio e contrattacco immediato con calcio.",
    "equipment": "Compagno"
  },
  {
    "id": "resistenza--corsa-lenta-continua",
    "name": "Corsa lenta continua",
    "category": "resistenza",
    "description": "30-45 minuti di corsa a ritmo di conversazione.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--corsa-a-intervalli",
    "name": "Corsa a intervalli",
    "category": "resistenza",
    "description": "1 minuto veloce e 1 minuto lento per 20 minuti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--corsa-in-salita",
    "name": "Corsa in salita",
    "category": "resistenza",
    "description": "Ripetute in salita di 30-60 secondi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--corsa-con-cambi-di-ritmo",
    "name": "Corsa con cambi di ritmo",
    "category": "resistenza",
    "description": "Fartlek con cambi di velocità liberi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--corda-3-minuti",
    "name": "Corda 3 minuti",
    "category": "resistenza",
    "description": "Riprese di corda da 3 minuti con 1 minuto di recupero.",
    "equipment": "Corda"
  },
  {
    "id": "resistenza--corda-10-minuti-continui",
    "name": "Corda 10 minuti continui",
    "category": "resistenza",
    "description": "Corda a ritmo costante per 10 minuti.",
    "equipment": "Corda"
  },
  {
    "id": "resistenza--sacco-5-riprese",
    "name": "Sacco 5 riprese",
    "category": "resistenza",
    "description": "Cinque riprese da 3 minuti al sacco, 1 minuto di pausa.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--pao-5-riprese",
    "name": "Pao 5 riprese",
    "category": "resistenza",
    "description": "Cinque riprese ai pao con il maestro.",
    "equipment": "Pao"
  },
  {
    "id": "resistenza--shadow-boxing-a-ripresa",
    "name": "Shadow boxing a ripresa",
    "category": "resistenza",
    "description": "Shadow boxing continuo per riprese da 3 minuti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--sacco-tabata",
    "name": "Sacco Tabata",
    "category": "resistenza",
    "description": "20 secondi al massimo e 10 di pausa per 8 serie.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--burpee-tabata",
    "name": "Burpee Tabata",
    "category": "resistenza",
    "description": "20 secondi di burpee e 10 di pausa per 8 serie.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--calci-circolari-tabata",
    "name": "Calci circolari Tabata",
    "category": "resistenza",
    "description": "20 secondi di calci alternati e 10 di pausa.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--ripresa-30-30",
    "name": "Ripresa 30-30",
    "category": "resistenza",
    "description": "30 secondi forti e 30 leggeri al sacco per 3 minuti.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--ripresa-a-piramide",
    "name": "Ripresa a piramide",
    "category": "resistenza",
    "description": "Raffiche al sacco da 10, 20, 30 secondi e ritorno.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--cyclette-a-intervalli",
    "name": "Cyclette a intervalli",
    "category": "resistenza",
    "description": "Sprint di 20 secondi e recupero di 40 per 15 minuti.",
    "equipment": "Cyclette"
  },
  {
    "id": "resistenza--vogatore",
    "name": "Vogatore",
    "category": "resistenza",
    "description": "Remoergometro a ritmo costante per 15-20 minuti.",
    "equipment": "Vogatore"
  },
  {
    "id": "resistenza--vogatore-a-intervalli",
    "name": "Vogatore a intervalli",
    "category": "resistenza",
    "description": "250 metri veloci e 1 minuto di recupero.",
    "equipment": "Vogatore"
  },
  {
    "id": "resistenza--assault-bike",
    "name": "Assault bike",
    "category": "resistenza",
    "description": "Sprint alla bike con braccia e gambe.",
    "equipment": "Assault bike"
  },
  {
    "id": "resistenza--nuoto",
    "name": "Nuoto",
    "category": "resistenza",
    "description": "Nuotata continua per il recupero attivo e il fiato.",
    "equipment": "Piscina"
  },
  {
    "id": "resistenza--circuito-a-stazioni",
    "name": "Circuito a stazioni",
    "category": "resistenza",
    "description": "6 stazioni da 1 minuto, 3 giri.",
    "equipment": "Vari"
  },
  {
    "id": "resistenza--sparring-tecnico-continuo",
    "name": "Sparring tecnico continuo",
    "category": "resistenza",
    "description": "Sparring leggero a ritmo costante per riprese lunghe.",
    "equipment": "Protezioni"
  },
  {
    "id": "resistenza--clinch-a-ripresa",
    "name": "Clinch a ripresa",
    "category": "resistenza",
    "description": "Riprese di clinch continuo da 3 minuti.",
    "equipment": "Compagno"
  },
  {
    "id": "resistenza--ripresa-con-nuovo-compagno",
    "name": "Ripresa con nuovo compagno",
    "category": "resistenza",
    "description": "Ogni ripresa un compagno fresco entra contro lo stesso atleta.",
    "equipment": "Compagno"
  },
  {
    "id": "resistenza--sprint-ripetuti",
    "name": "Sprint ripetuti",
    "category": "resistenza",
    "description": "10 sprint da 30 metri con recupero breve.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--navette",
    "name": "Navette",
    "category": "resistenza",
    "description": "Corsa avanti e indietro tra due linee a 10 metri.",
    "equipment": "Coni"
  },
  {
    "id": "resistenza--ripresa-di-ginocchiate",
    "name": "Ripresa di ginocchiate",
    "category": "resistenza",
    "description": "3 minuti di ginocchiate continue al sacco.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--ripresa-solo-calci",
    "name": "Ripresa solo calci",
    "category": "resistenza",
    "description": "Una ripresa intera di soli calci al sacco.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--ripresa-solo-pugni",
    "name": "Ripresa solo pugni",
    "category": "resistenza",
    "description": "Una ripresa intera di soli pugni al sacco.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--ripresa-difensiva",
    "name": "Ripresa difensiva",
    "category": "resistenza",
    "description": "Il compagno attacca per 3 minuti, l'allievo solo difende e si muove.",
    "equipment": "Compagno"
  },
  {
    "id": "resistenza--ripresa-extra-lunga",
    "name": "Ripresa extra lunga",
    "category": "resistenza",
    "description": "Ripresa al sacco da 5 minuti invece di 3.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--recupero-breve",
    "name": "Recupero breve",
    "category": "resistenza",
    "description": "Riprese da 3 minuti con 30 secondi di recupero.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--emom-burpee-e-calci",
    "name": "EMOM burpee e calci",
    "category": "resistenza",
    "description": "Ogni minuto 5 burpee e 10 calci, per 10 minuti.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--amrap-10-minuti",
    "name": "AMRAP 10 minuti",
    "category": "resistenza",
    "description": "Più giri possibili di squat, piegamenti e ginocchiate.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--scalini",
    "name": "Scalini",
    "category": "resistenza",
    "description": "Salire e scendere le scale di corsa.",
    "equipment": "Scale"
  },
  {
    "id": "resistenza--corsa-con-pugni",
    "name": "Corsa con pugni",
    "category": "resistenza",
    "description": "Corsa leggera alternata a 30 secondi di pugni sul posto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--camminata-veloce-in-salita",
    "name": "Camminata veloce in salita",
    "category": "resistenza",
    "description": "Camminata a passo sostenuto in salita, recupero attivo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--ripresa-di-teep",
    "name": "Ripresa di teep",
    "category": "resistenza",
    "description": "3 minuti di teep alternati al sacco.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--doppia-ripresa-al-sacco",
    "name": "Doppia ripresa al sacco",
    "category": "resistenza",
    "description": "Due riprese di fila senza pausa.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--gomitate-e-ginocchiate-a-ripresa",
    "name": "Gomitate e ginocchiate a ripresa",
    "category": "resistenza",
    "description": "Combinazioni di gomiti e ginocchia al sacco per 3 minuti.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--uno-contro-sacco-ritmo-gara",
    "name": "Uno contro sacco ritmo gara",
    "category": "resistenza",
    "description": "Ripresa al sacco simulando il ritmo di un match.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--recupero-attivo-con-shadow",
    "name": "Recupero attivo con shadow",
    "category": "resistenza",
    "description": "Tra le riprese, shadow leggero invece di stare fermi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--corda-con-doppi-a-intervalli",
    "name": "Corda con doppi a intervalli",
    "category": "resistenza",
    "description": "30 secondi di salti normali e 10 di doppi.",
    "equipment": "Corda"
  },
  {
    "id": "resistenza--sacco-con-calci-a-50",
    "name": "Sacco con calci a 50",
    "category": "resistenza",
    "description": "Contare 50 calci circolari alternati il più velocemente possibile.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--sacco-con-100-ginocchiate",
    "name": "Sacco con 100 ginocchiate",
    "category": "resistenza",
    "description": "100 ginocchiate alternate senza fermarsi.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--scala-di-pugni",
    "name": "Scala di pugni",
    "category": "resistenza",
    "description": "10 pugni, 1 burpee, 20 pugni, 2 burpee, fino a 100 pugni.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--battle-rope-a-intervalli",
    "name": "Battle rope a intervalli",
    "category": "resistenza",
    "description": "30 secondi di onde e 30 di recupero per 10 minuti.",
    "equipment": "Battle rope"
  },
  {
    "id": "resistenza--ripresa-di-pao-con-calci-in-serie",
    "name": "Ripresa di pao con calci in serie",
    "category": "resistenza",
    "description": "Il maestro chiede serie da 10 calci in tutta la ripresa.",
    "equipment": "Pao"
  },
  {
    "id": "resistenza--corsa-a-intervalli-lunghi",
    "name": "Corsa a intervalli lunghi",
    "category": "resistenza",
    "description": "4 ripetute da 4 minuti a ritmo sostenuto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--sprawl-e-pugni",
    "name": "Sprawl e pugni",
    "category": "resistenza",
    "description": "5 sprawl e 10 pugni in loop per 3 minuti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--mountain-climber-a-intervalli",
    "name": "Mountain climber a intervalli",
    "category": "resistenza",
    "description": "30 secondi di mountain climber e 15 di pausa.",
    "equipment": "Corpo libero"
  },
  {
    "id": "resistenza--ripresa-di-sacco-con-cambio-guardia",
    "name": "Ripresa di sacco con cambio guardia",
    "category": "resistenza",
    "description": "Ogni 30 secondi cambio guardia al sacco.",
    "equipment": "Sacco"
  },
  {
    "id": "resistenza--ultima-ripresa-a-tutta",
    "name": "Ultima ripresa a tutta",
    "category": "resistenza",
    "description": "Dopo l'allenamento, ultima ripresa al massimo dell'intensità.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--jab",
    "name": "Jab",
    "category": "tecnica",
    "description": "Diretto anteriore con rotazione del pugno e guardia alta.",
    "equipment": "Corpo libero"
  },
  {
    "id": "tecnica--diretto-posteriore",
    "name": "Diretto posteriore",
    "category": "tecnica",
    "description": "Diretto con rotazione del piede e dell'anca posteriore.",
    "equipment": "Corpo libero"
  },
  {
    "id": "tecnica--gancio-anteriore",
    "name": "Gancio anteriore",
    "category": "tecnica",
    "description": "Gancio con rotazione del piede anteriore, gomito all'altezza del pugno.",
    "equipment": "Corpo libero"
  },
  {
    "id": "tecnica--gancio-posteriore",
    "name": "Gancio posteriore",
    "category": "tecnica",
    "description": "Gancio con la mano posteriore e rotazione completa.",
    "equipment": "Corpo libero"
  },
  {
    "id": "tecnica--montante",
    "name": "Montante",
    "category": "tecnica",
    "description": "Pugno dal basso verso l'alto con spinta delle gambe.",
    "equipment": "Corpo libero"
  },
  {
    "id": "tecnica--montante-al-corpo",
    "name": "Montante al corpo",
    "category": "tecnica",
    "description": "Montante al plesso con piegamento delle ginocchia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "tecnica--pugno-girato-spinning-backfist",
    "name": "Pugno girato (spinning backfist)",
    "category": "tecnica",
    "description": "Rotazione completa e colpo con il dorso del pugno.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--superman-punch",
    "name": "Superman punch",
    "category": "tecnica",
    "description": "Finta di calcio e diretto in salto.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--calcio-circolare-al-corpo",
    "name": "Calcio circolare al corpo",
    "category": "tecnica",
    "description": "Calcio con la tibia al fianco, rotazione sul piede d'appoggio.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--calcio-circolare-alto",
    "name": "Calcio circolare alto",
    "category": "tecnica",
    "description": "Calcio alla testa con ampia rotazione dell'anca.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--low-kick",
    "name": "Low kick",
    "category": "tecnica",
    "description": "Calcio circolare alla coscia esterna dell'avversario.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--low-kick-interno",
    "name": "Low kick interno",
    "category": "tecnica",
    "description": "Calcio alla coscia interna con la gamba anteriore.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--calcio-al-polpaccio",
    "name": "Calcio al polpaccio",
    "category": "tecnica",
    "description": "Calcio basso al polpaccio della gamba anteriore.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--switch-kick",
    "name": "Switch kick",
    "category": "tecnica",
    "description": "Cambio guardia rapido e calcio con la gamba anteriore.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--teep-anteriore",
    "name": "Teep anteriore",
    "category": "tecnica",
    "description": "Calcio frontale di spinta con la gamba anteriore.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--teep-posteriore",
    "name": "Teep posteriore",
    "category": "tecnica",
    "description": "Calcio frontale di spinta con la gamba posteriore.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--teep-al-viso",
    "name": "Teep al viso",
    "category": "tecnica",
    "description": "Calcio frontale alto, tecnica di dominio e provocazione.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--teep-laterale",
    "name": "Teep laterale",
    "category": "tecnica",
    "description": "Calcio laterale di spinta con il tallone.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--ginocchiata-dritta",
    "name": "Ginocchiata dritta",
    "category": "tecnica",
    "description": "Ginocchiata in avanti spingendo l'anca.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--ginocchiata-diagonale",
    "name": "Ginocchiata diagonale",
    "category": "tecnica",
    "description": "Ginocchiata con traiettoria laterale.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--ginocchiata-curva",
    "name": "Ginocchiata curva",
    "category": "tecnica",
    "description": "Ginocchiata circolare al fianco.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--ginocchiata-volante",
    "name": "Ginocchiata volante",
    "category": "tecnica",
    "description": "Ginocchiata in salto con lo slancio della gamba opposta.",
    "equipment": "Sacco"
  },
  {
    "id": "tecnica--gomitata-orizzontale",
    "name": "Gomitata orizzontale",
    "category": "tecnica",
    "description": "Gomitata laterale con rotazione delle spalle.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--gomitata-dall-alto",
    "name": "Gomitata dall'alto",
    "category": "tecnica",
    "description": "Gomitata che scende dall'alto verso il basso.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--gomitata-montante",
    "name": "Gomitata montante",
    "category": "tecnica",
    "description": "Gomitata dal basso verso l'alto.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--gomitata-girata",
    "name": "Gomitata girata",
    "category": "tecnica",
    "description": "Gomitata con rotazione completa all'indietro.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--gomitata-in-diagonale-discendente",
    "name": "Gomitata in diagonale discendente",
    "category": "tecnica",
    "description": "Gomitata che taglia in diagonale verso il basso.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--parata-con-la-tibia",
    "name": "Parata con la tibia",
    "category": "tecnica",
    "description": "Bloccare il calcio sollevando la gamba con la tibia.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--parata-incrociata",
    "name": "Parata incrociata",
    "category": "tecnica",
    "description": "Parata con la tibia opposta al lato del calcio.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--cattura-del-calcio",
    "name": "Cattura del calcio",
    "category": "tecnica",
    "description": "Afferrare la gamba dell'avversario dopo il calcio circolare.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--cattura-e-sbilanciamento",
    "name": "Cattura e sbilanciamento",
    "category": "tecnica",
    "description": "Cattura del calcio e spazzata sulla gamba d'appoggio.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--cattura-del-teep-e-contrattacco",
    "name": "Cattura del teep e contrattacco",
    "category": "tecnica",
    "description": "Afferrare il teep e rispondere con calcio basso.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--deviazione-del-teep",
    "name": "Deviazione del teep",
    "category": "tecnica",
    "description": "Deviare il calcio frontale con la mano e girare l'avversario.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--paletta-e-diretto",
    "name": "Paletta e diretto",
    "category": "tecnica",
    "description": "Parare il jab con il palmo e rispondere con il diretto.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--slip-e-contrattacco",
    "name": "Slip e contrattacco",
    "category": "tecnica",
    "description": "Schivata laterale del diretto e gancio in risposta.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--rotolamento-sotto-il-gancio",
    "name": "Rotolamento sotto il gancio",
    "category": "tecnica",
    "description": "Abbassarsi sotto il gancio con un movimento a U.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--indietreggiare-dal-calcio",
    "name": "Indietreggiare dal calcio",
    "category": "tecnica",
    "description": "Arretrare il bacino per far mancare il calcio e contrattaccare.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--combinazione-jab-diretto-calcio",
    "name": "Combinazione jab-diretto-calcio",
    "category": "tecnica",
    "description": "Uno-due e calcio circolare posteriore.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--combinazione-jab-calcio-basso",
    "name": "Combinazione jab-calcio basso",
    "category": "tecnica",
    "description": "Jab per coprire e low kick posteriore.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--combinazione-diretto-gancio-calcio",
    "name": "Combinazione diretto-gancio-calcio",
    "category": "tecnica",
    "description": "Diretto, gancio anteriore e calcio circolare posteriore.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--combinazione-teep-diretto-calcio",
    "name": "Combinazione teep-diretto-calcio",
    "category": "tecnica",
    "description": "Teep anteriore, diretto e calcio circolare.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--combinazione-pugni-e-ginocchiata",
    "name": "Combinazione pugni e ginocchiata",
    "category": "tecnica",
    "description": "Jab-diretto, presa al collo e ginocchiata.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--combinazione-gomitata-e-ginocchiata",
    "name": "Combinazione gomitata e ginocchiata",
    "category": "tecnica",
    "description": "Gomitata orizzontale e ginocchiata dritta.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--finta-di-calcio-e-diretto",
    "name": "Finta di calcio e diretto",
    "category": "tecnica",
    "description": "Accennare il calcio e colpire con il diretto.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--finta-di-teep-e-calcio-circolare",
    "name": "Finta di teep e calcio circolare",
    "category": "tecnica",
    "description": "Accennare il teep e calciare circolare.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--contrattacco-al-calcio-con-calcio",
    "name": "Contrattacco al calcio con calcio",
    "category": "tecnica",
    "description": "Parata con la tibia e calcio immediato con la stessa gamba.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--contrattacco-al-low-kick",
    "name": "Contrattacco al low kick",
    "category": "tecnica",
    "description": "Bloccare il low kick e rispondere con diretto e calcio.",
    "equipment": "Compagno"
  },
  {
    "id": "tecnica--posizione-di-guardia",
    "name": "Posizione di guardia",
    "category": "tecnica",
    "description": "Correzione di guardia, peso, mento e mani.",
    "equipment": "Specchio"
  },
  {
    "id": "tecnica--ritorno-in-guardia",
    "name": "Ritorno in guardia",
    "category": "tecnica",
    "description": "Dopo ogni colpo, tornare subito in guardia corretta.",
    "equipment": "Specchio"
  },
  {
    "id": "tecnica--shadow-tecnico-lento",
    "name": "Shadow tecnico lento",
    "category": "tecnica",
    "description": "Shadow lentissimo curando la precisione di ogni colpo.",
    "equipment": "Specchio"
  },
  {
    "id": "tecnica--lavoro-ai-pao-a-tema",
    "name": "Lavoro ai pao a tema",
    "category": "tecnica",
    "description": "Una ripresa ai pao su un solo colpo o combinazione.",
    "equipment": "Pao"
  },
  {
    "id": "tecnica--sparring-a-tema",
    "name": "Sparring a tema",
    "category": "tecnica",
    "description": "Sparring leggero limitato a pochi colpi scelti dal maestro.",
    "equipment": "Protezioni"
  },
  {
    "id": "tecnica--sparring-solo-calci",
    "name": "Sparring solo calci",
    "category": "tecnica",
    "description": "Sparring leggero usando solo calci e parate.",
    "equipment": "Protezioni"
  },
  {
    "id": "tecnica--sparring-solo-pugni",
    "name": "Sparring solo pugni",
    "category": "tecnica",
    "description": "Sparring leggero con soli pugni.",
    "equipment": "Protezioni"
  },
  {
    "id": "tecnica--calcio-circolare-dopo-cambio-angolo",
    "name": "Calcio circolare dopo cambio angolo",
    "category": "tecnica",
    "description": "Passo laterale per cambiare angolo e calcio circolare.",
    "equipment": "Pao"
  },
  {
    "id": "mobilita--rotazioni-del-collo",
    "name": "Rotazioni del collo",
    "category": "mobilita",
    "description": "Rotazioni lente e controllate del collo nei due sensi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--rotazioni-delle-spalle",
    "name": "Rotazioni delle spalle",
    "category": "mobilita",
    "description": "Cerchi ampi con le braccia avanti e indietro.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--rotazioni-delle-anche",
    "name": "Rotazioni delle anche",
    "category": "mobilita",
    "description": "Cerchi con il ginocchio sollevato, aprendo e chiudendo l'anca.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--apertura-e-chiusura-del-cancello",
    "name": "Apertura e chiusura del cancello",
    "category": "mobilita",
    "description": "In piedi, ginocchio alto che ruota in fuori e in dentro.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--leg-swing-frontali",
    "name": "Leg swing frontali",
    "category": "mobilita",
    "description": "Slanci della gamba avanti e indietro tenendosi al muro.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--leg-swing-laterali",
    "name": "Leg swing laterali",
    "category": "mobilita",
    "description": "Slanci laterali della gamba davanti al corpo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--slanci-circolari-della-gamba",
    "name": "Slanci circolari della gamba",
    "category": "mobilita",
    "description": "Slanci che imitano la traiettoria del calcio circolare.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--affondo-profondo-con-rotazione",
    "name": "Affondo profondo con rotazione",
    "category": "mobilita",
    "description": "Affondo lungo, mano a terra e rotazione del busto verso l'alto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--world-s-greatest-stretch",
    "name": "World's greatest stretch",
    "category": "mobilita",
    "description": "Affondo, gomito al piede, rotazione toracica e allungamento femorale.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--posizione-90-90",
    "name": "Posizione 90-90",
    "category": "mobilita",
    "description": "Seduti con le gambe a 90 gradi, rotazioni interne ed esterne dell'anca.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--transizioni-90-90",
    "name": "Transizioni 90-90",
    "category": "mobilita",
    "description": "Passare da un lato all'altro nella 90-90 senza mani.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--posizione-della-rana",
    "name": "Posizione della rana",
    "category": "mobilita",
    "description": "Ginocchia larghe a terra, bacino indietro per gli adduttori.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--allungamento-adduttori-in-piedi",
    "name": "Allungamento adduttori in piedi",
    "category": "mobilita",
    "description": "Affondo laterale tenuto per allungare l'interno coscia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--spaccata-frontale-progressiva",
    "name": "Spaccata frontale progressiva",
    "category": "mobilita",
    "description": "Avvicinamento graduale alla spaccata frontale.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--spaccata-laterale-progressiva",
    "name": "Spaccata laterale progressiva",
    "category": "mobilita",
    "description": "Avvicinamento graduale alla spaccata laterale.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--farfalla",
    "name": "Farfalla",
    "category": "mobilita",
    "description": "Seduti, piante dei piedi unite e ginocchia verso terra.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--piccione",
    "name": "Piccione",
    "category": "mobilita",
    "description": "Allungamento del gluteo con gamba anteriore piegata a terra.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--allungamento-flessori-dell-anca",
    "name": "Allungamento flessori dell'anca",
    "category": "mobilita",
    "description": "Affondo con ginocchio a terra e bacino in avanti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--couch-stretch",
    "name": "Couch stretch",
    "category": "mobilita",
    "description": "Ginocchio contro il muro per i flessori e il quadricipite.",
    "equipment": "Muro"
  },
  {
    "id": "mobilita--allungamento-femorali-in-piedi",
    "name": "Allungamento femorali in piedi",
    "category": "mobilita",
    "description": "Gamba tesa su un rialzo, busto in avanti con schiena dritta.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--allungamento-quadricipite",
    "name": "Allungamento quadricipite",
    "category": "mobilita",
    "description": "Tallone al gluteo, ginocchia unite.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--cosacco-squat",
    "name": "Cosacco squat",
    "category": "mobilita",
    "description": "Squat laterale profondo alternando i lati.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--squat-profondo-tenuto",
    "name": "Squat profondo tenuto",
    "category": "mobilita",
    "description": "Squat completo mantenuto con talloni a terra.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--mobilita-delle-caviglie-al-muro",
    "name": "Mobilità delle caviglie al muro",
    "category": "mobilita",
    "description": "Ginocchio verso il muro con tallone a terra.",
    "equipment": "Muro"
  },
  {
    "id": "mobilita--rotazioni-delle-caviglie",
    "name": "Rotazioni delle caviglie",
    "category": "mobilita",
    "description": "Cerchi del piede nei due sensi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--gatto-e-cammello",
    "name": "Gatto e cammello",
    "category": "mobilita",
    "description": "A quattro zampe, alternare schiena curva e schiena arcuata.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--rotazioni-toraciche-a-quattro-zampe",
    "name": "Rotazioni toraciche a quattro zampe",
    "category": "mobilita",
    "description": "Mano dietro la testa e rotazione del busto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--libro-aperto",
    "name": "Libro aperto",
    "category": "mobilita",
    "description": "Sdraiati sul fianco, aprire il braccio superiore ruotando il torace.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--ponte-completo",
    "name": "Ponte completo",
    "category": "mobilita",
    "description": "Ponte su mani e piedi per l'apertura della colonna e delle spalle.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--cobra",
    "name": "Cobra",
    "category": "mobilita",
    "description": "Da pancia in giù, sollevare il busto spingendo sulle mani.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--posizione-del-bambino",
    "name": "Posizione del bambino",
    "category": "mobilita",
    "description": "Seduti sui talloni, braccia tese in avanti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--cane-a-testa-in-giu",
    "name": "Cane a testa in giù",
    "category": "mobilita",
    "description": "Bacino in alto, talloni verso terra, schiena lunga.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--pass-through-con-bastone",
    "name": "Pass-through con bastone",
    "category": "mobilita",
    "description": "Bastone a presa larga, portato sopra la testa e dietro la schiena.",
    "equipment": "Bastone"
  },
  {
    "id": "mobilita--allungamento-pettorali-al-muro",
    "name": "Allungamento pettorali al muro",
    "category": "mobilita",
    "description": "Braccio al muro e rotazione del busto in direzione opposta.",
    "equipment": "Muro"
  },
  {
    "id": "mobilita--allungamento-dorsali-alla-sbarra",
    "name": "Allungamento dorsali alla sbarra",
    "category": "mobilita",
    "description": "Appesi alla sbarra, rilassare le spalle.",
    "equipment": "Sbarra"
  },
  {
    "id": "mobilita--mobilita-dei-polsi",
    "name": "Mobilità dei polsi",
    "category": "mobilita",
    "description": "Rotazioni e allungamenti dei polsi a quattro zampe.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--allungamento-avambracci",
    "name": "Allungamento avambracci",
    "category": "mobilita",
    "description": "Palmo verso l'alto e verso il basso con l'altra mano che tira.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--calcio-circolare-lento-tenuto",
    "name": "Calcio circolare lento tenuto",
    "category": "mobilita",
    "description": "Calcio circolare al rallentatore, tenere la gamba in alto 3 secondi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--teep-lento-tenuto",
    "name": "Teep lento tenuto",
    "category": "mobilita",
    "description": "Teep lentissimo con gamba tenuta in estensione.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--ginocchiata-alta-tenuta",
    "name": "Ginocchiata alta tenuta",
    "category": "mobilita",
    "description": "Ginocchio portato al massimo in alto e tenuto 5 secondi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--allungamento-con-elastico-sdraiati",
    "name": "Allungamento con elastico sdraiati",
    "category": "mobilita",
    "description": "Gamba tesa tirata verso il petto con l'elastico.",
    "equipment": "Elastico"
  },
  {
    "id": "mobilita--rullo-sulle-tibie",
    "name": "Rullo sulle tibie",
    "category": "mobilita",
    "description": "Massaggio con il rullo sulla parte anteriore della gamba.",
    "equipment": "Foam roller"
  },
  {
    "id": "mobilita--rullo-su-quadricipiti-e-adduttori",
    "name": "Rullo su quadricipiti e adduttori",
    "category": "mobilita",
    "description": "Massaggio miofasciale con il rullo.",
    "equipment": "Foam roller"
  },
  {
    "id": "mobilita--rullo-sulla-schiena-alta",
    "name": "Rullo sulla schiena alta",
    "category": "mobilita",
    "description": "Rullo sotto le scapole per mobilità toracica.",
    "equipment": "Foam roller"
  },
  {
    "id": "mobilita--pallina-sotto-il-piede",
    "name": "Pallina sotto il piede",
    "category": "mobilita",
    "description": "Massaggio della pianta del piede con una pallina.",
    "equipment": "Pallina"
  },
  {
    "id": "mobilita--respirazione-diaframmatica",
    "name": "Respirazione diaframmatica",
    "category": "mobilita",
    "description": "Sdraiati, respiri lenti con la pancia per il recupero.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--scorpione",
    "name": "Scorpione",
    "category": "mobilita",
    "description": "A pancia in giù, portare il piede verso la mano opposta.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--allungamento-laterale-del-busto",
    "name": "Allungamento laterale del busto",
    "category": "mobilita",
    "description": "In piedi, braccio sopra la testa e inclinazione laterale.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--ciclo-di-mobilita-articolare-completo",
    "name": "Ciclo di mobilità articolare completo",
    "category": "mobilita",
    "description": "Dalle caviglie al collo, ogni articolazione per 30 secondi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--camminata-con-ginocchio-al-petto",
    "name": "Camminata con ginocchio al petto",
    "category": "mobilita",
    "description": "Camminata tirando il ginocchio al petto a ogni passo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--camminata-con-calcio-teso",
    "name": "Camminata con calcio teso",
    "category": "mobilita",
    "description": "Calcio teso in avanti a toccare la mano in camminata.",
    "equipment": "Corpo libero"
  },
  {
    "id": "mobilita--hip-airplane",
    "name": "Hip airplane",
    "category": "mobilita",
    "description": "Su una gamba, busto in avanti, ruotare il bacino aprendo e chiudendo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--plank-frontale",
    "name": "Plank frontale",
    "category": "core",
    "description": "Plank sugli avambracci con corpo in linea.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--plank-laterale",
    "name": "Plank laterale",
    "category": "core",
    "description": "Plank su un avambraccio, anca alta.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--plank-laterale-con-rotazione",
    "name": "Plank laterale con rotazione",
    "category": "core",
    "description": "Dal plank laterale, ruotare il braccio sotto il busto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--plank-con-tocco-spalle",
    "name": "Plank con tocco spalle",
    "category": "core",
    "description": "In plank sulle mani, toccare la spalla opposta senza ruotare.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--hollow-hold",
    "name": "Hollow hold",
    "category": "core",
    "description": "Sdraiati, schiena a terra, braccia e gambe sollevate.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--hollow-rock",
    "name": "Hollow rock",
    "category": "core",
    "description": "Dondolio in posizione hollow.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--crunch",
    "name": "Crunch",
    "category": "core",
    "description": "Sollevamento delle spalle da terra con addome contratto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--crunch-alla-thailandese",
    "name": "Crunch alla thailandese",
    "category": "core",
    "description": "Sit-up completo con le mani in guardia come nelle palestre thai.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--sit-up-con-pugni",
    "name": "Sit-up con pugni",
    "category": "core",
    "description": "Ogni risalita termina con jab-diretto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--sit-up-con-palla-medica",
    "name": "Sit-up con palla medica",
    "category": "core",
    "description": "Sit-up lanciando la palla al compagno in risalita.",
    "equipment": "Palla medica"
  },
  {
    "id": "core--russian-twist",
    "name": "Russian twist",
    "category": "core",
    "description": "Seduti, piedi sollevati, rotazioni del busto.",
    "equipment": "Palla medica"
  },
  {
    "id": "core--russian-twist-con-pugni",
    "name": "Russian twist con pugni",
    "category": "core",
    "description": "Rotazioni del busto alternando ganci in aria.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--bicicletta",
    "name": "Bicicletta",
    "category": "core",
    "description": "Gomito al ginocchio opposto alternato.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--sollevamento-gambe-a-terra",
    "name": "Sollevamento gambe a terra",
    "category": "core",
    "description": "Gambe tese sollevate e abbassate lentamente.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--sollevamento-gambe-alla-sbarra",
    "name": "Sollevamento gambe alla sbarra",
    "category": "core",
    "description": "Appesi, portare le ginocchia o i piedi in alto.",
    "equipment": "Sbarra"
  },
  {
    "id": "core--toes-to-bar",
    "name": "Toes to bar",
    "category": "core",
    "description": "Appesi, piedi a toccare la sbarra.",
    "equipment": "Sbarra"
  },
  {
    "id": "core--dead-bug",
    "name": "Dead bug",
    "category": "core",
    "description": "Sdraiati, braccio e gamba opposti si allungano con schiena a terra.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--bird-dog",
    "name": "Bird dog",
    "category": "core",
    "description": "A quattro zampe, braccio e gamba opposti tesi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--v-up",
    "name": "V-up",
    "category": "core",
    "description": "Busto e gambe si sollevano insieme a formare una V.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--ab-wheel",
    "name": "Ab wheel",
    "category": "core",
    "description": "Ruota per addominali, rotolata in avanti e ritorno.",
    "equipment": "Ab wheel"
  },
  {
    "id": "core--pallof-press",
    "name": "Pallof press",
    "category": "core",
    "description": "Resistenza alla rotazione con elastico o cavo.",
    "equipment": "Elastico"
  },
  {
    "id": "core--woodchop-al-cavo",
    "name": "Woodchop al cavo",
    "category": "core",
    "description": "Rotazione diagonale dall'alto al basso al cavo.",
    "equipment": "Cavo"
  },
  {
    "id": "core--woodchop-inverso",
    "name": "Woodchop inverso",
    "category": "core",
    "description": "Rotazione diagonale dal basso verso l'alto.",
    "equipment": "Cavo"
  },
  {
    "id": "core--palla-medica-sull-addome",
    "name": "Palla medica sull'addome",
    "category": "core",
    "description": "Il compagno lascia cadere la palla sull'addome contratto.",
    "equipment": "Palla medica"
  },
  {
    "id": "core--condizionamento-addominale-con-pugni",
    "name": "Condizionamento addominale con pugni",
    "category": "core",
    "description": "Il compagno colpisce leggero l'addome contratto.",
    "equipment": "Compagno"
  },
  {
    "id": "core--teep-sull-addome",
    "name": "Teep sull'addome",
    "category": "core",
    "description": "Il compagno calcia leggero l'addome in plank o in piedi.",
    "equipment": "Compagno"
  },
  {
    "id": "core--ginocchiate-sull-addome",
    "name": "Ginocchiate sull'addome",
    "category": "core",
    "description": "Il compagno sale con il ginocchio sulla pancia contratta, con controllo.",
    "equipment": "Compagno"
  },
  {
    "id": "core--plank-con-calcio",
    "name": "Plank con calcio",
    "category": "core",
    "description": "In plank, portare il ginocchio al gomito opposto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--plank-camminato",
    "name": "Plank camminato",
    "category": "core",
    "description": "Passare da avambracci a mani e ritorno.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--copenhagen-plank",
    "name": "Copenhagen plank",
    "category": "core",
    "description": "Plank laterale con la gamba superiore su una panca.",
    "equipment": "Panca"
  },
  {
    "id": "core--suitcase-carry",
    "name": "Suitcase carry",
    "category": "core",
    "description": "Camminata con un carico solo da un lato, busto dritto.",
    "equipment": "Kettlebell"
  },
  {
    "id": "core--bear-plank",
    "name": "Bear plank",
    "category": "core",
    "description": "A quattro zampe, ginocchia sollevate da terra, tenuta.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--scalatore-lento",
    "name": "Scalatore lento",
    "category": "core",
    "description": "Mountain climber lento con ginocchio al petto controllato.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--l-sit",
    "name": "L-sit",
    "category": "core",
    "description": "Corpo sostenuto sulle mani, gambe tese davanti.",
    "equipment": "Parallele"
  },
  {
    "id": "core--dragon-flag",
    "name": "Dragon flag",
    "category": "core",
    "description": "Corpo rigido sollevato tenendo la panca dietro la testa.",
    "equipment": "Panca"
  },
  {
    "id": "core--rotazioni-con-elastico-in-guardia",
    "name": "Rotazioni con elastico in guardia",
    "category": "core",
    "description": "In guardia, rotazione del busto contro l'elastico come nel gancio.",
    "equipment": "Elastico"
  },
  {
    "id": "core--lancio-palla-medica-dalla-schiena-a-terra",
    "name": "Lancio palla medica dalla schiena a terra",
    "category": "core",
    "description": "Sdraiati, sit-up e lancio della palla al compagno.",
    "equipment": "Palla medica"
  },
  {
    "id": "core--superman",
    "name": "Superman",
    "category": "core",
    "description": "A pancia in giù, braccia e gambe sollevate.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--estensioni-lombari",
    "name": "Estensioni lombari",
    "category": "core",
    "description": "Sollevamento del busto alla panca per lombari.",
    "equipment": "Panca"
  },
  {
    "id": "core--windshield-wiper",
    "name": "Windshield wiper",
    "category": "core",
    "description": "Sdraiati, gambe unite che oscillano da un lato all'altro.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--side-bend-con-manubrio",
    "name": "Side bend con manubrio",
    "category": "core",
    "description": "Inclinazione laterale del busto con un manubrio.",
    "equipment": "Manubrio"
  },
  {
    "id": "core--flutter-kick",
    "name": "Flutter kick",
    "category": "core",
    "description": "Sdraiati, gambe tese che sbattono su e giù.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--scissor-kick",
    "name": "Scissor kick",
    "category": "core",
    "description": "Sdraiati, gambe tese che si incrociano.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--sit-up-con-torsione",
    "name": "Sit-up con torsione",
    "category": "core",
    "description": "Sit-up portando il gomito al ginocchio opposto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--plank-con-braccio-e-gamba-sollevati",
    "name": "Plank con braccio e gamba sollevati",
    "category": "core",
    "description": "Plank sulle mani sollevando braccio e gamba opposti.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--rotolamento-sulla-schiena-e-alzata",
    "name": "Rotolamento sulla schiena e alzata",
    "category": "core",
    "description": "Rotolare indietro e tornare in piedi senza mani.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--gomitate-in-sit-up",
    "name": "Gomitate in sit-up",
    "category": "core",
    "description": "A ogni risalita del sit-up, gomitata orizzontale.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--ginocchia-al-petto-da-seduti",
    "name": "Ginocchia al petto da seduti",
    "category": "core",
    "description": "Seduti, busto inclinato, portare le ginocchia al petto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "core--stir-the-pot",
    "name": "Stir the pot",
    "category": "core",
    "description": "Avambracci sulla fitball, piccoli cerchi tenendo il plank.",
    "equipment": "Fitball"
  },
  {
    "id": "core--landmine-rotazioni",
    "name": "Landmine rotazioni",
    "category": "core",
    "description": "Bilanciere ancorato portato da un fianco all'altro.",
    "equipment": "Bilanciere"
  },
  {
    "id": "core--turkish-get-up",
    "name": "Turkish get-up",
    "category": "core",
    "description": "Da sdraiato a in piedi con la kettlebell sopra la testa.",
    "equipment": "Kettlebell"
  },
  {
    "id": "core--respirazione-con-addome-contratto",
    "name": "Respirazione con addome contratto",
    "category": "core",
    "description": "Espirazione forzata e contrazione, come al momento dell'impatto.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--passo-avanti-e-indietro-in-guardia",
    "name": "Passo avanti e indietro in guardia",
    "category": "agilita",
    "description": "Spostamenti brevi mantenendo la distanza dei piedi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--passo-laterale-in-guardia",
    "name": "Passo laterale in guardia",
    "category": "agilita",
    "description": "Spostamenti laterali senza incrociare i piedi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--passo-a-quattro-direzioni",
    "name": "Passo a quattro direzioni",
    "category": "agilita",
    "description": "Avanti, indietro, destra e sinistra al comando.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--pivot-sul-piede-anteriore",
    "name": "Pivot sul piede anteriore",
    "category": "agilita",
    "description": "Rotazione sul piede anteriore per cambiare angolo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--pivot-e-calcio",
    "name": "Pivot e calcio",
    "category": "agilita",
    "description": "Pivot per uscire dalla linea e calcio circolare.",
    "equipment": "Sacco"
  },
  {
    "id": "agilita--uscita-a-45-gradi",
    "name": "Uscita a 45 gradi",
    "category": "agilita",
    "description": "Passo in diagonale per uscire dalla linea d'attacco.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--taglio-dell-angolo",
    "name": "Taglio dell'angolo",
    "category": "agilita",
    "description": "Muoversi per chiudere il compagno all'angolo del ring.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--uscita-dall-angolo",
    "name": "Uscita dall'angolo",
    "category": "agilita",
    "description": "Uscire dall'angolo con pivot e passi laterali.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--lotta-per-il-centro",
    "name": "Lotta per il centro",
    "category": "agilita",
    "description": "Due atleti cercano di tenere il centro del ring.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--gioco-dello-specchio",
    "name": "Gioco dello specchio",
    "category": "agilita",
    "description": "L'allievo copia i movimenti del compagno in guardia.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--scaletta-un-piede-per-quadrato",
    "name": "Scaletta un piede per quadrato",
    "category": "agilita",
    "description": "Corsa veloce con un appoggio per casella.",
    "equipment": "Scaletta"
  },
  {
    "id": "agilita--scaletta-due-piedi-per-quadrato",
    "name": "Scaletta due piedi per quadrato",
    "category": "agilita",
    "description": "Due appoggi per casella, ritmo alto.",
    "equipment": "Scaletta"
  },
  {
    "id": "agilita--scaletta-laterale",
    "name": "Scaletta laterale",
    "category": "agilita",
    "description": "Spostamento laterale nella scaletta.",
    "equipment": "Scaletta"
  },
  {
    "id": "agilita--scaletta-dentro-fuori",
    "name": "Scaletta dentro-fuori",
    "category": "agilita",
    "description": "Piedi dentro e fuori dalla casella alternati.",
    "equipment": "Scaletta"
  },
  {
    "id": "agilita--scaletta-con-pugni",
    "name": "Scaletta con pugni",
    "category": "agilita",
    "description": "Scaletta e jab-diretto alla fine di ogni passaggio.",
    "equipment": "Scaletta"
  },
  {
    "id": "agilita--coni-a-t",
    "name": "Coni a T",
    "category": "agilita",
    "description": "Scatto avanti, laterale e indietro sui coni a forma di T.",
    "equipment": "Coni"
  },
  {
    "id": "agilita--coni-a-stella",
    "name": "Coni a stella",
    "category": "agilita",
    "description": "Dal centro, scatti verso coni disposti a stella.",
    "equipment": "Coni"
  },
  {
    "id": "agilita--slalom-tra-i-coni",
    "name": "Slalom tra i coni",
    "category": "agilita",
    "description": "Corsa a slalom tra coni ravvicinati.",
    "equipment": "Coni"
  },
  {
    "id": "agilita--slalom-in-guardia",
    "name": "Slalom in guardia",
    "category": "agilita",
    "description": "Slalom tra i coni restando in guardia.",
    "equipment": "Coni"
  },
  {
    "id": "agilita--navette-laterali",
    "name": "Navette laterali",
    "category": "agilita",
    "description": "Spostamenti laterali rapidi tra due linee.",
    "equipment": "Coni"
  },
  {
    "id": "agilita--corda-con-cambio-piedi",
    "name": "Corda con cambio piedi",
    "category": "agilita",
    "description": "Saltelli alla corda alternando i piedi.",
    "equipment": "Corda"
  },
  {
    "id": "agilita--corda-incrociata",
    "name": "Corda incrociata",
    "category": "agilita",
    "description": "Salti con incrocio delle braccia.",
    "equipment": "Corda"
  },
  {
    "id": "agilita--corda-su-un-piede",
    "name": "Corda su un piede",
    "category": "agilita",
    "description": "Salti alla corda su un solo piede.",
    "equipment": "Corda"
  },
  {
    "id": "agilita--corda-con-boxer-step",
    "name": "Corda con boxer step",
    "category": "agilita",
    "description": "Corda con il passo del pugile, da un piede all'altro.",
    "equipment": "Corda"
  },
  {
    "id": "agilita--corda-con-ginocchia-alte",
    "name": "Corda con ginocchia alte",
    "category": "agilita",
    "description": "Corda con skip alto.",
    "equipment": "Corda"
  },
  {
    "id": "agilita--corda-laterale",
    "name": "Corda laterale",
    "category": "agilita",
    "description": "Salti alla corda spostandosi lateralmente.",
    "equipment": "Corda"
  },
  {
    "id": "agilita--salti-sul-posto-in-guardia",
    "name": "Salti sul posto in guardia",
    "category": "agilita",
    "description": "Saltelli leggeri sulle punte come nel ring.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--danza-thai-ritmo-del-passo",
    "name": "Danza thai (ritmo del passo)",
    "category": "agilita",
    "description": "Movimento ritmico thai, peso indietro e gamba anteriore leggera.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--equilibrio-su-una-gamba",
    "name": "Equilibrio su una gamba",
    "category": "agilita",
    "description": "Tenere la posizione della gamba d'appoggio del calcio.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--equilibrio-su-una-gamba-a-occhi-chiusi",
    "name": "Equilibrio su una gamba a occhi chiusi",
    "category": "agilita",
    "description": "Equilibrio monopodalico a occhi chiusi.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--calcio-con-ritorno-in-guardia-su-un-piede",
    "name": "Calcio con ritorno in guardia su un piede",
    "category": "agilita",
    "description": "Calcio senza appoggiare il piede, poi ritorno in guardia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--equilibrio-sul-bosu",
    "name": "Equilibrio sul bosu",
    "category": "agilita",
    "description": "Posizione di guardia sul bosu.",
    "equipment": "Bosu"
  },
  {
    "id": "agilita--calci-sul-bosu",
    "name": "Calci sul bosu",
    "category": "agilita",
    "description": "Calci lenti con la gamba d'appoggio sul bosu.",
    "equipment": "Bosu"
  },
  {
    "id": "agilita--linea-a-terra",
    "name": "Linea a terra",
    "category": "agilita",
    "description": "Spostamenti avanti e indietro senza perdere la linea dei piedi.",
    "equipment": "Nastro adesivo"
  },
  {
    "id": "agilita--cerchio-del-ring",
    "name": "Cerchio del ring",
    "category": "agilita",
    "description": "Muoversi in cerchio intorno al compagno in guardia.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--cambio-direzione-al-segnale",
    "name": "Cambio direzione al segnale",
    "category": "agilita",
    "description": "Al fischio, cambiare direzione di movimento.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--shadow-con-spostamenti",
    "name": "Shadow con spostamenti",
    "category": "agilita",
    "description": "Shadow concentrato solo su passi e angoli.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--shadow-con-rotazioni",
    "name": "Shadow con rotazioni",
    "category": "agilita",
    "description": "Shadow dopo ogni combinazione con pivot.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--jab-e-passo-laterale",
    "name": "Jab e passo laterale",
    "category": "agilita",
    "description": "Jab e immediato passo laterale fuori linea.",
    "equipment": "Sacco"
  },
  {
    "id": "agilita--combinazione-e-uscita",
    "name": "Combinazione e uscita",
    "category": "agilita",
    "description": "Combinazione al sacco e uscita con passo laterale.",
    "equipment": "Sacco"
  },
  {
    "id": "agilita--ingresso-e-uscita-dalla-distanza",
    "name": "Ingresso e uscita dalla distanza",
    "category": "agilita",
    "description": "Entrare in distanza con il jab e uscire subito.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--gioco-della-distanza-con-il-bastone",
    "name": "Gioco della distanza con il bastone",
    "category": "agilita",
    "description": "Il maestro allunga un bastone, l'allievo entra ed esce dalla distanza.",
    "equipment": "Bastone"
  },
  {
    "id": "agilita--passo-indietro-e-teep",
    "name": "Passo indietro e teep",
    "category": "agilita",
    "description": "Arretrare e fermare il compagno con il teep.",
    "equipment": "Compagno"
  },
  {
    "id": "agilita--passo-in-avanti-e-ginocchiata",
    "name": "Passo in avanti e ginocchiata",
    "category": "agilita",
    "description": "Avanzare e chiudere con la ginocchiata.",
    "equipment": "Sacco"
  },
  {
    "id": "agilita--sprawl-e-ritorno-in-guardia",
    "name": "Sprawl e ritorno in guardia",
    "category": "agilita",
    "description": "Sprawl rapido e ritorno in guardia.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--rotolamento-e-alzata-in-guardia",
    "name": "Rotolamento e alzata in guardia",
    "category": "agilita",
    "description": "Capriola in avanti e ritorno in guardia.",
    "equipment": "Tappeto"
  },
  {
    "id": "agilita--lancio-e-cattura-palla-in-guardia",
    "name": "Lancio e cattura palla in guardia",
    "category": "agilita",
    "description": "Muoversi in guardia lanciando e prendendo una palla.",
    "equipment": "Palla da tennis"
  },
  {
    "id": "agilita--coordinazione-braccia-gambe",
    "name": "Coordinazione braccia-gambe",
    "category": "agilita",
    "description": "Combinazioni di jab e teep alternati in ritmo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--shadow-con-ritmo-musicale",
    "name": "Shadow con ritmo musicale",
    "category": "agilita",
    "description": "Shadow seguendo il tempo della musica thai.",
    "equipment": "Musica"
  },
  {
    "id": "agilita--salti-ostacoli-laterali",
    "name": "Salti ostacoli laterali",
    "category": "agilita",
    "description": "Salti laterali a piedi pari oltre ostacoli bassi.",
    "equipment": "Ostacoli"
  },
  {
    "id": "agilita--passo-e-cambio-guardia",
    "name": "Passo e cambio guardia",
    "category": "agilita",
    "description": "Avanzare cambiando guardia a ogni passo.",
    "equipment": "Corpo libero"
  },
  {
    "id": "agilita--pivot-a-180-gradi",
    "name": "Pivot a 180 gradi",
    "category": "agilita",
    "description": "Rotazione completa sul piede anteriore.",
    "equipment": "Corpo libero"
  },
  {
    "id": "clinch--presa-al-collo-plum",
    "name": "Presa al collo (plum)",
    "category": "clinch",
    "description": "Mani incrociate dietro la testa dell'avversario, gomiti stretti.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--lotta-per-la-posizione-delle-braccia",
    "name": "Lotta per la posizione delle braccia",
    "category": "clinch",
    "description": "Lotta continua per ottenere le prese interne.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--swimming-nuoto-delle-braccia",
    "name": "Swimming (nuoto delle braccia)",
    "category": "clinch",
    "description": "Inserire le braccia all'interno di quelle del compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--presa-sopra-e-sotto",
    "name": "Presa sopra e sotto",
    "category": "clinch",
    "description": "Una mano al collo e una sotto il braccio dell'avversario.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--doppia-sottoascella",
    "name": "Doppia sottoascella",
    "category": "clinch",
    "description": "Entrambe le braccia sotto le ascelle del compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--presa-al-bicipite",
    "name": "Presa al bicipite",
    "category": "clinch",
    "description": "Controllo dei bicipiti per bloccare le gomitate.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--postura-nel-clinch",
    "name": "Postura nel clinch",
    "category": "clinch",
    "description": "Anche avanti, schiena dritta, testa alta.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchiata-dritta-nel-clinch",
    "name": "Ginocchiata dritta nel clinch",
    "category": "clinch",
    "description": "Ginocchiata dritta controllando il collo.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchiata-laterale-nel-clinch",
    "name": "Ginocchiata laterale nel clinch",
    "category": "clinch",
    "description": "Ginocchiata curva al fianco dal clinch.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchiata-alle-cosce",
    "name": "Ginocchiata alle cosce",
    "category": "clinch",
    "description": "Ginocchiate brevi alle cosce dell'avversario.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchiata-al-corpo-in-serie",
    "name": "Ginocchiata al corpo in serie",
    "category": "clinch",
    "description": "Ginocchiate alternate al corpo dal plum.",
    "equipment": "Sacco"
  },
  {
    "id": "clinch--ginocchiate-al-sacco-da-clinch",
    "name": "Ginocchiate al sacco da clinch",
    "category": "clinch",
    "description": "Abbracciare il sacco e colpire con ginocchiate.",
    "equipment": "Sacco"
  },
  {
    "id": "clinch--rotazione-dell-avversario",
    "name": "Rotazione dell'avversario",
    "category": "clinch",
    "description": "Girare il compagno con un pivot per sbilanciarlo.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--sbilanciamento-in-avanti",
    "name": "Sbilanciamento in avanti",
    "category": "clinch",
    "description": "Tirare il collo e girare il compagno in avanti.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--sbilanciamento-laterale",
    "name": "Sbilanciamento laterale",
    "category": "clinch",
    "description": "Tirare e ruotare il compagno lateralmente.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--sbilanciamento-con-il-ginocchio",
    "name": "Sbilanciamento con il ginocchio",
    "category": "clinch",
    "description": "Ginocchiata alla coscia e rotazione per far cadere.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--spazzata-dalla-presa",
    "name": "Spazzata dalla presa",
    "category": "clinch",
    "description": "Dalla presa, spazzare la gamba d'appoggio del compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--proiezione-con-l-anca",
    "name": "Proiezione con l'anca",
    "category": "clinch",
    "description": "Inserire l'anca e proiettare il compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--uscita-dal-plum",
    "name": "Uscita dal plum",
    "category": "clinch",
    "description": "Liberarsi dalla presa al collo con braccio interno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--uscita-con-gomitata",
    "name": "Uscita con gomitata",
    "category": "clinch",
    "description": "Uscire dal clinch con una gomitata.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--uscita-con-spinta-al-viso",
    "name": "Uscita con spinta al viso",
    "category": "clinch",
    "description": "Spingere sul viso dell'avversario per liberarsi.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--uscita-e-calcio",
    "name": "Uscita e calcio",
    "category": "clinch",
    "description": "Uscire dal clinch e colpire subito con il calcio.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--entrata-nel-clinch-dopo-i-pugni",
    "name": "Entrata nel clinch dopo i pugni",
    "category": "clinch",
    "description": "Combinazione di pugni e chiusura nel clinch.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--entrata-nel-clinch-dopo-il-calcio",
    "name": "Entrata nel clinch dopo il calcio",
    "category": "clinch",
    "description": "Calcio circolare, avanzare e prendere il collo.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--entrata-dalla-cattura-del-calcio",
    "name": "Entrata dalla cattura del calcio",
    "category": "clinch",
    "description": "Cattura del calcio e passaggio al clinch.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--gomitata-dalla-presa",
    "name": "Gomitata dalla presa",
    "category": "clinch",
    "description": "Liberare un braccio e colpire con la gomitata.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--gomitata-dopo-la-rottura-del-clinch",
    "name": "Gomitata dopo la rottura del clinch",
    "category": "clinch",
    "description": "Al distacco, gomitata girata o orizzontale.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--contrasto-alla-ginocchiata",
    "name": "Contrasto alla ginocchiata",
    "category": "clinch",
    "description": "Bloccare l'anca dell'avversario per fermare la ginocchiata.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchio-di-guardia",
    "name": "Ginocchio di guardia",
    "category": "clinch",
    "description": "Alzare il ginocchio per bloccare la ginocchiata.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--controllo-della-testa",
    "name": "Controllo della testa",
    "category": "clinch",
    "description": "Tenere la testa del compagno sotto il proprio mento.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--testa-contro-testa",
    "name": "Testa contro testa",
    "category": "clinch",
    "description": "Lotta per la posizione della testa nel clinch.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-libero-leggero",
    "name": "Clinch libero leggero",
    "category": "clinch",
    "description": "Ripresa di clinch libero a bassa intensità.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-a-tema-prese",
    "name": "Clinch a tema prese",
    "category": "clinch",
    "description": "Il clinch si limita alle prese, niente ginocchiate.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-a-tema-sbilanciamenti",
    "name": "Clinch a tema sbilanciamenti",
    "category": "clinch",
    "description": "Clinch con l'obiettivo di sbilanciare il compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-a-tema-ginocchiate",
    "name": "Clinch a tema ginocchiate",
    "category": "clinch",
    "description": "Clinch con ginocchiate leggere a contatto.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--king-of-the-ring",
    "name": "King of the ring",
    "category": "clinch",
    "description": "Chi viene sbilanciato esce, entra il successivo.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-con-elastico",
    "name": "Clinch con elastico",
    "category": "clinch",
    "description": "Il compagno tira l'atleta con l'elastico mentre tiene il plum.",
    "equipment": "Elastico"
  },
  {
    "id": "clinch--clinch-con-giubbotto-zavorrato",
    "name": "Clinch con giubbotto zavorrato",
    "category": "clinch",
    "description": "Clinch con giubbotto zavorrato per la resistenza.",
    "equipment": "Giubbotto"
  },
  {
    "id": "clinch--rinforzo-collo-per-il-clinch",
    "name": "Rinforzo collo per il clinch",
    "category": "clinch",
    "description": "Il compagno tira la testa dell'atleta in basso, l'atleta resiste.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--presa-sul-sacco-pesante",
    "name": "Presa sul sacco pesante",
    "category": "clinch",
    "description": "Tirare e torcere il sacco come un avversario.",
    "equipment": "Sacco"
  },
  {
    "id": "clinch--rotazione-del-sacco",
    "name": "Rotazione del sacco",
    "category": "clinch",
    "description": "Abbracciare il sacco e ruotarlo con ginocchiate.",
    "equipment": "Sacco"
  },
  {
    "id": "clinch--plum-isometrico",
    "name": "Plum isometrico",
    "category": "clinch",
    "description": "Tenere il plum sul compagno che cerca di raddrizzarsi.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--gioco-delle-mani-al-collo",
    "name": "Gioco delle mani al collo",
    "category": "clinch",
    "description": "Cercare di toccare il collo del compagno evitando le sue mani.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-su-una-gamba",
    "name": "Clinch su una gamba",
    "category": "clinch",
    "description": "Clinch mantenendo l'equilibrio dopo la ginocchiata.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--spinta-e-trazione",
    "name": "Spinta e trazione",
    "category": "clinch",
    "description": "Alternare spinta e trazione per sbilanciare il compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--cambio-da-plum-a-presa-laterale",
    "name": "Cambio da plum a presa laterale",
    "category": "clinch",
    "description": "Passare dalla presa al collo a un braccio sotto.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchiata-e-sbilanciamento",
    "name": "Ginocchiata e sbilanciamento",
    "category": "clinch",
    "description": "Ginocchiata e immediata rotazione del compagno.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-dopo-il-teep-catturato",
    "name": "Clinch dopo il teep catturato",
    "category": "clinch",
    "description": "Teep catturato e trasformato in clinch con ginocchiata.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--difesa-del-collo",
    "name": "Difesa del collo",
    "category": "clinch",
    "description": "Braccia tra sé e il compagno per non farsi chiudere il plum.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--clinch-al-muro",
    "name": "Clinch al muro",
    "category": "clinch",
    "description": "Clinch spingendo il compagno contro le corde o il muro.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--uscita-dalle-corde",
    "name": "Uscita dalle corde",
    "category": "clinch",
    "description": "Liberarsi dal clinch con le spalle alle corde.",
    "equipment": "Compagno"
  },
  {
    "id": "clinch--ginocchiata-saltata-dal-clinch",
    "name": "Ginocchiata saltata dal clinch",
    "category": "clinch",
    "description": "Dal plum, ginocchiata con piccolo salto.",
    "equipment": "Sacco"
  }
];

export const exercisesByCategory = (id: CategoryId): Exercise[] =>
  exercises.filter((e) => e.category === id);
