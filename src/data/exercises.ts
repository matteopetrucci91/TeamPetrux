// Catalogo esercizi Muay Thai — generato, 523 esercizi in 10 categorie e 195 in più per attrezzo.

export type CategoryId = "forza-esplosiva" | "forza-massimale" | "forza-resistente" | "velocita" | "resistenza" | "tecnica" | "mobilita" | "core" | "agilita" | "clinch";

export type ToolId = "corpo-libero" | "compagno" | "palla-medica" | "corda" | "kettlebell" | "elastico" | "sacco" | "pao" | "bilanciere" | "manubri" | "sbarra" | "battle-rope" | "sandbag" | "pneumatico" | "coni-scaletta";

export interface Tool {
  id: ToolId;
  label: string;
  description: string;
}

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
  /** Descrizione breve, una riga. */
  description: string;
  /** Dosaggio consigliato: ripetizioni, serie, tempo o riprese. */
  dose: string;
  /** Spiegazione estesa: esecuzione, punti chiave e utilità per la Muay Thai. */
  details: string;
  equipment?: string;
  /** Gruppo per attrezzo (palla medica, corda, ...), se l'esercizio usa uno di quelli. */
  tool?: ToolId;
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
    "equipment": "Corpo libero",
    "dose": "4 × 5 ripetizioni, recupero 90 s",
    "details": "Piedi alla larghezza delle spalle, scendi a mezzo squat, fermati un istante e salta il più in alto possibile con slancio delle braccia. Atterra sull'avampiede con ginocchia allineate alle punte e ammortizza. Sviluppa la spinta delle gambe che sta alla base di calci, ginocchiate e spostamenti rapidi.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--box-jump",
    "name": "Box jump",
    "category": "forza-esplosiva",
    "description": "Salto a piedi pari sul box, atterraggio stabile e discesa controllata.",
    "equipment": "Box",
    "dose": "4 × 5 ripetizioni, recupero 90 s",
    "details": "Parti in piedi davanti al box, carica rapidamente anche e braccia e salta atterrando morbido al centro con entrambi i piedi, in mezzo squat. Scendi sempre a piedi, senza saltare all'indietro, per proteggere tendini e caviglie. Allena l'estensione esplosiva di anca e ginocchio utile per entrare con ginocchiate e calci."
  },
  {
    "id": "forza-esplosiva--salto-in-lungo-da-fermo",
    "name": "Salto in lungo da fermo",
    "category": "forza-esplosiva",
    "description": "Salto orizzontale a piedi pari con slancio delle braccia.",
    "equipment": "Corpo libero",
    "dose": "4 × 4 salti, recupero 90 s",
    "details": "Da piedi paralleli, porta le braccia indietro piegando le anche e proietta il corpo in avanti con un'estensione completa. Atterra in mezzo squat tenendo la posizione due secondi prima di ripartire. Migliora la potenza orizzontale necessaria per accorciare la distanza e chiudere sull'avversario.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--salto-in-lungo-monopodalico",
    "name": "Salto in lungo monopodalico",
    "category": "forza-esplosiva",
    "description": "Salto in avanti su una gamba con atterraggio sulla stessa.",
    "equipment": "Corpo libero",
    "dose": "3 × 4 per gamba, recupero 90 s",
    "details": "In equilibrio su una gamba, piega leggermente l'anca e salta in avanti atterrando sulla stessa gamba, ginocchio stabile e non rientrante. Mantieni l'atterraggio due secondi. Rinforza la spinta unilaterale e la stabilità della gamba d'appoggio, decisiva quando si calcia o si entra con il teep.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--salti-laterali-sulla-panca",
    "name": "Salti laterali sulla panca",
    "category": "forza-esplosiva",
    "description": "Salti laterali rapidi a piedi pari oltre una panca bassa.",
    "equipment": "Panca",
    "dose": "4 × 10 salti, recupero 60 s",
    "details": "In piedi a lato di una panca bassa, salta a piedi pari da una parte all'altra riducendo al minimo il tempo di contatto a terra. Resta sugli avampiedi con il busto composto. Sviluppa reattività laterale e cambi di direzione rapidi per uscire dalla linea d'attacco."
  },
  {
    "id": "forza-esplosiva--depth-jump",
    "name": "Depth jump",
    "category": "forza-esplosiva",
    "description": "Scendere da un box e rimbalzare subito in un salto verticale.",
    "equipment": "Box",
    "dose": "4 × 4 ripetizioni, recupero 2 min",
    "details": "Da un box di 30-40 cm lasciati cadere (non saltare giù) e appena tocchi terra rimbalza subito in un salto verticale massimale. Il contatto deve essere breve e reattivo, senza affondare. Esercizio pliometrico avanzato: da usare solo con buona base di forza, per migliorare la reattività di gambe e calci."
  },
  {
    "id": "forza-esplosiva--tuck-jump",
    "name": "Tuck jump",
    "category": "forza-esplosiva",
    "description": "Salto verticale portando le ginocchia al petto.",
    "equipment": "Corpo libero",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Da in piedi salta in verticale portando rapidamente le ginocchia al petto, poi distendi le gambe prima di atterrare morbido sugli avampiedi. Concatenale con contatti brevi mantenendo il core attivo. Allena la flessione d'anca esplosiva, la stessa che serve per una ginocchiata potente.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--skater-jump",
    "name": "Skater jump",
    "category": "forza-esplosiva",
    "description": "Balzi laterali da una gamba all'altra con stabilizzazione.",
    "equipment": "Corpo libero",
    "dose": "3 × 6 per lato, recupero 60 s",
    "details": "In equilibrio su una gamba, salta lateralmente atterrando sulla gamba opposta e stabilizzati un istante prima di ripartire. Il ginocchio d'atterraggio resta in linea con il piede e il busto leggermente inclinato in avanti. Migliora gli spostamenti laterali e la stabilità nelle uscite angolate.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--bounding",
    "name": "Bounding",
    "category": "forza-esplosiva",
    "description": "Balzi alternati a lunghi passi, massima spinta da terra.",
    "equipment": "Corpo libero",
    "dose": "4 × 20 m, recupero 90 s",
    "details": "Corri con balzi lunghi e alternati, spingendo con forza ogni appoggio e portando il ginocchio opposto in avanti e in alto. Cerca ampiezza e tempo di volo, non velocità di passo. Sviluppa potenza di spinta unilaterale e coordinazione, utili per entrate rapide e calci in avanzamento.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--affondi-saltati",
    "name": "Affondi saltati",
    "category": "forza-esplosiva",
    "description": "Affondi con cambio gamba in volo.",
    "equipment": "Corpo libero",
    "dose": "3 × 6 per gamba, recupero 90 s",
    "details": "Da posizione di affondo, salta in alto e scambia le gambe in volo, atterrando morbido nell'affondo opposto con il ginocchio posteriore vicino al suolo. Tieni il busto eretto e il ginocchio anteriore stabile. Rinforza le gambe in modo esplosivo e unilaterale, simile ai cambi di peso tra un colpo e l'altro.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--salti-in-guardia-sul-posto",
    "name": "Salti in guardia sul posto",
    "category": "forza-esplosiva",
    "description": "Saltelli esplosivi mantenendo la posizione di guardia.",
    "equipment": "Corpo libero",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "In guardia di Muay Thai, mani alte e mento basso, esegui saltelli rapidi ed elastici sugli avampiedi senza perdere la posizione. Alterna saltelli bassi a qualche spinta più esplosiva in avanti o indietro. Allena la reattività delle caviglie e la prontezza a partire con un colpo da qualsiasi istante.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-al-petto",
    "name": "Lancio palla medica al petto",
    "category": "forza-esplosiva",
    "description": "Spinta esplosiva della palla dal petto contro il muro o al compagno.",
    "equipment": "Palla medica",
    "dose": "4 × 6 lanci, recupero 60 s",
    "details": "In guardia o a piedi paralleli, tieni la palla al petto e spingila con forza contro il muro distendendo completamente le braccia e trasferendo il peso in avanti. Riprendila e ripeti senza pause. Sviluppa la potenza di spinta di petto e tricipiti per diretti e uscite dal clinch.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-rotazionale",
    "name": "Lancio palla medica rotazionale",
    "category": "forza-esplosiva",
    "description": "Lancio laterale contro il muro ruotando anca e spalle come in un gancio.",
    "equipment": "Palla medica",
    "dose": "3 × 6 per lato, recupero 60 s",
    "details": "Di fianco al muro, carica la palla sull'anca posteriore e lanciala ruotando piede, anca e spalle in sequenza, con le braccia che seguono il busto. La forza nasce da terra, non dalle braccia. Trasferisce la potenza rotazionale a ganci, calci circolari e gomitate.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--slam-palla-medica",
    "name": "Slam palla medica",
    "category": "forza-esplosiva",
    "description": "Sollevare la palla sopra la testa e schiacciarla a terra con forza.",
    "equipment": "Palla medica",
    "dose": "4 × 8 ripetizioni, recupero 60 s",
    "details": "Porta la palla sopra la testa salendo sulle punte, poi schiacciala a terra con tutta la forza flettendo anche e addome. Usa una palla che non rimbalza e tieni la schiena neutra. Allena la catena anteriore e la potenza dall'alto verso il basso, utile per gomitate e controllo nel clinch.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-da-diretto",
    "name": "Lancio palla medica da diretto",
    "category": "forza-esplosiva",
    "description": "Lancio con una mano imitando il diretto posteriore.",
    "equipment": "Palla medica",
    "dose": "3 × 6 per lato, recupero 60 s",
    "details": "In guardia, tieni una palla leggera (2-3 kg) all'altezza della spalla posteriore e lanciala contro il muro con un braccio, ruotando il piede e l'anca come nel diretto. Chiudi l'altra mano a protezione del viso. Rende il diretto più esplosivo collegando gambe, anca e braccio.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--lancio-palla-medica-sopra-la-testa-all-indietro",
    "name": "Lancio palla medica sopra la testa all'indietro",
    "category": "forza-esplosiva",
    "description": "Da mezzo squat, lancio esplosivo della palla all'indietro.",
    "equipment": "Palla medica",
    "dose": "4 × 5 lanci, recupero 90 s",
    "details": "Tieni la palla tra le gambe in mezzo squat, poi estendi esplosivamente anche e ginocchia lanciandola all'indietro sopra la testa il più lontano possibile. Controlla che lo spazio dietro sia libero. Allena l'estensione totale dell'anca, motore di salti, ginocchiate e calci.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--piegamenti-esplosivi",
    "name": "Piegamenti esplosivi",
    "category": "forza-esplosiva",
    "description": "Piegamento con stacco delle mani da terra.",
    "equipment": "Corpo libero",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "In posizione di piegamento con corpo in linea, scendi controllato e spingi con forza così che le mani si stacchino da terra. Atterra con gomiti leggermente piegati e riparti subito. Sviluppa la potenza di spinta di petto e braccia, utile per pugni più incisivi.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--piegamenti-con-battuta-di-mani",
    "name": "Piegamenti con battuta di mani",
    "category": "forza-esplosiva",
    "description": "Piegamento esplosivo con battito delle mani in volo.",
    "equipment": "Corpo libero",
    "dose": "4 × 5 ripetizioni, recupero 90 s",
    "details": "Come un piegamento esplosivo, ma spingi abbastanza da battere le mani in volo prima di riappoggiarle. Mantieni addome e glutei contratti per non inarcare la schiena. Se la tecnica cala, torna al piegamento esplosivo semplice. Migliora velocità e forza reattiva della parte alta.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--piegamenti-sfalsati-esplosivi",
    "name": "Piegamenti sfalsati esplosivi",
    "category": "forza-esplosiva",
    "description": "Piegamento esplosivo cambiando la mano su un rialzo.",
    "equipment": "Palla medica",
    "dose": "3 × 6 ripetizioni, recupero 90 s",
    "details": "Una mano su una palla medica e l'altra a terra: spingi in modo esplosivo e sposta il corpo lateralmente in volo, scambiando la mano sulla palla. Corpo rigido e core attivo durante tutto il movimento. Allena potenza e coordinazione asimmetrica delle braccia, come nelle combinazioni di pugni.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--kettlebell-swing",
    "name": "Kettlebell swing",
    "category": "forza-esplosiva",
    "description": "Slancio della kettlebell con estensione esplosiva dell'anca.",
    "equipment": "Kettlebell",
    "dose": "4 × 10 ripetizioni, recupero 60 s",
    "details": "Con piedi oltre la larghezza delle spalle, piega le anche portando la kettlebell tra le gambe e spingi le anche in avanti con forza fino all'altezza del petto. Le braccia accompagnano, il lavoro lo fanno glutei e femorali; schiena sempre neutra. Sviluppa l'estensione d'anca esplosiva alla base di ginocchiate e calci.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-esplosiva--kettlebell-swing-a-un-braccio",
    "name": "Kettlebell swing a un braccio",
    "category": "forza-esplosiva",
    "description": "Swing con una mano, controllo della rotazione del tronco.",
    "equipment": "Kettlebell",
    "dose": "3 × 8 per braccio, recupero 60 s",
    "details": "Esegui lo swing con una sola mano, resistendo alla rotazione del busto e tenendo le spalle squadrate. Spinta d'anca secca e braccio libero che si muove in modo naturale. Rinforza il core anti-rotazione e la potenza unilaterale, utile per stabilità nei colpi e nel clinch.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-esplosiva--power-clean",
    "name": "Power clean",
    "category": "forza-esplosiva",
    "description": "Girata al petto dal pavimento con estensione esplosiva.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni, recupero 2 min",
    "details": "Con il bilanciere a terra e schiena neutra, solleva fino alle ginocchia, poi estendi esplosivamente anche, ginocchia e caviglie e ricevi il bilanciere sulle spalle in mezzo squat. Carico moderato e tecnica perfetta prima di aumentare. Sviluppa potenza totale del corpo, trasferibile a ogni azione esplosiva.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--hang-clean",
    "name": "Hang clean",
    "category": "forza-esplosiva",
    "description": "Girata al petto partendo dalle ginocchia.",
    "equipment": "Bilanciere",
    "dose": "4 × 3 ripetizioni, recupero 2 min",
    "details": "Parti in piedi con il bilanciere appena sopra le ginocchia, anche indietro e schiena dritta; estendi in modo esplosivo e ricevi il bilanciere sulle spalle con gomiti alti. È più semplice da imparare del power clean. Allena la tripla estensione rapida, la stessa che dà forza a ginocchiate e calci.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--push-press",
    "name": "Push press",
    "category": "forza-esplosiva",
    "description": "Spinta sopra la testa aiutata da un piccolo piegamento delle gambe.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 90 s",
    "details": "Con il bilanciere sulle spalle, fai un piccolo piegamento rapido delle ginocchia e usa la spinta delle gambe per portarlo sopra la testa a braccia tese. Core contratto e niente iperestensione della schiena. Insegna a trasferire la forza dalle gambe alle braccia, come nei pugni potenti.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--jump-squat-con-carico-leggero",
    "name": "Jump squat con carico leggero",
    "category": "forza-esplosiva",
    "description": "Squat jump con bilanciere o manubri leggeri.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 2 min",
    "details": "Con bilanciere leggero sulle spalle o manubri in mano (20-30% del massimale), scendi a mezzo squat e salta al massimo. Atterra morbido, stabilizzati e riparti. Il carico deve permettere un salto veloce: se rallenti è troppo pesante. Aumenta la potenza delle gambe per calci e spostamenti.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--snatch-con-manubrio",
    "name": "Snatch con manubrio",
    "category": "forza-esplosiva",
    "description": "Strappo con un manubrio dal pavimento a braccio teso sopra la testa.",
    "equipment": "Manubrio",
    "dose": "3 × 4 per braccio, recupero 90 s",
    "details": "Con il manubrio a terra tra i piedi, estendi esplosivamente le anche e tira il manubrio vicino al corpo fino a bloccarlo sopra la testa a braccio teso. Ricevi con ginocchia leggermente piegate e polso fermo. Sviluppa potenza unilaterale e coordinazione tra gambe, tronco e spalla.",
    "tool": "manubri"
  },
  {
    "id": "forza-esplosiva--landmine-press-rotazionale",
    "name": "Landmine press rotazionale",
    "category": "forza-esplosiva",
    "description": "Spinta del bilanciere ancorato ruotando il piede come nel diretto.",
    "equipment": "Bilanciere",
    "dose": "3 × 6 per lato, recupero 90 s",
    "details": "In guardia con l'estremità del bilanciere ancorato alla spalla posteriore, spingi in avanti ruotando il piede e l'anca come in un diretto fino a braccio teso. Il busto ruota insieme, non solo il braccio. Rinforza la catena del diretto posteriore con un carico progressivo e sicuro.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--landmine-rotazioni-esplosive",
    "name": "Landmine rotazioni esplosive",
    "category": "forza-esplosiva",
    "description": "Rotazioni rapide del bilanciere ancorato da un fianco all'altro.",
    "equipment": "Bilanciere",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "Tieni l'estremità del bilanciere ancorato con le braccia tese davanti al petto e portalo rapidamente da un fianco all'altro ruotando anche e piedi. Controlla la frenata a fine rotazione senza curvare la schiena. Allena la potenza rotazionale del core per ganci, calci circolari e gomitate.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--spinte-con-elastico-da-diretto",
    "name": "Spinte con elastico da diretto",
    "category": "forza-esplosiva",
    "description": "Diretti esplosivi contro la resistenza di un elastico.",
    "equipment": "Elastico",
    "dose": "3 × 8 per braccio, recupero 60 s",
    "details": "Con l'elastico ancorato dietro di te e impugnato, in guardia esegui diretti esplosivi contro la resistenza ritornando subito in guardia. Ruota il piede e l'anca a ogni colpo e controlla il ritorno. Aumenta velocità e potenza del pugno lavorando sulla fase di accelerazione.",
    "tool": "elastico"
  },
  {
    "id": "forza-esplosiva--calci-frontali-con-elastico",
    "name": "Calci frontali con elastico",
    "category": "forza-esplosiva",
    "description": "Teep esplosivi con elastico alla caviglia.",
    "equipment": "Elastico",
    "dose": "3 × 8 per gamba, recupero 60 s",
    "details": "Con l'elastico alla caviglia ancorato dietro, in guardia esegui il teep alzando il ginocchio e spingendo con il tallone in avanti, poi richiama rapidamente. Mantieni l'equilibrio sulla gamba d'appoggio e le mani alte. Rende il teep più esplosivo e rinforza i flessori dell'anca.",
    "tool": "elastico"
  },
  {
    "id": "forza-esplosiva--ginocchiate-con-elastico",
    "name": "Ginocchiate con elastico",
    "category": "forza-esplosiva",
    "description": "Ginocchiate esplosive contro la resistenza dell'elastico.",
    "equipment": "Elastico",
    "dose": "3 × 10 per gamba, recupero 60 s",
    "details": "Con l'elastico alla caviglia ancorato dietro, porta la ginocchiata in avanti e in alto spingendo l'anca, come se tirassi a te la testa dell'avversario. Sali sull'avampiede della gamba d'appoggio e richiama controllato. Sviluppa velocità e potenza della ginocchiata.",
    "tool": "elastico"
  },
  {
    "id": "forza-esplosiva--calci-circolari-esplosivi-al-sacco",
    "name": "Calci circolari esplosivi al sacco",
    "category": "forza-esplosiva",
    "description": "Serie brevi di calci al massimo della potenza, recupero completo.",
    "equipment": "Sacco",
    "dose": "5 × 5 per gamba, recupero 90 s",
    "details": "In guardia davanti al sacco, esegui calci circolari alla massima potenza ruotando completamente il piede d'appoggio e l'anca, tornando in guardia tra un calcio e l'altro. Ogni calcio deve essere al 100%: se la qualità cala, fermati. Trasferisce la forza esplosiva direttamente al gesto tecnico.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--ginocchiate-esplosive-al-sacco",
    "name": "Ginocchiate esplosive al sacco",
    "category": "forza-esplosiva",
    "description": "Ginocchiate singole al massimo della potenza con richiamo rapido.",
    "equipment": "Sacco",
    "dose": "5 × 6 per gamba, recupero 90 s",
    "details": "Al sacco, afferra o simula la presa e porta ginocchiate singole al massimo della potenza spingendo l'anca in avanti, poi richiama subito la gamba. Mantieni il busto alto e l'appoggio sull'avampiede. Allena la potenza della ginocchiata e il rapido ritorno in posizione.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--diretti-esplosivi-al-sacco",
    "name": "Diretti esplosivi al sacco",
    "category": "forza-esplosiva",
    "description": "Diretti singoli alla massima potenza, piede e anca in rotazione.",
    "equipment": "Sacco",
    "dose": "5 × 6 per braccio, recupero 60 s",
    "details": "In guardia, esegui diretti singoli alla massima potenza ruotando piede e anca e chiudendo il pugno all'impatto, poi torna in guardia. Pausa breve tra un colpo e l'altro per mantenere la qualità al massimo. Allena il trasferimento di forza da terra al pugno.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--spinta-della-slitta",
    "name": "Spinta della slitta",
    "category": "forza-esplosiva",
    "description": "Spinta della slitta su brevi distanze alla massima velocità.",
    "equipment": "Slitta",
    "dose": "6 × 15 m, recupero 2 min",
    "details": "Con le braccia tese e il busto inclinato in avanti, spingi la slitta con passi corti e potenti, spingendo con forza dall'avampiede. Carico tale da permettere uno sprint, non una camminata. Sviluppa la forza di spinta di gambe e anche utile nel clinch e per far indietreggiare l'avversario."
  },
  {
    "id": "forza-esplosiva--sprint-in-salita-brevi",
    "name": "Sprint in salita brevi",
    "category": "forza-esplosiva",
    "description": "Sprint di 10-15 metri in salita con recupero completo.",
    "equipment": "Corpo libero",
    "dose": "6 × 10-15 m, recupero 90 s",
    "details": "Su una salita moderata, scatta alla massima velocità con busto inclinato, braccia attive e ginocchia alte, poi torna camminando. Il recupero completo è parte dell'esercizio. Allena accelerazione e potenza delle gambe con un basso impatto sulle articolazioni.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--partenze-da-terra",
    "name": "Partenze da terra",
    "category": "forza-esplosiva",
    "description": "Da sdraiato, alzarsi e scattare per 10 metri.",
    "equipment": "Corpo libero",
    "dose": "6 × 10 m, recupero 60 s",
    "details": "Parti sdraiato a pancia in giù o in su, al segnale alzati il più rapidamente possibile e scatta per 10 metri. Variare la posizione di partenza allena anche la reazione. Migliora la capacità di generare potenza da posizioni sfavorevoli e di rialzarsi rapidamente.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--salti-alla-corda-doppi",
    "name": "Salti alla corda doppi",
    "category": "forza-esplosiva",
    "description": "Salti con doppio passaggio della corda.",
    "equipment": "Corda",
    "dose": "5 × 20 s, recupero 40 s",
    "details": "Con la corda, salta leggermente più in alto del normale e fai passare la corda due volte sotto i piedi con un movimento rapido dei polsi. Resta sugli avampiedi, gambe quasi tese e busto composto. Sviluppa reattività dei polpacci, coordinazione e ritmo.",
    "tool": "corda"
  },
  {
    "id": "forza-esplosiva--salti-con-ostacoli-bassi",
    "name": "Salti con ostacoli bassi",
    "category": "forza-esplosiva",
    "description": "Salti consecutivi a piedi pari oltre ostacoli bassi.",
    "equipment": "Ostacoli",
    "dose": "4 × 5 ostacoli, recupero 90 s",
    "details": "Disponi 5 ostacoli bassi in fila e saltali a piedi pari uno dopo l'altro, con contatti a terra brevi e reattivi. Le ginocchia salgono, le braccia danno slancio e l'atterraggio resta sugli avampiedi. Migliora la forza elastica delle gambe e la capacità di concatenare azioni esplosive.",
    "tool": "coni-scaletta"
  },
  {
    "id": "forza-esplosiva--calci-saltati-jumping-kick",
    "name": "Calci saltati (jumping kick)",
    "category": "forza-esplosiva",
    "description": "Calcio circolare con salto, tecnica e potenza.",
    "equipment": "Sacco",
    "dose": "4 × 4 per lato, recupero 90 s",
    "details": "Da guardia, fai un piccolo passo o una finta, salta e porta il calcio circolare in volo colpendo il sacco con la tibia, poi atterra in guardia. Qualità tecnica prima della potenza; atterra sempre in equilibrio. Sviluppa coordinazione esplosiva e un'arma a sorpresa.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--ginocchiata-volante",
    "name": "Ginocchiata volante",
    "category": "forza-esplosiva",
    "description": "Ginocchiata saltata al sacco con slancio delle braccia.",
    "equipment": "Sacco",
    "dose": "4 × 4 per lato, recupero 90 s",
    "details": "Fai uno o due passi di rincorsa, spingi con la gamba d'appoggio e lancia in alto il ginocchio opposto verso il sacco, aiutandoti con lo slancio delle braccia. Atterra in guardia controllando l'equilibrio. Esalta la potenza di salto e il tempismo di una tecnica decisiva della Muay Thai.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--gomitata-saltata",
    "name": "Gomitata saltata",
    "category": "forza-esplosiva",
    "description": "Gomitata dall'alto al sacco con salto.",
    "equipment": "Sacco",
    "dose": "4 × 4 per lato, recupero 90 s",
    "details": "Avvicinati al sacco, salta e colpisci dall'alto verso il basso con la punta del gomito, sfruttando il peso del corpo nella discesa. Mantieni l'altra mano a protezione del viso e atterra stabile. Allena potenza, coordinazione e tempismo di un colpo spettacolare e pericoloso.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--superman-punch",
    "name": "Superman punch",
    "category": "forza-esplosiva",
    "description": "Finta di calcio e diretto saltato al sacco.",
    "equipment": "Sacco",
    "dose": "4 × 4 per lato, recupero 90 s",
    "details": "Fingi un calcio alzando la gamba posteriore, poi riportala indietro con forza e usala per proiettarti in avanti con un diretto. Il pugno arriva mentre il corpo è in volo. Atterra in guardia con le mani alte. Allena coordinazione esplosiva e la finta per chiudere la distanza.",
    "tool": "sacco"
  },
  {
    "id": "forza-esplosiva--cambio-guardia-saltato",
    "name": "Cambio guardia saltato",
    "category": "forza-esplosiva",
    "description": "Salti esplosivi con cambio guardia in volo.",
    "equipment": "Corpo libero",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "In guardia, salta scambiando il piede avanti con quello dietro e atterra di nuovo in guardia, con mani alte e peso centrato. Cerca rapidità e un contatto a terra breve. Migliora la reattività delle gambe e la capacità di cambiare guardia, utile per preparare calci con la gamba anteriore.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--salto-verticale-su-una-gamba",
    "name": "Salto verticale su una gamba",
    "category": "forza-esplosiva",
    "description": "Salto verticale massimale su una gamba, atterraggio controllato.",
    "equipment": "Corpo libero",
    "dose": "3 × 5 per gamba, recupero 90 s",
    "details": "In appoggio su una gamba, piega leggermente anca e ginocchio e salta in alto con lo slancio del braccio opposto. Atterra sulla stessa gamba, morbido e con il ginocchio in linea con la punta. Sviluppa potenza unilaterale e stabilità per calci e ginocchiate saltate.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--burpee-con-salto-in-alto",
    "name": "Burpee con salto in alto",
    "category": "forza-esplosiva",
    "description": "Burpee chiuso con salto verticale massimale.",
    "equipment": "Corpo libero",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Scendi a terra, porta le gambe indietro, rientra con i piedi sotto le anche e salta in verticale al massimo con le braccia in alto. Cura la qualità del salto più che la velocità di esecuzione. Allena la capacità di generare potenza partendo da terra e cambiando livello rapidamente.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-esplosiva--battle-rope-slam",
    "name": "Battle rope slam",
    "category": "forza-esplosiva",
    "description": "Onde verticali con la corda pesante al massimo della forza.",
    "equipment": "Battle rope",
    "dose": "5 × 15 s, recupero 45 s",
    "details": "In mezzo squat con un capo della corda in ogni mano, solleva le braccia sopra la testa e sbatti le corde a terra con tutta la forza, coinvolgendo anche e addome. Tieni la schiena neutra e i piedi ben piantati. Sviluppa potenza della parte alta e del core sotto fatica breve.",
    "tool": "battle-rope"
  },
  {
    "id": "forza-esplosiva--lancio-laterale-da-ginocchio",
    "name": "Lancio laterale da ginocchio",
    "category": "forza-esplosiva",
    "description": "In ginocchio, lancio rotazionale della palla medica contro il muro.",
    "equipment": "Palla medica",
    "dose": "3 × 6 per lato, recupero 60 s",
    "details": "In ginocchio di fianco al muro, con il busto eretto, carica la palla sull'anca e lanciala ruotando energicamente il tronco. Senza il contributo delle gambe il lavoro è tutto di core e spalle. Isola la rotazione del tronco, fondamentale per ganci, gomitate e calci circolari.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--spinte-di-palla-medica-in-affondo",
    "name": "Spinte di palla medica in affondo",
    "category": "forza-esplosiva",
    "description": "In affondo, lancio dal petto con trasferimento del peso in avanti.",
    "equipment": "Palla medica",
    "dose": "3 × 6 per lato, recupero 60 s",
    "details": "In posizione di affondo con la palla al petto, spingi la palla in avanti con forza trasferendo il peso dalla gamba posteriore all'anteriore. Mantieni il busto stabile e il ginocchio anteriore allineato. Collega la spinta delle gambe a quella delle braccia, come nell'esecuzione dei pugni.",
    "tool": "palla-medica"
  },
  {
    "id": "forza-esplosiva--trap-bar-jump",
    "name": "Trap bar jump",
    "category": "forza-esplosiva",
    "description": "Salto con trap bar caricata leggera.",
    "equipment": "Trap bar",
    "dose": "4 × 4 ripetizioni, recupero 2 min",
    "details": "Dentro la trap bar con carico leggero (20-30% del massimale), scendi a mezzo squat con schiena neutra e salta in alto il più possibile. Atterra morbido, stabilizzati e ripeti. La trap bar permette di caricare il salto in modo sicuro: aumenta la potenza degli arti inferiori.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-esplosiva--salti-sul-gradino-a-una-gamba",
    "name": "Salti sul gradino a una gamba",
    "category": "forza-esplosiva",
    "description": "Salti ripetuti su un gradino basso con una gamba.",
    "equipment": "Gradino",
    "dose": "3 × 8 per gamba, recupero 60 s",
    "details": "In piedi su una gamba davanti a un gradino basso, salta sul gradino e torna a terra in modo rapido e reattivo, sempre sulla stessa gamba. Tieni il ginocchio stabile e il busto composto. Rinforza la reattività di caviglia e polpaccio, utile per spostamenti rapidi e calci."
  },
  {
    "id": "forza-esplosiva--calcio-laterale-con-elastico",
    "name": "Calcio laterale con elastico",
    "category": "forza-esplosiva",
    "description": "Calci di spinta laterali contro la resistenza dell'elastico.",
    "equipment": "Elastico",
    "dose": "3 × 8 per gamba, recupero 60 s",
    "details": "Con l'elastico alla caviglia, alza il ginocchio e spingi il piede di taglio lateralmente con forza, poi richiama controllato. La gamba d'appoggio resta stabile e le mani in guardia. Allena la potenza dei calci di spinta e la stabilità dell'anca.",
    "tool": "elastico"
  },
  {
    "id": "forza-massimale--back-squat",
    "name": "Back squat",
    "category": "forza-massimale",
    "description": "Squat con bilanciere sulla schiena, 3-5 ripetizioni pesanti.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni all'85%, recupero 3 min",
    "details": "Bilanciere appoggiato sui trapezi, piedi alla larghezza delle spalle: scendi controllando fino a rompere il parallelo e risali spingendo il pavimento. Costruisce la forza di base di gambe e anche da cui nascono calci, ginocchiate e spostamenti potenti. Mantieni il core contratto e le ginocchia in linea con le punte dei piedi.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--front-squat",
    "name": "Front squat",
    "category": "forza-massimale",
    "description": "Squat con bilanciere sulle spalle anteriori, busto eretto.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni all'80%, recupero 3 min",
    "details": "Bilanciere sui deltoidi anteriori, gomiti alti e busto verticale: scendi in profondità e risali senza far cadere i gomiti. Rafforza quadricipiti e core anteriore, utili per mantenere la postura eretta in clinch e sotto pressione. Se la presa è scomoda usa la presa incrociata o le cinghie.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--stacco-da-terra",
    "name": "Stacco da terra",
    "category": "forza-massimale",
    "description": "Stacco classico con bilanciere, schiena neutra.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni all'85%, recupero 3-4 min",
    "details": "Piedi sotto il bilanciere, presa appena fuori dalle gambe: spingi con le gambe e porta le anche avanti mantenendo il bilanciere vicino al corpo. Sviluppa tutta la catena posteriore, fondamentale per la potenza dei colpi e la stabilità nel clinch. Schiena neutra sempre: se si arrotonda, il carico è troppo alto.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--stacco-sumo",
    "name": "Stacco sumo",
    "category": "forza-massimale",
    "description": "Stacco a gambe larghe, forte richiamo di adduttori e glutei.",
    "equipment": "Bilanciere",
    "dose": "4 × 4 ripetizioni all'80%, recupero 3 min",
    "details": "Piedi molto larghi e punte extraruotate, presa stretta tra le gambe: spingi le ginocchia in fuori e porta le anche sotto il bilanciere. Rinforza adduttori e glutei, muscoli chiave per la stabilità in guardia e per la potenza delle ginocchiate. Busto il più eretto possibile e bilanciere a contatto con le gambe.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--stacco-rumeno",
    "name": "Stacco rumeno",
    "category": "forza-massimale",
    "description": "Stacco a gambe semi-tese per femorali e glutei.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Parti in piedi con il bilanciere, ginocchia leggermente flesse: spingi indietro le anche facendo scivolare il bilanciere lungo le cosce fino a sentire i femorali in tensione, poi risali. Protegge i femorali dagli infortuni e potenzia l'estensione d'anca usata nei calci. Controlla la discesa in 2-3 secondi.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--stacco-con-trap-bar",
    "name": "Stacco con trap bar",
    "category": "forza-massimale",
    "description": "Stacco con trap bar, più sicuro per la schiena.",
    "equipment": "Trap bar",
    "dose": "5 × 3 ripetizioni pesanti, recupero 3 min",
    "details": "Entra nella trap bar, impugna le maniglie laterali e solleva spingendo con le gambe, busto inclinato e petto aperto. Permette carichi alti con meno stress sulla zona lombare, ideale per costruire forza generale in periodo di sparring intenso. Blocca in alto contraendo i glutei senza iperestendere la schiena.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--panca-piana",
    "name": "Panca piana",
    "category": "forza-massimale",
    "description": "Distensione su panca con bilanciere.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni all'85%, recupero 3 min",
    "details": "Sdraiato con scapole addotte e piedi ben piantati, abbassa il bilanciere a metà petto e spingi fino a braccia tese. Aumenta la forza di spinta di petto, spalle e tricipiti, base per pugni pesanti e per allontanare l'avversario. Usa sempre un compagno di assistenza con carichi elevati.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--panca-inclinata",
    "name": "Panca inclinata",
    "category": "forza-massimale",
    "description": "Distensione su panca inclinata per petto alto e spalle.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Panca a 30-45°, scapole retratte: abbassa il bilanciere sulla parte alta del petto e spingi verso l'alto. Lavora l'angolo di spinta simile a quello di diretti e montanti, rinforzando petto alto e deltoidi anteriori. Non staccare i glutei dalla panca e controlla la discesa.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--panca-con-manubri",
    "name": "Panca con manubri",
    "category": "forza-massimale",
    "description": "Distensione su panca con manubri pesanti.",
    "equipment": "Manubri",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Sdraiato con manubri pesanti, abbassa con gomiti a circa 45° dal busto e spingi unendo leggermente i manubri in alto. Ogni braccio lavora in modo indipendente, correggendo squilibri tra lato forte e lato debole. Porta su i manubri appoggiandoli sulle ginocchia per iniziare in sicurezza.",
    "tool": "manubri"
  },
  {
    "id": "forza-massimale--military-press",
    "name": "Military press",
    "category": "forza-massimale",
    "description": "Spinta del bilanciere sopra la testa in piedi.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni all'80%, recupero 3 min",
    "details": "In piedi, bilanciere sulle clavicole e glutei contratti: spingi in verticale portando la testa leggermente avanti a fine movimento. Rinforza spalle e tricipiti per tenere la guardia alta a lungo e per pugni più solidi. Evita di inarcare la zona lombare: stringi addome e glutei.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--distensioni-con-manubri-in-piedi",
    "name": "Distensioni con manubri in piedi",
    "category": "forza-massimale",
    "description": "Spinta sopra la testa con manubri pesanti.",
    "equipment": "Manubri",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "In piedi, manubri all'altezza delle spalle: spingi sopra la testa senza piegare il busto all'indietro. Sviluppa forza e stabilità delle spalle in modo unilaterale, utile per guardia e clinch. Puoi alternare le braccia per aumentare il lavoro di stabilizzazione del core.",
    "tool": "manubri"
  },
  {
    "id": "forza-massimale--trazioni-zavorrate",
    "name": "Trazioni zavorrate",
    "category": "forza-massimale",
    "description": "Trazioni alla sbarra con peso aggiuntivo.",
    "equipment": "Sbarra",
    "dose": "5 × 3 ripetizioni con zavorra, recupero 3 min",
    "details": "Appeso alla sbarra con zavorra a cintura, scapole depresse: tira fino a portare il mento sopra la sbarra e scendi controllato a braccia tese. Costruisce la forza di trazione di dorsali e bicipiti, fondamentale per controllare la testa dell'avversario nel clinch. Niente slanci con le gambe.",
    "tool": "sbarra"
  },
  {
    "id": "forza-massimale--trazioni-presa-neutra",
    "name": "Trazioni presa neutra",
    "category": "forza-massimale",
    "description": "Trazioni con presa neutra, lente e pesanti.",
    "equipment": "Sbarra",
    "dose": "4 × 4 ripetizioni lente, recupero 2-3 min",
    "details": "Impugna le maniglie parallele, sali in 2 secondi e scendi in 3 mantenendo il corpo fermo. La presa neutra è più gentile per gomiti e spalle e richiama molto bicipiti e brachiale, utili per la presa nel clinch. Aggiungi zavorra quando completi le ripetizioni con facilità.",
    "tool": "sbarra"
  },
  {
    "id": "forza-massimale--rematore-con-bilanciere",
    "name": "Rematore con bilanciere",
    "category": "forza-massimale",
    "description": "Busto flesso, tirata del bilanciere all'ombelico.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Busto inclinato a circa 45°, schiena neutra: tira il bilanciere verso l'ombelico portando i gomiti indietro, poi abbassa controllato. Rinforza dorso e retrattori delle scapole, bilanciando il lavoro di spinta dei pugni e migliorando la postura. Non usare il busto per dare slancio.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--rematore-con-manubrio",
    "name": "Rematore con manubrio",
    "category": "forza-massimale",
    "description": "Tirata pesante con un braccio, appoggio su panca.",
    "equipment": "Manubrio",
    "dose": "4 × 5 per lato, recupero 2 min",
    "details": "Mano e ginocchio su panca, schiena piatta: tira il manubrio verso l'anca con il gomito vicino al corpo. Permette carichi alti su un lato alla volta, rafforzando dorsali e la tirata usata per strappare l'avversario nel clinch. Evita di ruotare il busto per sollevare.",
    "tool": "manubri"
  },
  {
    "id": "forza-massimale--pendlay-row",
    "name": "Pendlay row",
    "category": "forza-massimale",
    "description": "Rematore esplosivo da terra a ogni ripetizione.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni, recupero 2-3 min",
    "details": "Busto quasi parallelo al pavimento, bilanciere a terra: tira esplosivamente verso il petto basso e riappoggia a terra ad ogni ripetizione. Unisce forza massimale e rapidità di attivazione del dorso, come negli strattoni del clinch. Mantieni la schiena rigida e neutra per tutta la serie.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--dip-zavorrati",
    "name": "Dip zavorrati",
    "category": "forza-massimale",
    "description": "Piegamenti alle parallele con zavorra.",
    "equipment": "Parallele",
    "dose": "4 × 5 con zavorra, recupero 2-3 min",
    "details": "Alle parallele con zavorra, scendi finché le spalle arrivano poco sotto i gomiti e risali spingendo forte. Potenzia tricipiti e petto, i motori della distensione completa del braccio nel pugno. Non scendere troppo se hai spalle sensibili e mantieni il busto leggermente inclinato.",
    "tool": "sbarra"
  },
  {
    "id": "forza-massimale--hip-thrust",
    "name": "Hip thrust",
    "category": "forza-massimale",
    "description": "Spinta dell'anca con bilanciere, schiena appoggiata alla panca.",
    "equipment": "Bilanciere",
    "dose": "4 × 6 ripetizioni pesanti, recupero 2 min",
    "details": "Scapole appoggiate alla panca, bilanciere imbottito sulle anche: spingi il bacino in alto fino ad allineare spalle, anche e ginocchia, poi scendi. Rafforza i glutei, cuore della potenza di calci circolari e ginocchiate. In alto mantieni il mento verso il petto e non iperestendere la lombare.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--affondi-bulgari",
    "name": "Affondi bulgari",
    "category": "forza-massimale",
    "description": "Squat a una gamba con piede posteriore su panca.",
    "equipment": "Manubri",
    "dose": "4 × 5 per gamba, recupero 2 min",
    "details": "Piede posteriore sul banco, manubri pesanti in mano: scendi in verticale fino a sfiorare il pavimento con il ginocchio dietro e risali spingendo con la gamba davanti. Sviluppa forza unilaterale ed equilibrio, essenziali per la gamba d'appoggio durante i calci. Ginocchio anteriore stabile, senza collassare verso l'interno.",
    "tool": "manubri"
  },
  {
    "id": "forza-massimale--affondi-con-bilanciere",
    "name": "Affondi con bilanciere",
    "category": "forza-massimale",
    "description": "Affondi in camminata o sul posto con bilanciere.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 per gamba, recupero 2 min",
    "details": "Bilanciere sulla schiena, fai un passo ampio in avanti e scendi fino a 90° con entrambe le ginocchia, poi torna o prosegui in camminata. Rinforza gambe e glutei in un movimento simile a passi e cambi di guardia. Busto eretto e passo abbastanza lungo da non stressare il ginocchio.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--step-up-pesante",
    "name": "Step-up pesante",
    "category": "forza-massimale",
    "description": "Salita su box alto con manubri o bilanciere.",
    "equipment": "Box",
    "dose": "4 × 5 per gamba, recupero 2 min",
    "details": "Davanti a un box all'altezza del ginocchio, appoggia un piede e sali spingendo solo con quella gamba, senza rimbalzare con quella a terra. Allena la forza unilaterale di quadricipiti e glutei richiesta dalle ginocchiate e dall'avanzamento. Scendi in modo controllato e mantieni il ginocchio allineato."
  },
  {
    "id": "forza-massimale--pistol-squat-zavorrato",
    "name": "Pistol squat zavorrato",
    "category": "forza-massimale",
    "description": "Squat su una gamba con peso leggero tenuto davanti.",
    "equipment": "Kettlebell",
    "dose": "4 × 3 per gamba, recupero 2 min",
    "details": "Su una gamba, l'altra tesa in avanti, kettlebell tenuto al petto come contrappeso: scendi lentamente fino in fondo e risali. Sviluppa forza, equilibrio e controllo della gamba d'appoggio, decisivi quando calci o subisci un calcio. Se la profondità è eccessiva, scendi su un box come supporto.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-massimale--squat-con-pausa",
    "name": "Squat con pausa",
    "category": "forza-massimale",
    "description": "Squat con pausa di 2 secondi in basso.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 con pausa di 2 s, recupero 3 min",
    "details": "Esegui lo squat normale ma fermati 2 secondi nel punto più basso mantenendo la tensione, poi risali con decisione. Elimina il rimbalzo elastico e costruisce forza pura dalla posizione bassa, utile per partenze esplosive. Usa circa il 70-75% del carico massimo e non rilassarti in buca.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--box-squat",
    "name": "Box squat",
    "category": "forza-massimale",
    "description": "Squat seduti su box, poi spinta esplosiva.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni, recupero 2-3 min",
    "details": "Scendi all'indietro fino a sederti su un box all'altezza del parallelo, fermati un istante senza rilassarti e risali in modo esplosivo. Allena la partenza da fermo e la catena posteriore, come lo scatto in avanti per entrare a colpire. Siediti in modo controllato, mai lasciarti cadere sul box.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--good-morning",
    "name": "Good morning",
    "category": "forza-massimale",
    "description": "Flessione del busto con bilanciere sulle spalle.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni moderate, recupero 2 min",
    "details": "Bilanciere sulla schiena e ginocchia leggermente flesse: spingi le anche indietro abbassando il busto quasi parallelo al pavimento, poi risali. Rinforza lombari e femorali, proteggendo la schiena da clinch e cadute. Usa carichi moderati e schiena sempre neutra: è un esercizio da eseguire con rigore.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--floor-press",
    "name": "Floor press",
    "category": "forza-massimale",
    "description": "Distensione da terra con bilanciere, lavoro sul blocco del colpo.",
    "equipment": "Bilanciere",
    "dose": "5 × 3 ripetizioni, recupero 2-3 min",
    "details": "Sdraiato a terra, abbassa il bilanciere finché i tricipiti toccano il pavimento, pausa breve e spingi in alto. Rafforza la parte finale della spinta, quella che dà forza all'impatto del pugno, con meno stress sulle spalle. Gomiti a circa 45° dal busto e assistenza per carichi elevati.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--close-grip-bench",
    "name": "Close grip bench",
    "category": "forza-massimale",
    "description": "Panca presa stretta per tricipiti.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Presa alla larghezza delle spalle, abbassa il bilanciere verso il petto basso tenendo i gomiti vicino al corpo e spingi. Potenzia i tricipiti, muscoli che estendono il braccio nei diretti e nelle gomitate. Non stringere troppo la presa per non sovraccaricare i polsi.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--farmer-walk-pesante",
    "name": "Farmer walk pesante",
    "category": "forza-massimale",
    "description": "Camminata con carichi pesanti nelle mani.",
    "equipment": "Manubri",
    "dose": "4 × 30 m, recupero 2 min",
    "details": "Afferra due manubri o kettlebell pesanti, spalle basse e petto alto, e cammina a passi brevi e veloci. Rafforza presa, trapezi e core, qualità che servono per resistere e dominare nel clinch. Non lasciare che le spalle si chiudano in avanti e respira in modo controllato.",
    "tool": "manubri"
  },
  {
    "id": "forza-massimale--suitcase-carry",
    "name": "Suitcase carry",
    "category": "forza-massimale",
    "description": "Camminata con un solo carico, tronco dritto.",
    "equipment": "Kettlebell",
    "dose": "4 × 20 m per lato, recupero 90 s",
    "details": "Tieni un kettlebell pesante in una sola mano e cammina mantenendo busto perfettamente verticale, senza inclinarti verso il carico. Allena gli obliqui e la stabilità laterale, utili per non farsi sbilanciare nel clinch e durante i calci. Cambia mano a ogni serie.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-massimale--turkish-get-up-pesante",
    "name": "Turkish get-up pesante",
    "category": "forza-massimale",
    "description": "Alzata turca con kettlebell pesante, lenta e controllata.",
    "equipment": "Kettlebell",
    "dose": "3 × 2 per lato, recupero 2 min",
    "details": "Da sdraiato con il kettlebell a braccio teso, alzati in piedi passando per gomito, mano, ginocchio, poi torna a terra invertendo le fasi. Costruisce spalle stabili e controllo totale del corpo, utile per rialzarsi e mantenere la guardia sotto fatica. Tieni sempre lo sguardo sul kettlebell e il braccio bloccato.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-massimale--zercher-squat",
    "name": "Zercher squat",
    "category": "forza-massimale",
    "description": "Squat con bilanciere nell'incavo dei gomiti, utile per il clinch.",
    "equipment": "Bilanciere",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Bilanciere nell'incavo dei gomiti, mani unite davanti al petto: scendi in squat profondo mantenendo il busto eretto. Simula la tenuta dell'avversario stretto a sé, rafforzando braccia, core e gambe per il clinch. Usa un pad sul bilanciere per proteggere gli avambracci.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--zercher-carry",
    "name": "Zercher carry",
    "category": "forza-massimale",
    "description": "Camminata con bilanciere nell'incavo dei gomiti.",
    "equipment": "Bilanciere",
    "dose": "4 × 20 m, recupero 2 min",
    "details": "Solleva il bilanciere nell'incavo dei gomiti e cammina con passi corti, busto dritto e addome contratto. Allena la forza di stringere e trasportare un peso davanti al corpo, come quando si controlla l'avversario in clinch. Usa un'imbottitura e non far cadere il bilanciere verso le mani.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--stacco-su-una-gamba",
    "name": "Stacco su una gamba",
    "category": "forza-massimale",
    "description": "Stacco rumeno su una gamba con kettlebell.",
    "equipment": "Kettlebell",
    "dose": "4 × 5 per gamba, recupero 90 s",
    "details": "Su una gamba con kettlebell nella mano opposta, porta il busto in avanti e la gamba libera indietro fino ad avere il corpo quasi orizzontale, poi risali. Rinforza femorali e glutei e migliora l'equilibrio della gamba d'appoggio nei calci. Mantieni le anche allineate, senza aprire il bacino.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-massimale--nordic-curl",
    "name": "Nordic curl",
    "category": "forza-massimale",
    "description": "Discesa controllata del busto con caviglie bloccate per femorali.",
    "equipment": "Corpo libero",
    "dose": "4 × 4 discese lente, recupero 2 min",
    "details": "In ginocchio con le caviglie bloccate da un compagno, scendi in avanti con il corpo dritto il più lentamente possibile, poi aiutati con le mani per risalire. Forza eccentrica dei femorali, la migliore prevenzione contro gli stiramenti da calcio e scatto. Non piegare le anche: corpo rigido come una tavola.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-massimale--calf-raise-con-bilanciere",
    "name": "Calf raise con bilanciere",
    "category": "forza-massimale",
    "description": "Sollevamento sulle punte con carico, per caviglie e spinta.",
    "equipment": "Bilanciere",
    "dose": "4 × 8 ripetizioni, recupero 90 s",
    "details": "Bilanciere sulla schiena, avampiedi su un rialzo: sali sulle punte il più in alto possibile, tieni 1 secondo e scendi lentamente sotto il livello del rialzo. Rafforza polpacci e caviglie per spostamenti sulle punte, rotazioni nei calci e stabilità. Evita rimbalzi e controlla tutta l'ampiezza.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--shrug-con-bilanciere",
    "name": "Shrug con bilanciere",
    "category": "forza-massimale",
    "description": "Scrollate di spalle pesanti per trapezi e collo.",
    "equipment": "Bilanciere",
    "dose": "4 × 6 ripetizioni pesanti, recupero 2 min",
    "details": "In piedi con il bilanciere a braccia tese, solleva le spalle verso le orecchie senza piegare i gomiti, tieni un istante e abbassa. Trapezi forti proteggono il collo dagli impatti e aiutano a resistere alle tirate di testa nel clinch. Non ruotare le spalle: solo movimento verticale.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--ponte-per-il-collo",
    "name": "Ponte per il collo",
    "category": "forza-massimale",
    "description": "Rinforzo del collo in ponte, con cautela e progressione.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 s, recupero 90 s",
    "details": "Partendo da supino con mani a terra a supporto, sollevati in ponte appoggiandoti sulla parte alta della testa e dondola leggermente avanti e indietro. Rinforza il collo, prezioso per assorbire i colpi e non farsi abbassare la testa nel clinch. Usa un materassino, inizia con le mani a sostegno e progredisci lentamente.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-massimale--rinforzo-collo-con-fascia",
    "name": "Rinforzo collo con fascia",
    "category": "forza-massimale",
    "description": "Flessioni ed estensioni del collo con fascia zavorrata.",
    "equipment": "Fascia collo",
    "dose": "3 × 10 per direzione, recupero 90 s",
    "details": "Indossa la fascia zavorrata, busto inclinato in avanti con mani sulle ginocchia, ed esegui flessioni ed estensioni del collo lente e controllate. Un collo forte riduce l'effetto dei colpi alla testa e migliora la resistenza nel clinch. Inizia con carichi leggeri e movimenti senza strappi."
  },
  {
    "id": "forza-massimale--pallof-press-pesante",
    "name": "Pallof press pesante",
    "category": "forza-massimale",
    "description": "Resistenza alla rotazione con cavo o elastico pesante.",
    "equipment": "Cavo",
    "dose": "4 × 8 per lato, recupero 60 s",
    "details": "Di lato al cavo, maniglia al petto: distendi le braccia in avanti resistendo alla rotazione, tieni 2 secondi e riporta al petto. Allena il core anti-rotazione che stabilizza il busto quando colpisci e quando vieni spinto o tirato. Piedi saldi e anche ferme: nessuna torsione."
  },
  {
    "id": "forza-massimale--isometria-al-rack-squat",
    "name": "Isometria al rack (squat)",
    "category": "forza-massimale",
    "description": "Spinta isometrica massimale contro le sicure del rack.",
    "equipment": "Rack",
    "dose": "5 × 6 s di spinta massimale, recupero 2 min",
    "details": "Posiziona il bilanciere sotto le sicure del rack all'altezza di mezzo squat e spingi con tutta la forza contro di esse. Recluta il massimo delle fibre muscolari senza movimento, aumentando la forza nel punto critico. Respira prima, mantieni la schiena neutra e aumenta la spinta in modo progressivo.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--isometria-al-rack-stacco",
    "name": "Isometria al rack (stacco)",
    "category": "forza-massimale",
    "description": "Tirata isometrica massimale dal blocco.",
    "equipment": "Rack",
    "dose": "5 × 6 s di tirata massimale, recupero 2 min",
    "details": "Bilanciere bloccato sotto le sicure all'altezza del ginocchio: assumi la posizione di stacco e tira con la massima intensità. Sviluppa la forza della catena posteriore in sicurezza, senza carichi enormi da gestire. Spalle sopra il bilanciere e schiena piatta, nessuno strattone iniziale.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--spinta-isometrica-al-muro",
    "name": "Spinta isometrica al muro",
    "category": "forza-massimale",
    "description": "Spinta massimale contro il muro in posizione di diretto.",
    "equipment": "Corpo libero",
    "dose": "5 × 8 s per braccio, recupero 60 s",
    "details": "In guardia davanti al muro, appoggia il pugno chiuso o il palmo nella posizione finale del diretto e spingi al massimo con tutto il corpo. Insegna a trasferire la forza da piede, anca e spalla fino al pugno. Mantieni il polso allineato e il tallone posteriore sollevato come nel colpo vero.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-massimale--wall-sit-zavorrato",
    "name": "Wall sit zavorrato",
    "category": "forza-massimale",
    "description": "Posizione seduta al muro con peso sulle cosce.",
    "equipment": "Disco",
    "dose": "4 × 40 s con disco, recupero 90 s",
    "details": "Schiena al muro e cosce parallele al pavimento, appoggia un disco pesante sulle cosce e mantieni la posizione. Rafforza i quadricipiti e la tenuta in posizione flessa, utile per guardia bassa e spostamenti. Ginocchia sopra le caviglie e piedi piatti a terra.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--trazioni-lente-in-eccentrica",
    "name": "Trazioni lente in eccentrica",
    "category": "forza-massimale",
    "description": "Discesa di 5 secondi dalla sbarra, zavorrata.",
    "equipment": "Sbarra",
    "dose": "4 × 3 discese da 5 s, recupero 2 min",
    "details": "Sali sopra la sbarra con un salto o una spinta e scendi in 5 secondi controllati fino a braccia tese, con zavorra se possibile. La fase eccentrica costruisce forza e resistenza dei tendini di dorsali e bicipiti. Mantieni le scapole attive e non lasciarti cadere nell'ultima parte.",
    "tool": "sbarra"
  },
  {
    "id": "forza-massimale--croci-ai-cavi-pesanti",
    "name": "Croci ai cavi pesanti",
    "category": "forza-massimale",
    "description": "Adduzione del braccio al cavo per la catena del gancio.",
    "equipment": "Cavo",
    "dose": "4 × 6 per lato, recupero 90 s",
    "details": "Di lato al cavo alto, braccio leggermente flesso: porta la mano davanti al corpo con un arco simile al gancio e ritorna lentamente. Rinforza petto e spalla anteriore nella traiettoria del gancio. Gomito fisso e busto stabile, senza ruotare per tirare il carico."
  },
  {
    "id": "forza-massimale--lat-machine-pesante",
    "name": "Lat machine pesante",
    "category": "forza-massimale",
    "description": "Tirata alla lat machine con carico alto.",
    "equipment": "Macchina",
    "dose": "4 × 6 ripetizioni, recupero 2 min",
    "details": "Seduto con le cosce bloccate, tira la barra al petto alto portando i gomiti verso i fianchi e risali controllando. Alternativa alle trazioni per costruire dorsali forti, utili per tirare e controllare l'avversario. Non inclinarti troppo all'indietro e non usare slancio."
  },
  {
    "id": "forza-massimale--leg-press",
    "name": "Leg press",
    "category": "forza-massimale",
    "description": "Spinta delle gambe con carico alto.",
    "equipment": "Macchina",
    "dose": "4 × 6 ripetizioni pesanti, recupero 2-3 min",
    "details": "Piedi alla larghezza delle spalle sulla pedana, scendi finché le ginocchia arrivano a circa 90° e spingi senza bloccarle in estensione. Consente carichi alti sulle gambe con poco stress sulla schiena. La zona lombare deve restare sempre appoggiata allo schienale."
  },
  {
    "id": "forza-massimale--hack-squat",
    "name": "Hack squat",
    "category": "forza-massimale",
    "description": "Squat alla macchina con schiena appoggiata.",
    "equipment": "Macchina",
    "dose": "4 × 5 ripetizioni, recupero 2-3 min",
    "details": "Schiena e spalle contro lo schienale della macchina, scendi in profondità e spingi con i talloni. Isola i quadricipiti in modo sicuro, utile per la forza dei calci frontali (teep) e delle ginocchiate. Mantieni le ginocchia nella direzione delle punte."
  },
  {
    "id": "forza-massimale--adduttori-con-cavo",
    "name": "Adduttori con cavo",
    "category": "forza-massimale",
    "description": "Adduzione dell'anca al cavo, importante per il clinch e i calci.",
    "equipment": "Cavo",
    "dose": "3 × 8 per gamba, recupero 60 s",
    "details": "Cavigliera al cavo basso, gamba lontana dalla macchina: porta la gamba verso e oltre la linea mediana contro resistenza, poi torna lentamente. Rafforza gli adduttori usati per stringere nel clinch e stabilizzare l'anca nei calci, prevenendo le pubalgie. Busto fermo, aiutati con una mano sul supporto."
  },
  {
    "id": "forza-massimale--abduttori-con-cavo",
    "name": "Abduttori con cavo",
    "category": "forza-massimale",
    "description": "Abduzione dell'anca al cavo per stabilità della gamba d'appoggio.",
    "equipment": "Cavo",
    "dose": "3 × 8 per gamba, recupero 60 s",
    "details": "Cavigliera al cavo basso sulla gamba esterna: allontana la gamba lateralmente contro resistenza e torna controllato. Rinforza il medio gluteo, che stabilizza il bacino sulla gamba d'appoggio durante il calcio. Non inclinare il busto per compensare."
  },
  {
    "id": "forza-massimale--copenhagen-plank-zavorrato",
    "name": "Copenhagen plank zavorrato",
    "category": "forza-massimale",
    "description": "Plank laterale con gamba superiore su panca e peso.",
    "equipment": "Panca",
    "dose": "3 × 20 s per lato, recupero 60 s",
    "details": "In plank laterale sull'avambraccio, appoggia la gamba superiore sulla panca e solleva il bacino; aggiungi un disco sul fianco per aumentare il carico. Rinforza adduttori e obliqui, proteggendo l'inguine da calci e cambi di guardia. Corpo allineato dalla testa ai piedi, senza far cadere le anche."
  },
  {
    "id": "forza-massimale--curl-con-bilanciere",
    "name": "Curl con bilanciere",
    "category": "forza-massimale",
    "description": "Flessione dei gomiti pesante per la presa e il clinch.",
    "equipment": "Bilanciere",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "In piedi, gomiti vicino ai fianchi: fletti le braccia portando il bilanciere alle spalle e scendi lentamente. Rafforza bicipiti e flessori dell'avambraccio, utili per tenere e tirare la testa dell'avversario nel clinch. Niente oscillazioni del busto.",
    "tool": "bilanciere"
  },
  {
    "id": "forza-massimale--presa-con-pinze-o-asciugamano",
    "name": "Presa con pinze o asciugamano",
    "category": "forza-massimale",
    "description": "Sospensione alla sbarra con asciugamani per la forza della presa.",
    "equipment": "Sbarra",
    "dose": "4 × 20-30 s di sospensione, recupero 90 s",
    "details": "Avvolgi due asciugamani sulla sbarra, afferrali e resta appeso a braccia tese, scapole attive. Sviluppa una presa ferrea per controllare collo e braccia dell'avversario nel clinch. Aggiungi zavorra o passa a una sola mano quando superi i 30 secondi.",
    "tool": "sbarra"
  },
  {
    "id": "forza-resistente--piegamenti-a-ripresa",
    "name": "Piegamenti a ripresa",
    "category": "forza-resistente",
    "description": "3 minuti di piegamenti con pause brevi, come una ripresa.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Esegui piegamenti a ritmo costante per tutta la ripresa, fermandoti in plank alto quando serve invece di appoggiarti a terra. Corpo in linea, gomiti a circa 45° dal busto. Allena petto, spalle e tricipiti a reggere pugni e push nel clinch fino al quinto round.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--squat-a-corpo-libero-a-tempo",
    "name": "Squat a corpo libero a tempo",
    "category": "forza-resistente",
    "description": "Squat continui per 2-3 minuti.",
    "equipment": "Corpo libero",
    "dose": "3 × 2 min, recupero 1 min",
    "details": "Piedi alla larghezza delle spalle, scendi fino alle cosce parallele e risali senza bloccare le ginocchia, mantenendo un ritmo regolare. Talloni sempre a terra e ginocchia in linea con le punte. Costruisce gambe resistenti per restare mobili e piantati sui calci anche a fine incontro.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--affondi-in-camminata-lunghi",
    "name": "Affondi in camminata lunghi",
    "category": "forza-resistente",
    "description": "Affondi continui per 30-50 metri.",
    "equipment": "Corpo libero",
    "dose": "3 × 40 m, recupero 1 min",
    "details": "Avanza con passi lunghi portando il ginocchio posteriore vicino al suolo, busto eretto e mani in guardia. Spingi dal tallone anteriore per passare al passo successivo. Rinforza quadricipiti e glutei in modo unilaterale, utile per la stabilità in uscita dai calci e negli spostamenti.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--burpee-a-ripresa",
    "name": "Burpee a ripresa",
    "category": "forza-resistente",
    "description": "Burpee per 3 minuti a ritmo costante.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Scendi in plank, petto a terra, risali e salta battendo le mani sopra la testa, mantenendo un ritmo che riesci a sostenere fino al gong. Atterra morbido sugli avampiedi. Simula lo sforzo di cadere e rialzarsi e allena forza e fiato insieme per tutta la ripresa.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--trazioni-a-scala",
    "name": "Trazioni a scala",
    "category": "forza-resistente",
    "description": "Serie crescenti e decrescenti di trazioni con recupero minimo.",
    "equipment": "Sbarra",
    "dose": "Scala 1-2-3-4-5-4-3-2-1, recupero 15 s",
    "details": "Esegui una trazione, poi due, fino al picco e poi riscendi, con pause brevissime tra i gradini. Presa prona, scapole depresse e mento sopra la sbarra a ogni ripetizione. Sviluppa la resistenza di dorsali e bicipiti necessaria per controllare l'avversario nel clinch.",
    "tool": "sbarra"
  },
  {
    "id": "forza-resistente--dip-a-corpo-libero-ad-alte-ripetizioni",
    "name": "Dip a corpo libero ad alte ripetizioni",
    "category": "forza-resistente",
    "description": "Serie lunghe alle parallele.",
    "equipment": "Parallele",
    "dose": "4 × 15-20 ripetizioni, recupero 45 s",
    "details": "Dalle braccia tese alle parallele scendi finché i gomiti arrivano a circa 90°, busto leggermente inclinato in avanti, poi risali con controllo. Evita di scendere troppo per non stressare le spalle. Rinforza tricipiti e petto per pugni e gomitate che restano incisivi anche da stanchi.",
    "tool": "sbarra"
  },
  {
    "id": "forza-resistente--kettlebell-swing-a-tempo",
    "name": "Kettlebell swing a tempo",
    "category": "forza-resistente",
    "description": "Swing continui per 1-2 minuti.",
    "equipment": "Kettlebell",
    "dose": "5 × 1 min, recupero 30 s",
    "details": "Con piedi larghi, fletti le anche spingendo indietro il bacino e proietta la kettlebell fino all'altezza del petto con una spinta esplosiva dei glutei. Schiena neutra, le braccia accompagnano soltanto. Allena la catena posteriore a ripetere spinte d'anca, base di ginocchiate e calci potenti.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-resistente--circuito-kettlebell",
    "name": "Circuito kettlebell",
    "category": "forza-resistente",
    "description": "Swing, goblet squat e rematore in sequenza senza pausa.",
    "equipment": "Kettlebell",
    "dose": "4 giri × 12 rip. per esercizio, recupero 1 min",
    "details": "Esegui 12 swing, 12 goblet squat e 12 rematori per lato in sequenza, senza appoggiare la kettlebell tra un esercizio e l'altro. Scegli un carico moderato che ti permetta tecnica pulita fino all'ultimo giro. Lavora tutto il corpo con densità simile a una ripresa intensa.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-resistente--goblet-squat-ad-alte-ripetizioni",
    "name": "Goblet squat ad alte ripetizioni",
    "category": "forza-resistente",
    "description": "Squat con kettlebell al petto, 20-30 ripetizioni.",
    "equipment": "Kettlebell",
    "dose": "3 × 25 ripetizioni, recupero 45 s",
    "details": "Tieni la kettlebell per le maniglie vicino al petto, gomiti all'interno, e scendi in squat profondo mantenendo il busto alto. Risali spingendo con tutto il piede. Rinforza gambe e core in modo stabile, migliorando la tenuta in guardia e la spinta nei calci.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-resistente--thruster-con-manubri",
    "name": "Thruster con manubri",
    "category": "forza-resistente",
    "description": "Squat e spinta sopra la testa in un unico movimento continuo.",
    "equipment": "Manubri",
    "dose": "4 × 15 ripetizioni, recupero 45 s",
    "details": "Con i manubri sulle spalle scendi in squat e, risalendo, usa la spinta delle gambe per portarli sopra la testa in un unico gesto fluido. Core contratto per non inarcare la schiena. Insegna a trasferire la forza dalle gambe alle braccia, come nei pugni, sotto affaticamento.",
    "tool": "manubri"
  },
  {
    "id": "forza-resistente--manubri-in-guardia",
    "name": "Manubri in guardia",
    "category": "forza-resistente",
    "description": "Tenere manubri leggeri in guardia per 3 minuti.",
    "equipment": "Manubri",
    "dose": "3 × 2-3 min, recupero 1 min",
    "details": "In posizione di guardia, con manubri da 1-2 kg, mantieni le mani all'altezza del viso e i gomiti chiusi, muovendoti leggermente sulle gambe. Non abbassare le mani nemmeno a fine serie. Rinforza spalle e trapezi per una guardia che non cede negli ultimi round.",
    "tool": "manubri"
  },
  {
    "id": "forza-resistente--shadow-boxing-con-manubri-leggeri",
    "name": "Shadow boxing con manubri leggeri",
    "category": "forza-resistente",
    "description": "Pugni con manubri da 1-2 kg per una ripresa.",
    "equipment": "Manubri",
    "dose": "3 riprese da 2 min, recupero 1 min",
    "details": "Esegui combinazioni di pugni in shadow con manubri da 1-2 kg, ritornando sempre in guardia dopo ogni colpo. Non estendere completamente il gomito per proteggere l'articolazione. Allena la resistenza di spalle e braccia mantenendo il gesto tecnico del pugno.",
    "tool": "manubri"
  },
  {
    "id": "forza-resistente--sacco-con-cavigliere",
    "name": "Sacco con cavigliere",
    "category": "forza-resistente",
    "description": "Calci al sacco con cavigliere leggere.",
    "equipment": "Cavigliere",
    "dose": "3 riprese da 2 min, recupero 1 min",
    "details": "Con cavigliere da 0,5-1 kg esegui calci circolari e teep al sacco, curando rotazione dell'anca e ritorno in guardia. Mantieni il controllo del gesto senza strappare. Rinforza flessori dell'anca e gambe; togliendo le cavigliere i calci risulteranno più leggeri e veloci."
  },
  {
    "id": "forza-resistente--ginocchiate-a-ripresa-al-sacco",
    "name": "Ginocchiate a ripresa al sacco",
    "category": "forza-resistente",
    "description": "Ginocchiate alternate continue per 3 minuti.",
    "equipment": "Sacco",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Afferra il sacco come in un clinch e alterna ginocchiate dritte spingendo l'anca in avanti e salendo sull'avampiede della gamba d'appoggio. Tieni il ritmo costante fino al gong. Allena la resistenza specifica di core, flessori e glutei per vincere le fasi di clinch.",
    "tool": "sacco"
  },
  {
    "id": "forza-resistente--calci-circolari-a-ripresa",
    "name": "Calci circolari a ripresa",
    "category": "forza-resistente",
    "description": "Calci alternati al sacco per 3 minuti senza fermarsi.",
    "equipment": "Sacco",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Alterna calci circolari destro e sinistro al sacco senza fermarti, ruotando sul piede d'appoggio e colpendo con la tibia. Rientra sempre in guardia tra un calcio e l'altro. Costruisce la resistenza per calciare con potenza anche nelle riprese finali.",
    "tool": "sacco"
  },
  {
    "id": "forza-resistente--teep-continui-al-sacco",
    "name": "Teep continui al sacco",
    "category": "forza-resistente",
    "description": "Calci frontali alternati per una ripresa.",
    "equipment": "Sacco",
    "dose": "3 riprese da 2 min, recupero 1 min",
    "details": "Alterna teep destro e sinistro al sacco, sollevando il ginocchio prima di estendere e spingendo con la pianta del piede attraverso il bersaglio. Mantieni le mani alte. Rinforza flessori dell'anca e core, utili per controllare la distanza per tutto l'incontro.",
    "tool": "sacco"
  },
  {
    "id": "forza-resistente--wall-sit-a-tempo",
    "name": "Wall sit a tempo",
    "category": "forza-resistente",
    "description": "Posizione seduta al muro per 1-3 minuti.",
    "equipment": "Corpo libero",
    "dose": "3 × 1-2 min, recupero 1 min",
    "details": "Con la schiena appoggiata al muro scendi fino a cosce parallele al pavimento, ginocchia sopra le caviglie, e mantieni la posizione. Respira in modo regolare senza trattenere il fiato. Sviluppa resistenza isometrica dei quadricipiti per gambe che non cedono durante gli scambi.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--guardia-isometrica-in-squat",
    "name": "Guardia isometrica in squat",
    "category": "forza-resistente",
    "description": "Mezzo squat in guardia mantenuto a lungo.",
    "equipment": "Corpo libero",
    "dose": "3 × 1 min, recupero 45 s",
    "details": "Scendi in mezzo squat in posizione di guardia, peso ben distribuito, mani alte e mento basso, e mantieni la posizione. Puoi aggiungere piccoli movimenti di busto senza alzarti. Allena gambe e spalle insieme a sostenere una guardia bassa e stabile a lungo.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--plank-con-pugni",
    "name": "Plank con pugni",
    "category": "forza-resistente",
    "description": "In plank, alternare diretti in avanti.",
    "equipment": "Corpo libero",
    "dose": "3 × 45 s, recupero 30 s",
    "details": "Da plank alto, porta un diretto in avanti alternando le braccia, mantenendo bacino fermo e piedi leggermente divaricati per stabilità. Evita rotazioni del busto. Rinforza core e spalle nella stabilità anti-rotazione necessaria per colpire senza perdere l'equilibrio.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--bear-crawl",
    "name": "Bear crawl",
    "category": "forza-resistente",
    "description": "Camminata a quattro zampe a ginocchia sollevate.",
    "equipment": "Corpo libero",
    "dose": "4 × 20 m, recupero 45 s",
    "details": "A quattro zampe con ginocchia sollevate di pochi centimetri, avanza muovendo mano e piede opposti, schiena piatta e bacino basso. Movimenti corti e controllati. Coordina tutto il corpo e rinforza spalle e core in modo continuo, migliorando la resistenza generale.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--camminata-del-granchio",
    "name": "Camminata del granchio",
    "category": "forza-resistente",
    "description": "Camminata a pancia in su su mani e piedi.",
    "equipment": "Corpo libero",
    "dose": "4 × 15 m, recupero 45 s",
    "details": "Seduto, appoggia mani dietro e piedi davanti, solleva il bacino e cammina in avanti o indietro mantenendo i fianchi alti. Spalle attive, non lasciarle sprofondare. Rinforza tricipiti, spalle posteriori e glutei, bilanciando il lavoro di spinta dei pugni.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--battle-rope-a-ripresa",
    "name": "Battle rope a ripresa",
    "category": "forza-resistente",
    "description": "Onde alternate per 3 minuti.",
    "equipment": "Battle rope",
    "dose": "3 riprese da 3 min (30 s on/15 s off)",
    "details": "In mezzo squat, crea onde alternate con le corde muovendo le braccia dalle spalle, busto stabile e core contratto. Mantieni l'ampiezza delle onde fino alla fine. Allena la resistenza di braccia e spalle sotto stress metabolico, come in una serie di scambi intensi.",
    "tool": "battle-rope"
  },
  {
    "id": "forza-resistente--spinta-della-slitta-lunga",
    "name": "Spinta della slitta lunga",
    "category": "forza-resistente",
    "description": "Spinta su distanze lunghe a ritmo costante.",
    "equipment": "Slitta",
    "dose": "5 × 30 m, recupero 1 min",
    "details": "Con le mani sui montanti e il corpo inclinato in avanti, spingi la slitta con passi corti e potenti, mantenendo la schiena neutra. Usa un carico moderato che consenta un ritmo costante. Allena gambe e spinta totale, utile per guadagnare spazio e pressare l'avversario."
  },
  {
    "id": "forza-resistente--traino-della-slitta-all-indietro",
    "name": "Traino della slitta all'indietro",
    "category": "forza-resistente",
    "description": "Tirata della slitta camminando all'indietro.",
    "equipment": "Slitta",
    "dose": "5 × 25 m, recupero 1 min",
    "details": "Afferra le maniglie o la corda, braccia tese, e cammina all'indietro a ginocchia piegate tirando la slitta. Rimani basso e spingi sull'avampiede. Rinforza quadricipiti e ginocchia con poco impatto, utile per la stabilità e per chi ha bisogno di proteggere le articolazioni."
  },
  {
    "id": "forza-resistente--farmer-walk-lungo",
    "name": "Farmer walk lungo",
    "category": "forza-resistente",
    "description": "Camminata con carichi medi su lunga distanza.",
    "equipment": "Manubri",
    "dose": "4 × 50 m, recupero 1 min",
    "details": "Con un manubrio pesante per mano, cammina a passi regolari mantenendo busto eretto, spalle basse e addome contratto. Non far oscillare i pesi. Rinforza presa, trapezi e core: una presa resistente è fondamentale per controllare l'avversario nel clinch.",
    "tool": "manubri"
  },
  {
    "id": "forza-resistente--sandbag-carry",
    "name": "Sandbag carry",
    "category": "forza-resistente",
    "description": "Trasporto del sacco di sabbia abbracciato al petto.",
    "equipment": "Sandbag",
    "dose": "4 × 40 m, recupero 1 min",
    "details": "Abbraccia il sandbag stretto al petto, gomiti chiusi, e cammina mantenendo la schiena dritta senza inarcarti all'indietro. Respira con il diaframma nonostante la compressione. Simula la tenuta di un corpo nel clinch, rinforzando braccia, dorso e core.",
    "tool": "sandbag"
  },
  {
    "id": "forza-resistente--sandbag-over-the-shoulder",
    "name": "Sandbag over the shoulder",
    "category": "forza-resistente",
    "description": "Sollevare il sandbag da terra e lanciarlo sopra la spalla, a ripetizione.",
    "equipment": "Sandbag",
    "dose": "4 × 10 ripetizioni (alternate), recupero 1 min",
    "details": "Accosciati sopra il sandbag, abbraccialo, portalo sulle cosce e con una spinta d'anca lancialo oltre una spalla, alternando i lati. Solleva con le gambe, non con la schiena. Allena l'estensione dell'anca e la forza da lotta, simile agli sbilanciamenti nel clinch.",
    "tool": "sandbag"
  },
  {
    "id": "forza-resistente--gomitate-con-elastico-a-tempo",
    "name": "Gomitate con elastico a tempo",
    "category": "forza-resistente",
    "description": "Gomitate continue contro l'elastico per 1 minuto.",
    "equipment": "Elastico",
    "dose": "3 × 1 min per lato, recupero 30 s",
    "details": "Con l'elastico fissato alle spalle, esegui gomitate orizzontali continue ruotando busto e anca, rientrando ogni volta in guardia. Mantieni il mento basso. Sviluppa la resistenza dei muscoli rotatori e delle spalle per gomitate precise anche a fine ripresa.",
    "tool": "elastico"
  },
  {
    "id": "forza-resistente--pugni-con-elastico-a-tempo",
    "name": "Pugni con elastico a tempo",
    "category": "forza-resistente",
    "description": "Diretti continui con elastico alla schiena.",
    "equipment": "Elastico",
    "dose": "4 × 45 s, recupero 15 s",
    "details": "Con l'elastico passato dietro la schiena, alterna diretti veloci contro la resistenza, estendendo il braccio senza bloccare il gomito e ritornando subito in guardia. Ruota leggermente il busto. Allena la resistenza di spalle e petto per pugni rapidi e costanti.",
    "tool": "elastico"
  },
  {
    "id": "forza-resistente--rematore-inverso",
    "name": "Rematore inverso",
    "category": "forza-resistente",
    "description": "Trazioni orizzontali sotto la sbarra bassa ad alte ripetizioni.",
    "equipment": "Sbarra",
    "dose": "4 × 15 ripetizioni, recupero 45 s",
    "details": "Sotto una sbarra bassa, corpo rigido come in plank, tira il petto verso la sbarra stringendo le scapole e scendi con controllo. Più i piedi sono avanti, più è difficile. Rinforza dorsali e romboidi per una postura solida e un clinch più forte.",
    "tool": "sbarra"
  },
  {
    "id": "forza-resistente--clean-and-press-con-sandbag",
    "name": "Clean and press con sandbag",
    "category": "forza-resistente",
    "description": "Girata e spinta del sandbag a ripetizione.",
    "equipment": "Sandbag",
    "dose": "4 × 10 ripetizioni, recupero 1 min",
    "details": "Solleva il sandbag da terra con una girata portandolo al petto, poi spingilo sopra la testa usando anche le gambe. Schiena neutra in ogni fase. Esercizio completo che allena l'intero corpo a generare forza ripetutamente, come richiesto in un match intenso.",
    "tool": "sandbag"
  },
  {
    "id": "forza-resistente--step-up-a-tempo",
    "name": "Step-up a tempo",
    "category": "forza-resistente",
    "description": "Salite sul gradino continue per 2 minuti.",
    "equipment": "Gradino",
    "dose": "3 × 2 min, recupero 1 min",
    "details": "Sali su un gradino di 30-40 cm spingendo con la gamba d'appoggio, poi scendi con controllo, alternando le gambe a ritmo costante. Ginocchio allineato con il piede. Rinforza le gambe in modo unilaterale e migliora la resistenza per spostamenti continui sul ring."
  },
  {
    "id": "forza-resistente--salti-alla-corda-con-giubbotto-zavorrato",
    "name": "Salti alla corda con giubbotto zavorrato",
    "category": "forza-resistente",
    "description": "Corda a ritmo costante con giubbotto zavorrato.",
    "equipment": "Corda, giubbotto",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Indossa un giubbotto di 5-10% del peso corporeo e salta la corda sugli avampiedi, con salti bassi e polsi che guidano la rotazione. Mantieni il ritmo costante. Rinforza polpacci e caviglie e migliora la resistenza per un footwork leggero anche da stanco.",
    "tool": "corda"
  },
  {
    "id": "forza-resistente--squat-con-giubbotto-zavorrato",
    "name": "Squat con giubbotto zavorrato",
    "category": "forza-resistente",
    "description": "Squat continui con giubbotto zavorrato.",
    "equipment": "Giubbotto",
    "dose": "4 × 20 ripetizioni, recupero 1 min",
    "details": "Con il giubbotto zavorrato ben aderente, esegui squat completi a ritmo costante, busto alto e talloni a terra. Scegli un carico che permetta tutte le ripetizioni con tecnica pulita. Aumenta la resistenza delle gambe in modo graduale e specifico."
  },
  {
    "id": "forza-resistente--mountain-climber",
    "name": "Mountain climber",
    "category": "forza-resistente",
    "description": "Ginocchia al petto alternate in plank, ritmo sostenuto.",
    "equipment": "Corpo libero",
    "dose": "4 × 40 s, recupero 20 s",
    "details": "Da plank alto, porta alternativamente le ginocchia verso il petto a ritmo sostenuto, mantenendo le spalle sopra i polsi e il bacino basso. Non far rimbalzare il bacino. Allena core e flessori dell'anca, utili per ginocchiate rapide e per il cardio di gara.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--pneumatico-ribaltato",
    "name": "Pneumatico ribaltato",
    "category": "forza-resistente",
    "description": "Ribaltare uno pneumatico pesante per serie lunghe.",
    "equipment": "Pneumatico",
    "dose": "4 × 6-8 ribaltamenti, recupero 1 min",
    "details": "Accosciati, infila le dita sotto lo pneumatico con il petto appoggiato, spingi con le gambe e poi con le braccia per ribaltarlo. Schiena neutra, mai tirare con la schiena curva. Allena forza totale e spinta d'anca in condizioni di fatica.",
    "tool": "pneumatico"
  },
  {
    "id": "forza-resistente--martellate-sul-pneumatico",
    "name": "Martellate sul pneumatico",
    "category": "forza-resistente",
    "description": "Colpi di mazza sul pneumatico alternando i lati.",
    "equipment": "Mazza",
    "dose": "3 × 1 min (alternando i lati), recupero 45 s",
    "details": "Impugna la mazza con le mani distanziate, portala sopra la spalla e colpisci il pneumatico ruotando busto e anca, cambiando lato a metà serie. Piedi stabili e sguardo sul bersaglio. Allena la potenza rotazionale di core e spalle per colpi più incisivi.",
    "tool": "pneumatico"
  },
  {
    "id": "forza-resistente--circuito-corpo-libero-5x3",
    "name": "Circuito corpo libero 5x3",
    "category": "forza-resistente",
    "description": "Cinque esercizi a corpo libero in 3 minuti, recupero 1 minuto.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Ogni ripresa comprende 5 esercizi da 36 s ciascuno (es. piegamenti, squat, burpee, mountain climber, sprawl) senza pause. Mantieni la qualità tecnica anche quando aumenta la fatica. Simula la struttura di un incontro, allenando forza e resistenza insieme.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--pugni-in-guardia-sotto-sforzo",
    "name": "Pugni in guardia sotto sforzo",
    "category": "forza-resistente",
    "description": "Dopo 20 squat, 30 secondi di pugni veloci, ripetere.",
    "equipment": "Corpo libero",
    "dose": "5 giri × (20 squat + 30 s pugni), recupero 30 s",
    "details": "Esegui 20 squat veloci e passa subito a 30 secondi di pugni rapidi in guardia, senza pause tra le due parti. Tieni le mani alte anche con le gambe affaticate. Allena la capacità di colpire con lucidità quando le gambe sono già stanche.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--ginocchiate-sul-posto-a-tempo",
    "name": "Ginocchiate sul posto a tempo",
    "category": "forza-resistente",
    "description": "Ginocchiate alternate in aria tenendo le mani al collo immaginario.",
    "equipment": "Corpo libero",
    "dose": "4 × 45 s, recupero 15 s",
    "details": "Con le mani come a trattenere la testa dell'avversario, alterna ginocchiate in aria spingendo l'anca in avanti e salendo sull'avampiede. Tira giù le mani mentre il ginocchio sale. Allena la resistenza del clinch e la coordinazione mani-ginocchio.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--calci-circolari-in-aria-a-tempo",
    "name": "Calci circolari in aria a tempo",
    "category": "forza-resistente",
    "description": "Calci alternati controllati per 2 minuti.",
    "equipment": "Corpo libero",
    "dose": "3 × 2 min, recupero 1 min",
    "details": "Esegui calci circolari alternati nell'aria con ritmo controllato, ruotando il piede d'appoggio e riportando sempre la gamba in guardia. Non forzare l'estensione del ginocchio. Allena equilibrio, rotazione e resistenza delle gambe senza l'impatto del sacco.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--piegamenti-a-diamante",
    "name": "Piegamenti a diamante",
    "category": "forza-resistente",
    "description": "Piegamenti con mani vicine, serie lunghe.",
    "equipment": "Corpo libero",
    "dose": "4 × 15 ripetizioni, recupero 45 s",
    "details": "Mani vicine sotto il petto, con pollici e indici a formare un rombo, e gomiti stretti al corpo durante la discesa. Corpo rigido dalla testa ai talloni. Rinforza i tricipiti, fondamentali per estendere pugni e gomitate con forza fino all'ultimo round.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--piegamenti-sulle-nocche",
    "name": "Piegamenti sulle nocche",
    "category": "forza-resistente",
    "description": "Piegamenti sulle nocche per polsi e pugni.",
    "equipment": "Corpo libero",
    "dose": "3 × 15 ripetizioni, recupero 45 s",
    "details": "Appoggiati sulle prime due nocche su una superficie morbida, polsi dritti e in linea con l'avambraccio, ed esegui piegamenti controllati. Inizia su tappetino per non irritare la pelle. Rinforza polsi e mani per pugni stabili e meno a rischio di infortuni.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--affondi-laterali-alternati",
    "name": "Affondi laterali alternati",
    "category": "forza-resistente",
    "description": "Affondi laterali continui per 1 minuto.",
    "equipment": "Corpo libero",
    "dose": "3 × 1 min, recupero 45 s",
    "details": "Fai un ampio passo laterale piegando la gamba d'appoggio e mantenendo l'altra tesa, poi spingi per tornare al centro e alterna i lati. Busto eretto e piede ben piantato. Rinforza adduttori e glutei, utili per spostamenti laterali e per l'equilibrio nei calci.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--pallof-press-a-tempo",
    "name": "Pallof press a tempo",
    "category": "forza-resistente",
    "description": "Resistenza alla rotazione mantenuta per 45 secondi per lato.",
    "equipment": "Elastico",
    "dose": "3 × 45 s per lato, recupero 30 s",
    "details": "Con l'elastico fissato lateralmente, porta le mani al petto e spingi in avanti mantenendo le braccia tese senza farti ruotare. Bacino fermo e glutei contratti. Rinforza la stabilità anti-rotazione del core, essenziale per assorbire colpi e restare in equilibrio.",
    "tool": "elastico"
  },
  {
    "id": "forza-resistente--sumo-squat-con-kettlebell",
    "name": "Sumo squat con kettlebell",
    "category": "forza-resistente",
    "description": "Squat largo con kettlebell, serie lunghe.",
    "equipment": "Kettlebell",
    "dose": "3 × 20 ripetizioni, recupero 45 s",
    "details": "Piedi larghi e punte verso l'esterno, tieni la kettlebell tra le gambe a braccia tese e scendi mantenendo ginocchia aperte e busto alto. Spingi dai talloni per risalire. Rinforza adduttori e glutei, importanti per la stabilità nella guardia e nei calci.",
    "tool": "kettlebell"
  },
  {
    "id": "forza-resistente--hip-thrust-a-corpo-libero",
    "name": "Hip thrust a corpo libero",
    "category": "forza-resistente",
    "description": "Spinte dell'anca continue, una o due gambe.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 ripetizioni (o 12 per gamba), recupero 45 s",
    "details": "Con le scapole appoggiate a una panca e i piedi a terra, spingi il bacino verso l'alto fino all'allineamento busto-cosce, stringendo i glutei in alto. Mento leggermente rientrato. Rinforza i glutei, motore delle ginocchiate e della rotazione nei calci.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--glute-bridge-isometrico",
    "name": "Glute bridge isometrico",
    "category": "forza-resistente",
    "description": "Ponte glutei mantenuto a lungo.",
    "equipment": "Corpo libero",
    "dose": "3 × 45-60 s, recupero 30 s",
    "details": "Supino con ginocchia piegate, solleva il bacino fino ad allineare spalle, anche e ginocchia e mantieni la posizione con i glutei contratti. Evita di inarcare la zona lombare. Rinforza glutei e catena posteriore, proteggendo la schiena durante i calci.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--sollevamenti-sulle-punte-a-tempo",
    "name": "Sollevamenti sulle punte a tempo",
    "category": "forza-resistente",
    "description": "Calf raise continui per la resistenza delle caviglie.",
    "equipment": "Corpo libero",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "In piedi, solleva i talloni fino a salire completamente sulle punte e scendi lentamente, mantenendo un ritmo costante. Puoi appoggiarti a un muro per l'equilibrio. Rinforza polpacci e caviglie, fondamentali per stare sugli avampiedi e ruotare nei calci.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--ripresa-di-clinch-con-giubbotto",
    "name": "Ripresa di clinch con giubbotto",
    "category": "forza-resistente",
    "description": "Clinch con il compagno indossando giubbotto zavorrato.",
    "equipment": "Giubbotto",
    "dose": "3 riprese da 2 min, recupero 1 min",
    "details": "Indossando un giubbotto zavorrato leggero, lavora in clinch con un compagno cercando prese, sbilanciamenti e ginocchiate controllate. Mantieni la postura alta e la testa dritta. Aumenta la resistenza specifica della lotta in piedi, cruciale nella Muay Thai."
  },
  {
    "id": "forza-resistente--sprawl-continui",
    "name": "Sprawl continui",
    "category": "forza-resistente",
    "description": "Sprawl ripetuti per 1 minuto.",
    "equipment": "Corpo libero",
    "dose": "4 × 1 min, recupero 30 s",
    "details": "Da guardia, lancia le gambe indietro abbassando le anche verso il pavimento, poi torna subito in piedi in guardia. Mantieni le mani pronte e lo sguardo avanti. Allena reattività e resistenza nel difendersi da prese e nel ritornare rapidamente in posizione.",
    "tool": "corpo-libero"
  },
  {
    "id": "forza-resistente--tirate-al-cavo-in-guardia",
    "name": "Tirate al cavo in guardia",
    "category": "forza-resistente",
    "description": "Tirate alternate al cavo mantenendo la guardia.",
    "equipment": "Cavo",
    "dose": "3 × 15 per lato, recupero 45 s",
    "details": "In posizione di guardia al cavo, tira la maniglia verso il fianco ruotando leggermente il busto, mentre l'altra mano resta alta a protezione del viso. Scapola che si avvicina alla colonna. Rinforza dorsali e muscoli della tirata, utili per il clinch e per il ritorno dei colpi."
  },
  {
    "id": "velocita--diretti-veloci-sul-posto",
    "name": "Diretti veloci sul posto",
    "category": "velocita",
    "description": "10 secondi di diretti alla massima velocità, recupero 20.",
    "equipment": "Corpo libero",
    "dose": "6 × 10 s, recupero 20 s",
    "details": "In guardia, piedi alla larghezza delle spalle, alterna jab e diretto alla massima frequenza mantenendo il mento basso e le mani che tornano al viso. Allena la rapidità delle braccia e la capacità di sostenere raffiche in scambio ravvicinato. Smetti di contare i colpi quando la tecnica si sporca: conta la velocità pulita.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--jab-diretto-rapidi-al-sacco",
    "name": "Jab-diretto rapidi al sacco",
    "category": "velocita",
    "description": "Uno-due alla massima velocità per 15 secondi.",
    "equipment": "Sacco",
    "dose": "5 × 15 s, recupero 45 s",
    "details": "A distanza di braccio dal sacco, esegui uno-due continui ruotando anca e piede posteriore sul diretto e richiamando subito ogni pugno in guardia. Sviluppa la combinazione base più usata in gara rendendola esplosiva. Non spingere il sacco: colpisci e ritira, come se toccassi una superficie calda.",
    "tool": "sacco"
  },
  {
    "id": "velocita--pugni-a-raffica-al-sacco",
    "name": "Pugni a raffica al sacco",
    "category": "velocita",
    "description": "Raffica di pugni corti e veloci per 10 secondi.",
    "equipment": "Sacco",
    "dose": "6 × 10 s, recupero 50 s",
    "details": "Molto vicino al sacco, ginocchia leggermente flesse, sferra pugni corti e rapidissimi alternati senza caricare, con spalle rilassate. Migliora la frequenza dei colpi e la capacità di chiudere uno scambio con una raffica finale. Respira a piccoli soffi e mantieni il gomito vicino al corpo.",
    "tool": "sacco"
  },
  {
    "id": "velocita--ganci-alternati-a-raffica",
    "name": "Ganci alternati a raffica",
    "category": "velocita",
    "description": "Ganci veloci alternati al sacco per 10 secondi.",
    "equipment": "Sacco",
    "dose": "5 × 10 s, recupero 50 s",
    "details": "Alla corta distanza, alterna ganci destro e sinistro ruotando busto e piede dello stesso lato, con gomito all'altezza del pugno. Rende rapidi i ganci in uscita dal clinch o dopo un diretto. Tieni la mano libera alta sul viso e non allargare la traiettoria.",
    "tool": "sacco"
  },
  {
    "id": "velocita--calci-circolari-rapidi",
    "name": "Calci circolari rapidi",
    "category": "velocita",
    "description": "Calci al sacco con ritorno veloce in guardia, 10 secondi.",
    "equipment": "Sacco",
    "dose": "4 × 10 s per lato, recupero 40 s",
    "details": "Dalla guardia calcia di tibia al sacco ruotando sul piede d'appoggio, poi riporta subito la gamba a terra in posizione di guardia prima del calcio successivo. Insegna a calciare veloce senza rimanere sbilanciati e vulnerabili al contrattacco. Qualità prima della quantità: ogni calcio deve ruotare l'anca.",
    "tool": "sacco"
  },
  {
    "id": "velocita--teep-veloci",
    "name": "Teep veloci",
    "category": "velocita",
    "description": "Calci frontali con il piede anteriore, ritorno rapido.",
    "equipment": "Sacco",
    "dose": "4 × 8 per lato, recupero 45 s",
    "details": "Solleva il ginocchio anteriore, spingi di pianta del piede al centro del sacco e richiama la gamba nella stessa traiettoria tornando in guardia. Un teep rapido ferma l'avversario che avanza e crea distanza. Mantieni il busto leggermente indietro e le mani alte durante la spinta.",
    "tool": "sacco"
  },
  {
    "id": "velocita--ginocchiate-rapide-alternate",
    "name": "Ginocchiate rapide alternate",
    "category": "velocita",
    "description": "Ginocchiate veloci alternate per 15 secondi.",
    "equipment": "Sacco",
    "dose": "5 × 15 s, recupero 45 s",
    "details": "Afferra il sacco o simula la presa, alterna ginocchiate rapide spingendo l'anca in avanti e salendo sull'avampiede della gamba d'appoggio. Allena la velocità nel clinch, dove vince chi colpisce per primo. Non sbilanciarti all'indietro: il bacino va verso il bersaglio.",
    "tool": "sacco"
  },
  {
    "id": "velocita--doppio-calcio-circolare",
    "name": "Doppio calcio circolare",
    "category": "velocita",
    "description": "Due calci circolari consecutivi con la stessa gamba senza appoggiare.",
    "equipment": "Sacco",
    "dose": "4 × 6 per lato, recupero 60 s",
    "details": "Esegui un calcio circolare basso o medio, richiama la gamba senza appoggiarla e scaglia subito un secondo calcio più alto. Sviluppa velocità, controllo dell'equilibrio e capacità di sorprendere l'avversario che para il primo colpo. Stabilizza la gamba d'appoggio e tieni le braccia in guardia.",
    "tool": "sacco"
  },
  {
    "id": "velocita--calcio-basso-veloce",
    "name": "Calcio basso veloce",
    "category": "velocita",
    "description": "Low kick rapido con richiamo immediato.",
    "equipment": "Sacco",
    "dose": "4 × 8 per lato, recupero 45 s",
    "details": "Con un piccolo passo d'apertura, calcia di tibia la parte bassa del sacco all'altezza della coscia e richiama subito la gamba in guardia. Il low kick veloce logora l'avversario senza esporti al contrattacco. Ruota bene il piede d'appoggio per proteggere il ginocchio.",
    "tool": "sacco"
  },
  {
    "id": "velocita--switch-kick-rapido",
    "name": "Switch kick rapido",
    "category": "velocita",
    "description": "Cambio guardia e calcio con la gamba anteriore il più veloce possibile.",
    "equipment": "Sacco",
    "dose": "4 × 6 per lato, recupero 60 s",
    "details": "Con un saltello invertisci le posizioni dei piedi e calcia immediatamente con la gamba che era avanti, senza pause tra cambio e calcio. Rende imprevedibile il calcio della gamba anteriore, ottimo per colpire il fegato o il corpo. Il cambio deve essere piccolo e basso, non un salto alto.",
    "tool": "sacco"
  },
  {
    "id": "velocita--reazione-al-segnale-sonoro",
    "name": "Reazione al segnale sonoro",
    "category": "velocita",
    "description": "Al fischio del maestro, colpire con la combinazione indicata.",
    "equipment": "Sacco",
    "dose": "6 × 5 segnali, recupero 45 s",
    "details": "In guardia davanti al sacco, rilassato ma pronto: al fischio esegui subito la combinazione indicata dal maestro e torna in guardia. Riduce il tempo di reazione allo stimolo, fondamentale per sfruttare le aperture in combattimento. Evita di anticipare il segnale: la partenza deve essere una vera reazione.",
    "tool": "sacco"
  },
  {
    "id": "velocita--reazione-al-colore",
    "name": "Reazione al colore",
    "category": "velocita",
    "description": "Il maestro mostra un colore, l'allievo esegue il colpo associato.",
    "equipment": "Pao",
    "dose": "5 × 6 stimoli, recupero 45 s",
    "details": "Associa a ogni colore un colpo (es. rosso jab, blu calcio, bianco ginocchiata); il maestro mostra un cartoncino e tu colpisci il pao il più rapidamente possibile. Allena la reazione di scelta, cioè decidere e colpire in pochi istanti. Cambia le associazioni ogni serie per mantenere alta l'attenzione.",
    "tool": "pao"
  },
  {
    "id": "velocita--reazione-ai-pao",
    "name": "Reazione ai pao",
    "category": "velocita",
    "description": "Colpire i pao appena il maestro li mostra.",
    "equipment": "Pao",
    "dose": "3 riprese da 1 min, 1 min recupero",
    "details": "Il maestro tiene i pao nascosti e li mostra all'improvviso in posizioni diverse; colpisci subito con il colpo adatto a quel bersaglio. Simula le aperture brevi che l'avversario concede in gara. Torna in guardia dopo ogni colpo e non indovinare: aspetta lo stimolo.",
    "tool": "pao"
  },
  {
    "id": "velocita--palla-da-tennis-al-muro",
    "name": "Palla da tennis al muro",
    "category": "velocita",
    "description": "Lanciare e afferrare la palla da tennis al muro per la reazione.",
    "equipment": "Palla da tennis",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "A 1-2 metri da un muro lancia la pallina e riprendila con la stessa mano o con quella opposta, aumentando gradualmente ritmo e distanza. Migliora coordinazione occhio-mano e velocità di reazione visiva. Resta sugli avampiedi in posizione di guardia per renderlo specifico."
  },
  {
    "id": "velocita--palla-da-tennis-lasciata-cadere",
    "name": "Palla da tennis lasciata cadere",
    "category": "velocita",
    "description": "Il compagno lascia la palla, l'allievo la afferra prima del secondo rimbalzo.",
    "equipment": "Palla da tennis",
    "dose": "5 × 6 prese, recupero 30 s",
    "details": "Il compagno tiene una pallina per lato all'altezza delle spalle e ne lascia cadere una senza preavviso; scatta e afferrala prima del secondo rimbalzo. Allena prima reazione e primo passo esplosivo, utili per chiudere la distanza. Parti in guardia e varia la distanza per aumentare la difficoltà."
  },
  {
    "id": "velocita--pallina-appesa-reflex-ball",
    "name": "Pallina appesa (reflex ball)",
    "category": "velocita",
    "description": "Colpire la pallina elastica appesa a ritmo continuo.",
    "equipment": "Reflex ball",
    "dose": "3 riprese da 1 min, 30 s recupero",
    "details": "Con la fascia della reflex ball in testa o la pallina appesa, colpisci con jab e diretti seguendo il rimbalzo senza perdere il ritmo. Affina tempismo, precisione e rapidità dei pugni dritti. Muovi la testa oltre ai pugni e tieni lo sguardo fisso sulla pallina."
  },
  {
    "id": "velocita--pera-veloce",
    "name": "Pera veloce",
    "category": "velocita",
    "description": "Lavoro sulla pera veloce per ritmo e rapidità.",
    "equipment": "Pera",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Davanti alla pera, colpisci con il lato del pugno in modo ritmico, coordinando i rimbalzi e alternando le mani. Sviluppa ritmo, coordinazione e resistenza delle spalle mantenendo le braccia alte. Colpi leggeri e regolari: la velocità nasce dal ritmo, non dalla forza."
  },
  {
    "id": "velocita--doppia-elastica",
    "name": "Doppia elastica",
    "category": "velocita",
    "description": "Colpi alla palla doppio elastico per tempismo e precisione.",
    "equipment": "Doppia elastica",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Colpisci la palla doppio elastico con jab e diretti brevi, schivando o parando quando torna verso di te. Migliora tempismo, precisione e reazione a un bersaglio che si muove come la testa di un avversario. Colpi secchi e richiamati, senza spingere.",
    "tool": "elastico"
  },
  {
    "id": "velocita--sprint-10-metri",
    "name": "Sprint 10 metri",
    "category": "velocita",
    "description": "Scatti brevi alla massima velocità.",
    "equipment": "Corpo libero",
    "dose": "8 × 10 m, recupero 60 s",
    "details": "Partenza da fermo in posizione di sprint, accelerazione massima con busto inclinato e braccia che lavorano energicamente. Sviluppa l'esplosività delle gambe che si trasferisce nei calci e negli ingressi in corta distanza. Recupero completo: ogni scatto deve essere al 100%.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--sprint-20-metri",
    "name": "Sprint 20 metri",
    "category": "velocita",
    "description": "Scatti di 20 metri con recupero completo.",
    "equipment": "Corpo libero",
    "dose": "6 × 20 m, recupero 90 s",
    "details": "Partenza in piedi, accelera al massimo e mantieni la velocità fino alla linea, rilassando spalle e viso. Allena accelerazione e velocità massima, base per gambe reattive sul ring. Riscaldati bene prima: gli sprint sono intensi su muscoli posteriori della coscia.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--sprint-in-partenza-dalla-guardia",
    "name": "Sprint in partenza dalla guardia",
    "category": "velocita",
    "description": "Dalla guardia, scatto in avanti di 5 metri.",
    "equipment": "Corpo libero",
    "dose": "8 × 5 m, recupero 45 s",
    "details": "In guardia di Muay Thai, al segnale scatta in avanti per 5 metri con la prima spinta del piede posteriore. Rende veloce l'ingresso sull'avversario partendo dalla posizione di combattimento reale. Non rialzarti subito: i primi passi restano bassi e potenti.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--corsa-calciata-veloce",
    "name": "Corsa calciata veloce",
    "category": "velocita",
    "description": "Calciata dietro alla massima frequenza per 10 metri.",
    "equipment": "Corpo libero",
    "dose": "6 × 10 m, recupero 45 s",
    "details": "Corri portando i talloni ai glutei con la massima frequenza, appoggi sugli avampiedi e busto eretto. Migliora la rapidità dei flessori del ginocchio e la frequenza del passo, utile nei richiami dei calci. Conta la frequenza, non l'avanzamento.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--skip-veloce",
    "name": "Skip veloce",
    "category": "velocita",
    "description": "Skip alto alla massima frequenza per 10 secondi.",
    "equipment": "Corpo libero",
    "dose": "6 × 10 s, recupero 40 s",
    "details": "Sul posto o avanzando poco, solleva le ginocchia all'altezza dell'anca alternandole alla massima frequenza con braccia coordinate. Sviluppa rapidità di gambe e flessori dell'anca, importanti per ginocchiate e teep. Appoggi leggeri sull'avampiede, mai sul tallone.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--scala-di-agilita-rapida",
    "name": "Scala di agilità rapida",
    "category": "velocita",
    "description": "Appoggi veloci nella scaletta a terra.",
    "equipment": "Scaletta",
    "dose": "6 passaggi, recupero 30 s",
    "details": "Percorri la scaletta con schemi diversi (due piedi dentro, laterale, in-out) cercando appoggi rapidissimi e precisi. Migliora la frequenza dei piedi e il gioco di gambe per entrare e uscire dalla distanza. Se tocchi i pioli rallenta: precisione prima della velocità.",
    "tool": "coni-scaletta"
  },
  {
    "id": "velocita--corda-veloce",
    "name": "Corda veloce",
    "category": "velocita",
    "description": "20 secondi di corda alla massima velocità.",
    "equipment": "Corda",
    "dose": "6 × 20 s, recupero 40 s",
    "details": "Salta la corda alla massima velocità con salti bassi, polsi che guidano la rotazione e gomiti vicini al corpo. Allena rapidità e reattività dei piedi oltre al ritmo tipico del pugile. Atterra sugli avampiedi con ginocchia morbide.",
    "tool": "corda"
  },
  {
    "id": "velocita--uno-due-con-elastico-e-rilascio",
    "name": "Uno-due con elastico e rilascio",
    "category": "velocita",
    "description": "Pugni con elastico seguiti subito da pugni liberi.",
    "equipment": "Elastico",
    "dose": "4 × (10 s elastico + 10 s libero), rec. 60 s",
    "details": "Con un elastico fissato dietro di te, tira uno-due per 10 secondi contro resistenza, poi toglilo e colpisci libero alla massima velocità. Il contrasto tra carico e scarico aumenta la rapidità percepita dei pugni. Non lasciare che l'elastico ti tiri i gomiti fuori linea.",
    "tool": "elastico"
  },
  {
    "id": "velocita--shadow-con-contrasto",
    "name": "Shadow con contrasto",
    "category": "velocita",
    "description": "10 secondi di shadow lento e 10 secondi alla massima velocità.",
    "equipment": "Corpo libero",
    "dose": "4 × (10 s lento + 10 s max), recupero 40 s",
    "details": "Esegui shadow a velocità lenta e tecnica perfetta per 10 secondi, poi accelera al massimo per 10 secondi con colpi e spostamenti. Insegna a cambiare ritmo improvvisamente, arma decisiva per sorprendere l'avversario. Mantieni la guardia anche nella fase veloce.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--pugni-con-palla-da-tennis-in-mano",
    "name": "Pugni con palla da tennis in mano",
    "category": "velocita",
    "description": "Pugni veloci stringendo una pallina, più rapidità e presa.",
    "equipment": "Palla da tennis",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "Stringi una pallina in ogni mano e tira pugni veloci a vuoto, chiudendo bene il pugno nel momento dell'impatto immaginario. Rinforza la presa e insegna a contrarre il pugno solo all'arrivo del colpo. Rilassa spalle e avambracci durante la traiettoria."
  },
  {
    "id": "velocita--gomitate-rapide-alternate",
    "name": "Gomitate rapide alternate",
    "category": "velocita",
    "description": "Gomitate orizzontali alternate alla massima velocità.",
    "equipment": "Sacco",
    "dose": "5 × 10 s, recupero 50 s",
    "details": "Molto vicino al sacco, alterna gomitate orizzontali ruotando busto e piede, con la mano opposta alta a proteggere il viso. Rende rapide le gomitate nella corta distanza e in uscita dal clinch. Colpisci con la punta del gomito e tieni il mento chiuso.",
    "tool": "sacco"
  },
  {
    "id": "velocita--combinazione-1-2-calcio-veloce",
    "name": "Combinazione 1-2-calcio veloce",
    "category": "velocita",
    "description": "Jab, diretto e calcio circolare il più rapido possibile.",
    "equipment": "Sacco",
    "dose": "5 × 6 combinazioni, recupero 45 s",
    "details": "Jab, diretto e calcio circolare della gamba posteriore concatenati: la rotazione del diretto carica naturalmente il calcio. È una delle combinazioni più efficaci della Muay Thai e la velocità la rende difficile da leggere. Torna sempre in guardia dopo il calcio.",
    "tool": "sacco"
  },
  {
    "id": "velocita--combinazione-1-2-3-veloce",
    "name": "Combinazione 1-2-3 veloce",
    "category": "velocita",
    "description": "Jab, diretto e gancio con ritorno in guardia.",
    "equipment": "Sacco",
    "dose": "5 × 8 combinazioni, recupero 45 s",
    "details": "Jab, diretto e gancio anteriore in sequenza fluida, trasferendo il peso da un lato all'altro e richiamando ogni colpo. Allena la combinazione classica di pugni con rapidità e precisione. Il gancio parte corto, senza caricare all'indietro.",
    "tool": "sacco"
  },
  {
    "id": "velocita--cattura-del-teep",
    "name": "Cattura del teep",
    "category": "velocita",
    "description": "Il compagno calcia, l'allievo cattura la gamba il più velocemente possibile.",
    "equipment": "Compagno",
    "dose": "4 × 6 per lato, recupero 45 s",
    "details": "Il compagno esegue teep controllati a velocità variabile; tu devi deviare e catturare la gamba con il braccio, avvicinandoti per sbilanciarlo. Allena reazione difensiva e prontezza nel trasformare una difesa in vantaggio. Il compagno calcia con controllo, mai forte.",
    "tool": "compagno"
  },
  {
    "id": "velocita--blocco-veloce-del-calcio",
    "name": "Blocco veloce del calcio",
    "category": "velocita",
    "description": "Parata con la tibia appena il compagno accenna il calcio.",
    "equipment": "Compagno",
    "dose": "4 × 8 per lato, recupero 45 s",
    "details": "In guardia, appena il compagno accenna un calcio circolare solleva la tibia sullo stesso lato con ginocchio verso il gomito, poi torna subito a terra. Velocizza la parata con la tibia, difesa fondamentale della Muay Thai. Usa parastinchi e calci leggeri e controllati.",
    "tool": "compagno"
  },
  {
    "id": "velocita--gioco-del-tocco-ginocchia",
    "name": "Gioco del tocco ginocchia",
    "category": "velocita",
    "description": "Cercare di toccare le ginocchia del compagno proteggendo le proprie.",
    "equipment": "Compagno",
    "dose": "4 riprese da 30 s, 30 s recupero",
    "details": "In guardia, cerca di toccare con la mano le ginocchia del compagno proteggendo le tue con spostamenti e mani. Sviluppa reattività, gioco di gambe e lettura delle finte in forma ludica. Resta basso e non perdere l'equilibrio in avanti.",
    "tool": "compagno"
  },
  {
    "id": "velocita--gioco-del-tocco-spalle",
    "name": "Gioco del tocco spalle",
    "category": "velocita",
    "description": "Toccare le spalle del compagno evitando di essere toccati.",
    "equipment": "Compagno",
    "dose": "4 riprese da 30 s, 30 s recupero",
    "details": "Con il compagno, prova a toccargli le spalle con la mano aperta mentre eviti i suoi tocchi con schivate, parate e passi. Migliora velocità di mani, difesa e tempismo come in uno sparring leggero. Tocchi leggeri e testa sempre in movimento.",
    "tool": "compagno"
  },
  {
    "id": "velocita--schivata-della-pallina",
    "name": "Schivata della pallina",
    "category": "velocita",
    "description": "Il compagno lancia palline morbide, l'allievo le schiva.",
    "equipment": "Palline morbide",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "A 3-4 metri dal compagno, in guardia, schiva le palline morbide lanciate verso testa e busto con movimenti brevi di testa e tronco. Allena riflessi visivi e schivate economiche. Non chiudere gli occhi e torna subito in guardia dopo ogni schivata."
  },
  {
    "id": "velocita--slip-line-veloce",
    "name": "Slip line veloce",
    "category": "velocita",
    "description": "Schivate laterali rapide sotto una corda tesa.",
    "equipment": "Corda tesa",
    "dose": "4 passaggi da 30 s, recupero 30 s",
    "details": "Avanza lungo una corda tesa all'altezza delle spalle passando da un lato all'altro con piegamenti delle ginocchia e rotazioni del busto. Rende veloci e automatiche le schivate sotto i colpi circolari. Piega le gambe, non la schiena, e tieni lo sguardo avanti."
  },
  {
    "id": "velocita--cambio-guardia-rapido",
    "name": "Cambio guardia rapido",
    "category": "velocita",
    "description": "Cambi guardia veloci sul posto per 15 secondi.",
    "equipment": "Corpo libero",
    "dose": "6 × 15 s, recupero 30 s",
    "details": "Sul posto, alterna guardia destra e sinistra con un piccolo saltello, atterrando sempre in posizione corretta con mani alte. Prepara switch kick e ginocchiate e rende imprevedibile la guardia. I cambi devono essere bassi e silenziosi.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--pugni-a-terra-da-seduto",
    "name": "Pugni a terra da seduto",
    "category": "velocita",
    "description": "Da seduti, pugni velocissimi per isolare le braccia.",
    "equipment": "Corpo libero",
    "dose": "5 × 15 s, recupero 30 s",
    "details": "Seduto a terra con gambe incrociate o tese, busto eretto, tira pugni dritti velocissimi senza il contributo di gambe e anche. Isolando le braccia migliori la velocità pura di spalle e tricipiti. Mantieni il core contratto per non oscillare.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--diretto-sul-fiato",
    "name": "Diretto sul fiato",
    "category": "velocita",
    "description": "Diretto veloce espirando con decisione, singolo e preciso.",
    "equipment": "Sacco",
    "dose": "5 × 6 colpi singoli, recupero 30 s",
    "details": "Dalla guardia rilassata, scocca un diretto esplosivo espirando con forza nel momento dell'impatto e torna subito in posizione. Insegna a passare da rilassamento a contrazione istantanea, segreto della velocità. Ogni colpo è singolo e perfetto, con una breve pausa tra uno e l'altro.",
    "tool": "sacco"
  },
  {
    "id": "velocita--contrattacco-al-segnale",
    "name": "Contrattacco al segnale",
    "category": "velocita",
    "description": "Il maestro attacca con i pao, l'allievo para e risponde subito.",
    "equipment": "Pao",
    "dose": "3 riprese da 1 min, 1 min recupero",
    "details": "Il maestro attacca con i pao (swing, calcio, teep); tu pari o schivi e rispondi subito con il colpo indicato. Allena il passaggio immediato da difesa ad attacco, quando l'avversario è scoperto. Il contrattacco deve partire mentre lui rientra, non dopo.",
    "tool": "pao"
  },
  {
    "id": "velocita--calcio-circolare-al-bastone",
    "name": "Calcio circolare al bastone",
    "category": "velocita",
    "description": "Calciare un bastone tenuto dal maestro in punti diversi.",
    "equipment": "Bastone",
    "dose": "4 × 6 per lato, recupero 45 s",
    "details": "Il maestro tiene un bastone imbottito o un pool noodle e lo sposta in punti diversi; colpiscilo con calcio circolare appena si ferma. Migliora precisione, rapidità e adattamento della traiettoria del calcio. Usa un bastone morbido e calci controllati per sicurezza."
  },
  {
    "id": "velocita--jab-al-guanto-in-movimento",
    "name": "Jab al guanto in movimento",
    "category": "velocita",
    "description": "Il maestro muove il guanto, l'allievo lo colpisce con il jab.",
    "equipment": "Guantone",
    "dose": "3 riprese da 1 min, 30 s recupero",
    "details": "Il maestro muove il guantone a diverse altezze e distanze; colpiscilo con jab rapidi e precisi aggiustando i passi. Allena il jab come colpo di misura e reazione su un bersaglio mobile. Richiama sempre la mano al viso dopo ogni colpo."
  },
  {
    "id": "velocita--quattro-pugni-in-un-secondo",
    "name": "Quattro pugni in un secondo",
    "category": "velocita",
    "description": "Serie da quattro pugni rapidissimi, ripetute con recupero.",
    "equipment": "Sacco",
    "dose": "6 × 4 serie, recupero 45 s",
    "details": "Al segnale esegui quattro pugni alternati il più rapidamente possibile, poi recupera qualche secondo in guardia prima della serie successiva. Sviluppa la velocità massima della raffica breve, utile per finire un'azione. Colpi corti e rilassati, non cercare potenza.",
    "tool": "sacco"
  },
  {
    "id": "velocita--ginocchiata-e-richiamo",
    "name": "Ginocchiata e richiamo",
    "category": "velocita",
    "description": "Ginocchiata rapida e ritorno in guardia, una alla volta al segnale.",
    "equipment": "Sacco",
    "dose": "4 × 6 per lato, recupero 40 s",
    "details": "In guardia, al segnale del maestro scocca una ginocchiata al sacco spingendo l'anca avanti e torna subito in posizione. Allena la ginocchiata come colpo di reazione, efficace sull'avversario che entra. Una ginocchiata alla volta, con massima esplosività.",
    "tool": "sacco"
  },
  {
    "id": "velocita--pao-rapidi-alternati",
    "name": "Pao rapidi alternati",
    "category": "velocita",
    "description": "Il maestro cambia rapidamente i bersagli dei pao.",
    "equipment": "Pao",
    "dose": "3 riprese da 1 min, 1 min recupero",
    "details": "Il maestro cambia rapidamente posizione dei pao chiamando colpi diversi (jab, gomito, calcio, ginocchiata) e tu rispondi senza pause. Allena reazione, scelta del colpo e transizioni veloci tra le armi della Muay Thai. Mantieni la guardia tra un colpo e l'altro.",
    "tool": "pao"
  },
  {
    "id": "velocita--calci-con-richiamo-veloce-del-piede",
    "name": "Calci con richiamo veloce del piede",
    "category": "velocita",
    "description": "Calcio frontale e ritorno del piede prima del contatto con il pavimento.",
    "equipment": "Sacco",
    "dose": "4 × 8 per lato, recupero 40 s",
    "details": "Esegui un calcio frontale al sacco e riporta il piede indietro alla posizione di partenza prima di appoggiarlo, poi ripeti. Allena il richiamo rapido che impedisce all'avversario di catturare la gamba. Tieni il busto stabile e le mani alte.",
    "tool": "sacco"
  },
  {
    "id": "velocita--scatti-laterali-tra-coni",
    "name": "Scatti laterali tra coni",
    "category": "velocita",
    "description": "Scatti laterali tra due coni a 3 metri.",
    "equipment": "Coni",
    "dose": "6 × 15 s, recupero 45 s",
    "details": "Con due coni a 3 metri, spostati lateralmente in passo accostato toccando ogni cono con la mano, senza incrociare i piedi. Migliora i cambi di direzione e gli spostamenti laterali per uscire dalla linea d'attacco. Resta basso con il baricentro tra i piedi.",
    "tool": "coni-scaletta"
  },
  {
    "id": "velocita--mani-rapide-al-muro",
    "name": "Mani rapide al muro",
    "category": "velocita",
    "description": "Toccare il muro alternando le mani il più velocemente possibile.",
    "equipment": "Corpo libero",
    "dose": "5 × 15 s, recupero 30 s",
    "details": "Di fronte al muro a distanza di braccio, tocca la parete alternando le mani alla massima frequenza, a diverse altezze. Sviluppa rapidità delle mani e coordinazione per le raffiche. Mantieni spalle rilassate e respiro regolare.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--piedi-rapidi-sul-posto",
    "name": "Piedi rapidi sul posto",
    "category": "velocita",
    "description": "Passettini velocissimi sul posto in guardia.",
    "equipment": "Corpo libero",
    "dose": "6 × 10 s, recupero 30 s",
    "details": "In guardia, esegui passettini rapidissimi sugli avampiedi senza perdere la posizione; al segnale puoi aggiungere un colpo. Allena la reattività dei piedi e la prontezza a partire in qualsiasi direzione. Talloni sollevati e ginocchia leggermente flesse.",
    "tool": "corpo-libero"
  },
  {
    "id": "velocita--ripartenza-dopo-la-parata",
    "name": "Ripartenza dopo la parata",
    "category": "velocita",
    "description": "Parata del calcio e contrattacco immediato con calcio.",
    "equipment": "Compagno",
    "dose": "4 × 6 per lato, recupero 45 s",
    "details": "Il compagno calcia, tu pari con la tibia e appena il piede tocca terra rispondi con calcio circolare dalla stessa gamba o dall'altra. Insegna il contrattacco tipico della Muay Thai, molto premiato nel punteggio. Usa parastinchi e calci controllati con il compagno.",
    "tool": "compagno"
  },
  {
    "id": "resistenza--corsa-lenta-continua",
    "name": "Corsa lenta continua",
    "category": "resistenza",
    "description": "30-45 minuti di corsa a ritmo di conversazione.",
    "equipment": "Corpo libero",
    "dose": "30–45 min a ritmo di conversazione",
    "details": "Corri a passo regolare riuscendo a parlare senza affanno (circa 65–75% della FC max), appoggio morbido e spalle rilassate. Costruisce la base aerobica che permette di recuperare più in fretta tra le riprese e di reggere un match di 5 round. Meglio su terreno morbido per proteggere le articolazioni.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--corsa-a-intervalli",
    "name": "Corsa a intervalli",
    "category": "resistenza",
    "description": "1 minuto veloce e 1 minuto lento per 20 minuti.",
    "equipment": "Corpo libero",
    "dose": "20 min: 1 min veloce / 1 min lento",
    "details": "Dopo 10 minuti di riscaldamento alterna un minuto a ritmo sostenuto (respiro impegnato ma controllato) a un minuto di corsa lenta, senza mai fermarti. Abitua il corpo a recuperare mentre è ancora in movimento, come tra uno scambio e l'altro in gara. Mantieni costante la velocità delle fasi veloci.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--corsa-in-salita",
    "name": "Corsa in salita",
    "category": "resistenza",
    "description": "Ripetute in salita di 30-60 secondi.",
    "equipment": "Corpo libero",
    "dose": "8–10 × 30–60 s in salita, rientro camminando",
    "details": "Scegli una salita del 6–10%, corri spingendo forte con le braccia e il busto leggermente inclinato in avanti, poi torna giù camminando come recupero. Sviluppa potenza aerobica e forza delle gambe, utile per calci e spinte nel clinch. Accorcia il passo e resta sull'avampiede, senza piegare la schiena.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--corsa-con-cambi-di-ritmo",
    "name": "Corsa con cambi di ritmo",
    "category": "resistenza",
    "description": "Fartlek con cambi di velocità liberi.",
    "equipment": "Corpo libero",
    "dose": "20–30 min di fartlek libero",
    "details": "Corri in continuo inserendo a sensazione tratti veloci di 15–60 secondi (fino a un palo, un incrocio) seguiti da tratti lenti. Il ritmo irregolare imita l'andamento di un incontro, fatto di esplosioni e pause attive. Non trasformarlo in una gara: i tratti veloci devono restare controllati.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--corda-3-minuti",
    "name": "Corda 3 minuti",
    "category": "resistenza",
    "description": "Riprese di corda da 3 minuti con 1 minuto di recupero.",
    "equipment": "Corda",
    "dose": "5–6 riprese da 3 min, 1 min recupero",
    "details": "Salta sugli avampiedi con piccoli rimbalzi, polsi che fanno girare la corda e gomiti vicini al corpo, variando passo alternato, doppio appoggio e spostamenti. Ricrea la struttura a riprese del match e allena leggerezza e ritmo dei piedi. Respira in modo regolare e non saltare più alto del necessario.",
    "tool": "corda"
  },
  {
    "id": "resistenza--corda-10-minuti-continui",
    "name": "Corda 10 minuti continui",
    "category": "resistenza",
    "description": "Corda a ritmo costante per 10 minuti.",
    "equipment": "Corda",
    "dose": "10 min continui a ritmo costante",
    "details": "Mantieni un ritmo regolare dall'inizio alla fine, alternando salto base e passo corso per gestire la fatica senza mai fermarti. È un classico riscaldamento e allenamento aerobico thailandese che rinforza polpacci e caviglie. Se la corda si blocca riparti subito: la continuità conta più della velocità.",
    "tool": "corda"
  },
  {
    "id": "resistenza--sacco-5-riprese",
    "name": "Sacco 5 riprese",
    "category": "resistenza",
    "description": "Cinque riprese da 3 minuti al sacco, 1 minuto di pausa.",
    "equipment": "Sacco",
    "dose": "5 × 3 min, 1 min recupero",
    "details": "Lavora al sacco come in un vero round: combinazioni di pugni, calci, ginocchia e gomiti alternate a movimento e guardia. Allena la resistenza specifica alla durata di un incontro, imparando a distribuire lo sforzo. Mantieni la guardia alta anche negli ultimi secondi di ogni ripresa.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--pao-5-riprese",
    "name": "Pao 5 riprese",
    "category": "resistenza",
    "description": "Cinque riprese ai pao con il maestro.",
    "equipment": "Pao",
    "dose": "5 × 3 min, 1 min recupero",
    "details": "Il maestro chiama le combinazioni e l'atleta risponde subito, colpendo con tecnica e tornando in guardia dopo ogni serie. Unisce lavoro tecnico e condizionamento al ritmo di gara, con la pressione di un partner attivo. Chi tiene i pao deve dare anche contrattacchi leggeri per tenere alta l'attenzione.",
    "tool": "pao"
  },
  {
    "id": "resistenza--shadow-boxing-a-ripresa",
    "name": "Shadow boxing a ripresa",
    "category": "resistenza",
    "description": "Shadow boxing continuo per riprese da 3 minuti.",
    "equipment": "Corpo libero",
    "dose": "3–5 × 3 min, 1 min recupero",
    "details": "Muoviti nello spazio come davanti a un avversario immaginario: entra, colpisci, esci, difendi e cambia angolo senza fermarti. Allena fiato, gioco di gambe e fluidità delle combinazioni senza impatto. Non tendere completamente le articolazioni a vuoto per non stressare gomiti e ginocchia.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--sacco-tabata",
    "name": "Sacco Tabata",
    "category": "resistenza",
    "description": "20 secondi al massimo e 10 di pausa per 8 serie.",
    "equipment": "Sacco",
    "dose": "8 × 20 s / 10 s (4 min), 1–2 blocchi",
    "details": "Per 20 secondi colpisci il sacco alla massima frequenza con pugni dritti o combinazioni brevi, poi 10 secondi di pausa attiva in guardia. Sviluppa la capacità anaerobica necessaria per le raffiche finali di un round. Fai almeno 10 minuti di riscaldamento prima e non sacrificare la tecnica alla velocità.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--burpee-tabata",
    "name": "Burpee Tabata",
    "category": "resistenza",
    "description": "20 secondi di burpee e 10 di pausa per 8 serie.",
    "equipment": "Corpo libero",
    "dose": "8 × 20 s / 10 s (4 min)",
    "details": "Dalla stazione eretta scendi in appoggio, porta le gambe indietro, torna su e salta, il tutto a ritmo sostenuto per 20 secondi. Allena la capacità di rialzarsi e ripartire con potenza anche in debito d'ossigeno. Mantieni addome contratto in plank ed evita di far cadere i fianchi verso il pavimento.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--calci-circolari-tabata",
    "name": "Calci circolari Tabata",
    "category": "resistenza",
    "description": "20 secondi di calci alternati e 10 di pausa.",
    "equipment": "Sacco",
    "dose": "8 × 20 s / 10 s, calci alternati",
    "details": "Calcia circolare alternando destro e sinistro con rotazione completa dell'anca e ritorno veloce in guardia, il più rapidamente possibile per 20 secondi. Costruisce la resistenza lattacida tipica delle serie di calci in gara. Ruota sempre l'avampiede d'appoggio per proteggere il ginocchio.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--ripresa-30-30",
    "name": "Ripresa 30-30",
    "category": "resistenza",
    "description": "30 secondi forti e 30 leggeri al sacco per 3 minuti.",
    "equipment": "Sacco",
    "dose": "3–5 riprese da 3 min (30 s forte / 30 s leggero)",
    "details": "Alterna 30 secondi di attacco intenso al sacco con 30 secondi di lavoro leggero tecnico e movimento, senza mai fermarti. Insegna a cambiare marcia e a recuperare restando attivi, gestendo l'intensità come in un match. Nella fase leggera respira dal naso e cura la guardia.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--ripresa-a-piramide",
    "name": "Ripresa a piramide",
    "category": "resistenza",
    "description": "Raffiche al sacco da 10, 20, 30 secondi e ritorno.",
    "equipment": "Sacco",
    "dose": "2–3 riprese: 10-20-30-20-10 s, recupero 10 s",
    "details": "Esegui raffiche al sacco di 10, 20 e 30 secondi e poi ridiscendi, con brevi pause in guardia tra una raffica e l'altra. Allena la tolleranza al lattato in modo progressivo e la capacità di mantenere velocità sotto fatica. Scegli colpi semplici (pugni dritti, ginocchia) per non perdere qualità.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--cyclette-a-intervalli",
    "name": "Cyclette a intervalli",
    "category": "resistenza",
    "description": "Sprint di 20 secondi e recupero di 40 per 15 minuti.",
    "equipment": "Cyclette",
    "dose": "15 min: 20 s sprint / 40 s lento",
    "details": "Pedala alla massima cadenza con resistenza medio-alta per 20 secondi, poi 40 secondi lenti a bassa resistenza. Ottimo condizionamento anaerobico a basso impatto, ideale per chi ha fastidi a tibie o caviglie. Regola bene l'altezza della sella per non sovraccaricare le ginocchia."
  },
  {
    "id": "resistenza--vogatore",
    "name": "Vogatore",
    "category": "resistenza",
    "description": "Remoergometro a ritmo costante per 15-20 minuti.",
    "equipment": "Vogatore",
    "dose": "15–20 min a ritmo costante (22–26 colpi/min)",
    "details": "Spingi prima con le gambe, poi apri il busto e infine tira con le braccia verso lo sterno; ritorno nell'ordine inverso. Allena l'aerobico coinvolgendo tutto il corpo, compresa la catena posteriore utile nel clinch. Mantieni la schiena neutra senza incurvarti in avanti."
  },
  {
    "id": "resistenza--vogatore-a-intervalli",
    "name": "Vogatore a intervalli",
    "category": "resistenza",
    "description": "250 metri veloci e 1 minuto di recupero.",
    "equipment": "Vogatore",
    "dose": "6–8 × 250 m veloci, 1 min recupero",
    "details": "Rema forte per 250 metri cercando un passo costante tra le ripetute, poi un minuto di vogata lenta o fermo. Sviluppa potenza anaerobica di gambe, schiena e braccia, simile allo sforzo di una lunga fase di clinch. Annota i tempi: l'ultima ripetuta non deve calare troppo rispetto alla prima."
  },
  {
    "id": "resistenza--assault-bike",
    "name": "Assault bike",
    "category": "resistenza",
    "description": "Sprint alla bike con braccia e gambe.",
    "equipment": "Assault bike",
    "dose": "10 × 15 s sprint / 45 s recupero",
    "details": "Spingi e tira i manubri coordinando braccia e gambe al massimo per 15 secondi, poi pedala lento per recuperare. Allenamento brutale e completo per la potenza anaerobica, a basso impatto articolare. Parti piano nei primi colpi di pedale e accelera: la resistenza dell'aria cresce molto in fretta."
  },
  {
    "id": "resistenza--nuoto",
    "name": "Nuoto",
    "category": "resistenza",
    "description": "Nuotata continua per il recupero attivo e il fiato.",
    "equipment": "Piscina",
    "dose": "20–30 min continui a ritmo moderato",
    "details": "Nuota a stile libero o alternando gli stili a un ritmo che ti permetta di respirare con regolarità. Migliora la capacità aerobica e il controllo del respiro scaricando completamente le articolazioni, ideale come recupero attivo dopo sessioni dure. Concentrati su espirazioni lunghe in acqua."
  },
  {
    "id": "resistenza--circuito-a-stazioni",
    "name": "Circuito a stazioni",
    "category": "resistenza",
    "description": "6 stazioni da 1 minuto, 3 giri.",
    "equipment": "Vari",
    "dose": "3 giri × 6 stazioni da 1 min, 1–2 min tra giri",
    "details": "Prepara sei stazioni (es. sacco, burpee, corda, ginocchiate, squat jump, plank) e passa dall'una all'altra senza pausa. Allena la resistenza generale e la capacità di lavorare con muscoli diversi senza calo di intensità. Alterna stazioni di gambe e braccia per mantenere buona la tecnica."
  },
  {
    "id": "resistenza--sparring-tecnico-continuo",
    "name": "Sparring tecnico continuo",
    "category": "resistenza",
    "description": "Sparring leggero a ritmo costante per riprese lunghe.",
    "equipment": "Protezioni",
    "dose": "3–4 riprese da 4–5 min, 1 min recupero",
    "details": "Sparring leggero (30–50% di potenza) mantenendo un ritmo costante di colpi, movimento e difesa senza pause. Allena il fiato in situazione reale e la lucidità tecnica sotto fatica. Usa sempre paradenti, guantoni da 14–16 oz e parastinchi, e accordati sull'intensità con il compagno."
  },
  {
    "id": "resistenza--clinch-a-ripresa",
    "name": "Clinch a ripresa",
    "category": "resistenza",
    "description": "Riprese di clinch continuo da 3 minuti.",
    "equipment": "Compagno",
    "dose": "3–5 × 3 min, 1 min recupero",
    "details": "Lavora in clinch continuo con il compagno: cerca il controllo della testa, gira, sbilancia e inserisci ginocchiate leggere. È uno degli sforzi più faticosi della Muay Thai e allena la resistenza di collo, braccia e core. Tieni la postura alta e i fianchi vicini, senza spingere la testa in avanti.",
    "tool": "compagno"
  },
  {
    "id": "resistenza--ripresa-con-nuovo-compagno",
    "name": "Ripresa con nuovo compagno",
    "category": "resistenza",
    "description": "Ogni ripresa un compagno fresco entra contro lo stesso atleta.",
    "equipment": "Compagno",
    "dose": "4–6 riprese da 2–3 min, cambio compagno",
    "details": "Un atleta resta al centro mentre ogni ripresa entra un compagno fresco a fare sparring o clinch controllato. Simula la fatica degli ultimi round contro un avversario riposato e rafforza la tenuta mentale. Il coach deve controllare l'intensità e fermare se la tecnica crolla.",
    "tool": "compagno"
  },
  {
    "id": "resistenza--sprint-ripetuti",
    "name": "Sprint ripetuti",
    "category": "resistenza",
    "description": "10 sprint da 30 metri con recupero breve.",
    "equipment": "Corpo libero",
    "dose": "10 × 30 m, recupero 30–45 s",
    "details": "Parti dalla posizione in piedi o in guardia ed esplodi al massimo per 30 metri, poi torna camminando. Sviluppa velocità e capacità di ripetere sforzi esplosivi con poco recupero. Riscalda bene i flessori della coscia con andature prima di iniziare.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--navette",
    "name": "Navette",
    "category": "resistenza",
    "description": "Corsa avanti e indietro tra due linee a 10 metri.",
    "equipment": "Coni",
    "dose": "6–8 × 30 s di navette, 30 s recupero",
    "details": "Corri tra due coni distanti 10 metri toccando la linea a terra a ogni cambio di direzione. Allena accelerazione, frenata e cambio di direzione, utili negli spostamenti sul ring. Abbassa il baricentro prima di girare per proteggere ginocchia e caviglie.",
    "tool": "coni-scaletta"
  },
  {
    "id": "resistenza--ripresa-di-ginocchiate",
    "name": "Ripresa di ginocchiate",
    "category": "resistenza",
    "description": "3 minuti di ginocchiate continue al sacco.",
    "equipment": "Sacco",
    "dose": "3 × 3 min, 1 min recupero",
    "details": "Afferra il sacco come in clinch e porta ginocchiate alternate continue, spingendo l'anca in avanti e salendo sull'avampiede. Allena la resistenza specifica del clinch, dove le ginocchia sono le armi principali. Tieni il busto eretto e tira il sacco verso di te a ogni colpo.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--ripresa-solo-calci",
    "name": "Ripresa solo calci",
    "category": "resistenza",
    "description": "Una ripresa intera di soli calci al sacco.",
    "equipment": "Sacco",
    "dose": "2–3 × 3 min, 1 min recupero",
    "details": "Una ripresa intera usando solo calci: circolari bassi, medi e alti, teep e cambi di guardia, rientrando sempre in posizione. Costruisce la resistenza delle gambe e del core per sostenere molti calci in gara. Quando arriva la fatica non abbassare le braccia durante il calcio.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--ripresa-solo-pugni",
    "name": "Ripresa solo pugni",
    "category": "resistenza",
    "description": "Una ripresa intera di soli pugni al sacco.",
    "equipment": "Sacco",
    "dose": "2–3 × 3 min, 1 min recupero",
    "details": "Lavora solo con pugni (diretti, ganci, montanti) in combinazioni varie, muovendoti attorno al sacco. Allena la resistenza di spalle e braccia e la capacità di mantenere velocità di mano sotto fatica. Ricorda di ruotare il piede posteriore e di riportare sempre le mani al viso.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--ripresa-difensiva",
    "name": "Ripresa difensiva",
    "category": "resistenza",
    "description": "Il compagno attacca per 3 minuti, l'allievo solo difende e si muove.",
    "equipment": "Compagno",
    "dose": "3 × 3 min, 1 min recupero",
    "details": "Il compagno attacca a intensità controllata mentre l'allievo può solo bloccare, schivare, parare i calci e muoversi, senza contrattaccare. Allena il fiato e la calma sotto pressione, imparando a respirare mentre si subisce. Tenere il mento basso e gli occhi sempre sull'avversario.",
    "tool": "compagno"
  },
  {
    "id": "resistenza--ripresa-extra-lunga",
    "name": "Ripresa extra lunga",
    "category": "resistenza",
    "description": "Ripresa al sacco da 5 minuti invece di 3.",
    "equipment": "Sacco",
    "dose": "2–3 × 5 min, 1 min recupero",
    "details": "Una ripresa al sacco da 5 minuti con lo stesso ritmo e la stessa varietà di colpi di un round normale. Crea una riserva di resistenza: se reggi 5 minuti, i 3 della gara sembreranno più gestibili. Dosa l'energia nei primi minuti per non crollare nel finale.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--recupero-breve",
    "name": "Recupero breve",
    "category": "resistenza",
    "description": "Riprese da 3 minuti con 30 secondi di recupero.",
    "equipment": "Sacco",
    "dose": "4–5 × 3 min, 30 s recupero",
    "details": "Riprese al sacco a intensità di gara ma con soli 30 secondi di pausa invece di un minuto. Allena la capacità di recuperare in fretta e abitua a lavorare con fatica accumulata. Nei 30 secondi respira profondamente e resta in piedi, senza piegarti sulle ginocchia.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--emom-burpee-e-calci",
    "name": "EMOM burpee e calci",
    "category": "resistenza",
    "description": "Ogni minuto 5 burpee e 10 calci, per 10 minuti.",
    "equipment": "Sacco",
    "dose": "EMOM 10 min: 5 burpee + 10 calci",
    "details": "All'inizio di ogni minuto esegui 5 burpee e subito 10 calci circolari al sacco, poi riposa per i secondi rimanenti. Combina esplosività e calci sotto fatica, con un recupero che si riduce man mano che rallenti. Se finisci oltre i 40 secondi riduci le ripetizioni per mantenere la qualità.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--amrap-10-minuti",
    "name": "AMRAP 10 minuti",
    "category": "resistenza",
    "description": "Più giri possibili di squat, piegamenti e ginocchiate.",
    "equipment": "Corpo libero",
    "dose": "AMRAP 10 min: 10 squat, 10 piegamenti, 20 ginocchiate",
    "details": "Completa più giri possibili di squat, piegamenti e ginocchiate alternate in 10 minuti, contando i giri. Allena la resistenza generale e muscolare di tutto il corpo con un obiettivo misurabile da migliorare. Mantieni un ritmo sostenibile e una tecnica pulita invece di partire a tutta.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--scalini",
    "name": "Scalini",
    "category": "resistenza",
    "description": "Salire e scendere le scale di corsa.",
    "equipment": "Scale",
    "dose": "8–10 salite di una rampa, ritorno camminando",
    "details": "Sali le scale di corsa sugli avampiedi, uno o due gradini alla volta, spingendo con le braccia, e scendi camminando con calma. Sviluppa potenza aerobica e forza di polpacci e quadricipiti, utili per i calci. Scendi sempre con attenzione: la discesa veloce stressa le ginocchia."
  },
  {
    "id": "resistenza--corsa-con-pugni",
    "name": "Corsa con pugni",
    "category": "resistenza",
    "description": "Corsa leggera alternata a 30 secondi di pugni sul posto.",
    "equipment": "Corpo libero",
    "dose": "20 min: 2 min corsa + 30 s pugni sul posto",
    "details": "Corri leggero e ogni due minuti fermati per 30 secondi di pugni dritti veloci in guardia sul posto, poi riparti. Unisce lavoro aerobico e resistenza delle spalle, abituando a colpire con il fiato alterato. Durante i pugni tieni i piedi in posizione di guardia e il mento basso.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--camminata-veloce-in-salita",
    "name": "Camminata veloce in salita",
    "category": "resistenza",
    "description": "Camminata a passo sostenuto in salita, recupero attivo.",
    "equipment": "Corpo libero",
    "dose": "20–30 min a passo sostenuto",
    "details": "Cammina a passo deciso su una salita o sul tapis roulant inclinato (8–12%), spingendo con i glutei e senza aggrapparti. Migliora la base aerobica a bassa intensità ed è un ottimo recupero attivo nei giorni dopo lavori duri. Mantieni un respiro regolare e un'andatura costante.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--ripresa-di-teep",
    "name": "Ripresa di teep",
    "category": "resistenza",
    "description": "3 minuti di teep alternati al sacco.",
    "equipment": "Sacco",
    "dose": "2–3 × 3 min, 1 min recupero",
    "details": "Esegui teep alternati con gamba anteriore e posteriore, spingendo con l'anca e il tallone al centro del sacco e richiamando subito la gamba. Allena la resistenza del calcio frontale, l'arma principale per gestire la distanza. Sbilancia il busto all'indietro il minimo necessario e tieni le mani alte.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--doppia-ripresa-al-sacco",
    "name": "Doppia ripresa al sacco",
    "category": "resistenza",
    "description": "Due riprese di fila senza pausa.",
    "equipment": "Sacco",
    "dose": "2–3 × 6 min (2 riprese senza pausa), 2 min rec.",
    "details": "Lavora al sacco per due riprese consecutive da 3 minuti senza il minuto di recupero intermedio. Spinge oltre la soglia abituale e aumenta la tolleranza alla fatica prolungata. Mantieni varietà di colpi anche nella seconda metà invece di limitarti a spingere il sacco.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--gomitate-e-ginocchiate-a-ripresa",
    "name": "Gomitate e ginocchiate a ripresa",
    "category": "resistenza",
    "description": "Combinazioni di gomiti e ginocchia al sacco per 3 minuti.",
    "equipment": "Sacco",
    "dose": "3 × 3 min, 1 min recupero",
    "details": "Stai alla corta distanza dal sacco e combina gomitate orizzontali, discendenti e ascendenti con ginocchiate e prese in clinch. Allena la resistenza specifica della corta distanza, dove si decidono molti incontri. Chiudi bene il pugno della mano che colpisce di gomito per proteggere il polso.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--uno-contro-sacco-ritmo-gara",
    "name": "Uno contro sacco ritmo gara",
    "category": "resistenza",
    "description": "Ripresa al sacco simulando il ritmo di un match.",
    "equipment": "Sacco",
    "dose": "5 × 3 min, 2 min recupero (formato gara)",
    "details": "Simula un match intero: round 1 di studio, round centrali più intensi e ultimo round a tutta, con le pause regolamentari. Insegna a gestire l'energia nell'arco dell'incontro e a seguire una strategia. Il coach può dare indicazioni all'angolo come in gara.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--recupero-attivo-con-shadow",
    "name": "Recupero attivo con shadow",
    "category": "resistenza",
    "description": "Tra le riprese, shadow leggero invece di stare fermi.",
    "equipment": "Corpo libero",
    "dose": "1 min tra le riprese, shadow leggero",
    "details": "Durante le pause tra le riprese esegui shadow lento e rilassato, concentrandoti sul respiro e sulla tecnica invece di stare fermo. Favorisce lo smaltimento della fatica e allena a recuperare restando in movimento. L'intensità deve restare bassa: è un recupero, non un'altra ripresa.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--corda-con-doppi-a-intervalli",
    "name": "Corda con doppi a intervalli",
    "category": "resistenza",
    "description": "30 secondi di salti normali e 10 di doppi.",
    "equipment": "Corda",
    "dose": "5 min: 30 s salti normali / 10 s doppi",
    "details": "Salta normalmente per 30 secondi e poi esegui 10 secondi di doppi (due giri di corda per salto), senza fermarti. Allena coordinazione, esplosività dei polpacci e resistenza anaerobica. Se non riesci ancora con i doppi, sostituiscili con salti rapidissimi a piedi uniti.",
    "tool": "corda"
  },
  {
    "id": "resistenza--sacco-con-calci-a-50",
    "name": "Sacco con calci a 50",
    "category": "resistenza",
    "description": "Contare 50 calci circolari alternati il più velocemente possibile.",
    "equipment": "Sacco",
    "dose": "2–3 serie da 50 calci, 2 min recupero",
    "details": "Conta 50 calci circolari alternati al sacco cercando il tempo più basso, con rotazione completa e ritorno in guardia a ogni colpo. Costruisce resistenza lattacida e potenza dei calci sotto fatica, tipica della tradizione thailandese. Non accorciare il calcio quando arriva la stanchezza.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--sacco-con-100-ginocchiate",
    "name": "Sacco con 100 ginocchiate",
    "category": "resistenza",
    "description": "100 ginocchiate alternate senza fermarsi.",
    "equipment": "Sacco",
    "dose": "1–2 serie da 100 ginocchiate, 2 min recupero",
    "details": "Tieni il sacco in clinch e porta 100 ginocchiate alternate senza fermarti, contando ad alta voce. Allena la resistenza di anche, core e polpacci per il clinch e la tenuta mentale. Spingi l'anca avanti a ogni ginocchiata e sali sull'avampiede della gamba d'appoggio.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--scala-di-pugni",
    "name": "Scala di pugni",
    "category": "resistenza",
    "description": "10 pugni, 1 burpee, 20 pugni, 2 burpee, fino a 100 pugni.",
    "equipment": "Sacco",
    "dose": "1 scala completa: da 10 a 100 pugni (550 tot.)",
    "details": "Esegui 10 pugni veloci al sacco e 1 burpee, poi 20 pugni e 2 burpee, aumentando fino a 100 pugni e 10 burpee. La difficoltà crescente allena la resistenza di braccia e il recupero dopo i cambi di livello. Mantieni i pugni dritti e rapidi, senza spingere con le spalle.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--battle-rope-a-intervalli",
    "name": "Battle rope a intervalli",
    "category": "resistenza",
    "description": "30 secondi di onde e 30 di recupero per 10 minuti.",
    "equipment": "Battle rope",
    "dose": "10 min: 30 s onde / 30 s recupero",
    "details": "In semi-squat con schiena neutra, crea onde alternate o simultanee con le corde, usando spalle, braccia e core. Allena la resistenza di spalle e braccia per tenere la guardia alta e colpire nei round finali. Mantieni le ginocchia piegate e non inarcare la zona lombare.",
    "tool": "battle-rope"
  },
  {
    "id": "resistenza--ripresa-di-pao-con-calci-in-serie",
    "name": "Ripresa di pao con calci in serie",
    "category": "resistenza",
    "description": "Il maestro chiede serie da 10 calci in tutta la ripresa.",
    "equipment": "Pao",
    "dose": "3–4 × 3 min, 1 min recupero",
    "details": "Durante la ripresa ai pao il maestro chiama più volte serie da 10 calci circolari consecutivi, intervallate da combinazioni normali. Abitua a sostenere raffiche di calci quando si è già stanchi, come nelle fasi decisive di un match. Ogni calcio deve restare potente, non solo veloce.",
    "tool": "pao"
  },
  {
    "id": "resistenza--corsa-a-intervalli-lunghi",
    "name": "Corsa a intervalli lunghi",
    "category": "resistenza",
    "description": "4 ripetute da 4 minuti a ritmo sostenuto.",
    "equipment": "Corpo libero",
    "dose": "4 × 4 min a ritmo sostenuto, 3 min lenti",
    "details": "Corri 4 minuti a un ritmo impegnativo (circa 85–90% della FC max) e recupera con 3 minuti di corsa lenta. È un metodo efficace per alzare il massimo consumo di ossigeno e la capacità di reggere ritmi alti a lungo. Il ritmo deve essere costante: l'ultima ripetuta non deve essere più lenta.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--sprawl-e-pugni",
    "name": "Sprawl e pugni",
    "category": "resistenza",
    "description": "5 sprawl e 10 pugni in loop per 3 minuti.",
    "equipment": "Corpo libero",
    "dose": "3 × 3 min, 1 min recupero",
    "details": "Esegui 5 sprawl (gambe indietro, fianchi a terra, ritorno rapido in guardia) seguiti da 10 pugni veloci, in loop continuo. Allena la capacità di tornare in guardia velocemente e colpire subito, con un forte impegno cardiovascolare. Tieni la testa alta durante lo sprawl e rientra sempre in posizione di guardia.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--mountain-climber-a-intervalli",
    "name": "Mountain climber a intervalli",
    "category": "resistenza",
    "description": "30 secondi di mountain climber e 15 di pausa.",
    "equipment": "Corpo libero",
    "dose": "8–10 × 30 s / 15 s recupero",
    "details": "In posizione di plank con le mani sotto le spalle, porta alternativamente le ginocchia al petto a ritmo veloce. Allena core e flessori dell'anca, utili per ginocchiate e calci, insieme al fiato. Tieni i fianchi bassi e in linea con le spalle, senza alzare il bacino.",
    "tool": "corpo-libero"
  },
  {
    "id": "resistenza--ripresa-di-sacco-con-cambio-guardia",
    "name": "Ripresa di sacco con cambio guardia",
    "category": "resistenza",
    "description": "Ogni 30 secondi cambio guardia al sacco.",
    "equipment": "Sacco",
    "dose": "3 × 3 min, cambio ogni 30 s, 1 min rec.",
    "details": "Lavora al sacco cambiando guardia ogni 30 secondi su comando del coach o del timer, mantenendo ritmo e varietà di colpi. Allena la resistenza in entrambe le guardie e la coordinazione del lato meno forte. Nel cambio guardia resta compatto, senza aprire le mani.",
    "tool": "sacco"
  },
  {
    "id": "resistenza--ultima-ripresa-a-tutta",
    "name": "Ultima ripresa a tutta",
    "category": "resistenza",
    "description": "Dopo l'allenamento, ultima ripresa al massimo dell'intensità.",
    "equipment": "Sacco",
    "dose": "1 ripresa da 2–3 min a fine allenamento",
    "details": "Al termine della sessione esegui un'ultima ripresa al sacco alla massima intensità, senza risparmiarti. Allena la capacità di dare tutto quando si è già stanchi, come nell'ultimo round di un match combattuto. Anche al massimo, mantieni la guardia e una tecnica corretta.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--jab",
    "name": "Jab",
    "category": "tecnica",
    "description": "Diretto anteriore con rotazione del pugno e guardia alta.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Dalla guardia, distendi il braccio anteriore ruotando il pugno all'ultimo istante e riportalo indietro sulla stessa linea, con la spalla a proteggere il mento. Serve a misurare la distanza, disturbare e aprire le combinazioni. Errore comune: abbassare la mano posteriore mentre si colpisce.",
    "tool": "corpo-libero"
  },
  {
    "id": "tecnica--diretto-posteriore",
    "name": "Diretto posteriore",
    "category": "tecnica",
    "description": "Diretto con rotazione del piede e dell'anca posteriore.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Ruota il piede posteriore sull'avampiede e spingi l'anca in avanti, trasferendo il peso sulla gamba anteriore mentre il braccio si distende in linea retta. È il colpo di pugno più potente e il cuore dell'uno-due. Tieni la mano anteriore al viso e non sporgere il busto oltre il ginocchio anteriore.",
    "tool": "corpo-libero"
  },
  {
    "id": "tecnica--gancio-anteriore",
    "name": "Gancio anteriore",
    "category": "tecnica",
    "description": "Gancio con rotazione del piede anteriore, gomito all'altezza del pugno.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato, poi 2 riprese da 2 min",
    "details": "Ruota il piede anteriore e l'anca all'interno, portando il braccio a 90° con gomito all'altezza del pugno; la forza parte dalle gambe, non dalla spalla. Ottimo a corta distanza e dopo un diretto. Evita di caricare il colpo allargando il braccio: si legge in anticipo.",
    "tool": "corpo-libero"
  },
  {
    "id": "tecnica--gancio-posteriore",
    "name": "Gancio posteriore",
    "category": "tecnica",
    "description": "Gancio con la mano posteriore e rotazione completa.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato, poi 2 riprese da 2 min",
    "details": "Parte dalla rotazione completa del piede e dell'anca posteriore, con il braccio piegato che descrive un arco corto verso il bersaglio. Colpo da chiusura, efficace dopo jab o gancio anteriore. Mantieni la mano anteriore alta: dopo la rotazione si resta esposti al contrattacco.",
    "tool": "corpo-libero"
  },
  {
    "id": "tecnica--montante",
    "name": "Montante",
    "category": "tecnica",
    "description": "Pugno dal basso verso l'alto con spinta delle gambe.",
    "equipment": "Corpo libero",
    "dose": "4 × 10 per braccio",
    "details": "Piega leggermente le ginocchia, abbassa la spalla del lato che colpisce e spingi verso l'alto con gambe e anca, mantenendo il gomito vicino al corpo. Colpisce il mento quando l'avversario si chiude o si piega in avanti. Errore comune: abbassare il braccio prima di colpire, telegrafando il colpo.",
    "tool": "corpo-libero"
  },
  {
    "id": "tecnica--montante-al-corpo",
    "name": "Montante al corpo",
    "category": "tecnica",
    "description": "Montante al plesso con piegamento delle ginocchia.",
    "equipment": "Corpo libero",
    "dose": "4 × 10 per braccio",
    "details": "Abbassa il baricentro piegando le ginocchia, senza piegare la schiena, e porta il montante sotto il gomito avversario verso plesso o fegato. Il lavoro al corpo toglie fiato e fa calare la guardia. Tieni l'altra mano a protezione del viso mentre sei abbassato.",
    "tool": "corpo-libero"
  },
  {
    "id": "tecnica--pugno-girato-spinning-backfist",
    "name": "Pugno girato (spinning backfist)",
    "category": "tecnica",
    "description": "Rotazione completa e colpo con il dorso del pugno.",
    "equipment": "Sacco",
    "dose": "4 × 6 per lato al sacco",
    "details": "Fai un passo pivot, ruota sul piede anteriore guardando il bersaglio sopra la spalla prima di colpire, e impatta con il dorso del pugno a braccio quasi disteso. Colpo a sorpresa utile contro chi si sposta lateralmente. Prima la lentezza e la vista del bersaglio: girarsi alla cieca espone a contrattacchi e perdita di equilibrio.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--superman-punch",
    "name": "Superman punch",
    "category": "tecnica",
    "description": "Finta di calcio e diretto in salto.",
    "equipment": "Sacco",
    "dose": "4 × 6 per lato al sacco",
    "details": "Accenna un calcio con la gamba posteriore, riportala indietro con decisione e usa la spinta per proiettarti in avanti con il diretto della stessa parte. Sorprende l'avversario che si prepara a parare il calcio. Atterra in guardia, ben bilanciato, e non saltare troppo in alto.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--calcio-circolare-al-corpo",
    "name": "Calcio circolare al corpo",
    "category": "tecnica",
    "description": "Calcio con la tibia al fianco, rotazione sul piede d'appoggio.",
    "equipment": "Sacco",
    "dose": "4 × 10 per gamba al sacco",
    "details": "Esci leggermente in diagonale, sali sull'avampiede d'appoggio ruotando il tallone verso il bersaglio e colpisci con la tibia, il braccio dello stesso lato che scende a bilanciare. Il calcio principale della Muay Thai, rompe la guardia e consuma fiato. Errore comune: colpire con il collo del piede o non ruotare l'appoggio.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--calcio-circolare-alto",
    "name": "Calcio circolare alto",
    "category": "tecnica",
    "description": "Calcio alla testa con ampia rotazione dell'anca.",
    "equipment": "Sacco",
    "dose": "4 × 8 per gamba al sacco",
    "details": "Ruota completamente l'anca e il piede d'appoggio sollevando la gamba in traiettoria ascendente verso testa o collo, mantenendo la mano dello stesso lato a protezione del viso. Colpo da KO quando l'avversario abbassa la guardia. Scalda bene anche adduttori e flessori: richiede mobilità.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--low-kick",
    "name": "Low kick",
    "category": "tecnica",
    "description": "Calcio circolare alla coscia esterna dell'avversario.",
    "equipment": "Sacco",
    "dose": "4 × 10 per gamba al sacco basso",
    "details": "Calcio circolare con la tibia diretto alla coscia esterna sopra il ginocchio, con rotazione completa e leggermente discendente. Accumula danni e toglie mobilità e potenza all'avversario. Prepara con pugni per non essere intercettato e torna subito in guardia dopo l'impatto.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--low-kick-interno",
    "name": "Low kick interno",
    "category": "tecnica",
    "description": "Calcio alla coscia interna con la gamba anteriore.",
    "equipment": "Sacco",
    "dose": "3 × 10 per lato",
    "details": "Con la gamba anteriore, ruota leggermente l'anca e colpisci la coscia interna dell'avversario con tibia o collo del piede, in modo rapido e corto. Sbilancia la guardia avversaria e prepara il diretto. Non alzare troppo il ginocchio: deve partire veloce senza segnali.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--calcio-al-polpaccio",
    "name": "Calcio al polpaccio",
    "category": "tecnica",
    "description": "Calcio basso al polpaccio della gamba anteriore.",
    "equipment": "Sacco",
    "dose": "3 × 10 per lato",
    "details": "Calcio circolare corto e discendente sul polpaccio della gamba anteriore avversaria, colpendo con la parte bassa della tibia. Molto efficace contro chi carica il peso avanti e difficile da parare. Mira al muscolo, non all'osso, e copri il viso mentre calci.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--switch-kick",
    "name": "Switch kick",
    "category": "tecnica",
    "description": "Cambio guardia rapido e calcio con la gamba anteriore.",
    "equipment": "Sacco",
    "dose": "4 × 8 per lato",
    "details": "Con un piccolo saltello inverti la posizione dei piedi portando avanti la gamba posteriore, poi calcia subito circolare con la gamba che era davanti. Dà potenza al calcio anteriore e confonde l'avversario. Il cambio deve essere piccolo e rapido, con le mani sempre alte.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--teep-anteriore",
    "name": "Teep anteriore",
    "category": "tecnica",
    "description": "Calcio frontale di spinta con la gamba anteriore.",
    "equipment": "Sacco",
    "dose": "3 × 12 per lato",
    "details": "Solleva il ginocchio anteriore al petto e distendi la gamba spingendo con la pianta o l'avampiede verso addome o anca, con l'anca che spinge in avanti. Controlla la distanza e interrompe l'attacco avversario. Ritira la gamba dopo l'impatto per non farla afferrare.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--teep-posteriore",
    "name": "Teep posteriore",
    "category": "tecnica",
    "description": "Calcio frontale di spinta con la gamba posteriore.",
    "equipment": "Sacco",
    "dose": "3 × 12 per lato",
    "details": "Porta il ginocchio posteriore in alto e spingi in avanti con tutto il bacino, inclinando leggermente indietro il busto per dare peso al colpo. Più potente dell'anteriore, ideale per allontanare chi pressa. Dopo il colpo rimetti il piede a terra in guardia, non cadere in avanti.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--teep-al-viso",
    "name": "Teep al viso",
    "category": "tecnica",
    "description": "Calcio frontale alto, tecnica di dominio e provocazione.",
    "equipment": "Pao",
    "dose": "3 × 6 per lato ai pao",
    "details": "Teep sollevato all'altezza del viso con la pianta del piede, eseguito con controllo e grande mobilità dell'anca. Oltre a colpire, mostra dominio e destabilizza psicologicamente l'avversario. Richiede tempismo: si tira quando l'avversario è fermo o si sporge in avanti.",
    "tool": "pao"
  },
  {
    "id": "tecnica--teep-laterale",
    "name": "Teep laterale",
    "category": "tecnica",
    "description": "Calcio laterale di spinta con il tallone.",
    "equipment": "Sacco",
    "dose": "3 × 10 per lato",
    "details": "Ruota il piede d'appoggio, porta il ginocchio al petto e spingi lateralmente colpendo con il tallone, busto inclinato e guardia alta. Utile per fermare chi entra di lato o angolato. Errore comune: non ruotare l'appoggio, sforzando il ginocchio.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--ginocchiata-dritta",
    "name": "Ginocchiata dritta",
    "category": "tecnica",
    "description": "Ginocchiata in avanti spingendo l'anca.",
    "equipment": "Sacco",
    "dose": "4 × 12 per gamba",
    "details": "Spingi l'anca in avanti e colpisci con la punta del ginocchio, alzandoti sull'avampiede della gamba d'appoggio e tirando le braccia verso il basso. Arma fondamentale a corta distanza e nel clinch. Non piegare il busto in avanti: la potenza viene dall'anca.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--ginocchiata-diagonale",
    "name": "Ginocchiata diagonale",
    "category": "tecnica",
    "description": "Ginocchiata con traiettoria laterale.",
    "equipment": "Sacco",
    "dose": "4 × 10 per gamba",
    "details": "Fai un piccolo passo di lato e porta il ginocchio in traiettoria diagonale verso costole o fianco, ruotando leggermente l'anca. Supera la guardia frontale dell'avversario. Mantieni l'equilibrio sull'avampiede e torna subito in posizione.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--ginocchiata-curva",
    "name": "Ginocchiata curva",
    "category": "tecnica",
    "description": "Ginocchiata circolare al fianco.",
    "equipment": "Sacco",
    "dose": "4 × 10 per gamba",
    "details": "Solleva il ginocchio lateralmente e ruota l'anca come in un calcio circolare corto, colpendo il fianco con l'interno del ginocchio. Funziona nel clinch quando l'avversario è troppo vicino per una ginocchiata dritta. Tieni il controllo del collo o delle braccia mentre colpisci.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--ginocchiata-volante",
    "name": "Ginocchiata volante",
    "category": "tecnica",
    "description": "Ginocchiata in salto con lo slancio della gamba opposta.",
    "equipment": "Sacco",
    "dose": "4 × 5 per gamba al sacco",
    "details": "Fai uno o due passi, spingi con la gamba opposta e salta portando il ginocchio in avanti e verso l'alto con l'anca. Colpo spettacolare e potente contro chi avanza o abbassa la testa. Atterra in guardia e non saltare se l'avversario è troppo lontano.",
    "tool": "sacco"
  },
  {
    "id": "tecnica--gomitata-orizzontale",
    "name": "Gomitata orizzontale",
    "category": "tecnica",
    "description": "Gomitata laterale con rotazione delle spalle.",
    "equipment": "Pao",
    "dose": "4 × 10 per lato ai pao",
    "details": "Ruota spalle e anca portando il gomito in orizzontale all'altezza del viso, con il palmo verso il basso e la mano vicino alla testa. Colpo corto e tagliente, devastante a corta distanza. L'altra mano protegge sempre il viso; non allargare il braccio.",
    "tool": "pao"
  },
  {
    "id": "tecnica--gomitata-dall-alto",
    "name": "Gomitata dall'alto",
    "category": "tecnica",
    "description": "Gomitata che scende dall'alto verso il basso.",
    "equipment": "Pao",
    "dose": "4 × 10 per lato ai pao",
    "details": "Solleva il gomito sopra la testa e scendilo verso il bersaglio piegando leggermente le gambe per aggiungere peso. Penetra la guardia alta e colpisce fronte o sopracciglio. Errore comune: alzare troppo il gomito in anticipo segnalando il colpo.",
    "tool": "pao"
  },
  {
    "id": "tecnica--gomitata-montante",
    "name": "Gomitata montante",
    "category": "tecnica",
    "description": "Gomitata dal basso verso l'alto.",
    "equipment": "Pao",
    "dose": "4 × 10 per lato ai pao",
    "details": "Porta il gomito dal basso verso l'alto lungo la linea centrale, spingendo con gambe e anca e tenendo la mano vicino all'orecchio. Passa tra le braccia dell'avversario chiuso in guardia. Mantieni la testa fuori linea durante l'esecuzione.",
    "tool": "pao"
  },
  {
    "id": "tecnica--gomitata-girata",
    "name": "Gomitata girata",
    "category": "tecnica",
    "description": "Gomitata con rotazione completa all'indietro.",
    "equipment": "Pao",
    "dose": "4 × 6 per lato ai pao",
    "details": "Fai un passo pivot, ruota all'indietro guardando il bersaglio sopra la spalla e colpisci con il gomito orizzontale alla fine della rotazione. Colpo sorpresa contro chi gira intorno o esce lateralmente. Allena prima la rotazione lenta per non perdere l'equilibrio.",
    "tool": "pao"
  },
  {
    "id": "tecnica--gomitata-in-diagonale-discendente",
    "name": "Gomitata in diagonale discendente",
    "category": "tecnica",
    "description": "Gomitata che taglia in diagonale verso il basso.",
    "equipment": "Pao",
    "dose": "4 × 10 per lato ai pao",
    "details": "Porta il gomito dall'alto in diagonale verso il basso, attraversando la guardia con rotazione di spalla e leggero affondo sulle gambe. Molto efficace per tagliare e come chiusura delle combinazioni. Tieni il mento basso e l'altra mano alta.",
    "tool": "pao"
  },
  {
    "id": "tecnica--parata-con-la-tibia",
    "name": "Parata con la tibia",
    "category": "tecnica",
    "description": "Bloccare il calcio sollevando la gamba con la tibia.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min con compagno",
    "details": "Solleva il ginocchio dalla parte del calcio verso il gomito, ruotando leggermente la tibia verso l'esterno e tenendo la guardia alta. È la difesa principale contro i calci circolari. Non abbassare le mani e appoggia subito il piede per ripartire con il contrattacco.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--parata-incrociata",
    "name": "Parata incrociata",
    "category": "tecnica",
    "description": "Parata con la tibia opposta al lato del calcio.",
    "equipment": "Compagno",
    "dose": "3 × 10 per lato con compagno",
    "details": "Contro il calcio, solleva la gamba opposta incrociando la tibia davanti al corpo per intercettare il colpo, mantenendo le mani alte. Utile quando il peso è sulla gamba che servirebbe per la parata normale. Mantieni il busto dritto per non perdere l'equilibrio.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--cattura-del-calcio",
    "name": "Cattura del calcio",
    "category": "tecnica",
    "description": "Afferrare la gamba dell'avversario dopo il calcio circolare.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato con compagno",
    "details": "Assorbi il calcio con il corpo leggermente arretrato e avvolgi la gamba con il braccio dallo stesso lato, bloccandola sotto l'ascella. Permette di neutralizzare il calcio e contrattaccare. L'altra mano protegge il viso: chi è catturato può rispondere con il pugno.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--cattura-e-sbilanciamento",
    "name": "Cattura e sbilanciamento",
    "category": "tecnica",
    "description": "Cattura del calcio e spazzata sulla gamba d'appoggio.",
    "equipment": "Compagno",
    "dose": "3 × 6 per lato con compagno",
    "details": "Dopo aver catturato il calcio, tira la gamba verso di te e spazza la gamba d'appoggio con un low kick o un passo d'incrocio. Fa cadere l'avversario e conquista punti. Lavora con controllo: il compagno deve saper cadere in sicurezza.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--cattura-del-teep-e-contrattacco",
    "name": "Cattura del teep e contrattacco",
    "category": "tecnica",
    "description": "Afferrare il teep e rispondere con calcio basso.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato con compagno",
    "details": "Intercetta il teep con la mano a coppa sotto il tallone, tira o devia la gamba e rispondi subito con un low kick alla gamba d'appoggio. Punisce chi usa il teep in modo prevedibile. Non sporgerti in avanti per afferrare: lascia arrivare il calcio.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--deviazione-del-teep",
    "name": "Deviazione del teep",
    "category": "tecnica",
    "description": "Deviare il calcio frontale con la mano e girare l'avversario.",
    "equipment": "Compagno",
    "dose": "3 × 10 per lato con compagno",
    "details": "Con la mano anteriore o posteriore devia il teep lateralmente, spostando contemporaneamente il corpo fuori linea, così che l'avversario giri le spalle. Crea un'apertura per colpire alla schiena o al fianco. Tieni l'altra mano alta e il peso ben centrato.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--paletta-e-diretto",
    "name": "Paletta e diretto",
    "category": "tecnica",
    "description": "Parare il jab con il palmo e rispondere con il diretto.",
    "equipment": "Compagno",
    "dose": "3 × 10 per lato con compagno",
    "details": "Intercetta il jab con il palmo della mano posteriore spingendolo verso il basso o di lato e rispondi immediatamente con il diretto della stessa mano o dell'altra. Difesa economica che crea contrattacchi rapidi. Non andare incontro al pugno: aspettalo vicino al viso.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--slip-e-contrattacco",
    "name": "Slip e contrattacco",
    "category": "tecnica",
    "description": "Schivata laterale del diretto e gancio in risposta.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min con compagno",
    "details": "Inclina il busto lateralmente fuori dalla traiettoria del diretto piegando le ginocchia, poi rispondi con il gancio sfruttando la rotazione già caricata. Permette di colpire mentre l'avversario è sbilanciato. Errore comune: spostare solo la testa senza le gambe.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--rotolamento-sotto-il-gancio",
    "name": "Rotolamento sotto il gancio",
    "category": "tecnica",
    "description": "Abbassarsi sotto il gancio con un movimento a U.",
    "equipment": "Compagno",
    "dose": "3 × 10 per lato con compagno",
    "details": "Piega le ginocchia e muovi la testa a U sotto il gancio, rialzandoti dall'altra parte già pronto a colpire. Mantiene la distanza corta per il contrattacco. Non piegare la schiena e non guardare a terra: gli occhi restano sull'avversario.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--indietreggiare-dal-calcio",
    "name": "Indietreggiare dal calcio",
    "category": "tecnica",
    "description": "Arretrare il bacino per far mancare il calcio e contrattaccare.",
    "equipment": "Compagno",
    "dose": "3 × 10 con compagno",
    "details": "Sposta il bacino e il busto indietro di quel tanto che basta per far passare il calcio, poi rientra con un contrattacco mentre l'avversario completa la rotazione. Difesa tipica thailandese, elegante ed efficace. Le mani restano alte e i piedi non arretrano troppo.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--combinazione-jab-diretto-calcio",
    "name": "Combinazione jab-diretto-calcio",
    "category": "tecnica",
    "description": "Uno-due e calcio circolare posteriore.",
    "equipment": "Pao",
    "dose": "4 riprese da 2 min ai pao",
    "details": "Jab e diretto per chiudere la guardia avversaria, poi calcio circolare con la gamba posteriore sfruttando la rotazione del diretto. Combinazione base della Muay Thai, efficace ai pao e in gara. Il calcio deve partire subito dopo il diretto, senza pausa.",
    "tool": "pao"
  },
  {
    "id": "tecnica--combinazione-jab-calcio-basso",
    "name": "Combinazione jab-calcio basso",
    "category": "tecnica",
    "description": "Jab per coprire e low kick posteriore.",
    "equipment": "Pao",
    "dose": "4 riprese da 2 min ai pao",
    "details": "Il jab copre la visuale e fa alzare la guardia, mentre il low kick posteriore colpisce la coscia esterna. Combinazione semplice e molto efficace per accumulare danni alla gamba. Non abbassare la mano anteriore mentre calci.",
    "tool": "pao"
  },
  {
    "id": "tecnica--combinazione-diretto-gancio-calcio",
    "name": "Combinazione diretto-gancio-calcio",
    "category": "tecnica",
    "description": "Diretto, gancio anteriore e calcio circolare posteriore.",
    "equipment": "Pao",
    "dose": "4 riprese da 2 min ai pao",
    "details": "Diretto posteriore, gancio anteriore con rotazione e calcio circolare posteriore caricato dal gancio stesso. Sposta l'attenzione dall'alto al corpo. Mantieni il ritmo fluido e le mani sempre alte tra un colpo e l'altro.",
    "tool": "pao"
  },
  {
    "id": "tecnica--combinazione-teep-diretto-calcio",
    "name": "Combinazione teep-diretto-calcio",
    "category": "tecnica",
    "description": "Teep anteriore, diretto e calcio circolare.",
    "equipment": "Pao",
    "dose": "4 riprese da 2 min ai pao",
    "details": "Teep anteriore per controllare la distanza, rientro con diretto e chiusura con calcio circolare. Insegna a passare dalla distanza lunga a quella media. Dopo il teep appoggia il piede in avanti per non perdere l'occasione del diretto.",
    "tool": "pao"
  },
  {
    "id": "tecnica--combinazione-pugni-e-ginocchiata",
    "name": "Combinazione pugni e ginocchiata",
    "category": "tecnica",
    "description": "Jab-diretto, presa al collo e ginocchiata.",
    "equipment": "Pao",
    "dose": "4 riprese da 2 min ai pao",
    "details": "Jab-diretto per accorciare la distanza, poi presa al collo con entrambe le mani e ginocchiata dritta tirando l'avversario verso il basso. Transizione chiave dalla boxe al clinch. La presa va fatta con i gomiti stretti, non con le braccia larghe.",
    "tool": "pao"
  },
  {
    "id": "tecnica--combinazione-gomitata-e-ginocchiata",
    "name": "Combinazione gomitata e ginocchiata",
    "category": "tecnica",
    "description": "Gomitata orizzontale e ginocchiata dritta.",
    "equipment": "Pao",
    "dose": "4 riprese da 2 min ai pao",
    "details": "Gomitata orizzontale a corta distanza seguita subito da ginocchiata dritta con spinta dell'anca. Combinazione devastante nel corpo a corpo. Mantieni l'equilibrio tra un colpo e l'altro e la guardia chiusa.",
    "tool": "pao"
  },
  {
    "id": "tecnica--finta-di-calcio-e-diretto",
    "name": "Finta di calcio e diretto",
    "category": "tecnica",
    "description": "Accennare il calcio e colpire con il diretto.",
    "equipment": "Pao",
    "dose": "3 × 10 per lato ai pao",
    "details": "Accenna il calcio sollevando leggermente il ginocchio o spostando l'anca, poi colpisci con il diretto mentre l'avversario prepara la parata. Insegna a manipolare le reazioni. La finta deve essere credibile ma breve.",
    "tool": "pao"
  },
  {
    "id": "tecnica--finta-di-teep-e-calcio-circolare",
    "name": "Finta di teep e calcio circolare",
    "category": "tecnica",
    "description": "Accennare il teep e calciare circolare.",
    "equipment": "Pao",
    "dose": "3 × 10 per lato ai pao",
    "details": "Solleva il ginocchio come per un teep, poi ruota l'anca e trasforma il movimento in un calcio circolare. Sorprende chi aspetta il teep frontale. Mantieni la rotazione del piede d'appoggio per dare potenza al calcio.",
    "tool": "pao"
  },
  {
    "id": "tecnica--contrattacco-al-calcio-con-calcio",
    "name": "Contrattacco al calcio con calcio",
    "category": "tecnica",
    "description": "Parata con la tibia e calcio immediato con la stessa gamba.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato con compagno",
    "details": "Para con la tibia e, appena il piede tocca terra, calcia circolare con la stessa gamba sfruttando l'elasticità del movimento. Punisce subito l'avversario quando è sbilanciato. Non lasciare spazio tra parata e contrattacco.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--contrattacco-al-low-kick",
    "name": "Contrattacco al low kick",
    "category": "tecnica",
    "description": "Bloccare il low kick e rispondere con diretto e calcio.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato con compagno",
    "details": "Blocca il low kick con la tibia sollevata e rispondi immediatamente con diretto e calcio circolare. Toglie fiducia all'avversario nei suoi calci bassi. Tieni la guardia alta durante la parata per non subire un colpo al viso.",
    "tool": "compagno"
  },
  {
    "id": "tecnica--posizione-di-guardia",
    "name": "Posizione di guardia",
    "category": "tecnica",
    "description": "Correzione di guardia, peso, mento e mani.",
    "equipment": "Specchio",
    "dose": "5 min allo specchio",
    "details": "Piedi alla larghezza delle spalle, peso distribuito, mento basso, mani alte all'altezza delle sopracciglia e gomiti chiusi. Verifica allo specchio ogni dettaglio per costruire una base solida. Errore comune: mani troppo basse o peso tutto sulla gamba anteriore."
  },
  {
    "id": "tecnica--ritorno-in-guardia",
    "name": "Ritorno in guardia",
    "category": "tecnica",
    "description": "Dopo ogni colpo, tornare subito in guardia corretta.",
    "equipment": "Specchio",
    "dose": "3 riprese da 2 min allo specchio",
    "details": "Dopo ogni colpo riporta mani e piedi nella guardia corretta, controllando allo specchio che mento e gomiti siano protetti. È l'abitudine che evita i contrattacchi. Esegui colpi singoli e lentamente, poi accelera mantenendo la precisione."
  },
  {
    "id": "tecnica--shadow-tecnico-lento",
    "name": "Shadow tecnico lento",
    "category": "tecnica",
    "description": "Shadow lentissimo curando la precisione di ogni colpo.",
    "equipment": "Specchio",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Esegui colpi e spostamenti al rallentatore, controllando rotazioni, appoggi e guardia allo specchio. Rafforza i circuiti motori e corregge i dettagli. Respira in modo regolare e non sacrificare la tecnica per la velocità."
  },
  {
    "id": "tecnica--lavoro-ai-pao-a-tema",
    "name": "Lavoro ai pao a tema",
    "category": "tecnica",
    "description": "Una ripresa ai pao su un solo colpo o combinazione.",
    "equipment": "Pao",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Il maestro o il compagno ai pao chiama un solo colpo o combinazione per l'intera ripresa, correggendo i dettagli. Fissa la tecnica e il tempismo su un obiettivo preciso. Mantieni la qualità anche quando sei stanco.",
    "tool": "pao"
  },
  {
    "id": "tecnica--sparring-a-tema",
    "name": "Sparring a tema",
    "category": "tecnica",
    "description": "Sparring leggero limitato a pochi colpi scelti dal maestro.",
    "equipment": "Protezioni",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Sparring leggero con un insieme limitato di colpi scelti dal maestro, per allenare una situazione specifica di combattimento. Sviluppa lettura e tempismo in un contesto realistico. Usa sempre protezioni e controlla la potenza."
  },
  {
    "id": "tecnica--sparring-solo-calci",
    "name": "Sparring solo calci",
    "category": "tecnica",
    "description": "Sparring leggero usando solo calci e parate.",
    "equipment": "Protezioni",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Sparring leggero in cui si usano solo calci e parate con la tibia, a ritmo controllato. Allena distanza, tempismo e difese sui calci. Usa paratibie e lavora con rispetto per il compagno."
  },
  {
    "id": "tecnica--sparring-solo-pugni",
    "name": "Sparring solo pugni",
    "category": "tecnica",
    "description": "Sparring leggero con soli pugni.",
    "equipment": "Protezioni",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Sparring leggero con soli pugni, curando guardia, schivate e contrattacchi. Migliora riflessi e precisione nella boxe della Muay Thai. Indossa casco e paradenti e non accelerare oltre il livello concordato."
  },
  {
    "id": "tecnica--calcio-circolare-dopo-cambio-angolo",
    "name": "Calcio circolare dopo cambio angolo",
    "category": "tecnica",
    "description": "Passo laterale per cambiare angolo e calcio circolare.",
    "equipment": "Pao",
    "dose": "3 × 10 per lato ai pao",
    "details": "Fai un passo laterale in diagonale per uscire dalla linea dell'avversario, poi calcia subito circolare dal nuovo angolo. Permette di colpire senza essere colpiti e di aggirare la guardia. Mantieni le mani alte durante il passo.",
    "tool": "pao"
  },
  {
    "id": "mobilita--rotazioni-del-collo",
    "name": "Rotazioni del collo",
    "category": "mobilita",
    "description": "Rotazioni lente e controllate del collo nei due sensi.",
    "equipment": "Corpo libero",
    "dose": "2 × 8 per senso, lento",
    "details": "In piedi, spalle rilassate e mento leggermente rientrato: disegna cerchi ampi con la testa senza forzare la parte posteriore. Respira con calma a ogni giro. Un collo mobile e attivato regge meglio gli impatti e le prese nel clinch; fermati se senti capogiri o fitte.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--rotazioni-delle-spalle",
    "name": "Rotazioni delle spalle",
    "category": "mobilita",
    "description": "Cerchi ampi con le braccia avanti e indietro.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 avanti + 10 indietro",
    "details": "Braccia tese, disegna cerchi grandi partendo piccoli e aumentando gradualmente l'ampiezza, con il busto fermo e gli addominali attivi. Scalda la cuffia dei rotatori prima di pugni e guardia alta, riducendo il rischio di sovraccarichi alla spalla durante sparring e colpitori.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--rotazioni-delle-anche",
    "name": "Rotazioni delle anche",
    "category": "mobilita",
    "description": "Cerchi con il ginocchio sollevato, aprendo e chiudendo l'anca.",
    "equipment": "Corpo libero",
    "dose": "2 × 8 per senso per gamba",
    "details": "In equilibrio su una gamba, solleva il ginocchio all'altezza dell'anca e disegna cerchi ampi verso l'esterno e poi verso l'interno, con il busto dritto. Tieniti al muro se serve. Prepara l'articolazione per calci circolari e ginocchiate, migliorando controllo e ampiezza del movimento.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--apertura-e-chiusura-del-cancello",
    "name": "Apertura e chiusura del cancello",
    "category": "mobilita",
    "description": "In piedi, ginocchio alto che ruota in fuori e in dentro.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 per gamba, in camminata",
    "details": "Avanza camminando: a ogni passo porta il ginocchio alto e ruotalo verso l'esterno (apertura) o dall'esterno verso l'interno (chiusura), mantenendo il bacino stabile. Movimento controllato, senza strattoni. Riproduce la rotazione d'anca del calcio circolare e del check, ideale nel riscaldamento.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--leg-swing-frontali",
    "name": "Leg swing frontali",
    "category": "mobilita",
    "description": "Slanci della gamba avanti e indietro tenendosi al muro.",
    "equipment": "Corpo libero",
    "dose": "2 × 12 per gamba",
    "details": "Una mano al muro, busto eretto e gamba d'appoggio leggermente flessa: slancia la gamba avanti e indietro aumentando l'ampiezza a ogni ripetizione, senza inarcare la schiena. È un allungamento dinamico per femorali e flessori che prepara a teep e calci alti; mai forzare all'inizio.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--leg-swing-laterali",
    "name": "Leg swing laterali",
    "category": "mobilita",
    "description": "Slanci laterali della gamba davanti al corpo.",
    "equipment": "Corpo libero",
    "dose": "2 × 12 per gamba",
    "details": "Di fronte al muro con entrambe le mani appoggiate, slancia la gamba lateralmente incrociandola davanti al corpo e poi verso l'esterno, con il bacino frontale. Aumenta l'ampiezza in modo progressivo. Mobilizza adduttori e abduttori, utili per calci circolari alti e per spostamenti laterali rapidi.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--slanci-circolari-della-gamba",
    "name": "Slanci circolari della gamba",
    "category": "mobilita",
    "description": "Slanci che imitano la traiettoria del calcio circolare.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 per gamba",
    "details": "Dalla guardia, porta la gamba in un arco ampio come un calcio circolare lento, ruotando il piede d'appoggio e tenendo le mani in guardia. Respira in modo regolare e controlla la discesa. Unisce mobilità d'anca e tecnica, preparando le articolazioni al calcio vero senza impatto.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--affondo-profondo-con-rotazione",
    "name": "Affondo profondo con rotazione",
    "category": "mobilita",
    "description": "Affondo lungo, mano a terra e rotazione del busto verso l'alto.",
    "equipment": "Corpo libero",
    "dose": "2 × 6 per lato, pausa 2 s",
    "details": "Da un affondo lungo, appoggia la mano opposta a terra accanto al piede anteriore e ruota il busto aprendo l'altro braccio verso il soffitto, seguendolo con lo sguardo. Espira durante la rotazione. Apre flessori dell'anca e colonna toracica, migliorando rotazione nei colpi e postura in guardia.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--world-s-greatest-stretch",
    "name": "World's greatest stretch",
    "category": "mobilita",
    "description": "Affondo, gomito al piede, rotazione toracica e allungamento femorale.",
    "equipment": "Corpo libero",
    "dose": "2 × 5 per lato",
    "details": "Da un affondo profondo porta il gomito verso il collo del piede anteriore, poi ruota il busto aprendo il braccio in alto e infine distendi la gamba anteriore portando il bacino indietro. Movimento fluido e respirazione lenta. Mobilizza in una sola sequenza anche, torace e femorali: perfetto prima dello sparring.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--posizione-90-90",
    "name": "Posizione 90-90",
    "category": "mobilita",
    "description": "Seduti con le gambe a 90 gradi, rotazioni interne ed esterne dell'anca.",
    "equipment": "Corpo libero",
    "dose": "2 × 45 s per lato",
    "details": "Seduto a terra con una gamba davanti e una di lato, entrambe piegate a 90 gradi e busto dritto: inclinati lentamente in avanti sulla gamba anteriore, poi ruota verso quella posteriore. Respira profondamente senza forzare. Migliora rotazione interna ed esterna dell'anca, fondamentale per calci e ginocchiate.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--transizioni-90-90",
    "name": "Transizioni 90-90",
    "category": "mobilita",
    "description": "Passare da un lato all'altro nella 90-90 senza mani.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 transizioni",
    "details": "Dalla posizione 90-90, ruota entrambe le ginocchia sull'altro lato senza aiutarti con le mani, mantenendo il busto alto e i talloni a terra come perno. Muoviti lentamente e con controllo. Rinforza la mobilità attiva delle anche, utile per cambi di guardia, equilibrio nei calci e lavoro nel clinch.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--posizione-della-rana",
    "name": "Posizione della rana",
    "category": "mobilita",
    "description": "Ginocchia larghe a terra, bacino indietro per gli adduttori.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s",
    "details": "A quattro zampe, allarga le ginocchia il più possibile con le caviglie in linea alle ginocchia, poi spingi lentamente il bacino indietro verso i talloni. Respira a fondo e rilassati nella posizione, senza molleggiare. Allunga gli adduttori profondi, migliorando l'apertura per calci alti e ginocchiate.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--allungamento-adduttori-in-piedi",
    "name": "Allungamento adduttori in piedi",
    "category": "mobilita",
    "description": "Affondo laterale tenuto per allungare l'interno coscia.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s per lato",
    "details": "Gambe molto larghe, piega un ginocchio spostando il peso su quel lato mentre l'altra gamba resta tesa con la punta verso l'alto; schiena dritta e talloni a terra. Respira e scendi gradualmente. Allunga l'interno coscia proteggendo gli adduttori, spesso sollecitati da calci e cambi di direzione.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--spaccata-frontale-progressiva",
    "name": "Spaccata frontale progressiva",
    "category": "mobilita",
    "description": "Avvicinamento graduale alla spaccata frontale.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s per lato",
    "details": "Da un affondo con ginocchio posteriore a terra, scivola lentamente in avanti con la gamba anteriore, usando le mani o dei blocchi come supporto e il bacino frontale. Fermati alla prima tensione e respira per allungarti. Aumenta l'escursione per teep e calci alti; mai rimbalzare o forzare con dolore.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--spaccata-laterale-progressiva",
    "name": "Spaccata laterale progressiva",
    "category": "mobilita",
    "description": "Avvicinamento graduale alla spaccata laterale.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s",
    "details": "Gambe divaricate con le punte in avanti o verso l'alto, mani a terra davanti: allarga i piedi poco alla volta mantenendo la schiena lunga. Respira lentamente e resta nella tensione senza dolore. Migliora l'apertura dell'anca necessaria per calci circolari alti al viso; evita molleggi e scatti.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--farfalla",
    "name": "Farfalla",
    "category": "mobilita",
    "description": "Seduti, piante dei piedi unite e ginocchia verso terra.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s",
    "details": "Seduto con le piante dei piedi unite e i talloni vicini all'inguine, tieni la schiena dritta e spingi dolcemente le ginocchia verso terra con i gomiti. Per aumentare, inclina il busto in avanti dalle anche. Allunga adduttori e inguine, zona spesso rigida nei fighter che calciano molto.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--piccione",
    "name": "Piccione",
    "category": "mobilita",
    "description": "Allungamento del gluteo con gamba anteriore piegata a terra.",
    "equipment": "Corpo libero",
    "dose": "2 × 45 s per lato",
    "details": "Con la gamba anteriore piegata a terra davanti al corpo e quella posteriore distesa, mantieni il bacino dritto e scendi lentamente con il busto in avanti. Espira a ogni discesa. Allunga gluteo e rotatori esterni dell'anca, migliorando la rotazione nel calcio circolare; proteggi il ginocchio senza forzarlo.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--allungamento-flessori-dell-anca",
    "name": "Allungamento flessori dell'anca",
    "category": "mobilita",
    "description": "Affondo con ginocchio a terra e bacino in avanti.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s per lato",
    "details": "In affondo con il ginocchio posteriore a terra (su un tappetino), contrai il gluteo di quel lato e spingi il bacino in avanti, senza inarcare la zona lombare. Alza il braccio dello stesso lato per aumentare l'allungamento. Libera i flessori accorciati, migliorando estensione d'anca nel teep e nelle ginocchiate.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--couch-stretch",
    "name": "Couch stretch",
    "category": "mobilita",
    "description": "Ginocchio contro il muro per i flessori e il quadricipite.",
    "equipment": "Muro",
    "dose": "2 × 45 s per lato",
    "details": "Ginocchio posteriore a terra vicino al muro con la tibia appoggiata in verticale, piede anteriore avanti: porta il busto eretto stringendo i glutei. Respira lentamente e aumenta l'inclinazione solo se tollerata. Allunga profondamente quadricipite e flessori, molto sollecitati da ginocchiate e calci."
  },
  {
    "id": "mobilita--allungamento-femorali-in-piedi",
    "name": "Allungamento femorali in piedi",
    "category": "mobilita",
    "description": "Gamba tesa su un rialzo, busto in avanti con schiena dritta.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s per lato",
    "details": "Appoggia il tallone su un rialzo con la gamba tesa e la punta verso l'alto, poi inclina il busto in avanti dalle anche mantenendo la schiena dritta. Respira e scendi gradualmente senza molleggiare. Migliora la flessibilità dei femorali, essenziale per teep e calci alti e per prevenire stiramenti.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--allungamento-quadricipite",
    "name": "Allungamento quadricipite",
    "category": "mobilita",
    "description": "Tallone al gluteo, ginocchia unite.",
    "equipment": "Corpo libero",
    "dose": "2 × 30 s per lato",
    "details": "In piedi su una gamba, afferra il collo del piede e porta il tallone verso il gluteo, con le ginocchia unite e il bacino leggermente in retroversione. Tieniti al muro per l'equilibrio. Allunga il quadricipite caricato da ginocchiate e salti, aiutando il recupero dopo l'allenamento.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--cosacco-squat",
    "name": "Cosacco squat",
    "category": "mobilita",
    "description": "Squat laterale profondo alternando i lati.",
    "equipment": "Corpo libero",
    "dose": "2 × 8 per lato",
    "details": "Gambe larghe, scendi su un lato piegando il ginocchio e tenendo l'altra gamba tesa con la punta verso l'alto; tallone a terra e petto alto. Torna al centro e alterna. Unisce mobilità degli adduttori e forza nelle posizioni basse, utile per cambi di livello e stabilità nel clinch.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--squat-profondo-tenuto",
    "name": "Squat profondo tenuto",
    "category": "mobilita",
    "description": "Squat completo mantenuto con talloni a terra.",
    "equipment": "Corpo libero",
    "dose": "3 × 45 s",
    "details": "Piedi alla larghezza delle spalle, scendi nello squat più profondo possibile con i talloni a terra e i gomiti che spingono le ginocchia verso l'esterno. Respira lentamente e mantieni la schiena il più dritta possibile. Migliora mobilità di caviglie, anche e colonna, utile per postura e salute articolare.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--mobilita-delle-caviglie-al-muro",
    "name": "Mobilità delle caviglie al muro",
    "category": "mobilita",
    "description": "Ginocchio verso il muro con tallone a terra.",
    "equipment": "Muro",
    "dose": "2 × 10 per lato",
    "details": "In affondo davanti al muro, porta il ginocchio anteriore a toccare il muro mantenendo il tallone ben a terra; allontana il piede man mano che migliori. Movimento lento e controllato. Una caviglia mobile migliora la rotazione sul piede d'appoggio nei calci e la reattività negli spostamenti."
  },
  {
    "id": "mobilita--rotazioni-delle-caviglie",
    "name": "Rotazioni delle caviglie",
    "category": "mobilita",
    "description": "Cerchi del piede nei due sensi.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 per senso per piede",
    "details": "In piedi o seduto, solleva leggermente un piede e disegna cerchi ampi con la punta, prima in un senso poi nell'altro, muovendo solo la caviglia. Ottimo all'inizio del riscaldamento. Prepara le caviglie a pivot, saltelli e spostamenti continui sul ring, riducendo il rischio di distorsioni.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--gatto-e-cammello",
    "name": "Gatto e cammello",
    "category": "mobilita",
    "description": "A quattro zampe, alternare schiena curva e schiena arcuata.",
    "equipment": "Corpo libero",
    "dose": "2 × 10, lento",
    "details": "A quattro zampe con mani sotto le spalle e ginocchia sotto le anche: espirando arrotonda la schiena portando il mento al petto, inspirando inarca dolcemente guardando avanti. Muovi una vertebra alla volta. Mobilizza tutta la colonna, preparando la schiena alla postura curva della guardia e del clinch.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--rotazioni-toraciche-a-quattro-zampe",
    "name": "Rotazioni toraciche a quattro zampe",
    "category": "mobilita",
    "description": "Mano dietro la testa e rotazione del busto.",
    "equipment": "Corpo libero",
    "dose": "2 × 8 per lato",
    "details": "A quattro zampe, metti una mano dietro la testa e porta il gomito verso il braccio d'appoggio, poi ruota aprendo il gomito verso il soffitto seguendolo con lo sguardo. Bacino fermo, espira in apertura. Migliora la rotazione toracica che dà potenza a pugni, gomiti e calci circolari.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--libro-aperto",
    "name": "Libro aperto",
    "category": "mobilita",
    "description": "Sdraiati sul fianco, aprire il braccio superiore ruotando il torace.",
    "equipment": "Corpo libero",
    "dose": "2 × 8 per lato, pausa 2 s",
    "details": "Sdraiato sul fianco con le ginocchia piegate a 90 gradi e le braccia tese davanti, apri il braccio superiore verso il lato opposto ruotando il torace, con le ginocchia ferme a terra. Espira durante l'apertura. Libera la colonna toracica e il petto, contrastando la chiusura in avanti tipica della guardia.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--ponte-completo",
    "name": "Ponte completo",
    "category": "mobilita",
    "description": "Ponte su mani e piedi per l'apertura della colonna e delle spalle.",
    "equipment": "Corpo libero",
    "dose": "3 × 15 s",
    "details": "Supino con mani accanto alle orecchie e piedi vicini ai glutei, spingi su mani e piedi sollevando bacino e busto fino a distendere le braccia. Respira senza trattenere il fiato e scendi con controllo. Apre colonna e spalle; per i principianti va bene il mezzo ponte. Evitalo con dolori lombari.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--cobra",
    "name": "Cobra",
    "category": "mobilita",
    "description": "Da pancia in giù, sollevare il busto spingendo sulle mani.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 s",
    "details": "Prono con le mani sotto le spalle, spingi dolcemente sollevando il petto e tenendo il bacino a terra, spalle lontane dalle orecchie. Respira profondamente e sali solo fin dove non c'è fastidio lombare. Allunga addominali e flessori dell'anca, compensando le tante ore in posizione chiusa.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--posizione-del-bambino",
    "name": "Posizione del bambino",
    "category": "mobilita",
    "description": "Seduti sui talloni, braccia tese in avanti.",
    "equipment": "Corpo libero",
    "dose": "2 × 45 s",
    "details": "Seduto sui talloni con le ginocchia leggermente divaricate, distendi le braccia in avanti e appoggia la fronte a terra, lasciando scendere il petto. Respira lentamente nella schiena. Rilassa zona lombare, dorsali e spalle: perfetta come defaticamento a fine lezione o tra un round e l'altro.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--cane-a-testa-in-giu",
    "name": "Cane a testa in giù",
    "category": "mobilita",
    "description": "Bacino in alto, talloni verso terra, schiena lunga.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s",
    "details": "Da quattro zampe solleva il bacino in alto formando una V rovesciata, spingi il pavimento con le mani e porta i talloni verso terra mantenendo la schiena lunga. Piega leggermente le ginocchia se i femorali sono rigidi. Allunga polpacci, femorali e spalle, utile per calci e guardia.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--pass-through-con-bastone",
    "name": "Pass-through con bastone",
    "category": "mobilita",
    "description": "Bastone a presa larga, portato sopra la testa e dietro la schiena.",
    "equipment": "Bastone",
    "dose": "2 × 10",
    "details": "Impugna un bastone o un elastico con presa larga, braccia tese: portalo lentamente sopra la testa e dietro la schiena, poi torna avanti, senza piegare i gomiti né inarcare la schiena. Stringi la presa man mano che migliori. Mobilizza le spalle per guardia, pugni e lavoro nel clinch; nessun dolore."
  },
  {
    "id": "mobilita--allungamento-pettorali-al-muro",
    "name": "Allungamento pettorali al muro",
    "category": "mobilita",
    "description": "Braccio al muro e rotazione del busto in direzione opposta.",
    "equipment": "Muro",
    "dose": "2 × 30 s per lato",
    "details": "Appoggia l'avambraccio al muro con il gomito all'altezza della spalla, poi ruota lentamente il busto in direzione opposta finché senti allungare il petto. Respira e non forzare la spalla. Contrasta la chiusura del petto dovuta alla guardia, migliorando postura e mobilità per i pugni."
  },
  {
    "id": "mobilita--allungamento-dorsali-alla-sbarra",
    "name": "Allungamento dorsali alla sbarra",
    "category": "mobilita",
    "description": "Appesi alla sbarra, rilassare le spalle.",
    "equipment": "Sbarra",
    "dose": "3 × 20-30 s",
    "details": "Appenditi alla sbarra con presa alla larghezza delle spalle, piedi staccati o appoggiati per alleggerire, e lascia rilassare spalle e schiena. Respira lentamente. Decomprime la colonna e allunga i dorsali, utile dopo sessioni di clinch e sacco; scendi se senti fastidio alle spalle.",
    "tool": "sbarra"
  },
  {
    "id": "mobilita--mobilita-dei-polsi",
    "name": "Mobilità dei polsi",
    "category": "mobilita",
    "description": "Rotazioni e allungamenti dei polsi a quattro zampe.",
    "equipment": "Corpo libero",
    "dose": "1 × 10 per direzione",
    "details": "A quattro zampe, appoggia i palmi con le dita in avanti, poi di lato e all'indietro, spostando lentamente il peso avanti e indietro; aggiungi rotazioni a mani unite. Resta sotto la soglia del dolore. Prepara i polsi a pugni e flessioni, riducendo il rischio di traumi al sacco o ai colpitori.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--allungamento-avambracci",
    "name": "Allungamento avambracci",
    "category": "mobilita",
    "description": "Palmo verso l'alto e verso il basso con l'altra mano che tira.",
    "equipment": "Corpo libero",
    "dose": "2 × 20 s per lato",
    "details": "Braccio teso davanti, palmo verso l'alto: con l'altra mano tira dolcemente le dita verso il basso; poi ripeti con il palmo verso il basso. Respira e mantieni senza strappi. Allunga flessori ed estensori dell'avambraccio, affaticati da guantoni, prese nel clinch e colpi ripetuti.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--calcio-circolare-lento-tenuto",
    "name": "Calcio circolare lento tenuto",
    "category": "mobilita",
    "description": "Calcio circolare al rallentatore, tenere la gamba in alto 3 secondi.",
    "equipment": "Corpo libero",
    "dose": "2 × 5 per gamba, tenuta 3 s",
    "details": "Dalla guardia esegui un calcio circolare al rallentatore ruotando sul piede d'appoggio, fermati con la gamba all'altezza del bersaglio per 3 secondi, poi ritorna in guardia. Mani alte e respiro costante. Unisce flessibilità attiva, equilibrio e precisione tecnica; tieniti al muro se serve.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--teep-lento-tenuto",
    "name": "Teep lento tenuto",
    "category": "mobilita",
    "description": "Teep lentissimo con gamba tenuta in estensione.",
    "equipment": "Corpo libero",
    "dose": "2 × 5 per gamba, tenuta 3 s",
    "details": "Dalla guardia solleva il ginocchio e distendi lentamente la gamba in avanti spingendo con il tallone, tieni l'estensione 3 secondi e ritorna con controllo. Busto leggermente indietro e guardia alta. Rinforza la mobilità attiva di anca e femorali, rendendo il teep più alto e stabile.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--ginocchiata-alta-tenuta",
    "name": "Ginocchiata alta tenuta",
    "category": "mobilita",
    "description": "Ginocchio portato al massimo in alto e tenuto 5 secondi.",
    "equipment": "Corpo libero",
    "dose": "2 × 5 per gamba, tenuta 5 s",
    "details": "Porta il ginocchio il più in alto possibile spingendo il bacino in avanti e salendo sulla punta del piede d'appoggio, poi mantieni 5 secondi con le braccia come nel clinch. Torna giù controllando. Migliora la forza dei flessori in massima escursione, fondamentale per ginocchiate potenti.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--allungamento-con-elastico-sdraiati",
    "name": "Allungamento con elastico sdraiati",
    "category": "mobilita",
    "description": "Gamba tesa tirata verso il petto con l'elastico.",
    "equipment": "Elastico",
    "dose": "3 × 30 s per gamba",
    "details": "Supino, passa l'elastico sotto la pianta del piede e solleva la gamba tesa tirandola verso il petto, con l'altra gamba distesa a terra. Espira e avvicina gradualmente, senza strappi. Puoi portare la gamba di lato per gli adduttori. Allungamento sicuro per femorali e calci alti.",
    "tool": "elastico"
  },
  {
    "id": "mobilita--rullo-sulle-tibie",
    "name": "Rullo sulle tibie",
    "category": "mobilita",
    "description": "Massaggio con il rullo sulla parte anteriore della gamba.",
    "equipment": "Foam roller",
    "dose": "1-2 min per gamba",
    "details": "In ginocchio, appoggia le tibie sul rullo e fai scorrere lentamente il peso dalla caviglia al ginocchio, soffermandoti sui punti tesi, lavorando sul muscolo tibiale e non sull'osso. Regola la pressione con le mani. Allevia la tensione dovuta a calci e check; evita zone con ematomi o dolore acuto."
  },
  {
    "id": "mobilita--rullo-su-quadricipiti-e-adduttori",
    "name": "Rullo su quadricipiti e adduttori",
    "category": "mobilita",
    "description": "Massaggio miofasciale con il rullo.",
    "equipment": "Foam roller",
    "dose": "1-2 min per zona",
    "details": "Prono sugli avambracci con il rullo sotto le cosce, scorri lentamente dall'anca al ginocchio; poi apri la gamba di lato per lavorare l'interno coscia. Respira e fermati 20-30 secondi sui punti più tesi. Favorisce il recupero dopo ginocchiate, calci e lavoro di gambe; non rullare sulle articolazioni."
  },
  {
    "id": "mobilita--rullo-sulla-schiena-alta",
    "name": "Rullo sulla schiena alta",
    "category": "mobilita",
    "description": "Rullo sotto le scapole per mobilità toracica.",
    "equipment": "Foam roller",
    "dose": "1-2 min",
    "details": "Supino con il rullo sotto le scapole, mani dietro la testa e bacino a terra o sollevato: scorri lentamente lungo la schiena alta ed estendi sopra il rullo a più livelli. Evita la zona lombare. Migliora la mobilità toracica e scioglie la tensione della guardia chiusa e del clinch."
  },
  {
    "id": "mobilita--pallina-sotto-il-piede",
    "name": "Pallina sotto il piede",
    "category": "mobilita",
    "description": "Massaggio della pianta del piede con una pallina.",
    "equipment": "Pallina",
    "dose": "1 min per piede",
    "details": "In piedi o seduto, fai rotolare una pallina sotto la pianta del piede dal tallone alle dita, aumentando gradualmente la pressione sui punti tesi. Utile a fine allenamento. Rilassa la fascia plantare, molto sollecitata da saltelli e pivot a piedi nudi, aiutando a prevenire fastidi e infiammazioni."
  },
  {
    "id": "mobilita--respirazione-diaframmatica",
    "name": "Respirazione diaframmatica",
    "category": "mobilita",
    "description": "Sdraiati, respiri lenti con la pancia per il recupero.",
    "equipment": "Corpo libero",
    "dose": "3-5 min",
    "details": "Supino con ginocchia piegate, una mano sul petto e una sulla pancia: inspira dal naso per 4 secondi gonfiando l'addome, poi espira lentamente dalla bocca per 6 secondi. Il petto resta quasi fermo. Abbassa la frequenza cardiaca e favorisce il recupero tra i round e a fine lezione, migliorando il controllo del respiro.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--scorpione",
    "name": "Scorpione",
    "category": "mobilita",
    "description": "A pancia in giù, portare il piede verso la mano opposta.",
    "equipment": "Corpo libero",
    "dose": "2 × 8 per lato",
    "details": "Prono con le braccia aperte a T, solleva una gamba piegata e portala oltre il corpo verso la mano opposta, ruotando il bacino e mantenendo le spalle a terra. Movimento lento e controllato. Mobilizza colonna, flessori dell'anca e catena anteriore, preparando la rotazione dei calci circolari.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--allungamento-laterale-del-busto",
    "name": "Allungamento laterale del busto",
    "category": "mobilita",
    "description": "In piedi, braccio sopra la testa e inclinazione laterale.",
    "equipment": "Corpo libero",
    "dose": "2 × 30 s per lato",
    "details": "In piedi con i piedi larghi, alza un braccio sopra la testa e inclinati lateralmente dalla vita, senza ruotare il busto né spingere il bacino in avanti. Respira nel fianco allungato. Allunga obliqui e dorsali, migliorando la mobilità laterale utile per schivate e gomitate.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--ciclo-di-mobilita-articolare-completo",
    "name": "Ciclo di mobilità articolare completo",
    "category": "mobilita",
    "description": "Dalle caviglie al collo, ogni articolazione per 30 secondi.",
    "equipment": "Corpo libero",
    "dose": "1 giro, 5-8 min",
    "details": "Parti dalle caviglie e risali a ginocchia, anche, colonna, spalle, polsi e collo, dedicando circa 30 secondi a ciascuna articolazione con movimenti ampi e controllati. Respira in modo regolare. È la base del riscaldamento: prepara tutto il corpo ai colpi e riduce il rischio di infortuni.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--camminata-con-ginocchio-al-petto",
    "name": "Camminata con ginocchio al petto",
    "category": "mobilita",
    "description": "Camminata tirando il ginocchio al petto a ogni passo.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 m",
    "details": "Camminando, solleva un ginocchio e abbraccialo tirandolo al petto, salendo sulla punta del piede d'appoggio con il busto eretto; rilascia e alterna. Mantieni un ritmo lento. Allunga glutei e zona lombare migliorando equilibrio e flessione d'anca, utile per ginocchiate e teep.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--camminata-con-calcio-teso",
    "name": "Camminata con calcio teso",
    "category": "mobilita",
    "description": "Calcio teso in avanti a toccare la mano in camminata.",
    "equipment": "Corpo libero",
    "dose": "2 × 10 m",
    "details": "Camminando, slancia la gamba tesa in avanti cercando di toccare con il piede la mano opposta tesa davanti, con la schiena dritta. Aumenta l'altezza poco alla volta. Allungamento dinamico dei femorali, ideale nel riscaldamento prima di teep e calci alti; non forzare se senti tirare troppo.",
    "tool": "corpo-libero"
  },
  {
    "id": "mobilita--hip-airplane",
    "name": "Hip airplane",
    "category": "mobilita",
    "description": "Su una gamba, busto in avanti, ruotare il bacino aprendo e chiudendo.",
    "equipment": "Corpo libero",
    "dose": "2 × 5 per lato",
    "details": "In equilibrio su una gamba con il busto inclinato in avanti e la gamba libera distesa dietro, ruota il bacino aprendolo verso l'esterno e poi richiudilo, mantenendo il ginocchio d'appoggio stabile. Tieniti a un supporto all'inizio. Rinforza equilibrio e controllo d'anca, decisivi in calci e clinch.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--plank-frontale",
    "name": "Plank frontale",
    "category": "core",
    "description": "Plank sugli avambracci con corpo in linea.",
    "equipment": "Corpo libero",
    "dose": "3 × 45 s, recupero 20 s",
    "details": "Gomiti sotto le spalle, glutei e addome contratti, corpo rigido dalla testa ai talloni; respira corto senza perdere la tensione. Costruisce la base di stabilità che permette di trasmettere forza a pugni e calci. Non lasciare cadere il bacino: la zona lombare non deve inarcarsi.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--plank-laterale",
    "name": "Plank laterale",
    "category": "core",
    "description": "Plank su un avambraccio, anca alta.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s per lato, recupero 15 s",
    "details": "Gomito sotto la spalla, piedi sovrapposti, spingi l'anca verso l'alto fino ad allineare spalla, bacino e caviglia. Rinforza obliqui e quadrato dei lombi, i muscoli che proteggono i fianchi da ganci e calci al corpo. Non lasciare ruotare il busto in avanti né cedere con l'anca.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--plank-laterale-con-rotazione",
    "name": "Plank laterale con rotazione",
    "category": "core",
    "description": "Dal plank laterale, ruotare il braccio sotto il busto.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato",
    "details": "Dal plank laterale porta il braccio libero sotto il busto ruotando le spalle, poi riaprilo verso il soffitto seguendo la mano con lo sguardo. Allena la rotazione controllata del tronco, alla base di ganci e gomitate. Mantieni l'anca alta e ferma durante tutto il movimento.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--plank-con-tocco-spalle",
    "name": "Plank con tocco spalle",
    "category": "core",
    "description": "In plank sulle mani, toccare la spalla opposta senza ruotare.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 tocchi alternati",
    "details": "In plank sulle mani con piedi leggermente larghi, stacca una mano e tocca la spalla opposta lentamente, alternando. L'obiettivo è che il bacino resti immobile: allena la resistenza alla rotazione utile in clinch e quando si colpisce. Se il bacino oscilla, allarga i piedi.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--hollow-hold",
    "name": "Hollow hold",
    "category": "core",
    "description": "Sdraiati, schiena a terra, braccia e gambe sollevate.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s, recupero 20 s",
    "details": "Schiena bassa schiacciata a terra, braccia tese oltre la testa e gambe tese sollevate di pochi centimetri, mento verso il petto. Crea la tensione addominale globale che serve ad assorbire i colpi al corpo. Se la lombare si stacca dal suolo, piega le ginocchia o alza le gambe.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--hollow-rock",
    "name": "Hollow rock",
    "category": "core",
    "description": "Dondolio in posizione hollow.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 dondolii",
    "details": "Dalla posizione hollow dondola avanti e indietro come una barca senza mai perdere la forma a banana del corpo. Allena la capacità di mantenere il core rigido in movimento, come durante gli scambi. La lombare resta sempre a contatto: se si inarca, fermati e riprendi la posizione.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--crunch",
    "name": "Crunch",
    "category": "core",
    "description": "Sollevamento delle spalle da terra con addome contratto.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 ripetizioni",
    "details": "Supino con ginocchia piegate, solleva le scapole da terra arrotolando il busto ed espira con forza in salita; scendi lento. Rinforza il retto dell'addome, prima barriera contro teep e ginocchiate. Non tirare la testa con le mani: lo sguardo resta verso il soffitto.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--crunch-alla-thailandese",
    "name": "Crunch alla thailandese",
    "category": "core",
    "description": "Sit-up completo con le mani in guardia come nelle palestre thai.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 ripetizioni",
    "details": "Piedi bloccati da un compagno o sotto un supporto, mani in guardia vicino al viso; sali fino a sedere e torna giù controllando la discesa. È il classico lavoro di fine sessione dei campi thai: abitua l'addome a lavorare a lungo mantenendo la guardia. Espira salendo, non strappare con il collo.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--sit-up-con-pugni",
    "name": "Sit-up con pugni",
    "category": "core",
    "description": "Ogni risalita termina con jab-diretto.",
    "equipment": "Corpo libero",
    "dose": "3 × 15 ripetizioni",
    "details": "Sali con il sit-up e in cima tira un jab-diretto veloce espirando su ogni colpo, poi torna giù controllando. Collega la contrazione addominale alla tecnica di pugno, abituandoti a colpire con il tronco attivo. I pugni devono essere tecnici, con rotazione delle spalle, non spinte molli.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--sit-up-con-palla-medica",
    "name": "Sit-up con palla medica",
    "category": "core",
    "description": "Sit-up lanciando la palla al compagno in risalita.",
    "equipment": "Palla medica",
    "dose": "3 × 12 ripetizioni",
    "details": "Seduto di fronte al compagno, ricevi la palla sopra la testa scendendo e risali lanciandola con petto e addome. Sviluppa forza esplosiva del tronco e coordinazione con le braccia. Controlla la discesa per non battere la schiena e scegli una palla da 3–5 kg.",
    "tool": "palla-medica"
  },
  {
    "id": "core--russian-twist",
    "name": "Russian twist",
    "category": "core",
    "description": "Seduti, piedi sollevati, rotazioni del busto.",
    "equipment": "Palla medica",
    "dose": "3 × 20 rotazioni (10 per lato)",
    "details": "Seduto con busto inclinato indietro e piedi sollevati, ruota le spalle portando la palla accanto al fianco, alternando i lati. Rinforza gli obliqui, fondamentali per la rotazione di ganci e calci circolari. Ruota con il busto, non solo con le braccia, e mantieni la schiena dritta.",
    "tool": "palla-medica"
  },
  {
    "id": "core--russian-twist-con-pugni",
    "name": "Russian twist con pugni",
    "category": "core",
    "description": "Rotazioni del busto alternando ganci in aria.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s, recupero 20 s",
    "details": "Nella posizione del russian twist, a ogni rotazione tira un gancio in aria girando spalle e busto insieme. Unisce il lavoro degli obliqui alla meccanica del gancio. Mantieni la guardia con la mano libera e la schiena lunga, senza ingobbirti.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--bicicletta",
    "name": "Bicicletta",
    "category": "core",
    "description": "Gomito al ginocchio opposto alternato.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 ripetizioni (15 per lato)",
    "details": "Supino con mani dietro la testa, porta il gomito verso il ginocchio opposto mentre l'altra gamba si distende, alternando lentamente. Lavora obliqui e retto insieme, migliorando il controllo rotatorio del tronco. Il movimento parte dalla rotazione del busto: non tirare il collo.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--sollevamento-gambe-a-terra",
    "name": "Sollevamento gambe a terra",
    "category": "core",
    "description": "Gambe tese sollevate e abbassate lentamente.",
    "equipment": "Corpo libero",
    "dose": "3 × 15 ripetizioni",
    "details": "Supino con mani sotto i glutei, solleva le gambe tese fino alla verticale e riabbassale lentamente senza toccare terra. Rinforza la parte bassa dell'addome e i flessori dell'anca, utili per ginocchiate e teep. Tieni la lombare aderente al suolo; se si inarca, riduci l'escursione.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--sollevamento-gambe-alla-sbarra",
    "name": "Sollevamento gambe alla sbarra",
    "category": "core",
    "description": "Appesi, portare le ginocchia o i piedi in alto.",
    "equipment": "Sbarra",
    "dose": "3 × 10 ripetizioni",
    "details": "Appeso con presa salda e spalle attive, porta le ginocchia al petto (o i piedi in alto) arrotolando il bacino, poi scendi controllato. Sviluppa forza addominale e di presa, con un movimento simile alla ginocchiata in clinch. Evita di dondolare usando lo slancio.",
    "tool": "sbarra"
  },
  {
    "id": "core--toes-to-bar",
    "name": "Toes to bar",
    "category": "core",
    "description": "Appesi, piedi a toccare la sbarra.",
    "equipment": "Sbarra",
    "dose": "4 × 6–8 ripetizioni",
    "details": "Appeso alla sbarra, contrai addome e dorsali e porta le punte dei piedi a toccare la sbarra, scendendo lentamente. Esercizio avanzato che sviluppa grande forza di flessione del tronco e controllo del corpo. Limita il kipping e progredisci dalle ginocchia al petto se necessario.",
    "tool": "sbarra"
  },
  {
    "id": "core--dead-bug",
    "name": "Dead bug",
    "category": "core",
    "description": "Sdraiati, braccio e gamba opposti si allungano con schiena a terra.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato",
    "details": "Supino con braccia verso il soffitto e ginocchia a 90°, distendi braccio e gamba opposti espirando e torna al centro. Insegna a mantenere il core stabile mentre gli arti si muovono, come quando si calcia e si para. La lombare deve restare incollata a terra per tutto l'esercizio.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--bird-dog",
    "name": "Bird dog",
    "category": "core",
    "description": "A quattro zampe, braccio e gamba opposti tesi.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato, tenuta 2 s",
    "details": "A quattro zampe, mani sotto le spalle e ginocchia sotto le anche, estendi braccio e gamba opposti fino all'allineamento e tieni 2 secondi. Migliora stabilità lombare ed equilibrio, utili nei calci in appoggio su una gamba. Non ruotare il bacino e non inarcare la schiena.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--v-up",
    "name": "V-up",
    "category": "core",
    "description": "Busto e gambe si sollevano insieme a formare una V.",
    "equipment": "Corpo libero",
    "dose": "3 × 12 ripetizioni",
    "details": "Supino con braccia oltre la testa, solleva insieme busto e gambe tese cercando di toccare i piedi con le mani, poi scendi lento. Sviluppa forza e potenza dell'intera catena addominale. Espira salendo e controlla la discesa; se la lombare soffre, piega le ginocchia.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--ab-wheel",
    "name": "Ab wheel",
    "category": "core",
    "description": "Ruota per addominali, rotolata in avanti e ritorno.",
    "equipment": "Ab wheel",
    "dose": "3 × 8–10 ripetizioni",
    "details": "In ginocchio con la ruota sotto le spalle, rotola in avanti allungando il corpo con addome e glutei contratti e torna indietro tirando con il core. Costruisce una forte resistenza all'estensione, utile per reggere colpi e spinte. Fermati prima che la lombare si inarchi: l'escursione cresce col tempo."
  },
  {
    "id": "core--pallof-press",
    "name": "Pallof press",
    "category": "core",
    "description": "Resistenza alla rotazione con elastico o cavo.",
    "equipment": "Elastico",
    "dose": "3 × 10 per lato, tenuta 2 s",
    "details": "In piedi di fianco all'ancoraggio, elastico al petto, spingi le mani in avanti e tieni senza lasciare che il busto ruoti verso il punto di attacco. Allena l'anti-rotazione, cioè la capacità di restare stabile quando un colpo o una spinta cerca di girarti. Piedi in larghezza spalle, glutei attivi.",
    "tool": "elastico"
  },
  {
    "id": "core--woodchop-al-cavo",
    "name": "Woodchop al cavo",
    "category": "core",
    "description": "Rotazione diagonale dall'alto al basso al cavo.",
    "equipment": "Cavo",
    "dose": "3 × 10 per lato",
    "details": "Cavo in alto, presa con due mani, tira in diagonale verso l'anca opposta ruotando busto e piede posteriore come in un colpo. Sviluppa potenza rotazionale trasferibile a gomitate e ganci discendenti. Il movimento parte da gambe e anche: non tirare solo con le braccia."
  },
  {
    "id": "core--woodchop-inverso",
    "name": "Woodchop inverso",
    "category": "core",
    "description": "Rotazione diagonale dal basso verso l'alto.",
    "equipment": "Cavo",
    "dose": "3 × 10 per lato",
    "details": "Cavo in basso, tira dall'esterno del ginocchio verso l'alto in diagonale oltre la spalla opposta, ruotando anche e piede. Riproduce la catena del montante e della gomitata ascendente. Mantieni le braccia quasi tese e la schiena lunga, senza piegarti in avanti."
  },
  {
    "id": "core--palla-medica-sull-addome",
    "name": "Palla medica sull'addome",
    "category": "core",
    "description": "Il compagno lascia cadere la palla sull'addome contratto.",
    "equipment": "Palla medica",
    "dose": "3 × 10 cadute, recupero 30 s",
    "details": "Supino con addome contratto, il compagno lascia cadere la palla dall'altezza del petto; espira con forza al momento dell'impatto. Condiziona l'addome a ricevere colpi, come tradizione nelle palestre thai. Inizia da altezze basse e palla leggera, evitando lo sterno e le costole basse.",
    "tool": "palla-medica"
  },
  {
    "id": "core--condizionamento-addominale-con-pugni",
    "name": "Condizionamento addominale con pugni",
    "category": "core",
    "description": "Il compagno colpisce leggero l'addome contratto.",
    "equipment": "Compagno",
    "dose": "3 × 30 s, recupero 30 s",
    "details": "In piedi in guardia con addome contratto, il compagno colpisce con pugni leggeri e controllati; espira a ogni colpo ricevuto. Abitua a incassare al corpo mantenendo la respirazione e la posizione. L'intensità resta sempre bassa e progressiva: niente colpi al fegato o al plesso a piena forza.",
    "tool": "compagno"
  },
  {
    "id": "core--teep-sull-addome",
    "name": "Teep sull'addome",
    "category": "core",
    "description": "Il compagno calcia leggero l'addome in plank o in piedi.",
    "equipment": "Compagno",
    "dose": "3 × 10 colpi ricevuti",
    "details": "In piedi o in plank con addome bloccato, il compagno appoggia teep leggeri e progressivi sulla pancia; espira a ogni contatto. Insegna a reggere la spinta del teep senza perdere equilibrio. Il compagno deve controllare il colpo con la pianta del piede, mai con la punta.",
    "tool": "compagno"
  },
  {
    "id": "core--ginocchiate-sull-addome",
    "name": "Ginocchiate sull'addome",
    "category": "core",
    "description": "Il compagno sale con il ginocchio sulla pancia contratta, con controllo.",
    "equipment": "Compagno",
    "dose": "3 × 8 contatti controllati",
    "details": "Supino o in piedi con addome contratto, il compagno porta il ginocchio sulla pancia con pressione dosata; espira e resta rigido. Prepara a sopportare le ginocchiate del clinch. Massimo controllo: si parte da semplici appoggi del ginocchio e si aumenta solo gradualmente.",
    "tool": "compagno"
  },
  {
    "id": "core--plank-con-calcio",
    "name": "Plank con calcio",
    "category": "core",
    "description": "In plank, portare il ginocchio al gomito opposto.",
    "equipment": "Corpo libero",
    "dose": "3 × 12 per lato",
    "details": "In plank sulle mani, porta il ginocchio verso il gomito opposto ruotando leggermente il bacino, poi riporta la gamba indietro. Rinforza obliqui e flessori dell'anca con un gesto simile alla ginocchiata diagonale. Le spalle restano sopra le mani e i fianchi non salgono troppo.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--plank-camminato",
    "name": "Plank camminato",
    "category": "core",
    "description": "Passare da avambracci a mani e ritorno.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 ripetizioni",
    "details": "Dal plank sugli avambracci sali sulle mani una alla volta e poi torna giù, alternando il braccio che parte per primo. Allena la stabilità del tronco sotto carichi che cambiano, rinforzando anche spalle e tricipiti. Allarga leggermente i piedi e tieni il bacino fermo, senza ondeggiare.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--copenhagen-plank",
    "name": "Copenhagen plank",
    "category": "core",
    "description": "Plank laterale con la gamba superiore su una panca.",
    "equipment": "Panca",
    "dose": "3 × 20 s per lato",
    "details": "Plank laterale sull'avambraccio con la gamba superiore appoggiata sulla panca (ginocchio o caviglia) e quella inferiore sollevata. Rinforza adduttori e obliqui, proteggendo l'inguine nei calci e nelle prese. Principianti: appoggio al ginocchio e tempi brevi."
  },
  {
    "id": "core--suitcase-carry",
    "name": "Suitcase carry",
    "category": "core",
    "description": "Camminata con un carico solo da un lato, busto dritto.",
    "equipment": "Kettlebell",
    "dose": "3 × 30 m per lato",
    "details": "Kettlebell pesante in una mano, cammina a passo normale con spalle livellate e busto perfettamente verticale. Allena gli obliqui a resistere all'inclinazione laterale, utile in clinch quando l'avversario tira da un lato. Non piegarti verso il carico e non alzare la spalla.",
    "tool": "kettlebell"
  },
  {
    "id": "core--bear-plank",
    "name": "Bear plank",
    "category": "core",
    "description": "A quattro zampe, ginocchia sollevate da terra, tenuta.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s, recupero 20 s",
    "details": "A quattro zampe con mani sotto le spalle e ginocchia sotto le anche, sollevale di qualche centimetro e tieni con schiena piatta. Attiva il core profondo insieme a spalle e quadricipiti in una posizione simile all'uscita da terra. Respira con calma senza perdere la tensione addominale.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--scalatore-lento",
    "name": "Scalatore lento",
    "category": "core",
    "description": "Mountain climber lento con ginocchio al petto controllato.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato",
    "details": "In plank sulle mani, porta un ginocchio al petto in 2–3 secondi, fai una pausa e riportalo indietro, alternando. La lentezza aumenta il lavoro del core e il controllo del bacino, utile per ginocchiate pulite. Il bacino resta basso e la schiena non si arrotonda.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--l-sit",
    "name": "L-sit",
    "category": "core",
    "description": "Corpo sostenuto sulle mani, gambe tese davanti.",
    "equipment": "Parallele",
    "dose": "4 × 10–20 s",
    "details": "Mani sulle parallele o a terra, spingi le spalle in basso, solleva il corpo e tieni le gambe tese parallele al suolo. Sviluppa forza isometrica di addome e flessori dell'anca, oltre alla stabilità delle spalle. Se è troppo difficile, tieni le ginocchia piegate (tuck sit).",
    "tool": "sbarra"
  },
  {
    "id": "core--dragon-flag",
    "name": "Dragon flag",
    "category": "core",
    "description": "Corpo rigido sollevato tenendo la panca dietro la testa.",
    "equipment": "Panca",
    "dose": "3 × 5 ripetizioni",
    "details": "Supino sulla panca con le mani che tengono il bordo dietro la testa, solleva il corpo rigido fino alla verticale e scendi lentamente tenendo una linea retta. Esercizio avanzato di forza totale del core. Il peso poggia sulle spalle, non sul collo; inizia con la sola fase eccentrica."
  },
  {
    "id": "core--rotazioni-con-elastico-in-guardia",
    "name": "Rotazioni con elastico in guardia",
    "category": "core",
    "description": "In guardia, rotazione del busto contro l'elastico come nel gancio.",
    "equipment": "Elastico",
    "dose": "3 × 15 per lato",
    "details": "In guardia con l'elastico ancorato di lato, ruota busto, anca e piede come nel gancio portando l'elastico davanti a te, poi torna controllando. Rinforza la rotazione specifica del colpo. Mantieni la guardia alta con la mano libera e ruota sull'avampiede.",
    "tool": "elastico"
  },
  {
    "id": "core--lancio-palla-medica-dalla-schiena-a-terra",
    "name": "Lancio palla medica dalla schiena a terra",
    "category": "core",
    "description": "Sdraiati, sit-up e lancio della palla al compagno.",
    "equipment": "Palla medica",
    "dose": "3 × 10 lanci",
    "details": "Supino con la palla sul petto, sali esplosivo con il sit-up e lancia la palla al compagno in piedi, riprendila e torna giù controllando. Sviluppa potenza del tronco e velocità di risalita. Espira con forza durante il lancio e scegli un peso che permetta un gesto veloce.",
    "tool": "palla-medica"
  },
  {
    "id": "core--superman",
    "name": "Superman",
    "category": "core",
    "description": "A pancia in giù, braccia e gambe sollevate.",
    "equipment": "Corpo libero",
    "dose": "3 × 15 ripetizioni, tenuta 2 s",
    "details": "A pancia in giù, solleva insieme braccia, petto e gambe contraendo glutei e lombari, tieni 2 secondi e scendi. Rinforza la catena posteriore che bilancia il lavoro addominale e protegge la schiena. Sguardo verso il basso per non iperestendere il collo.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--estensioni-lombari",
    "name": "Estensioni lombari",
    "category": "core",
    "description": "Sollevamento del busto alla panca per lombari.",
    "equipment": "Panca",
    "dose": "3 × 15 ripetizioni",
    "details": "Alla panca lombare con anche appoggiate, scendi con schiena neutra e risali fino all'allineamento del corpo contraendo glutei e lombari. Rafforza la schiena per sostenere clinch, calci e cadute. Non salire oltre la linea del corpo: evita l'iperestensione."
  },
  {
    "id": "core--windshield-wiper",
    "name": "Windshield wiper",
    "category": "core",
    "description": "Sdraiati, gambe unite che oscillano da un lato all'altro.",
    "equipment": "Corpo libero",
    "dose": "3 × 10 per lato",
    "details": "Supino con braccia aperte a terra e gambe unite verso il soffitto, abbassale lentamente su un lato e poi sull'altro senza toccare terra. Rinforza gli obliqui in allungamento e il controllo rotatorio. Le spalle restano a terra; principianti con ginocchia piegate.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--side-bend-con-manubrio",
    "name": "Side bend con manubrio",
    "category": "core",
    "description": "Inclinazione laterale del busto con un manubrio.",
    "equipment": "Manubrio",
    "dose": "3 × 15 per lato",
    "details": "In piedi con il manubrio in una mano, inclina il busto lateralmente verso il carico e risali contraendo l'obliquo opposto. Rinforza i fianchi, la zona colpita da ganci al corpo e calci circolari. Movimento solo laterale: non ruotare e non piegarti in avanti.",
    "tool": "manubri"
  },
  {
    "id": "core--flutter-kick",
    "name": "Flutter kick",
    "category": "core",
    "description": "Sdraiati, gambe tese che sbattono su e giù.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s, recupero 20 s",
    "details": "Supino con mani sotto i glutei, gambe tese sollevate di pochi centimetri, batti alternatamente le gambe con ritmo veloce e ampiezza ridotta. Allena la resistenza della parte bassa dell'addome. La lombare resta premuta a terra: se si stacca, alza un po' le gambe.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--scissor-kick",
    "name": "Scissor kick",
    "category": "core",
    "description": "Sdraiati, gambe tese che si incrociano.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s, recupero 20 s",
    "details": "Supino con gambe tese sollevate, incrociale orizzontalmente alternando la gamba sopra, con movimento continuo e controllato. Coinvolge addome basso e adduttori, migliorando la resistenza del core. Mantieni la lombare a terra e respira in modo regolare.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--sit-up-con-torsione",
    "name": "Sit-up con torsione",
    "category": "core",
    "description": "Sit-up portando il gomito al ginocchio opposto.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 ripetizioni (10 per lato)",
    "details": "Dal sit-up risali ruotando il busto per portare il gomito verso il ginocchio opposto, alternando i lati ad ogni ripetizione. Unisce flessione e rotazione, come nella catena di ganci e gomitate. Espira in salita e ruota con le spalle, non solo con il gomito.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--plank-con-braccio-e-gamba-sollevati",
    "name": "Plank con braccio e gamba sollevati",
    "category": "core",
    "description": "Plank sulle mani sollevando braccio e gamba opposti.",
    "equipment": "Corpo libero",
    "dose": "3 × 8 per lato, tenuta 3 s",
    "details": "In plank sulle mani, solleva insieme un braccio in avanti e la gamba opposta indietro, tieni 3 secondi e cambia. Sfida la stabilità anti-rotazionale su soli due appoggi, utile all'equilibrio nei calci. Bacino parallelo al suolo e piedi un po' larghi per iniziare.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--rotolamento-sulla-schiena-e-alzata",
    "name": "Rotolamento sulla schiena e alzata",
    "category": "core",
    "description": "Rotolare indietro e tornare in piedi senza mani.",
    "equipment": "Corpo libero",
    "dose": "3 × 8 ripetizioni",
    "details": "Da in piedi scendi accosciato, rotola indietro sulla schiena arrotondata con ginocchia al petto, poi sfrutta lo slancio per tornare in piedi senza mani. Allena coordinazione, forza addominale e capacità di rialzarsi dopo una caduta. Mento al petto per proteggere la testa.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--gomitate-in-sit-up",
    "name": "Gomitate in sit-up",
    "category": "core",
    "description": "A ogni risalita del sit-up, gomitata orizzontale.",
    "equipment": "Corpo libero",
    "dose": "3 × 16 ripetizioni (8 per lato)",
    "details": "A ogni risalita del sit-up tira una gomitata orizzontale ruotando il busto, alternando i lati e tornando giù controllato. Collega la flessione addominale alla rotazione della gomitata. Mantieni l'altra mano in guardia ed espira su ogni colpo.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--ginocchia-al-petto-da-seduti",
    "name": "Ginocchia al petto da seduti",
    "category": "core",
    "description": "Seduti, busto inclinato, portare le ginocchia al petto.",
    "equipment": "Corpo libero",
    "dose": "3 × 15 ripetizioni",
    "details": "Seduto con mani a terra dietro di te e busto inclinato, porta le ginocchia al petto avvicinando il busto e poi distendi le gambe senza toccare terra. Rinforza addome e flessori dell'anca nel gesto della ginocchiata. Schiena lunga, senza ingobbirsi.",
    "tool": "corpo-libero"
  },
  {
    "id": "core--stir-the-pot",
    "name": "Stir the pot",
    "category": "core",
    "description": "Avambracci sulla fitball, piccoli cerchi tenendo il plank.",
    "equipment": "Fitball",
    "dose": "3 × 10 cerchi per senso",
    "details": "Avambracci sulla fitball e corpo in plank, disegna piccoli cerchi con i gomiti in un senso e poi nell'altro mantenendo il corpo rigido. Aumenta molto la richiesta di stabilità del core in condizioni instabili. Cerchi piccoli e controllati: la lombare non deve cedere."
  },
  {
    "id": "core--landmine-rotazioni",
    "name": "Landmine rotazioni",
    "category": "core",
    "description": "Bilanciere ancorato portato da un fianco all'altro.",
    "equipment": "Bilanciere",
    "dose": "3 × 10 per lato",
    "details": "Bilanciere ancorato a terra, presa con due mani sopra la testa, portalo verso un fianco ruotando busto e piedi e poi verso l'altro, con braccia quasi tese. Sviluppa potenza rotazionale con controllo, trasferibile a ganci e calci. Il movimento parte dalle anche; carico moderato.",
    "tool": "bilanciere"
  },
  {
    "id": "core--turkish-get-up",
    "name": "Turkish get-up",
    "category": "core",
    "description": "Da sdraiato a in piedi con la kettlebell sopra la testa.",
    "equipment": "Kettlebell",
    "dose": "3 × 3 per lato",
    "details": "Da sdraiato con la kettlebell a braccio teso sopra la spalla, passa per gomito, mano, ponte e affondo fino in piedi, poi torna giù invertendo i passaggi. Allena stabilità di spalla e core in tutte le posizioni, anche quelle di rialzata da terra. Sguardo sempre sulla kettlebell; movimenti lenti.",
    "tool": "kettlebell"
  },
  {
    "id": "core--respirazione-con-addome-contratto",
    "name": "Respirazione con addome contratto",
    "category": "core",
    "description": "Espirazione forzata e contrazione, come al momento dell'impatto.",
    "equipment": "Corpo libero",
    "dose": "5 × 10 espirazioni forzate",
    "details": "In guardia, inspira dal naso ed espira con forza dalla bocca (suono 'tsss') contraendo di colpo addome e obliqui, come all'arrivo di un colpo. Insegna a sincronizzare respiro e contrazione, la vera difesa contro i colpi al corpo. Non trattenere il respiro: l'espirazione accompagna sempre la contrazione.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--passo-avanti-e-indietro-in-guardia",
    "name": "Passo avanti e indietro in guardia",
    "category": "agilita",
    "description": "Spostamenti brevi mantenendo la distanza dei piedi.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min, recupero 30 s",
    "details": "In guardia thai, spingi con il piede posteriore per avanzare e con l'anteriore per arretrare, muovendo prima il piede più vicino alla direzione. I piedi non si chiudono e non si allargano mai: la base resta identica. Resta sulle punte e tieni la guardia alta: è la base per gestire la distanza senza perdere equilibrio.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--passo-laterale-in-guardia",
    "name": "Passo laterale in guardia",
    "category": "agilita",
    "description": "Spostamenti laterali senza incrociare i piedi.",
    "equipment": "Corpo libero",
    "dose": "4 × 45 s per lato, recupero 20 s",
    "details": "Per andare a sinistra muovi prima il piede sinistro, poi recupera con il destro; al contrario per la destra. Passi corti, ginocchia leggermente flesse, mai incrociare né unire i piedi. Ti permette di uscire dalla linea dei colpi restando pronto a contrattaccare.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--passo-a-quattro-direzioni",
    "name": "Passo a quattro direzioni",
    "category": "agilita",
    "description": "Avanti, indietro, destra e sinistra al comando.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min al comando",
    "details": "Il coach chiama la direzione a voce o con la mano e l'atleta esegue subito un passo in guardia corretto. Alterna ritmo lento e veloce e inserisci comandi doppi. Allena reattività e pulizia dello spostamento: dopo ogni passo la posizione deve essere di nuovo pronta a colpire.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--pivot-sul-piede-anteriore",
    "name": "Pivot sul piede anteriore",
    "category": "agilita",
    "description": "Rotazione sul piede anteriore per cambiare angolo.",
    "equipment": "Corpo libero",
    "dose": "4 × 30 s per lato, recupero 20 s",
    "details": "Ruota sull'avampiede anteriore portando il piede posteriore in arco di 45–90°, con il busto che segue e la guardia chiusa. Non appoggiare il tallone durante la rotazione. Serve a cambiare angolo rispetto all'avversario e a trovarti di lato, fuori dalla sua linea di tiro.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--pivot-e-calcio",
    "name": "Pivot e calcio",
    "category": "agilita",
    "description": "Pivot per uscire dalla linea e calcio circolare.",
    "equipment": "Sacco",
    "dose": "4 × 10 ripetizioni per lato",
    "details": "Davanti al sacco esegui un pivot sul piede anteriore per uscire dalla linea, poi carica subito il calcio circolare dal nuovo angolo. Il calcio deve partire senza passi di aggiustamento e con la guardia alta. Insegna a colpire dal lato, dove l'avversario è scoperto e non può rispondere.",
    "tool": "sacco"
  },
  {
    "id": "agilita--uscita-a-45-gradi",
    "name": "Uscita a 45 gradi",
    "category": "agilita",
    "description": "Passo in diagonale per uscire dalla linea d'attacco.",
    "equipment": "Corpo libero",
    "dose": "4 × 10 uscite per lato",
    "details": "Dalla guardia fai un passo diagonale in avanti-fuori con il piede corrispondente, recuperando subito la base. Le spalle restano orientate verso il bersaglio immaginario. Permette di evitare l'attacco diretto restando a distanza utile per contrattaccare con pugni o calci.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--taglio-dell-angolo",
    "name": "Taglio dell'angolo",
    "category": "agilita",
    "description": "Muoversi per chiudere il compagno all'angolo del ring.",
    "equipment": "Compagno",
    "dose": "4 riprese da 2 min, recupero 1 min",
    "details": "Il compagno cerca di girare lungo le corde; tu avanzi con passi laterali e in diagonale per tagliargli la strada, senza mai rincorrerlo in linea retta. Tieni la guardia alta e il peso centrato. È la chiave per mettere sotto pressione chi si muove molto e chiuderlo dove non può scappare.",
    "tool": "compagno"
  },
  {
    "id": "agilita--uscita-dall-angolo",
    "name": "Uscita dall'angolo",
    "category": "agilita",
    "description": "Uscire dall'angolo con pivot e passi laterali.",
    "equipment": "Compagno",
    "dose": "4 riprese da 1 min per atleta",
    "details": "Parti con le spalle all'angolo mentre il compagno pressa; esci con pivot e passi laterali verso il lato opposto alla sua mano forte. Non uscire in linea retta e non abbassare la guardia. Evita di restare intrappolato e ti riporta al centro del ring in posizione sicura.",
    "tool": "compagno"
  },
  {
    "id": "agilita--lotta-per-il-centro",
    "name": "Lotta per il centro",
    "category": "agilita",
    "description": "Due atleti cercano di tenere il centro del ring.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min, recupero 1 min",
    "details": "Due atleti in guardia si contendono il centro del ring con passi, finte e pressione, senza colpire o con contatto leggero. Vince chi resta più tempo al centro. Allena controllo dello spazio, lettura dell'avversario e capacità di comandare il ritmo dell'incontro.",
    "tool": "compagno"
  },
  {
    "id": "agilita--gioco-dello-specchio",
    "name": "Gioco dello specchio",
    "category": "agilita",
    "description": "L'allievo copia i movimenti del compagno in guardia.",
    "equipment": "Compagno",
    "dose": "3 riprese da 1 min 30 s per ruolo",
    "details": "Un atleta guida con passi, pivot e cambi di ritmo; l'altro lo replica come uno specchio mantenendo la stessa distanza. Resta sulle punte e guarda il petto del compagno, non i piedi. Sviluppa tempo di reazione e capacità di seguire gli spostamenti dell'avversario.",
    "tool": "compagno"
  },
  {
    "id": "agilita--scaletta-un-piede-per-quadrato",
    "name": "Scaletta un piede per quadrato",
    "category": "agilita",
    "description": "Corsa veloce con un appoggio per casella.",
    "equipment": "Scaletta",
    "dose": "6 passaggi, recupero di ritorno camminando",
    "details": "Corri attraverso la scaletta appoggiando un solo piede per casella, sulle punte e con braccia attive. Guarda avanti, non i piedi, e cerca contatti brevissimi con il suolo. Migliora frequenza dei passi e reattività degli appoggi, utili per entrare e uscire in fretta.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--scaletta-due-piedi-per-quadrato",
    "name": "Scaletta due piedi per quadrato",
    "category": "agilita",
    "description": "Due appoggi per casella, ritmo alto.",
    "equipment": "Scaletta",
    "dose": "6 passaggi, recupero 20 s",
    "details": "Entrambi i piedi toccano ogni casella in rapida successione, ginocchia leggermente flesse e busto stabile. Mantieni un ritmo regolare e appoggi leggeri sugli avampiedi. Allena la velocità dei piedi e la coordinazione, base di un footwork rapido e preciso.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--scaletta-laterale",
    "name": "Scaletta laterale",
    "category": "agilita",
    "description": "Spostamento laterale nella scaletta.",
    "equipment": "Scaletta",
    "dose": "6 passaggi (3 per lato), recupero 20 s",
    "details": "Fianco alla scaletta, spostati lateralmente con due appoggi per casella, senza incrociare i piedi e restando bassi. Le mani possono restare in guardia. Rinforza lo spostamento laterale del ring, rendendolo più rapido ed equilibrato.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--scaletta-dentro-fuori",
    "name": "Scaletta dentro-fuori",
    "category": "agilita",
    "description": "Piedi dentro e fuori dalla casella alternati.",
    "equipment": "Scaletta",
    "dose": "6 passaggi, recupero 20 s",
    "details": "Frontalmente alla scaletta porta i piedi dentro la casella e poi fuori ai lati, avanzando a ogni ciclo. Resta sulle punte con ritmo costante e busto eretto. Migliora coordinazione e cambi rapidi di appoggio, utili nei cambi di distanza.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--scaletta-con-pugni",
    "name": "Scaletta con pugni",
    "category": "agilita",
    "description": "Scaletta e jab-diretto alla fine di ogni passaggio.",
    "equipment": "Scaletta",
    "dose": "6 passaggi, recupero 30 s",
    "details": "Esegui un pattern di scaletta a scelta e, all'uscita, chiudi subito in guardia con jab-diretto potente. Il passaggio dal footwork al colpo deve essere immediato e con base stabile. Collega velocità di piedi e attacco, come quando si entra in distanza.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--coni-a-t",
    "name": "Coni a T",
    "category": "agilita",
    "description": "Scatto avanti, laterale e indietro sui coni a forma di T.",
    "equipment": "Coni",
    "dose": "6 ripetizioni, recupero 40 s",
    "details": "Scatta avanti al cono centrale, spostati lateralmente a destra e sinistra toccando i coni, poi torna indietro di schiena. Abbassa il baricentro nei cambi di direzione e resta sugli avampiedi. Sviluppa agilità multidirezionale e frenate rapide.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--coni-a-stella",
    "name": "Coni a stella",
    "category": "agilita",
    "description": "Dal centro, scatti verso coni disposti a stella.",
    "equipment": "Coni",
    "dose": "4 giri completi, recupero 45 s",
    "details": "Dal centro raggiungi ogni cono della stella e torna sempre al centro, in guardia o in corsa. Frena con passi corti e riparti esplosivo. Allena i cambi di direzione in ogni angolo, come le uscite e i rientri durante lo scambio.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--slalom-tra-i-coni",
    "name": "Slalom tra i coni",
    "category": "agilita",
    "description": "Corsa a slalom tra coni ravvicinati.",
    "equipment": "Coni",
    "dose": "6 passaggi, recupero di ritorno",
    "details": "Corri tra coni ravvicinati con passi brevi e rapidi, inclinando leggermente il corpo nei cambi. Spingi sugli avampiedi e guarda avanti. Migliora agilità, controllo del corpo e rapidità nei cambi di traiettoria.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--slalom-in-guardia",
    "name": "Slalom in guardia",
    "category": "agilita",
    "description": "Slalom tra i coni restando in guardia.",
    "equipment": "Coni",
    "dose": "6 passaggi, recupero 20 s",
    "details": "Percorri lo slalom con passi in guardia, senza correre né incrociare i piedi, mani alte e mento basso. Cambia angolo a ogni cono restando orientato in avanti. Trasferisce l'agilità alla posizione reale di combattimento.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--navette-laterali",
    "name": "Navette laterali",
    "category": "agilita",
    "description": "Spostamenti laterali rapidi tra due linee.",
    "equipment": "Coni",
    "dose": "6 × 15 s, recupero 30 s",
    "details": "Spostati lateralmente tra due linee a 3–4 m toccando la linea con la mano o il piede, restando bassi e senza incrociare i piedi. Mantieni il busto stabile durante le frenate. Sviluppa velocità laterale e resistenza nei cambi di direzione.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--corda-con-cambio-piedi",
    "name": "Corda con cambio piedi",
    "category": "agilita",
    "description": "Saltelli alla corda alternando i piedi.",
    "equipment": "Corda",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Salta alternando i piedi come in una corsetta sul posto, sugli avampiedi e con la corda che gira dai polsi. Spalle rilassate e salti bassi. Migliora ritmo, leggerezza dei piedi e coordinazione: è il riscaldamento classico dei campi thai.",
    "tool": "corda"
  },
  {
    "id": "agilita--corda-incrociata",
    "name": "Corda incrociata",
    "category": "agilita",
    "description": "Salti con incrocio delle braccia.",
    "equipment": "Corda",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "Alterna salti normali a salti con le braccia incrociate davanti al corpo, mantenendo il ritmo costante. Salti piccoli e polsi veloci. Allena coordinazione braccia-gambe e concentrazione sotto fatica.",
    "tool": "corda"
  },
  {
    "id": "agilita--corda-su-un-piede",
    "name": "Corda su un piede",
    "category": "agilita",
    "description": "Salti alla corda su un solo piede.",
    "equipment": "Corda",
    "dose": "4 × 20 s per piede, recupero 20 s",
    "details": "Salta su un solo piede, sull'avampiede, con ginocchio morbido e busto stabile. Non lasciare cadere il bacino. Rinforza caviglia e stabilità monopodalica, fondamentali per calciare e restare in equilibrio.",
    "tool": "corda"
  },
  {
    "id": "agilita--corda-con-boxer-step",
    "name": "Corda con boxer step",
    "category": "agilita",
    "description": "Corda con il passo del pugile, da un piede all'altro.",
    "equipment": "Corda",
    "dose": "3 riprese da 2 min, recupero 45 s",
    "details": "Sposta il peso da un piede all'altro con un piccolo saltello, come il passo del pugile, mantenendo il ritmo continuo. Restare leggeri e rilassati è la chiave. Insegna a muoversi sulle punte in modo economico, risparmiando energia nelle riprese.",
    "tool": "corda"
  },
  {
    "id": "agilita--corda-con-ginocchia-alte",
    "name": "Corda con ginocchia alte",
    "category": "agilita",
    "description": "Corda con skip alto.",
    "equipment": "Corda",
    "dose": "6 × 20 s, recupero 40 s",
    "details": "Alla corda porta le ginocchia all'altezza dell'anca a ogni salto, busto dritto e ritmo alto. Atterra sugli avampiedi. Allena rapidità e coordinazione e prepara il movimento della ginocchiata.",
    "tool": "corda"
  },
  {
    "id": "agilita--corda-laterale",
    "name": "Corda laterale",
    "category": "agilita",
    "description": "Salti alla corda spostandosi lateralmente.",
    "equipment": "Corda",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "Salta alla corda spostandoti a destra e sinistra di circa 20–30 cm, oppure lungo il perimetro di un quadrato. Salti bassi e controllati. Allena gli spostamenti laterali con ritmo e leggerezza.",
    "tool": "corda"
  },
  {
    "id": "agilita--salti-sul-posto-in-guardia",
    "name": "Salti sul posto in guardia",
    "category": "agilita",
    "description": "Saltelli leggeri sulle punte come nel ring.",
    "equipment": "Corpo libero",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "In guardia molleggia sugli avampiedi con piccoli saltelli, ginocchia morbide e mani alte. Inserisci di tanto in tanto un passo in una direzione. Abitua a restare attivi e pronti a muoversi, senza piantarsi a terra.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--danza-thai-ritmo-del-passo",
    "name": "Danza thai (ritmo del passo)",
    "category": "agilita",
    "description": "Movimento ritmico thai, peso indietro e gamba anteriore leggera.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min",
    "details": "Muoviti con il ritmo tipico thai: peso sulla gamba posteriore, gamba anteriore leggera che marca il tempo, busto eretto e guardia lunga. Il movimento è fluido e cadenzato, non saltellante. Permette di teepare e bloccare i calci con la gamba anteriore in ogni momento.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--equilibrio-su-una-gamba",
    "name": "Equilibrio su una gamba",
    "category": "agilita",
    "description": "Tenere la posizione della gamba d'appoggio del calcio.",
    "equipment": "Corpo libero",
    "dose": "3 × 30 s per gamba",
    "details": "Sulla gamba d'appoggio con l'avampiede, ginocchio leggermente flesso e guardia alta, solleva l'altra come per bloccare un calcio. Tieni il bacino stabile e lo sguardo avanti. Rinforza la stabilità necessaria per calciare e difendersi con la gamba.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--equilibrio-su-una-gamba-a-occhi-chiusi",
    "name": "Equilibrio su una gamba a occhi chiusi",
    "category": "agilita",
    "description": "Equilibrio monopodalico a occhi chiusi.",
    "equipment": "Corpo libero",
    "dose": "3 × 20 s per gamba",
    "details": "Stessa posizione monopodalica ma con gli occhi chiusi, braccia in guardia. Contrai il core e lavora con piccoli aggiustamenti della caviglia. Allena la propriocezione e previene le distorsioni di caviglia.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--calcio-con-ritorno-in-guardia-su-un-piede",
    "name": "Calcio con ritorno in guardia su un piede",
    "category": "agilita",
    "description": "Calcio senza appoggiare il piede, poi ritorno in guardia.",
    "equipment": "Corpo libero",
    "dose": "3 × 8 calci per gamba",
    "details": "Calcia lentamente e, senza appoggiare il piede a terra, richiama la gamba in posizione di blocco e poi in guardia. Mantieni il busto stabile e la guardia chiusa. Migliora equilibrio e controllo per concatenare calci consecutivi.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--equilibrio-sul-bosu",
    "name": "Equilibrio sul bosu",
    "category": "agilita",
    "description": "Posizione di guardia sul bosu.",
    "equipment": "Bosu",
    "dose": "3 × 45 s, recupero 30 s",
    "details": "Sali in guardia sul bosu (lato morbido o piatto per i più esperti), ginocchia morbide e mani alte. Inserisci finte e piccoli colpi senza perdere la base. Sviluppa la stabilità del core e delle caviglie in condizioni instabili."
  },
  {
    "id": "agilita--calci-sul-bosu",
    "name": "Calci sul bosu",
    "category": "agilita",
    "description": "Calci lenti con la gamba d'appoggio sul bosu.",
    "equipment": "Bosu",
    "dose": "3 × 6 calci per gamba",
    "details": "Con la gamba d'appoggio sul bosu esegui calci lenti e controllati, tornando in posizione senza toccare terra. Ruota sull'avampiede e tieni la guardia alta. Rinforza la gamba d'appoggio e la stabilità durante la rotazione del calcio."
  },
  {
    "id": "agilita--linea-a-terra",
    "name": "Linea a terra",
    "category": "agilita",
    "description": "Spostamenti avanti e indietro senza perdere la linea dei piedi.",
    "equipment": "Nastro adesivo",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "Con il piede anteriore e posteriore ai lati di una linea di nastro, avanza e arretra mantenendo l'allineamento della base. Controlla che i piedi non escano o si incrocino. Corregge la posizione e garantisce una guardia stabile in movimento."
  },
  {
    "id": "agilita--cerchio-del-ring",
    "name": "Cerchio del ring",
    "category": "agilita",
    "description": "Muoversi in cerchio intorno al compagno in guardia.",
    "equipment": "Compagno",
    "dose": "3 riprese da 1 min 30 s per lato",
    "details": "Gira intorno al compagno restando in guardia e a distanza costante, cambiando senso al segnale. Passi laterali corti e pivot per restare frontale. Insegna a muoversi in cerchio per creare angoli senza esporsi.",
    "tool": "compagno"
  },
  {
    "id": "agilita--cambio-direzione-al-segnale",
    "name": "Cambio direzione al segnale",
    "category": "agilita",
    "description": "Al fischio, cambiare direzione di movimento.",
    "equipment": "Corpo libero",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "Muoviti in guardia in una direzione e, al fischio o al battito di mani, cambia subito direzione senza perdere la base. Reagisci con il primo passo, non con il busto. Allena reattività e rapidità di decisione in combattimento.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--shadow-con-spostamenti",
    "name": "Shadow con spostamenti",
    "category": "agilita",
    "description": "Shadow concentrato solo su passi e angoli.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min",
    "details": "Shadow in cui i colpi sono pochi e il focus è su passi, angoli, uscite e pivot. Visualizza un avversario e cambia continuamente posizione rispetto a lui. Rende automatico il footwork da usare durante lo sparring.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--shadow-con-rotazioni",
    "name": "Shadow con rotazioni",
    "category": "agilita",
    "description": "Shadow dopo ogni combinazione con pivot.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min",
    "details": "Esegui una combinazione e chiudila sempre con un pivot o un'uscita angolata, poi riparti. Il pivot deve essere immediato e con guardia chiusa. Abitua a non restare davanti all'avversario dopo aver colpito.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--jab-e-passo-laterale",
    "name": "Jab e passo laterale",
    "category": "agilita",
    "description": "Jab e immediato passo laterale fuori linea.",
    "equipment": "Sacco",
    "dose": "4 × 10 per lato",
    "details": "Colpisci il sacco con il jab e subito fai un passo laterale fuori dalla linea, pronto a ripartire. Richiama la mano velocemente e non incrociare i piedi. Insegna a colpire e spostarsi, evitando il contrattacco.",
    "tool": "sacco"
  },
  {
    "id": "agilita--combinazione-e-uscita",
    "name": "Combinazione e uscita",
    "category": "agilita",
    "description": "Combinazione al sacco e uscita con passo laterale.",
    "equipment": "Sacco",
    "dose": "4 riprese da 2 min al sacco",
    "details": "Al sacco esegui una combinazione di 2–4 colpi e chiudi con un passo laterale o un pivot per uscire. Guardia alta durante l'uscita e mai fermarsi davanti. Rende sicure le fasi di attacco abituandoti a uscire sempre in angolo.",
    "tool": "sacco"
  },
  {
    "id": "agilita--ingresso-e-uscita-dalla-distanza",
    "name": "Ingresso e uscita dalla distanza",
    "category": "agilita",
    "description": "Entrare in distanza con il jab e uscire subito.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min",
    "details": "Entra in distanza con un passo e un jab sul compagno (o sui guantoni), poi esci subito con un passo indietro o laterale. L'ingresso è esplosivo e l'uscita immediata. Allena il controllo della distanza e il tempo d'attacco.",
    "tool": "compagno"
  },
  {
    "id": "agilita--gioco-della-distanza-con-il-bastone",
    "name": "Gioco della distanza con il bastone",
    "category": "agilita",
    "description": "Il maestro allunga un bastone, l'allievo entra ed esce dalla distanza.",
    "equipment": "Bastone",
    "dose": "3 riprese da 1 min 30 s",
    "details": "Il maestro allunga un bastone verso l'allievo; questo deve arretrare o schivare quando il bastone avanza ed entrare con un colpo quando si ritrae. Resta sulle punte e guarda il bastone in visione periferica. Sviluppa senso della distanza e tempismo."
  },
  {
    "id": "agilita--passo-indietro-e-teep",
    "name": "Passo indietro e teep",
    "category": "agilita",
    "description": "Arretrare e fermare il compagno con il teep.",
    "equipment": "Compagno",
    "dose": "4 × 10 per gamba",
    "details": "Il compagno avanza con lo scudo; tu arretri di un passo e lo fermi con il teep, poi ritorni in guardia. Spingi con l'anca, non solo con il piede. Insegna a controllare chi pressa, interrompendone l'avanzata.",
    "tool": "compagno"
  },
  {
    "id": "agilita--passo-in-avanti-e-ginocchiata",
    "name": "Passo in avanti e ginocchiata",
    "category": "agilita",
    "description": "Avanzare e chiudere con la ginocchiata.",
    "equipment": "Sacco",
    "dose": "4 × 8 per lato",
    "details": "Avanza di un passo verso il sacco e chiudi con una ginocchiata, spingendo l'anca in avanti. Le mani controllano o proteggono, e dopo il colpo torni in guardia. Allena l'ingresso a distanza ravvicinata, tipico del clinch.",
    "tool": "sacco"
  },
  {
    "id": "agilita--sprawl-e-ritorno-in-guardia",
    "name": "Sprawl e ritorno in guardia",
    "category": "agilita",
    "description": "Sprawl rapido e ritorno in guardia.",
    "equipment": "Corpo libero",
    "dose": "4 × 8 ripetizioni, recupero 30 s",
    "details": "Porta indietro le gambe in sprawl con le anche basse, poi rialzati subito in guardia senza appoggiarti troppo. Il ritorno in guardia deve essere rapido e stabile. Migliora la capacità di rialzarsi e riprendere posizione rapidamente.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--rotolamento-e-alzata-in-guardia",
    "name": "Rotolamento e alzata in guardia",
    "category": "agilita",
    "description": "Capriola in avanti e ritorno in guardia.",
    "equipment": "Tappeto",
    "dose": "3 × 6 ripetizioni",
    "details": "Esegui una capriola in avanti sul tappeto e rialzati in un solo movimento direttamente in guardia. Mento al petto durante il rotolamento. Sviluppa coordinazione, orientamento spaziale e controllo del corpo dopo una caduta."
  },
  {
    "id": "agilita--lancio-e-cattura-palla-in-guardia",
    "name": "Lancio e cattura palla in guardia",
    "category": "agilita",
    "description": "Muoversi in guardia lanciando e prendendo una palla.",
    "equipment": "Palla da tennis",
    "dose": "3 × 1 min",
    "details": "Muoviti in guardia lanciando e prendendo una palla da tennis, anche contro un muro o con un compagno. Continua a fare passi senza fermarti per prenderla. Migliora coordinazione occhio-mano e reattività durante il movimento."
  },
  {
    "id": "agilita--coordinazione-braccia-gambe",
    "name": "Coordinazione braccia-gambe",
    "category": "agilita",
    "description": "Combinazioni di jab e teep alternati in ritmo.",
    "equipment": "Corpo libero",
    "dose": "3 riprese da 2 min",
    "details": "Alterna jab e teep in ritmo costante, ad esempio jab-teep-jab, cambiando ordine e lato. Ogni colpo parte dalla guardia e vi torna. Sviluppa coordinazione tra arti superiori e inferiori e ritmo delle combinazioni.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--shadow-con-ritmo-musicale",
    "name": "Shadow con ritmo musicale",
    "category": "agilita",
    "description": "Shadow seguendo il tempo della musica thai.",
    "equipment": "Musica",
    "dose": "3 riprese da 3 min",
    "details": "Esegui lo shadow seguendo il tempo della musica tradizionale thai (Sarama), che accelera nel corso della ripresa. Muoviti rilassato e adatta passi e colpi al ritmo. Migliora il senso del ritmo e la fluidità tipica dei combattenti thailandesi."
  },
  {
    "id": "agilita--salti-ostacoli-laterali",
    "name": "Salti ostacoli laterali",
    "category": "agilita",
    "description": "Salti laterali a piedi pari oltre ostacoli bassi.",
    "equipment": "Ostacoli",
    "dose": "4 × 6 passaggi, recupero 40 s",
    "details": "Salta lateralmente a piedi pari oltre ostacoli bassi (15–30 cm), atterrando sugli avampiedi in modo morbido. Minimizza il tempo a terra tra un salto e l'altro. Allena esplosività laterale e reattività degli appoggi.",
    "tool": "coni-scaletta"
  },
  {
    "id": "agilita--passo-e-cambio-guardia",
    "name": "Passo e cambio guardia",
    "category": "agilita",
    "description": "Avanzare cambiando guardia a ogni passo.",
    "equipment": "Corpo libero",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "Avanza cambiando guardia a ogni passo, mantenendo mani alte e base corretta in entrambe le posizioni. Il cambio deve essere fluido e senza saltare troppo. Rende l'atleta a suo agio in entrambe le guardie e crea nuovi angoli d'attacco.",
    "tool": "corpo-libero"
  },
  {
    "id": "agilita--pivot-a-180-gradi",
    "name": "Pivot a 180 gradi",
    "category": "agilita",
    "description": "Rotazione completa sul piede anteriore.",
    "equipment": "Corpo libero",
    "dose": "4 × 6 per lato, recupero 20 s",
    "details": "Ruota di 180° sull'avampiede anteriore, portando il piede posteriore in un ampio arco e ritrovandoti in guardia nella direzione opposta. Mantieni il baricentro basso e la guardia chiusa. Utile per invertire la posizione quando si viene spinti verso le corde.",
    "tool": "corpo-libero"
  },
  {
    "id": "clinch--presa-al-collo-plum",
    "name": "Presa al collo (plum)",
    "category": "clinch",
    "description": "Mani incrociate dietro la testa dell'avversario, gomiti stretti.",
    "equipment": "Compagno",
    "dose": "4 × 1 min per atleta, 30 s cambio",
    "details": "Mani una sopra l'altra (mai dita intrecciate) dietro la nuca, avambracci stretti contro le clavicole e gomiti chiusi verso il centro. Tira la testa verso il tuo petto mantenendo le anche avanti. È la presa dominante del clinch: da qui arrivano ginocchiate e sbilanciamenti. Tira con gradualità, il collo del compagno va rispettato.",
    "tool": "compagno"
  },
  {
    "id": "clinch--lotta-per-la-posizione-delle-braccia",
    "name": "Lotta per la posizione delle braccia",
    "category": "clinch",
    "description": "Lotta continua per ottenere le prese interne.",
    "equipment": "Compagno",
    "dose": "4 riprese da 2 min, 1 min recupero",
    "details": "Entrambi lottano senza colpire per portare le braccia all'interno e chiudere la presa migliore. Lavora con mani rilassate, gomiti stretti e passi corti per restare sempre in equilibrio. Chi vince la battaglia delle braccia controlla il ritmo del clinch. Errore comune: irrigidirsi e sprecare energie usando solo la forza.",
    "tool": "compagno"
  },
  {
    "id": "clinch--swimming-nuoto-delle-braccia",
    "name": "Swimming (nuoto delle braccia)",
    "category": "clinch",
    "description": "Inserire le braccia all'interno di quelle del compagno.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min, ritmo progressivo",
    "details": "A turno ciascuno infila un braccio all'interno di quello del compagno con un movimento circolare, come una bracciata, prima uno poi l'altro. Testa vicina, petto a contatto e anche avanti. È il gesto base per recuperare la posizione interna quando l'avversario ti chiude. Parti lento e aumenta solo quando il movimento è fluido.",
    "tool": "compagno"
  },
  {
    "id": "clinch--presa-sopra-e-sotto",
    "name": "Presa sopra e sotto",
    "category": "clinch",
    "description": "Una mano al collo e una sotto il braccio dell'avversario.",
    "equipment": "Compagno",
    "dose": "3 × 1 min per lato",
    "details": "Una mano controlla la nuca, l'altro braccio passa sotto l'ascella del compagno con il palmo sulla scapola. Fianco leggermente ruotato verso il braccio sotto per creare leva. Presa molto stabile per ginocchiate laterali e rotazioni, utile quando non riesci a chiudere il plum completo. Non lasciare spazio tra i corpi.",
    "tool": "compagno"
  },
  {
    "id": "clinch--doppia-sottoascella",
    "name": "Doppia sottoascella",
    "category": "clinch",
    "description": "Entrambe le braccia sotto le ascelle del compagno.",
    "equipment": "Compagno",
    "dose": "3 × 1 min, 30 s recupero",
    "details": "Entrambe le braccia passano sotto le ascelle del compagno, mani incrociate dietro la schiena, testa sul petto o di lato. Anche avanti e bacino vicino per sollevare e spostare il compagno. Dà grande controllo del busto per sbilanciare, ma lascia scoperta la testa alle gomitate: tieni il capo alto e laterale.",
    "tool": "compagno"
  },
  {
    "id": "clinch--presa-al-bicipite",
    "name": "Presa al bicipite",
    "category": "clinch",
    "description": "Controllo dei bicipiti per bloccare le gomitate.",
    "equipment": "Compagno",
    "dose": "3 × 1 min per atleta",
    "details": "Afferra con le mani l'interno dei bicipiti del compagno, gomiti bassi, spingendo e guidando le sue braccia lontano dal tuo viso. Usa la presa per neutralizzare gomitate e preparare l'ingresso nel plum. È una presa di transizione: non restarci a lungo. Errore comune: stringere troppo e irrigidire spalle e braccia.",
    "tool": "compagno"
  },
  {
    "id": "clinch--postura-nel-clinch",
    "name": "Postura nel clinch",
    "category": "clinch",
    "description": "Anche avanti, schiena dritta, testa alta.",
    "equipment": "Compagno",
    "dose": "3 × 1 min, compagno che spinge e tira",
    "details": "Anche spinte avanti sotto le spalle, schiena dritta, mento basso ma sguardo alto, piedi alla larghezza delle spalle sulle punte. Il compagno prova a piegarti e spostarti: tu correggi restando compatto. Una postura solida rende inutili le ginocchiate avversarie e ti permette di colpire. Non incurvare mai la schiena in avanti.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchiata-dritta-nel-clinch",
    "name": "Ginocchiata dritta nel clinch",
    "category": "clinch",
    "description": "Ginocchiata dritta controllando il collo.",
    "equipment": "Compagno",
    "dose": "4 × 10 per lato su paracolpi",
    "details": "Dal plum tira la testa del compagno verso il basso mentre spingi l'anca avanti e porti il ginocchio dritto al corpo, colpendo con la rotula. Sali sulla punta del piede d'appoggio per estendere l'anca. È la ginocchiata più usata e punteggiata in Muay Thai. Il compagno usa un paracolpi addominale e il contatto resta controllato.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchiata-laterale-nel-clinch",
    "name": "Ginocchiata laterale nel clinch",
    "category": "clinch",
    "description": "Ginocchiata curva al fianco dal clinch.",
    "equipment": "Compagno",
    "dose": "4 × 10 per lato su paracolpi",
    "details": "Dalla presa apri l'anca e porta il ginocchio curvo verso il fianco del compagno, colpendo con l'interno del ginocchio sulle costole. Contemporaneamente tira la testa dell'avversario dal lato opposto per allinearlo al colpo. Ottima per colpire da vicino quando l'avversario chiude il centro. Proteggi il fegato del compagno con il paracolpi.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchiata-alle-cosce",
    "name": "Ginocchiata alle cosce",
    "category": "clinch",
    "description": "Ginocchiate brevi alle cosce dell'avversario.",
    "equipment": "Compagno",
    "dose": "3 riprese da 1 min, alternando",
    "details": "Ginocchiate brevi e rapide dirette all'interno o all'esterno della coscia del compagno, senza grande caricamento. Mantieni il plum o la presa sopra-sotto e lavora in sequenze continue. Logorano le gambe dell'avversario e lo costringono ad abbassare la guardia. Contatto leggero: la coscia del compagno non è protetta.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchiata-al-corpo-in-serie",
    "name": "Ginocchiata al corpo in serie",
    "category": "clinch",
    "description": "Ginocchiate alternate al corpo dal plum.",
    "equipment": "Sacco",
    "dose": "5 serie da 20 s, 20 s recupero",
    "details": "Simula il plum sul sacco e alterna ginocchiate destre e sinistre al massimo ritmo sostenibile, con piccolo saltello di cambio. Tira il sacco verso di te a ogni colpo e mantieni le anche avanti. Sviluppa la resistenza specifica per le fasi di clinch intense. Errore comune: piegarsi in avanti e perdere la postura.",
    "tool": "sacco"
  },
  {
    "id": "clinch--ginocchiate-al-sacco-da-clinch",
    "name": "Ginocchiate al sacco da clinch",
    "category": "clinch",
    "description": "Abbracciare il sacco e colpire con ginocchiate.",
    "equipment": "Sacco",
    "dose": "4 riprese da 2 min, 1 min recupero",
    "details": "Abbraccia il sacco come un avversario, alterna prese al collo e sottoascella e colpisci con ginocchiate dritte e laterali. Lavora sulla potenza mantenendo l'equilibrio e respirando a ogni colpo. Costruisce condizionamento e meccanica del ginocchio senza usurare il compagno. Non colpire con la tibia: impatta con ginocchio e coscia.",
    "tool": "sacco"
  },
  {
    "id": "clinch--rotazione-dell-avversario",
    "name": "Rotazione dell'avversario",
    "category": "clinch",
    "description": "Girare il compagno con un pivot per sbilanciarlo.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Dal plum fai un passo pivot indietro con la gamba esterna e ruota le spalle tirando la testa del compagno nella direzione del giro. Il movimento parte dalle anche, non dalle braccia. Serve a spostare l'avversario fuori linea, aprire angoli per colpire e guadagnare punti. Il compagno accompagna la rotazione: niente strappi al collo.",
    "tool": "compagno"
  },
  {
    "id": "clinch--sbilanciamento-in-avanti",
    "name": "Sbilanciamento in avanti",
    "category": "clinch",
    "description": "Tirare il collo e girare il compagno in avanti.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Tira il collo del compagno verso il basso facendolo avanzare di un passo e ruotalo in avanti mentre arretri in diagonale. Usa il peso del corpo, non la forza delle braccia, e mantieni sempre il controllo. Sbilanciare l'avversario mostra dominio ai giudici. Esegui su tappeto e lascia la presa se il compagno sta per cadere male.",
    "tool": "compagno"
  },
  {
    "id": "clinch--sbilanciamento-laterale",
    "name": "Sbilanciamento laterale",
    "category": "clinch",
    "description": "Tirare e ruotare il compagno lateralmente.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Con presa sopra-sotto tira il braccio esterno e ruota il busto lateralmente, spostando il compagno sul suo piede debole. Abbassa leggermente il baricentro per avere leva. È una delle tecniche più efficaci per far perdere l'equilibrio senza proiezioni pericolose. Errore comune: girare solo le spalle e lasciare le anche ferme.",
    "tool": "compagno"
  },
  {
    "id": "clinch--sbilanciamento-con-il-ginocchio",
    "name": "Sbilanciamento con il ginocchio",
    "category": "clinch",
    "description": "Ginocchiata alla coscia e rotazione per far cadere.",
    "equipment": "Compagno",
    "dose": "3 × 6 per lato",
    "details": "Porta una ginocchiata alla coscia del compagno e, mentre è su una gamba sola o ritrae il peso, ruotalo con la presa verso il lato del colpo. Il tempismo è tutto: il giro va fatto nel momento in cui il ginocchio tocca. Combina danno e sbilanciamento, molto apprezzato nel punteggio. Lavora lento all'inizio e su tappeto.",
    "tool": "compagno"
  },
  {
    "id": "clinch--spazzata-dalla-presa",
    "name": "Spazzata dalla presa",
    "category": "clinch",
    "description": "Dalla presa, spazzare la gamba d'appoggio del compagno.",
    "equipment": "Compagno",
    "dose": "3 × 6 per lato",
    "details": "Dalla presa sposta il peso del compagno sulla gamba d'appoggio, poi spazzala con l'interno del piede o della tibia all'altezza della caviglia mentre lo ruoti con le braccia. Coordinare trazione e spazzata è la chiave. Una spazzata riuscita vale molto nel punteggio. Il compagno deve saper cadere: usa il tappeto e non colpire il ginocchio.",
    "tool": "compagno"
  },
  {
    "id": "clinch--proiezione-con-l-anca",
    "name": "Proiezione con l'anca",
    "category": "clinch",
    "description": "Inserire l'anca e proiettare il compagno.",
    "equipment": "Compagno",
    "dose": "3 × 5 per lato",
    "details": "Con presa sopra-sotto ruota e inserisci l'anca davanti a quella del compagno, poi tira il braccio e ruota il busto per proiettarlo oltre il fianco. Ginocchia leggermente piegate e schiena dritta. Nella Muay Thai è legale solo senza sollevare con la schiena: controlla le regole. Solo su tappeto e con compagni che sanno cadere.",
    "tool": "compagno"
  },
  {
    "id": "clinch--uscita-dal-plum",
    "name": "Uscita dal plum",
    "category": "clinch",
    "description": "Liberarsi dalla presa al collo con braccio interno.",
    "equipment": "Compagno",
    "dose": "3 × 8 ripetizioni per atleta",
    "details": "Quando il compagno chiude il plum, abbassa il mento, porta un avambraccio dentro al suo gomito e risali con l'altro braccio all'interno fino a riprendere la posizione. Contemporaneamente spingi le anche avanti per raddrizzarti. Restare intrappolati nel plum significa subire ginocchiate. Non tirare indietro la testa: entra con le braccia.",
    "tool": "compagno"
  },
  {
    "id": "clinch--uscita-con-gomitata",
    "name": "Uscita con gomitata",
    "category": "clinch",
    "description": "Uscire dal clinch con una gomitata.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Libera uno spazio spingendo con l'avambraccio, poi fai partire una gomitata orizzontale o in salita mentre arretri dal clinch. Il colpo deve partire corto e passare sopra la guardia del compagno. Trasforma una fase difensiva in occasione di danno. Su compagno con caschetto o colpo solo accennato: le gomitate tagliano.",
    "tool": "compagno"
  },
  {
    "id": "clinch--uscita-con-spinta-al-viso",
    "name": "Uscita con spinta al viso",
    "category": "clinch",
    "description": "Spingere sul viso dell'avversario per liberarsi.",
    "equipment": "Compagno",
    "dose": "3 × 8 ripetizioni per atleta",
    "details": "Metti il palmo aperto sotto il mento o sulla guancia del compagno e spingi la sua testa all'indietro e di lato, creando distanza per uscire. Combinalo con un passo indietro o laterale. Senza il controllo della testa l'avversario perde la postura e la presa. Niente dita negli occhi: usa il palmo e spingi con gradualità.",
    "tool": "compagno"
  },
  {
    "id": "clinch--uscita-e-calcio",
    "name": "Uscita e calcio",
    "category": "clinch",
    "description": "Uscire dal clinch e colpire subito con il calcio.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Libera la presa con un braccio, spingi il compagno e appena si crea distanza calcia subito con circolare al corpo o teep. Il passo di uscita deve preparare l'anca al calcio. Punire il distacco è fondamentale perché l'avversario è spesso scoperto in quel momento. Il compagno tiene il paracolpi pronto dopo la separazione.",
    "tool": "compagno"
  },
  {
    "id": "clinch--entrata-nel-clinch-dopo-i-pugni",
    "name": "Entrata nel clinch dopo i pugni",
    "category": "clinch",
    "description": "Combinazione di pugni e chiusura nel clinch.",
    "equipment": "Compagno",
    "dose": "3 × 10 combinazioni",
    "details": "Esegui una combinazione di pugni (es. jab-diretto) per coprire la distanza e chiudi subito con il plum o la presa sopra-sotto, entrando con testa bassa e gomiti alti. Allenarla insegna a non restare fermo a media distanza dove si viene colpiti. Errore comune: entrare a braccia aperte esponendo il mento.",
    "tool": "compagno"
  },
  {
    "id": "clinch--entrata-nel-clinch-dopo-il-calcio",
    "name": "Entrata nel clinch dopo il calcio",
    "category": "clinch",
    "description": "Calcio circolare, avanzare e prendere il collo.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Dopo il calcio circolare appoggia il piede in avanti invece di tornare indietro e usa lo slancio per chiudere la presa al collo. Il calcio copre la distanza e distrae, il ritorno avanzato ti porta già in clinch. È una transizione rapida usata dai thai per pressare. Mantieni la guardia alta durante l'avanzamento.",
    "tool": "compagno"
  },
  {
    "id": "clinch--entrata-dalla-cattura-del-calcio",
    "name": "Entrata dalla cattura del calcio",
    "category": "clinch",
    "description": "Cattura del calcio e passaggio al clinch.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Il compagno calcia, tu catturi la gamba avvolgendola con il braccio, poi avanzi e porti l'altra mano al collo passando al clinch. Puoi sbilanciare o colpire con ginocchiata alla gamba d'appoggio. Sfrutta un momento in cui l'avversario è su una gamba sola. Calci a media intensità, mai sulla gamba tesa del compagno.",
    "tool": "compagno"
  },
  {
    "id": "clinch--gomitata-dalla-presa",
    "name": "Gomitata dalla presa",
    "category": "clinch",
    "description": "Liberare un braccio e colpire con la gomitata.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Da presa sopra-sotto o dal bicipite libera un braccio con un piccolo strappo e colpisci con gomitata orizzontale o verticale, poi richiudi la presa. Il gomito resta stretto e il colpo è corto, con rotazione delle spalle. Nel clinch le gomitate creano tagli e cambiano l'incontro. Su compagno solo accennata o con colpitore.",
    "tool": "compagno"
  },
  {
    "id": "clinch--gomitata-dopo-la-rottura-del-clinch",
    "name": "Gomitata dopo la rottura del clinch",
    "category": "clinch",
    "description": "Al distacco, gomitata girata o orizzontale.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Nel momento del distacco, quando l'avversario arretra o l'arbitro separa, colpisci con gomitata orizzontale o girata verso dietro. Lavora sul tempismo: il colpo parte mentre l'altro abbassa la guardia. È un'arma tipica dei combattenti esperti. Esegui sui colpitori o paracolpi, mai a contatto pieno sul compagno.",
    "tool": "compagno"
  },
  {
    "id": "clinch--contrasto-alla-ginocchiata",
    "name": "Contrasto alla ginocchiata",
    "category": "clinch",
    "description": "Bloccare l'anca dell'avversario per fermare la ginocchiata.",
    "equipment": "Compagno",
    "dose": "3 × 10 per lato",
    "details": "Quando il compagno carica la ginocchiata, spingi con la mano o l'avambraccio sulla sua anca o sul suo bacino per bloccarne l'estensione. Stessa idea con l'avambraccio sulla coscia. Togliere l'anca all'avversario annulla la potenza del colpo. Il compagno va lento: l'obiettivo è il tempismo, non subire colpi.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchio-di-guardia",
    "name": "Ginocchio di guardia",
    "category": "clinch",
    "description": "Alzare il ginocchio per bloccare la ginocchiata.",
    "equipment": "Compagno",
    "dose": "3 × 10 per lato",
    "details": "Solleva il ginocchio verso l'interno, tibia diagonale, per intercettare la ginocchiata del compagno prima che arrivi al corpo, poi riappoggia subito il piede. Mantieni la presa con le braccia per non essere sbilanciato. Difesa rapida che permette di contrattaccare. Errore comune: alzare il ginocchio troppo a lungo e perdere equilibrio.",
    "tool": "compagno"
  },
  {
    "id": "clinch--controllo-della-testa",
    "name": "Controllo della testa",
    "category": "clinch",
    "description": "Tenere la testa del compagno sotto il proprio mento.",
    "equipment": "Compagno",
    "dose": "3 × 1 min per atleta",
    "details": "Porta la testa del compagno sotto il tuo mento o contro il tuo petto premendo con la fronte o la mascella, mantenendo la tua testa più alta della sua. Chi controlla la testa controlla la postura dell'altro. È il presupposto per ginocchiate e sbilanciamenti. Pressione progressiva, senza schiacciare il collo del compagno.",
    "tool": "compagno"
  },
  {
    "id": "clinch--testa-contro-testa",
    "name": "Testa contro testa",
    "category": "clinch",
    "description": "Lotta per la posizione della testa nel clinch.",
    "equipment": "Compagno",
    "dose": "4 × 1 min, 30 s recupero",
    "details": "Fronte o tempia contro quella del compagno, entrambi cercano di portare la propria testa sopra e dentro, spingendo con gambe e collo. Nessuna presa con le mani o solo leggera. Rinforza collo e posizione: chi perde la testa perde il clinch. Lavora con spinte graduali, niente testate o scatti bruschi.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-libero-leggero",
    "name": "Clinch libero leggero",
    "category": "clinch",
    "description": "Ripresa di clinch libero a bassa intensità.",
    "equipment": "Compagno",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Ripresa di clinch completo a bassa intensità: prese, ginocchiate accennate, sbilanciamenti controllati. L'obiettivo è il flusso tecnico e la lettura delle reazioni del compagno, non vincere. Permette di sperimentare senza rischi e sviluppa la sensibilità. Concorda l'intensità prima e fermati se uno dei due perde il controllo.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-a-tema-prese",
    "name": "Clinch a tema prese",
    "category": "clinch",
    "description": "Il clinch si limita alle prese, niente ginocchiate.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Si lotta solo per le prese: plum, sopra-sotto, bicipiti e difesa, senza colpire. Punto a chi mantiene la presa dominante per 3 secondi. Isolare il lavoro sulle mani aumenta la qualità del grip fighting. Errore comune: usare solo le braccia; il lavoro corretto parte da anche e postura.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-a-tema-sbilanciamenti",
    "name": "Clinch a tema sbilanciamenti",
    "category": "clinch",
    "description": "Clinch con l'obiettivo di sbilanciare il compagno.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Dal clinch l'obiettivo è solo sbilanciare il compagno: rotazioni, spinte e tirate, niente colpi. Conta i sbilanciamenti riusciti per ogni ripresa. Allena tempismo, leva e lettura del peso dell'avversario. Su tappeto, senza proiezioni pericolose e lasciando la presa se il compagno cade.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-a-tema-ginocchiate",
    "name": "Clinch a tema ginocchiate",
    "category": "clinch",
    "description": "Clinch con ginocchiate leggere a contatto.",
    "equipment": "Compagno",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Clinch libero dove si può colpire solo con ginocchiate leggere al corpo, a contatto controllato. Lavora per creare l'angolo e l'anca libera per colpire. Simula la parte più frequente del clinch in gara. Usa paracolpi addominali se disponibili e niente ginocchiate alla testa o all'inguine.",
    "tool": "compagno"
  },
  {
    "id": "clinch--king-of-the-ring",
    "name": "King of the ring",
    "category": "clinch",
    "description": "Chi viene sbilanciato esce, entra il successivo.",
    "equipment": "Compagno",
    "dose": "8–12 min totali, a rotazione",
    "details": "Un atleta resta al centro e affronta a turno i compagni in clinch: chi viene sbilanciato o perde la posizione esce ed entra il successivo. Dà intensità agonistica e obbliga a lavorare stanchi contro avversari freschi. Ottimo a fine sessione. Mantieni regole chiare: niente colpi, solo prese e sbilanciamenti.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-con-elastico",
    "name": "Clinch con elastico",
    "category": "clinch",
    "description": "Il compagno tira l'atleta con l'elastico mentre tiene il plum.",
    "equipment": "Elastico",
    "dose": "4 × 45 s, 30 s recupero",
    "details": "L'atleta tiene il plum su un sacco o su un compagno mentre un altro lo tira indietro con un elastico legato alla vita. Deve mantenere anche avanti e postura contro la resistenza. Rinforza la spinta delle gambe e la capacità di restare dentro il clinch. Controlla che l'elastico sia ben fissato prima di tirare.",
    "tool": "elastico"
  },
  {
    "id": "clinch--clinch-con-giubbotto-zavorrato",
    "name": "Clinch con giubbotto zavorrato",
    "category": "clinch",
    "description": "Clinch con giubbotto zavorrato per la resistenza.",
    "equipment": "Giubbotto",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Clinch leggero indossando un giubbotto zavorrato (5–10% del peso corporeo), mantenendo postura e lavoro di prese. Il carico aumenta la fatica di gambe, collo e respirazione. Prepara alle fasi di clinch lunghe e logoranti. Non usare zavorre eccessive: la tecnica non deve degradare."
  },
  {
    "id": "clinch--rinforzo-collo-per-il-clinch",
    "name": "Rinforzo collo per il clinch",
    "category": "clinch",
    "description": "Il compagno tira la testa dell'atleta in basso, l'atleta resiste.",
    "equipment": "Compagno",
    "dose": "3 × 30 s, 30 s recupero",
    "details": "Il compagno chiude il plum e tira la testa verso il basso con forza crescente, l'atleta resiste mantenendo il collo neutro e la schiena dritta. Spinta con le gambe, non solo con il collo. Un collo forte impedisce di essere piegati e colpiti. Trazione progressiva, mai strappi: il collo è delicato.",
    "tool": "compagno"
  },
  {
    "id": "clinch--presa-sul-sacco-pesante",
    "name": "Presa sul sacco pesante",
    "category": "clinch",
    "description": "Tirare e torcere il sacco come un avversario.",
    "equipment": "Sacco",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Afferra il sacco pesante come un avversario: tira, spingi e torci alternando plum e presa sopra-sotto, aggiungendo ginocchiate. Il peso del sacco offre resistenza costante a braccia e dorso. Costruisce forza specifica senza affaticare il compagno. Attenzione a polsi e dita: non intrecciarle sul sacco.",
    "tool": "sacco"
  },
  {
    "id": "clinch--rotazione-del-sacco",
    "name": "Rotazione del sacco",
    "category": "clinch",
    "description": "Abbracciare il sacco e ruotarlo con ginocchiate.",
    "equipment": "Sacco",
    "dose": "4 × 1 min, 30 s recupero",
    "details": "Abbraccia il sacco, colpisci con ginocchiata e subito ruotalo con un pivot come se sbilanciassi l'avversario, poi ripeti dall'altro lato. Coordina colpo e rotazione usando le anche. Allena il collegamento tra danno e controllo tipico del clinch thai. Verifica che il sacco sia fissato bene prima di torcerlo.",
    "tool": "sacco"
  },
  {
    "id": "clinch--plum-isometrico",
    "name": "Plum isometrico",
    "category": "clinch",
    "description": "Tenere il plum sul compagno che cerca di raddrizzarsi.",
    "equipment": "Compagno",
    "dose": "4 × 30 s, 30 s recupero",
    "details": "Chiudi il plum e mantienilo mentre il compagno cerca di raddrizzarsi spingendo con collo e gambe. Gomiti stretti, anche avanti e peso basso per non essere sollevato. Allena la forza isometrica di braccia, dorso e presa. Il compagno spinge con intensità media e progressiva.",
    "tool": "compagno"
  },
  {
    "id": "clinch--gioco-delle-mani-al-collo",
    "name": "Gioco delle mani al collo",
    "category": "clinch",
    "description": "Cercare di toccare il collo del compagno evitando le sue mani.",
    "equipment": "Compagno",
    "dose": "3 riprese da 1 min",
    "details": "Gioco a punti: ciascuno cerca di toccare il collo dell'altro con una mano, parando e controllando le mani avversarie. Postura alta e piedi sempre in movimento. Sviluppa riflessi, velocità di mani e lettura del clinch in modo ludico. Tocchi leggeri: niente schiaffi o colpi al viso.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-su-una-gamba",
    "name": "Clinch su una gamba",
    "category": "clinch",
    "description": "Clinch mantenendo l'equilibrio dopo la ginocchiata.",
    "equipment": "Compagno",
    "dose": "3 × 45 s per gamba",
    "details": "In clinch con il compagno, mantieni l'equilibrio su una gamba dopo una ginocchiata mentre l'altro prova a spostarti. Ritorna al passo solo quando sei stabile. Insegna a non essere sbilanciato dopo un colpo, punto debole tipico. Lavora prima statico poi in movimento, su superficie non scivolosa.",
    "tool": "compagno"
  },
  {
    "id": "clinch--spinta-e-trazione",
    "name": "Spinta e trazione",
    "category": "clinch",
    "description": "Alternare spinta e trazione per sbilanciare il compagno.",
    "equipment": "Compagno",
    "dose": "3 × 1 min, 30 s recupero",
    "details": "Alterna spinte e tirate rapide sul compagno in clinch per fargli perdere il ritmo, cercando il momento in cui il suo peso è sbilanciato. Il movimento parte dalle gambe e dalle anche. Insegna a creare reazioni da sfruttare per ginocchiate o sbilanciamenti. Evita strattoni al collo: lavora sul busto.",
    "tool": "compagno"
  },
  {
    "id": "clinch--cambio-da-plum-a-presa-laterale",
    "name": "Cambio da plum a presa laterale",
    "category": "clinch",
    "description": "Passare dalla presa al collo a un braccio sotto.",
    "equipment": "Compagno",
    "dose": "3 × 8 per lato",
    "details": "Dal plum fai scivolare una mano dal collo e infila il braccio sotto l'ascella del compagno, passando alla presa sopra-sotto mentre ruoti l'anca. La transizione deve essere fluida, senza lasciare spazio. Cambiare presa evita che l'avversario si liberi e apre nuovi angoli. Non perdere mai il contatto con il petto.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchiata-e-sbilanciamento",
    "name": "Ginocchiata e sbilanciamento",
    "category": "clinch",
    "description": "Ginocchiata e immediata rotazione del compagno.",
    "equipment": "Compagno",
    "dose": "3 × 6 per lato",
    "details": "Ginocchiata al corpo e, appena il piede tocca terra, ruota il compagno con un pivot nella direzione opposta per sbilanciarlo. Usa il ritorno della gamba come passo di rotazione. Combinazione molto efficace per punteggio e controllo. Su tappeto, ginocchiate a contatto leggero.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-dopo-il-teep-catturato",
    "name": "Clinch dopo il teep catturato",
    "category": "clinch",
    "description": "Teep catturato e trasformato in clinch con ginocchiata.",
    "equipment": "Compagno",
    "dose": "3 × 6 per lato",
    "details": "Il compagno esegue un teep, tu lo catturi, avanzi e passi al clinch portando subito una ginocchiata al corpo. Il passaggio deve essere rapido, prima che l'avversario recuperi l'equilibrio. Punisce chi usa il teep in modo prevedibile. Il compagno calcia a media intensità e tiene il paracolpi.",
    "tool": "compagno"
  },
  {
    "id": "clinch--difesa-del-collo",
    "name": "Difesa del collo",
    "category": "clinch",
    "description": "Braccia tra sé e il compagno per non farsi chiudere il plum.",
    "equipment": "Compagno",
    "dose": "3 × 1 min per atleta",
    "details": "Porta avambracci e mani all'interno del petto del compagno, gomiti stretti, impedendogli di chiudere le mani dietro la tua nuca. Testa alta e anche avanti. Prevenire il plum è più facile che uscirne. Errore comune: abbassare lo sguardo e piegarsi, regalando la testa.",
    "tool": "compagno"
  },
  {
    "id": "clinch--clinch-al-muro",
    "name": "Clinch al muro",
    "category": "clinch",
    "description": "Clinch spingendo il compagno contro le corde o il muro.",
    "equipment": "Compagno",
    "dose": "3 riprese da 1 min 30 s",
    "details": "Spingi il compagno contro le corde o il muro con anche e petto, poi lavora prese e ginocchiate impedendogli di girare. Mantieni la testa sulla linea del suo mento. Usare le corde limita la mobilità avversaria e lo stanca. Assicurati che la parete sia imbottita e non spingere con violenza.",
    "tool": "compagno"
  },
  {
    "id": "clinch--uscita-dalle-corde",
    "name": "Uscita dalle corde",
    "category": "clinch",
    "description": "Liberarsi dal clinch con le spalle alle corde.",
    "equipment": "Compagno",
    "dose": "3 × 8 ripetizioni per atleta",
    "details": "Con le spalle alle corde, abbassa il baricentro, recupera una presa interna e ruota con un pivot invertendo la posizione o scivolando lateralmente. Non spingere dritto: gira. Restare bloccati alle corde significa subire. Il compagno pressa a intensità media e controllata.",
    "tool": "compagno"
  },
  {
    "id": "clinch--ginocchiata-saltata-dal-clinch",
    "name": "Ginocchiata saltata dal clinch",
    "category": "clinch",
    "description": "Dal plum, ginocchiata con piccolo salto.",
    "equipment": "Sacco",
    "dose": "4 × 6 per lato",
    "details": "Dal plum sul sacco tira la testa verso il basso, fai un piccolo salto e colpisci con ginocchiata dritta, atterrando stabile. L'anca va avanti nel momento dell'impatto. Colpo esplosivo che può chiudere l'incontro. Errore comune: saltare troppo e atterrare sbilanciati; solo sul sacco, mai sul compagno.",
    "tool": "sacco"
  }
];

/** Gruppi per attrezzo. */
export const tools: Tool[] = [
  {
    "id": "corpo-libero",
    "label": "Corpo libero",
    "description": "Esercizi senza attrezzi, da fare ovunque."
  },
  {
    "id": "compagno",
    "label": "Compagno",
    "description": "Esercizi in coppia: colpi, difese, clinch e sparring."
  },
  {
    "id": "palla-medica",
    "label": "Palla medica",
    "description": "Lanci, slam e rotazioni con la palla medica per potenza e core."
  },
  {
    "id": "corda",
    "label": "Corda",
    "description": "Salto della corda per footwork, ritmo e resistenza."
  },
  {
    "id": "kettlebell",
    "label": "Kettlebell",
    "description": "Swing, slanci e lavori a una mano per anche esplosive e presa."
  },
  {
    "id": "elastico",
    "label": "Elastici",
    "description": "Bande elastiche per colpi con resistenza, attivazione e prevenzione."
  },
  {
    "id": "sacco",
    "label": "Sacco",
    "description": "Lavoro al sacco pesante: colpi, combinazioni e riprese."
  },
  {
    "id": "pao",
    "label": "Pao",
    "description": "Lavoro ai pao con il compagno o l'allenatore."
  },
  {
    "id": "bilanciere",
    "label": "Bilanciere",
    "description": "Esercizi di forza con il bilanciere."
  },
  {
    "id": "manubri",
    "label": "Manubri",
    "description": "Forza e stabilità con i manubri, anche a un braccio."
  },
  {
    "id": "sbarra",
    "label": "Sbarra e parallele",
    "description": "Trazioni, dip e sospensioni a corpo libero."
  },
  {
    "id": "battle-rope",
    "label": "Battle rope",
    "description": "Onde e slam con le corde pesanti per spalle e fiato."
  },
  {
    "id": "sandbag",
    "label": "Sandbag",
    "description": "Sacca zavorrata instabile: forza funzionale e clinch."
  },
  {
    "id": "pneumatico",
    "label": "Pneumatico e mazza",
    "description": "Ribaltamenti, colpi di mazza e spinte sul copertone."
  },
  {
    "id": "coni-scaletta",
    "label": "Coni e scaletta",
    "description": "Footwork, cambi di direzione e coordinazione con coni, scaletta e ostacoli."
  }
];

/** Esercizi in più che compaiono solo nei gruppi per attrezzo, non nelle liste per categoria. */
export const toolExercises: Exercise[] = [
  {
    "id": "palla-medica--wall-ball",
    "name": "Wall ball",
    "category": "resistenza",
    "description": "Accosciata e lancio della palla contro un bersaglio sul muro, senza pause.",
    "dose": "3 × 20 ripetizioni, recupero 60 s",
    "details": "In piedi davanti al muro con la palla al petto, scendi in accosciata e risalendo lancia la palla su un bersaglio a 2,5–3 m, riprendila e scendi subito. Allena il motore aerobico-lattacido e la spinta delle gambe tipica delle riprese intense. Mantieni il petto alto e le ginocchia in linea con i piedi.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--tirata-in-clinch-con-ginocchiata",
    "name": "Tirata in clinch con ginocchiata",
    "category": "clinch",
    "description": "Tira la palla dall'alto verso il ginocchio che sale, come in un clinch.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "Tieni la palla sopra la testa a braccia tese, poi tirala con forza verso il basso mentre il ginocchio sale a incontrarla, tornando subito in guardia. Riproduce la tirata della testa avversaria in clinch abbinata alla ginocchiata. Spingi l'anca in avanti e resta alto sulla punta del piede d'appoggio.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--lancio-a-una-mano-da-gancio",
    "name": "Lancio a una mano da gancio",
    "category": "tecnica",
    "description": "Lancio laterale a una mano che imita la traiettoria del gancio.",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "In guardia di lato al muro, palla leggera (2–3 kg) in una mano con il gomito alto all'altezza della spalla: ruota anca e piede e scaricala sul muro con traiettoria a gancio. Insegna a trasmettere la rotazione del bacino nel pugno. Usa una palla leggera e non lanciare solo con il braccio per proteggere la spalla.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--plank-con-mani-sulla-palla",
    "name": "Plank con mani sulla palla",
    "category": "core",
    "description": "Plank a braccia tese con entrambe le mani appoggiate sulla palla medica.",
    "dose": "3 × 30 s, recupero 30 s",
    "details": "Appoggia le mani sulla palla sotto le spalle e porta i piedi indietro in posizione di plank a braccia tese, corpo in linea dalla testa ai talloni. L'instabilità costringe addome e spalle a lavorare per stabilizzare, utile per incassare e restare compatti. Non far cedere il bacino e respira in modo controllato.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--mountain-climber-sulla-palla",
    "name": "Mountain climber sulla palla",
    "category": "resistenza",
    "description": "Mountain climber veloci con le mani in appoggio sulla palla medica.",
    "dose": "3 × 30 s, recupero 30 s",
    "details": "Dalla posizione di plank con le mani sulla palla, porta alternativamente le ginocchia al petto a ritmo sostenuto mantenendo le spalle sopra la palla. Sviluppa resistenza del core e richiamo rapido delle ginocchia, utile per ginocchiate e ritmo di gara. Mantieni il bacino basso e stabile, senza saltellare con le anche.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--passaggi-rapidi-in-coppia",
    "name": "Passaggi rapidi in coppia",
    "category": "velocita",
    "description": "Passaggi al petto veloci e ravvicinati tra due compagni.",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "Due atleti a 2–3 m di distanza, in guardia, si passano una palla leggera al petto il più velocemente possibile, ricevendo e rilanciando in un unico gesto. Migliora la rapidità delle mani e il ciclo di estensione-ritorno del pugno. Ricevi con le mani morbide davanti al viso e non abbassare mai la guardia.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--affondo-con-rotazione",
    "name": "Affondo con rotazione",
    "category": "mobilita",
    "description": "Affondo in avanti con rotazione del busto e palla a braccia tese.",
    "dose": "3 × 8 per lato",
    "details": "Tieni la palla al petto, fai un affondo in avanti e ruota il busto verso il lato della gamba avanti estendendo le braccia, poi torna al centro e risali. Migliora la mobilità di anche e colonna toracica necessaria per calci e rotazioni. Muoviti lento e controllato, con il ginocchio anteriore sopra la caviglia.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--squat-abbracciando-la-palla",
    "name": "Squat abbracciando la palla",
    "category": "forza-massimale",
    "description": "Squat con palla medica pesante tenuta abbracciata al petto.",
    "dose": "5 × 5 ripetizioni, recupero 2 min",
    "details": "Abbraccia una palla pesante (10–20 kg) contro il petto, piedi alla larghezza delle spalle, e scendi in accosciata profonda risalendo con decisione. Costruisce forza di gambe e tronco utile a spingere in clinch e caricare i calci. Tieni la schiena neutra e il peso su tutta la pianta del piede.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--affondi-camminati-con-palla-sopra-la-testa",
    "name": "Affondi camminati con palla sopra la testa",
    "category": "forza-resistente",
    "description": "Affondi in avanzamento con la palla tenuta a braccia tese sopra la testa.",
    "dose": "3 × 12 passi per lato, recupero 60 s",
    "details": "Solleva la palla sopra la testa a braccia tese e avanza con affondi alternati, mantenendo il busto verticale. Allena la resistenza di gambe e spalle e la stabilità del tronco, utile per restare solidi nelle ultime riprese. Non inarcare la zona lombare: tieni l'addome contratto e le costole basse.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--scivolamenti-laterali-con-passaggio",
    "name": "Scivolamenti laterali con passaggio",
    "category": "agilita",
    "description": "Spostamenti laterali in guardia ricevendo e restituendo la palla.",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "In guardia, scivola lateralmente tra due coni a 3–4 m mentre un compagno ti passa la palla: ricevi, restituisci e continua a muoverti senza incrociare i piedi. Allena il footwork laterale coordinato con il lavoro delle mani. Resta basso sulle ginocchia e mantieni sempre la distanza corretta tra i piedi.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--v-up-con-passaggio",
    "name": "V-up con passaggio",
    "category": "core",
    "description": "Da supino passa la palla dalle mani ai piedi chiudendo a V.",
    "dose": "3 × 12 ripetizioni, recupero 45 s",
    "details": "Supino con palla tra le mani sopra la testa, chiudi braccia e gambe a V e passa la palla ai piedi; ridiscendi, richiudi e riprendila con le mani. Rinforza tutto il core, fondamentale per incassare colpi al corpo e trasmettere forza. Controlla la discesa senza far rimbalzare la schiena a terra.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--lancio-verticale-da-accosciata",
    "name": "Lancio verticale da accosciata",
    "category": "forza-esplosiva",
    "description": "Dall'accosciata lancia la palla il più in alto possibile con estensione totale.",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Parti in accosciata con la palla tra le gambe, poi estendi esplosivamente caviglie, ginocchia e anche lanciandola in verticale sopra la testa. Sviluppa la tripla estensione esplosiva che sta alla base di calci e ginocchiate. Fai un passo indietro dopo il lancio e lascia cadere la palla a terra senza riprenderla.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--halo-con-palla-medica",
    "name": "Halo con palla medica",
    "category": "mobilita",
    "description": "Cerchi lenti della palla attorno alla testa per mobilizzare le spalle.",
    "dose": "3 × 8 per senso",
    "details": "In piedi o in ginocchio, tieni una palla leggera all'altezza del viso e falla girare lentamente attorno alla testa, passando dietro la nuca e tornando davanti. Migliora la mobilità di spalle e torace, utile per guardia, clinch e scioltezza nei pugni. Tieni il busto fermo e l'addome attivo, senza inarcare la schiena.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--woodchopper-diagonale",
    "name": "Woodchopper diagonale",
    "category": "core",
    "description": "Movimento diagonale dall'alto al basso come un taglio di legna.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "Parti con la palla sopra la spalla destra e portala in diagonale verso l'anca sinistra ruotando il busto e piegando le ginocchia, poi risali controllando. Allena la catena obliqua che collega anche e spalle in pugni, gomiti e calci circolari. Fai ruotare il piede posteriore per non torcere le ginocchia.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--presa-reattiva-in-guardia",
    "name": "Presa reattiva in guardia",
    "category": "velocita",
    "description": "Ricevi lanci improvvisi del compagno restando in guardia e rilancia.",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "In guardia, il compagno lancia una palla leggera a sorpresa verso viso, petto o fianchi variando ritmo e direzione: afferra e rilancia subito. Allena tempo di reazione, lettura dei movimenti e riflessi difensivi. Usa una palla da 1–2 kg e torna sempre con le mani alte dopo ogni ricezione.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--lotta-per-la-palla-in-coppia",
    "name": "Lotta per la palla in coppia",
    "category": "clinch",
    "description": "Due atleti si contendono la palla con trazioni e spinte come in clinch.",
    "dose": "4 riprese da 1 min, 1 min recupero",
    "details": "Entrambi gli atleti afferrano la stessa palla al petto e cercano di strapparla all'altro con trazioni, torsioni e spostamenti dei piedi. Sviluppa la forza di presa, il controllo dell'equilibrio e la spinta delle gambe tipici della lotta in clinch. Niente strattoni al collo o alle braccia: lavora con il corpo intero.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--lancio-e-scatto",
    "name": "Lancio e scatto",
    "category": "agilita",
    "description": "Lancia la palla in avanti, scatta a recuperarla e torna in guardia.",
    "dose": "5 × 1 ripetizione su 10 m, recupero 60 s",
    "details": "Lancia la palla in avanti dal petto con esplosività, scatta a riprenderla prima che si fermi, raccoglila con le ginocchia piegate e torna in guardia. Combina potenza, accelerazione e cambio di direzione, utile per entrare e uscire dalla distanza. Raccogli la palla piegando le gambe e non la schiena.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "palla-medica--piegamenti-con-palla-rotolante",
    "name": "Piegamenti con palla rotolante",
    "category": "forza-resistente",
    "description": "Piegamenti alternando una mano sulla palla e facendola rotolare all'altra.",
    "dose": "3 × 10 ripetizioni, recupero 60 s",
    "details": "In posizione di piegamento con una mano sulla palla, esegui un piegamento, poi fai rotolare la palla all'altra mano e ripeti dal lato opposto. Costruisce resistenza di petto, spalle e tricipiti con un lavoro di stabilità a ogni ripetizione. Mantieni il corpo rigido in linea e scendi fino a sfiorare il pavimento col petto.",
    "equipment": "Palla medica",
    "tool": "palla-medica"
  },
  {
    "id": "corda--corda-a-piedi-alternati-jogging-step",
    "name": "Corda a piedi alternati (jogging step)",
    "category": "resistenza",
    "description": "Corsa sul posto saltando la corda con un piede alla volta.",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "In piedi, gomiti vicini ai fianchi, gira la corda con i polsi e atterra alternando i piedi come in una corsa leggera. Costruisce la base aerobica e il ritmo di passo tipico del ring. Resta sugli avampiedi e non alzare i piedi più di pochi centimetri.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-tabata",
    "name": "Corda Tabata",
    "category": "resistenza",
    "description": "8 intervalli massimali di corda veloce con pause brevissime.",
    "dose": "2 × 8 × 20 s, recupero 10 s",
    "details": "Salta alla massima velocità sostenibile per 20 secondi, poi fermati 10 secondi tenendo la corda in mano. Simula i picchi di intensità di uno scambio ravvicinato e allena il recupero rapido. Mantieni la tecnica pulita: se inciampi spesso, riduci leggermente la velocità.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-piramide-1-2-3-2-1-min",
    "name": "Corda piramide 1-2-3-2-1 min",
    "category": "resistenza",
    "description": "Blocchi di corda di durata crescente e decrescente.",
    "dose": "1 serie, recupero 30 s tra i blocchi",
    "details": "Esegui blocchi di 1, 2, 3, 2 e 1 minuto di salti a ritmo medio-alto con 30 secondi di pausa tra i blocchi. Abitua il corpo a gestire sforzi di durata variabile come nei round reali. Nel blocco da 3 minuti dosa il ritmo per non calare nel finale.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-sprint-finale-di-ripresa",
    "name": "Corda con sprint finale di ripresa",
    "category": "velocita",
    "description": "Ripresa a ritmo medio con ultimi 30 s alla massima velocità.",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Salta a ritmo costante per 2 minuti e 30 secondi, poi accelera al massimo per gli ultimi 30 secondi. Allena la capacità di spingere a fine round, quando i giudici valutano il dominio. Durante lo sprint mantieni polsi rapidi e spalle rilassate, senza irrigidire le braccia.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-salti-a-forbice",
    "name": "Corda con salti a forbice",
    "category": "agilita",
    "description": "Salti alternando un piede avanti e uno indietro, come in guardia.",
    "dose": "4 × 45 s, recupero 30 s",
    "details": "Ad ogni giro di corda alterna rapidamente i piedi avanti e indietro in posizione sfalsata, simile alla guardia. Migliora i cambi di guardia e la coordinazione degli arti inferiori. Tieni il peso centrato tra i piedi e il busto eretto, evitando di sbilanciarti in avanti.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-a-sci-avanti-indietro",
    "name": "Corda a sci (avanti-indietro)",
    "category": "agilita",
    "description": "Salti a piedi uniti avanti e indietro oltre una linea immaginaria.",
    "dose": "4 × 40 s, recupero 30 s",
    "details": "A piedi uniti salta alternando un piccolo spostamento in avanti e uno indietro ad ogni giro. Allena l'entrata e l'uscita dalla distanza di colpo con appoggi rapidi. Gli spostamenti devono essere brevi (10-15 cm) e gli atterraggi morbidi sugli avampiedi.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-a-box-quattro-punti",
    "name": "Corda a box (quattro punti)",
    "category": "agilita",
    "description": "Salti a piedi uniti disegnando un quadrato: avanti, destra, dietro, sinistra.",
    "dose": "4 × 40 s, recupero 30 s",
    "details": "Immagina un quadrato a terra e salta in sequenza nei quattro angoli a ogni giro di corda. Sviluppa il controllo degli spostamenti multidirezionali usato per angolare l'avversario. Mantieni lo sguardo avanti e cambia verso della sequenza a ogni serie.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-skip-calciato",
    "name": "Corda con skip calciato",
    "category": "tecnica",
    "description": "Ad ogni salto un piede si estende in avanti come un piccolo teep.",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "Saltando su un piede, estendi l'altra gamba in avanti con un leggero colpo d'avampiede, poi alterna. Rinforza il ritmo e la coordinazione del calcio frontale (teep) senza perdere equilibrio. L'estensione è piccola e controllata: non serve altezza, conta il tempo.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-e-shadow-alternati",
    "name": "Corda e shadow alternati",
    "category": "tecnica",
    "description": "Alternanza di 1 min di corda e 1 min di shadow boxing.",
    "dose": "4 riprese da 3 min, 1 min recupero",
    "details": "Ogni ripresa alterna corda e shadow: lascia cadere la corda e passa subito a combinazioni di pugni, calci e ginocchiate. Allena il passaggio dal ritmo di gambe alla tecnica sotto fatica. Nello shadow conserva la stessa leggerezza di piedi usata nei salti.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-ginocchiata-ogni-4-salti",
    "name": "Corda con ginocchiata ogni 4 salti",
    "category": "clinch",
    "description": "Dopo 4 salti si ferma la corda e si esegue una ginocchiata.",
    "dose": "3 × 1 min per lato, recupero 30 s",
    "details": "Esegui 4 salti, blocca la corda e porta una ginocchiata alta tirando le mani verso il basso come in clinch, poi riparti. Collega il ritmo di gambe all'esplosività della ginocchiata. Spingi l'anca in avanti durante la ginocchiata e mantieni l'equilibrio sul piede d'appoggio.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-doppi-esplosivi-a-serie-brevi",
    "name": "Corda doppi esplosivi a serie brevi",
    "category": "forza-esplosiva",
    "description": "Brevi serie di doppi salti con massima spinta dai polpacci.",
    "dose": "6 × 10 doppi, recupero 45 s",
    "details": "Salta in alto con piedi uniti facendo passare la corda due volte sotto i piedi ad ogni salto, per 10 ripetizioni consecutive. Sviluppa la reattività di caviglie e polpacci utile per spinte e calci veloci. Atterra morbido e recupera bene tra le serie per mantenere la qualità.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-salti-a-ginocchia-al-petto",
    "name": "Corda con salti a ginocchia al petto",
    "category": "forza-esplosiva",
    "description": "Salti alti portando le ginocchia verso il petto, con giro di corda lento.",
    "dose": "5 × 8 salti, recupero 60 s",
    "details": "Ad ogni salto porta le ginocchia verso il petto mentre la corda passa sotto, con uno o due giri. Allena la potenza delle gambe e la rapidità di raccolta delle ginocchia utile per le ginocchiate. Atterra con ginocchia leggermente flesse ed evita di affrettare la serie.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-zavorrata-a-polsi",
    "name": "Corda zavorrata a polsi",
    "category": "forza-resistente",
    "description": "Corda pesante o con impugnature zavorrate per spalle resistenti.",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Usa una corda pesata (circa 0,5-1 kg) o impugnature zavorrate e salta a ritmo moderato. Rinforza spalle, avambracci e presa, utili per tenere la guardia alta per tutto il match. Riduci la durata se le spalle si irrigidiscono e mantieni i gomiti vicini al busto.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-in-mezzo-squat",
    "name": "Corda in mezzo squat",
    "category": "forza-resistente",
    "description": "Salti brevi mantenendo un leggero piegamento delle ginocchia.",
    "dose": "4 × 45 s, recupero 45 s",
    "details": "Scendi in mezzo squat con busto eretto e salta pochi centimetri senza mai distendere le gambe. Aumenta la resistenza di quadricipiti e glutei per mantenere una posizione bassa e stabile. Le ginocchia restano allineate con le punte dei piedi e la schiena neutra.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-addome-contratto-e-passo-lento",
    "name": "Corda con addome contratto e passo lento",
    "category": "core",
    "description": "Salto lento e controllato mantenendo il core attivo e il bacino stabile.",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "Salta a ritmo lento concentrandoti sul tenere addome contratto e bacino fermo, senza oscillazioni del busto. Migliora la stabilità del tronco che serve per assorbire colpi e trasmettere forza. Respira in modo regolare e controlla che le spalle non si sollevino.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-rotazione-del-busto",
    "name": "Corda con rotazione del busto",
    "category": "core",
    "description": "Salti alternati con piccole torsioni del busto a ogni appoggio.",
    "dose": "3 × 45 s, recupero 30 s",
    "details": "Saltando, ruota leggermente le anche a destra e sinistra mentre spalle e sguardo restano frontali. Allena la dissociazione tra busto e anche, importante per generare potenza nei calci circolari. La rotazione è piccola e controllata: non perdere il ritmo della corda.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-all-indietro",
    "name": "Corda all'indietro",
    "category": "mobilita",
    "description": "Salti con rotazione della corda all'indietro per aprire le spalle.",
    "dose": "3 × 1 min, recupero 30 s",
    "details": "Gira la corda all'indietro con movimento fluido dei polsi e salta a piedi uniti. Mobilizza le spalle e bilancia il lavoro anteriore tipico di pugni e guardia. Inizia a ritmo lento per prendere confidenza e tieni il petto aperto durante i giri.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "corda--corda-con-slancio-di-caviglia",
    "name": "Corda con slancio di caviglia",
    "category": "mobilita",
    "description": "Salti leggeri con piede che tocca tallone e punta alternati.",
    "dose": "2 × 1 min, recupero 30 s",
    "details": "Ad ogni salto appoggia alternativamente il tallone avanti e la punta dietro con un piede, poi cambia lato. Mobilizza la caviglia e prepara articolazioni e tendini al lavoro di ring. Usalo nel riscaldamento con ritmo lento e movimenti ampi ma senza forzare.",
    "equipment": "Corda",
    "tool": "corda"
  },
  {
    "id": "kettlebell--clean-a-un-braccio",
    "name": "Clean a un braccio",
    "category": "forza-esplosiva",
    "description": "Porta la kettlebell in rack con un'estensione esplosiva dell'anca.",
    "dose": "4 × 6 per lato, recupero 60 s",
    "details": "Parti con la kettlebell tra i piedi, carica le anche e tirala in rack con un'estensione rapida, lasciandola ruotare attorno al polso. Sviluppa la triplice estensione che dà potenza a ginocchiate e calci. Gomito vicino al corpo e polso dritto per evitare che il peso sbatta sull'avambraccio.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--snatch-con-kettlebell",
    "name": "Snatch con kettlebell",
    "category": "forza-esplosiva",
    "description": "Porta la kettlebell sopra la testa in un unico movimento esplosivo.",
    "dose": "5 × 5 per lato, recupero 75 s",
    "details": "Dalla posizione di swing spingi forte con le anche e guida la kettlebell in alto fino a braccio teso sopra la testa, inserendo la mano all'ultimo. Allena l'esplosività di tutta la catena posteriore e la stabilità della spalla. Impara prima clean e press: il peso non deve mai cadere sul polso.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--push-press-con-kettlebell",
    "name": "Push press con kettlebell",
    "category": "forza-esplosiva",
    "description": "Spinta sopra la testa aiutata da un rapido piegamento delle gambe.",
    "dose": "4 × 6 per lato, recupero 75 s",
    "details": "Dal rack fai un breve piegamento di ginocchia e spingi esplosivamente con le gambe, completando con il braccio fino al blocco sopra la testa. Insegna a trasferire forza da terra al pugno, come nel diretto e nel montante. Tieni il core contratto e non inarcare la zona lombare.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--military-press-a-un-braccio",
    "name": "Military press a un braccio",
    "category": "forza-massimale",
    "description": "Spinta lenta e controllata sopra la testa dal rack.",
    "dose": "4 × 5 per lato, recupero 90 s",
    "details": "In piedi con la kettlebell in rack, glutei e addome contratti, spingi verticalmente fino al blocco e scendi controllando. Rinforza spalle e tricipiti, utili a reggere guardia alta e clinch per tutta la ripresa. Usa un carico pesante ma senza piegare il busto di lato.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--front-squat-doppio",
    "name": "Front squat doppio",
    "category": "forza-massimale",
    "description": "Squat con due kettlebell tenute in rack davanti al petto.",
    "dose": "4 × 5, recupero 2 min",
    "details": "Tieni due kettlebell in rack, gomiti stretti, e scendi in squat profondo mantenendo il busto eretto, poi risali spingendo con tutto il piede. Costruisce gambe forti per calci potenti e una base stabile. Respira e blocca l'addome prima di ogni discesa per proteggere la schiena.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--rematore-a-un-braccio",
    "name": "Rematore a un braccio",
    "category": "forza-massimale",
    "description": "Tirata della kettlebell al fianco con busto inclinato in appoggio.",
    "dose": "4 × 8 per lato, recupero 75 s",
    "details": "Appoggia una mano e un ginocchio sulla panca, schiena piatta, e tira la kettlebell verso l'anca portando il gomito indietro. Rinforza dorsali e romboidi, fondamentali per tirare e controllare la testa dell'avversario nel clinch. Evita di ruotare il busto per aiutarti.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--gorilla-row",
    "name": "Gorilla row",
    "category": "forza-resistente",
    "description": "Rematore alternato con due kettlebell a terra in posizione di stacco.",
    "dose": "3 × 10 per lato, recupero 60 s",
    "details": "Con due kettlebell tra i piedi, anche indietro e schiena piatta, tira alternativamente una kettlebell al fianco mentre l'altra resta a terra in appoggio. Allena la schiena in resistenza e la stabilità anti-rotazione del tronco. Mantieni le anche ferme e il collo in linea con la colonna.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--renegade-row",
    "name": "Renegade row",
    "category": "core",
    "description": "Rematore in posizione di plank appoggiato su due kettlebell.",
    "dose": "3 × 6 per lato, recupero 60 s",
    "details": "In plank sulle maniglie di due kettlebell, piedi larghi, tira una kettlebell al fianco senza ruotare il bacino, poi alterna. Allena un core anti-rotazione che resiste a colpi e spinte nel clinch. Usa kettlebell stabili e allarga i piedi se il bacino oscilla.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--halo",
    "name": "Halo",
    "category": "mobilita",
    "description": "Rotazione della kettlebell attorno alla testa per mobilità delle spalle.",
    "dose": "3 × 8 per direzione",
    "details": "Tieni la kettlebell capovolta per le corna davanti al petto e falla girare attorno alla testa, passandola vicino a nuca e orecchie. Migliora la mobilità di spalle e dorsale, utile per guardia rilassata e gomitate ampie. Usa un carico leggero e tieni l'addome contratto senza inarcare la schiena.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--windmill",
    "name": "Windmill",
    "category": "mobilita",
    "description": "Flessione laterale con kettlebell sopra la testa e sguardo verso il peso.",
    "dose": "3 × 5 per lato, recupero 45 s",
    "details": "Con la kettlebell sopra la testa a braccio teso, spingi l'anca di lato e scendi con l'altra mano lungo la gamba fino a terra, senza perdere il braccio verticale. Migliora mobilità dell'anca e stabilità della spalla, utili per calci alti. Muoviti lento e tieni lo sguardo sulla kettlebell.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--around-the-body",
    "name": "Around the body",
    "category": "core",
    "description": "Passaggio continuo della kettlebell attorno alla vita da una mano all'altra.",
    "dose": "3 × 30 s per direzione",
    "details": "In piedi, anche stabili, passa la kettlebell da una mano all'altra attorno alla vita con ritmo costante. Allena il core a resistere alle forze rotazionali e migliora la presa, utile nel clinch. Mantieni il bacino fermo e non lasciare oscillare il busto.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--figure-8",
    "name": "Figure 8",
    "category": "agilita",
    "description": "Passaggio della kettlebell tra le gambe disegnando un otto.",
    "dose": "3 × 40 s, recupero 20 s",
    "details": "In mezzo squat, passa la kettlebell tra le gambe da dietro, cambiando mano e girando attorno a ciascuna coscia in un movimento a otto. Migliora coordinazione, rapidità delle mani e posizione bassa. Schiena dritta e sguardo avanti, senza curvarti sul peso.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--bottom-up-press",
    "name": "Bottom-up press",
    "category": "tecnica",
    "description": "Spinta con kettlebell capovolta che richiede presa e polso stabili.",
    "dose": "3 × 5 per lato, recupero 60 s",
    "details": "Afferra la kettlebell con il fondo verso l'alto, stringi forte la maniglia e spingila sopra la testa mantenendola in equilibrio. Allinea polso, gomito e spalla come nell'impatto del pugno, rinforzando la presa. Usa un carico leggero e fermati se il peso si inclina.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--double-kettlebell-clean-e-press",
    "name": "Double kettlebell clean e press",
    "category": "forza-resistente",
    "description": "Clean seguito da spinta sopra la testa con due kettlebell.",
    "dose": "5 × 5, recupero 90 s",
    "details": "Da due kettlebell a terra esegui un clean in rack e subito una spinta sopra la testa, poi riporta giù con controllo. Costruisce forza su tutto il corpo e capacità di ripetere sforzi intensi come negli scambi. Cura la tecnica del clean prima di aumentare il carico.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--swing-a-mani-alterne",
    "name": "Swing a mani alterne",
    "category": "velocita",
    "description": "Swing con cambio di mano a ogni ripetizione nel punto alto.",
    "dose": "4 × 20, recupero 45 s",
    "details": "Esegui lo swing a un braccio e, nel punto più alto quando il peso è leggero, passalo rapidamente all'altra mano. Allena velocità di anche e mani, coordinazione e reattività. Fai il passaggio solo all'altezza del petto e tieni la kettlebell sotto controllo.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--long-cycle-a-tempo",
    "name": "Long cycle a tempo",
    "category": "resistenza",
    "description": "Clean e jerk continui a ritmo costante per un tempo prolungato.",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Ripeti clean e push press a ritmo costante, cambiando mano quando necessario, senza appoggiare il peso. Simula lo sforzo continuo di una ripresa e allena la respirazione sotto carico. Scegli un peso moderato e mantieni ritmo regolare invece di partire troppo veloce.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--farmer-carry-doppio",
    "name": "Farmer carry doppio",
    "category": "clinch",
    "description": "Camminata con due kettlebell pesanti in mano lungo i fianchi.",
    "dose": "4 × 30 m, recupero 60 s",
    "details": "Afferra due kettlebell pesanti, spalle basse e indietro, e cammina con passi corti mantenendo il busto eretto. Rinforza presa, trapezi e tronco, essenziali per controllare l'avversario nel clinch. Non lasciare che le spalle salgano verso le orecchie.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "kettlebell--rack-carry-con-affondi",
    "name": "Rack carry con affondi",
    "category": "clinch",
    "description": "Affondi in camminata con due kettlebell in rack davanti al petto.",
    "dose": "3 × 10 per gamba, recupero 75 s",
    "details": "Con due kettlebell in rack, avanza in affondo portando il ginocchio posteriore vicino a terra e risali spingendo con la gamba anteriore. Rinforza gambe e tronco per mantenere la postura e spingere nel clinch. Gomiti stretti e busto verticale per tutto il movimento.",
    "equipment": "Kettlebell",
    "tool": "kettlebell"
  },
  {
    "id": "elastico--montante-con-elastico",
    "name": "Montante con elastico",
    "category": "forza-esplosiva",
    "description": "Montanti esplosivi contro la resistenza dell'elastico ancorato in basso.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "Ancora l'elastico in basso dietro di te e impugnalo in guardia. Spingi dal piede posteriore, ruota l'anca e porta il montante verso l'alto, tornando subito in guardia. Sviluppa potenza nei colpi corti al corpo e al mento; non sbilanciarti in avanti e mantieni il mento protetto.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--gancio-con-elastico",
    "name": "Gancio con elastico",
    "category": "forza-esplosiva",
    "description": "Ganci esplosivi con elastico ancorato lateralmente all'altezza del petto.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "In guardia, con l'elastico ancorato di lato all'altezza delle spalle, chiudi il gancio ruotando piede, anca e spalla insieme. Rientra controllando l'elastico. Rinforza la catena rotazionale del gancio; il gomito resta all'altezza del pugno e la mano opposta copre il viso.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--calcio-circolare-con-elastico-alla-caviglia",
    "name": "Calcio circolare con elastico alla caviglia",
    "category": "forza-esplosiva",
    "description": "Calcio circolare contro la resistenza dell'elastico fissato alla caviglia.",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "Elastico leggero attorno alla caviglia e ancorato dietro di te a terra. Esegui il calcio circolare a media altezza ruotando sul piede d'appoggio e richiama la gamba in guardia. Allena l'anca a calciare con potenza; usa una resistenza leggera per non alterare la traiettoria tecnica.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--teep-posteriore-con-elastico-in-vita",
    "name": "Teep posteriore con elastico in vita",
    "category": "forza-esplosiva",
    "description": "Teep con la gamba dietro mentre l'elastico in vita tira all'indietro.",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "Cintura elastica in vita trattenuta da un compagno o ancorata alle spalle. Porta il ginocchio al petto e spingi il teep in avanti spostando il bacino, poi rientra in guardia. Insegna a proiettare il peso nel calcio frontale; tieni il busto dritto e non piegarti indietro.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--sprint-in-guardia-con-elastico-in-vita",
    "name": "Sprint in guardia con elastico in vita",
    "category": "velocita",
    "description": "Partenze rapide in avanti con elastico in vita trattenuto dal compagno.",
    "dose": "6 × 5 s, recupero 40 s",
    "details": "Il compagno trattiene l'elastico agganciato in vita. Parti dalla guardia con passi corti ed esplosivi in avanti per 3-4 metri, mantenendo le mani alte. Migliora l'entrata per chiudere la distanza sull'avversario; spingi con l'avampiede e non alzare il busto.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--rilascio-rapido-del-jab-con-elastico",
    "name": "Rilascio rapido del jab con elastico",
    "category": "velocita",
    "description": "Jab velocissimi con elastico leggero per allenare il rientro della mano.",
    "dose": "4 × 15 s per lato, recupero 30 s",
    "details": "Elastico leggero ancorato davanti a te all'altezza delle spalle, impugnato con la mano anteriore. Esegui jab rapidi concentrandoti sul ritorno veloce della mano in guardia, contro la tensione. Rende il jab più rapido a rientrare e meno contrabile; non lasciar cadere il gomito.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--spostamenti-laterali-con-elastico-alle-ginocchia",
    "name": "Spostamenti laterali con elastico alle ginocchia",
    "category": "agilita",
    "description": "Passi laterali in guardia con miniband sopra le ginocchia.",
    "dose": "3 × 10 m per lato, recupero 30 s",
    "details": "Miniband sopra le ginocchia, piedi alla larghezza delle spalle, in guardia bassa. Muoviti lateralmente con passi corti senza unire i piedi e senza perdere tensione. Attiva i glutei e stabilizza le ginocchia nel footwork; non far collassare le ginocchia verso l'interno.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--pivot-con-elastico-in-vita",
    "name": "Pivot con elastico in vita",
    "category": "agilita",
    "description": "Cambi d'angolo e pivot in guardia con elastico in vita tirato di lato.",
    "dose": "3 × 30 s per lato, recupero 30 s",
    "details": "Il compagno tiene l'elastico in vita da un lato. Esegui pivot sul piede anteriore e uscite d'angolo contro la tensione, tornando sempre in guardia. Allena gli angoli per uscire dalla linea d'attacco; ruota sull'avampiede e mantieni le mani alte.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--face-pull-con-elastico",
    "name": "Face pull con elastico",
    "category": "forza-resistente",
    "description": "Tirata dell'elastico verso il viso con gomiti alti per le spalle posteriori.",
    "dose": "3 × 15, recupero 45 s",
    "details": "Elastico ancorato all'altezza degli occhi, prendilo con presa prona. Tira verso il viso aprendo i gomiti e ruotando le mani verso l'esterno, poi torna lento. Bilancia il lavoro di spinta dei pugni e protegge le spalle; non inarcare la schiena.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--rotazioni-esterne-con-elastico",
    "name": "Rotazioni esterne con elastico",
    "category": "mobilita",
    "description": "Rotazione esterna della spalla con gomito al fianco per prevenire infortuni.",
    "dose": "3 × 15 per lato, recupero 30 s",
    "details": "Elastico ancorato all'altezza del gomito, gomito piegato a 90° e attaccato al fianco. Ruota l'avambraccio verso l'esterno e torna lentamente. Rinforza la cuffia dei rotatori, sollecitata da pugni e clinch; usa una resistenza leggera e non staccare il gomito.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--pull-apart-con-elastico",
    "name": "Pull-apart con elastico",
    "category": "forza-resistente",
    "description": "Apertura delle braccia tese contro l'elastico per scapole e spalle.",
    "dose": "3 × 20, recupero 30 s",
    "details": "In piedi, elastico tenuto davanti al petto con braccia tese. Aprilo fino a toccare il petto stringendo le scapole, poi torna lento. Migliora la postura in guardia e la tenuta delle spalle nei round lunghi; non alzare le spalle verso le orecchie.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--ponte-glutei-con-miniband",
    "name": "Ponte glutei con miniband",
    "category": "mobilita",
    "description": "Ponte a terra con miniband sopra le ginocchia per attivare i glutei.",
    "dose": "3 × 15, recupero 30 s",
    "details": "Supino, piedi a terra, miniband sopra le ginocchia. Spingi le ginocchia verso l'esterno e solleva il bacino stringendo i glutei, pausa di 1 s in alto. Attiva anca e glutei prima di calci e ginocchiate e protegge la zona lombare; non iperestendere la schiena.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--clamshell-con-elastico",
    "name": "Clamshell con elastico",
    "category": "mobilita",
    "description": "Apertura del ginocchio sul fianco con miniband per la stabilità dell'anca.",
    "dose": "3 × 15 per lato, recupero 30 s",
    "details": "Sdraiato sul fianco, ginocchia piegate e miniband sopra le ginocchia. Apri il ginocchio superiore mantenendo i piedi uniti e il bacino fermo. Rinforza il medio gluteo, chiave per stabilità sul piede d'appoggio nei calci; il bacino non deve ruotare all'indietro.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--chop-diagonale-con-elastico",
    "name": "Chop diagonale con elastico",
    "category": "core",
    "description": "Rotazione diagonale dall'alto verso il basso contro l'elastico.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "Elastico ancorato in alto di lato, prendilo con due mani. Tira in diagonale verso l'anca opposta ruotando busto e piedi, poi risali controllando. Rinforza la rotazione di busto usata in gomitate e ganci; mantieni le braccia quasi tese e il core contratto.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--dead-bug-con-elastico",
    "name": "Dead bug con elastico",
    "category": "core",
    "description": "Dead bug con elastico ancorato dietro la testa per stabilizzare il core.",
    "dose": "3 × 8 per lato, recupero 30 s",
    "details": "Supino, elastico ancorato dietro la testa e tenuto a braccia tese sopra il petto. Distendi una gamba alla volta mantenendo le braccia ferme contro la tensione. Allena la stabilità del tronco per incassare e calciare; la zona lombare resta schiacciata a terra.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--tirata-del-collo-in-clinch-con-elastico",
    "name": "Tirata del collo in clinch con elastico",
    "category": "clinch",
    "description": "Tirata delle braccia verso il basso come nel controllo della testa in clinch.",
    "dose": "3 × 12, recupero 45 s",
    "details": "Elastico ancorato in alto davanti a te, mani giunte come nella presa al collo. Tira verso il petto con i gomiti stretti, abbassando il baricentro, e risali lento. Rinforza la presa e la tirata per spezzare la postura dell'avversario; tieni i gomiti chiusi e la schiena dritta.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "elastico--ripresa-colpi-con-elastico-in-vita",
    "name": "Ripresa colpi con elastico in vita",
    "category": "resistenza",
    "description": "Combinazioni continue a ombra con elastico in vita trattenuto dal compagno.",
    "dose": "3 riprese da 3 min, recupero 1 min",
    "details": "Il compagno trattiene l'elastico in vita mentre esegui combinazioni di pugni, calci e ginocchiate avanzando. Mantieni ritmo costante e pressione per tutta la ripresa. Allena la resistenza alla pressione in avanti tipica della Muay Thai; non sacrificare la tecnica alla fatica.",
    "equipment": "Elastici",
    "tool": "elastico"
  },
  {
    "id": "pao--parata-del-calcio-e-risposta",
    "name": "Parata del calcio e risposta",
    "category": "tecnica",
    "description": "Il partner calcia con il pao, l'atleta para con la tibia e risponde subito.",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Il partner simula un calcio basso o al corpo con il pao; l'atleta alza la tibia con guardia chiusa e rientra con diretto-calcio. Allena la risposta automatica dopo la difesa, decisiva per vincere gli scambi. Errore comune: abbassare le mani mentre si alza la gamba.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--ginocchiate-dal-clinch-ai-pao",
    "name": "Ginocchiate dal clinch ai pao",
    "category": "clinch",
    "description": "In presa al collo, ginocchiate alternate sui pao tenuti a livello addome.",
    "dose": "4 × 30 s, 30 s recupero",
    "details": "L'atleta controlla il collo del partner, che tiene i pao sovrapposti davanti all'addome; tira ginocchiate alternate spingendo le anche avanti e tirando giù la testa. Costruisce potenza e controllo nel corpo a corpo. Il partner protegge bene l'addome; non piegare la schiena all'indietro.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--raffica-di-ginocchiate-20-s",
    "name": "Raffica di ginocchiate 20 s",
    "category": "forza-resistente",
    "description": "Ginocchiate dritte alla massima frequenza sui pao per 20 secondi.",
    "dose": "6 × 20 s, 40 s recupero",
    "details": "Il partner tiene i pao uniti davanti al busto; l'atleta afferra i bordi e alterna ginocchiate senza fermarsi, mantenendo il ritmo fino all'ultimo secondo. Simula le fasi finali di ripresa in cui si deve continuare a segnare. Errore: perdere l'appoggio sull'avampiede e caricare sul tallone.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--calcio-circolare-singolo-esplosivo",
    "name": "Calcio circolare singolo esplosivo",
    "category": "forza-esplosiva",
    "description": "Un solo calcio al corpo alla massima potenza, ripreso da fermo in guardia.",
    "dose": "5 × 5 per lato, 1 min recupero",
    "details": "Da guardia ferma l'atleta ruota il piede d'appoggio e calcia attraverso il pao con anca e spalla, poi torna subito in guardia. Ogni calcio è un colpo da KO, con recupero completo tra le serie. Il partner tiene il pao saldo e incassa col corpo; errore comune: caricare il calcio in modo visibile.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--schivata-del-pao-e-contro",
    "name": "Schivata del pao e contro",
    "category": "tecnica",
    "description": "Il partner lancia ganci con il pao, l'atleta schiva e contrattacca.",
    "dose": "3 riprese da 2 min, 1 min recupero",
    "details": "Il partner fa partire un gancio largo con il pao; l'atleta piega le gambe e passa sotto, poi risale con gancio-diretto sui pao già ripresentati. Insegna a restare a distanza utile dopo la difesa. Errore: piegarsi in avanti col busto invece di flettere le ginocchia, esponendo il viso.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--uscita-laterale-e-calcio",
    "name": "Uscita laterale e calcio",
    "category": "agilita",
    "description": "Il partner avanza, l'atleta esce di lato con un passo e calcia subito.",
    "dose": "4 riprese da 2 min, 1 min recupero",
    "details": "Il partner avanza spingendo con i pao; l'atleta fa un passo diagonale fuori linea, ruota sul piede avanti e calcia il pao presentato sul fianco aperto. Serve a non farsi chiudere alle corde. Errore comune: indietreggiare in linea retta invece di cambiare angolo.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--pressione-all-angolo-ai-pao",
    "name": "Pressione all'angolo ai pao",
    "category": "resistenza",
    "description": "L'atleta spinge indietro il partner con combinazioni continue fino all'angolo.",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Il partner arretra lentamente presentando i pao; l'atleta avanza a passi corti con combinazioni di 3-4 colpi senza pause e chiude con ginocchiata quando arriva all'angolo. Allena il ritmo di pressione tipico dei fighter aggressivi. Errore: avanzare con il mento alto e la guardia aperta.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "pao--gancio-al-corpo-e-calcio-basso",
    "name": "Gancio al corpo e calcio basso",
    "category": "velocita",
    "description": "Gancio al fegato seguito subito da calcio basso con la gamba avanti.",
    "dose": "4 × 10 per lato, 45 s recupero",
    "details": "Il partner tiene un pao al fianco per il gancio, poi abbassa l'altro sulla coscia; l'atleta lega i due colpi senza riposizionarsi, sfruttando la rotazione del gancio per caricare il calcio. Apre la guardia avversaria in basso. Errore: rialzarsi tra i due colpi perdendo velocità.",
    "equipment": "Pao",
    "tool": "pao"
  },
  {
    "id": "manubri--clean-con-manubri",
    "name": "Clean con manubri",
    "category": "forza-esplosiva",
    "description": "Tirata esplosiva dei manubri dal ginocchio alle spalle.",
    "dose": "4 × 5 ripetizioni, recupero 90 s",
    "details": "Parti con manubri sopra le ginocchia, anche indietro; estendi di colpo anche e ginocchia e ricevi i pesi sulle spalle con i gomiti avanti. Sviluppa la tripla estensione che spinge ginocchiate e calci. Mantieni la schiena neutra e non tirare con le braccia.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--jump-squat-con-manubri",
    "name": "Jump squat con manubri",
    "category": "forza-esplosiva",
    "description": "Squat con salto verticale tenendo manubri leggeri ai fianchi.",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Con manubri leggeri lungo i fianchi scendi a mezzo squat e salta più in alto possibile, atterrando morbido e ripartendo. Migliora la reattività delle gambe per entrare ed uscire dalla distanza. Usa carichi bassi (10-20% del peso corporeo) e ginocchia allineate all'atterraggio.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--push-press-con-manubri",
    "name": "Push press con manubri",
    "category": "forza-esplosiva",
    "description": "Spinta sopra la testa aiutata da un rapido piegamento delle gambe.",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Manubri alle spalle, fai un breve piegamento di ginocchia e spingi esplosivo trasferendo la forza dalle gambe alle braccia fino a braccia distese. Insegna a collegare gambe e spalle come nel pugno. Evita di inarcare la zona lombare, glutei e addome contratti.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--swing-con-manubrio",
    "name": "Swing con manubrio",
    "category": "forza-esplosiva",
    "description": "Oscillazione a due mani di un manubrio con spinta d'anca.",
    "dose": "4 × 15 ripetizioni, recupero 60 s",
    "details": "Tieni un manubrio per una testa, porta il peso tra le gambe piegando le anche e chiudi di scatto i glutei facendolo salire all'altezza del petto. Allena la spinta d'anca usata in ginocchiate e teep. Il movimento è delle anche, non uno squat né un sollevamento di braccia.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--stacco-rumeno-con-manubri",
    "name": "Stacco rumeno con manubri",
    "category": "forza-massimale",
    "description": "Flessione d'anca a gambe semitese per catena posteriore.",
    "dose": "4 × 8 ripetizioni, recupero 2 min",
    "details": "In piedi con manubri davanti alle cosce, spingi le anche indietro facendo scivolare i pesi lungo le gambe fino a metà tibia, poi risali stringendo i glutei. Rinforza femorali e glutei, base di calci potenti e protezione dagli infortuni. Schiena neutra, ginocchia leggermente flesse.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--goblet-squat-pesante",
    "name": "Goblet squat pesante",
    "category": "forza-massimale",
    "description": "Squat profondo con un manubrio tenuto al petto.",
    "dose": "4 × 6 ripetizioni, recupero 2 min",
    "details": "Tieni un manubrio pesante verticale contro il petto, scendi tra le ginocchia mantenendo il busto alto e risali spingendo con tutto il piede. Costruisce gambe forti per la base e la stabilità in clinch. Ginocchia in linea con le punte e talloni sempre a terra.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--step-up-con-manubri",
    "name": "Step-up con manubri",
    "category": "forza-massimale",
    "description": "Salita su panca o box con manubri pesanti ai fianchi.",
    "dose": "4 × 6 per gamba, recupero 90 s",
    "details": "Appoggia un piede intero sul box, spingi con quella gamba fino in piedi senza darti slancio con la gamba a terra, poi scendi controllato. Sviluppa forza unilaterale per la gamba d'appoggio nei calci. Ginocchio stabile sopra il piede, senza cedimenti verso l'interno.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--rematore-in-plank-con-manubri",
    "name": "Rematore in plank con manubri",
    "category": "core",
    "description": "Plank alto alternando rematori con un manubrio per mano.",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "In plank alto sulle mani appoggiate ai manubri, piedi larghi, tira un manubrio al fianco senza ruotare il bacino, poi alterna. Allena la stabilità antirotazione del tronco che protegge e trasmette la forza nei colpi. Bacino fermo e parallelo al suolo per tutta la serie.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--dead-bug-con-manubri",
    "name": "Dead bug con manubri",
    "category": "core",
    "description": "Estensione alternata di braccia e gambe da supini con manubri.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "Supino con manubri leggeri sopra il petto e anche e ginocchia a 90°, abbassa un braccio e la gamba opposta senza staccare la zona lombare, poi torna. Rinforza il controllo addominale profondo utile per incassare e colpire. Espira durante l'estensione e mantieni la schiena incollata a terra.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--russian-twist-con-manubrio",
    "name": "Russian twist con manubrio",
    "category": "core",
    "description": "Rotazioni del busto da seduti con un manubrio tra le mani.",
    "dose": "3 × 20 tocchi, recupero 45 s",
    "details": "Seduto con busto inclinato indietro e piedi sollevati o appoggiati, ruota il tronco portando il manubrio da un fianco all'altro. Allena gli obliqui coinvolti nei ganci e nei calci circolari. Ruota dalle spalle e dal torace, non solo con le braccia, schiena lunga.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--woodchop-con-manubrio",
    "name": "Woodchop con manubrio",
    "category": "core",
    "description": "Diagonale dall'alto in basso con manubrio a due mani.",
    "dose": "3 × 10 per lato, recupero 60 s",
    "details": "Parti con il manubrio sopra la spalla, porta il peso in diagonale verso il ginocchio opposto ruotando il busto e piegando le gambe, poi risali controllato. Riproduce la catena di rotazione di gomitate e calci. Pivota il piede posteriore e mantieni la schiena neutra.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--uppercut-con-manubri-leggeri",
    "name": "Uppercut con manubri leggeri",
    "category": "velocita",
    "description": "Serie rapide di montanti alternati con manubri da 1-2 kg.",
    "dose": "6 × 20 s, recupero 40 s",
    "details": "In guardia con manubri leggerissimi, esegui montanti alternati rapidi spingendo con gambe e anche, riportando subito le mani al viso. Migliora velocità e resistenza delle spalle nei colpi dal basso. Non bloccare il gomito e non usare carichi elevati per non alterare la tecnica.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--punch-out-a-gancio-con-manubri",
    "name": "Punch-out a gancio con manubri",
    "category": "velocita",
    "description": "Ganci corti e veloci con manubri leggeri e rotazione del busto.",
    "dose": "6 × 20 s, recupero 40 s",
    "details": "Con manubri da 1-2 kg in guardia, alterna ganci corti con gomito all'altezza del pugno, ruotando busto e piede. Rinforza la rapidità della rotazione e la tenuta delle spalle nei ganci. Movimento controllato in chiusura per non sovraccaricare il gomito.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--complesso-manubri-a-circuito",
    "name": "Complesso manubri a circuito",
    "category": "resistenza",
    "description": "Sequenza continua di rematore, clean, press e squat senza posare.",
    "dose": "5 round × 6 per esercizio, 90 s",
    "details": "Con manubri medi esegui di seguito rematore, clean, distensione e squat senza appoggiare i pesi, poi recupera. Simula lo sforzo continuo di un round con il cuore alto. Scegli un carico che consenta tecnica pulita fino all'ultima ripetizione.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--burpee-con-manubri",
    "name": "Burpee con manubri",
    "category": "resistenza",
    "description": "Burpee con piegamento sui manubri e risalita con distensione.",
    "dose": "4 × 40 s, recupero 40 s",
    "details": "Mani sui manubri, porta i piedi indietro, esegui un piegamento, torna in squat e alza i manubri sopra la testa. Allena la capacità di rialzarsi e lavorare sotto fatica come negli ultimi round. Usa manubri esagonali per stabilità e polsi dritti a terra.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--halo-con-manubrio",
    "name": "Halo con manubrio",
    "category": "mobilita",
    "description": "Cerchi del manubrio attorno alla testa per mobilità di spalle.",
    "dose": "3 × 8 per senso, recupero 30 s",
    "details": "In piedi o in ginocchio, tieni un manubrio leggero per le testine e descrivi cerchi lenti attorno alla testa, vicino al collo. Mobilizza spalle e scapole sollecitate da guardia e pugni. Addome contratto e busto fermo, senza compensare inarcando la schiena.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--rotazioni-esterne-con-manubrio",
    "name": "Rotazioni esterne con manubrio",
    "category": "mobilita",
    "description": "Extrarotazione della spalla da sdraiati sul fianco con manubrio.",
    "dose": "3 × 15 per lato, recupero 30 s",
    "details": "Sdraiato sul fianco con gomito a 90° appoggiato al busto, ruota l'avambraccio verso l'alto sollevando un manubrio leggero, poi torna lento. Rinforza la cuffia dei rotatori e previene infortuni da pugni ripetuti. Carico molto leggero e movimento lento, senza dolore.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "manubri--shrug-e-tirata-in-clinch-con-manubri",
    "name": "Shrug e tirata in clinch con manubri",
    "category": "clinch",
    "description": "Scrollate e tirate al petto per rinforzare la presa e il collo.",
    "dose": "4 × 12 ripetizioni, recupero 60 s",
    "details": "Con manubri pesanti ai fianchi esegui una scrollata delle spalle, poi tira i pesi verso il petto con gomiti alti e torna giù controllato. Rinforza trapezi, collo e braccia per controllare la testa dell'avversario nel clinch. Non ruotare le spalle e mantieni il collo neutro.",
    "equipment": "Manubri",
    "tool": "manubri"
  },
  {
    "id": "sbarra--pull-up-esplosive-al-petto",
    "name": "Pull-up esplosive al petto",
    "category": "forza-esplosiva",
    "description": "Trazioni rapide portando il petto alla sbarra con massima velocità.",
    "dose": "5 × 4 ripetizioni, recupero 90 s",
    "details": "Parti da appeso a braccia tese e tira con la massima intenzione fino a toccare la sbarra con il petto, poi scendi controllato. Sviluppa la potenza di tirata utile per strappare la guardia e controllare la testa in clinch. Interrompi la serie quando la velocità cala.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--trazioni-a-presa-larga",
    "name": "Trazioni a presa larga",
    "category": "forza-massimale",
    "description": "Trazioni prone con presa oltre le spalle per enfatizzare il gran dorsale.",
    "dose": "4 × 5 ripetizioni, recupero 2 min",
    "details": "Impugna la sbarra prona con mani più larghe delle spalle, deprimi le scapole e sali fino al mento sopra la sbarra. Rinforza il dorsale che stabilizza la spalla nei pugni e nei gomiti. Evita lo slancio con le gambe e non bloccare il collo in avanti.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--chin-up-presa-supina",
    "name": "Chin-up presa supina",
    "category": "forza-massimale",
    "description": "Trazioni con palmi verso di sé per bicipiti e dorsali.",
    "dose": "4 × 6 ripetizioni, recupero 2 min",
    "details": "Appeso con presa supina alla larghezza delle spalle, tira portando il mento sopra la sbarra e i gomiti verso i fianchi. Rinforza i flessori del gomito usati per tirare e trattenere l'avversario in clinch. Scendi fino a braccia tese senza far cedere la spalla di colpo.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--trazioni-isometriche-a-90",
    "name": "Trazioni isometriche a 90°",
    "category": "clinch",
    "description": "Tenuta statica a metà trazione con gomiti flessi a 90 gradi.",
    "dose": "4 × 20 s, recupero 60 s",
    "details": "Sali in trazione e fermati con i gomiti a 90 gradi, scapole basse e addome contratto, mantenendo la posizione. Simula lo sforzo statico del tirare e trattenere il collo dell'avversario nel plum. Respira regolarmente e scendi lentamente al termine.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--trazioni-con-asciugamano-doppio",
    "name": "Trazioni con asciugamano doppio",
    "category": "clinch",
    "description": "Trazioni impugnando due asciugamani appesi alla sbarra.",
    "dose": "4 × 5 ripetizioni, recupero 90 s",
    "details": "Lancia due asciugamani sulla sbarra, impugnali a pugno chiuso e tira portando le mani all'altezza del mento. Allena la presa da chiusura usata per afferrare collo e braccia in clinch. Controlla che gli asciugamani siano ben fissati e asciutti prima di iniziare.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--appeso-attivo-scapolare",
    "name": "Appeso attivo scapolare",
    "category": "mobilita",
    "description": "Da appeso, deprimi e rilassa le scapole senza piegare i gomiti.",
    "dose": "3 × 10 ripetizioni lente",
    "details": "Appeso a braccia tese, abbassa le spalle lontano dalle orecchie sollevando leggermente il corpo, poi torna rilassato. Migliora controllo e salute della spalla, sollecitata da migliaia di pugni e parate. Mantieni i gomiti tesi e il movimento piccolo e controllato.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--dead-hang-a-tempo",
    "name": "Dead hang a tempo",
    "category": "forza-resistente",
    "description": "Rimani appeso alla sbarra a braccia tese il più a lungo possibile.",
    "dose": "3 × max tempo, recupero 90 s",
    "details": "Afferra la sbarra prona, lascia il corpo disteso con scapole leggermente attive e resisti fino al cedimento della presa. Costruisce la resistenza della presa necessaria a mantenere il clinch nei round lunghi. Annota il tempo e cerca di migliorarlo settimana dopo settimana.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--appeso-a-un-braccio-alternato",
    "name": "Appeso a un braccio alternato",
    "category": "forza-massimale",
    "description": "Sospensione a un braccio alternando la mano ogni pochi secondi.",
    "dose": "3 × 30 s totali, recupero 90 s",
    "details": "Da appeso a due mani, stacca una mano e tieni con l'altra 5 secondi, poi alterna senza toccare terra. Rafforza presa e stabilità della spalla in modo unilaterale, come accade nelle prese asimmetriche del clinch. Attiva la scapola del braccio che lavora per non scaricare sull'articolazione.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--ginocchia-al-petto-con-torsione",
    "name": "Ginocchia al petto con torsione",
    "category": "core",
    "description": "Da appeso porta le ginocchia verso le spalle alternando i lati.",
    "dose": "3 × 12 ripetizioni, recupero 60 s",
    "details": "Appeso a braccia tese, solleva le ginocchia ruotando il bacino verso una spalla, scendi controllato e alterna. Rinforza gli obliqui che generano la rotazione nei calci e nelle ginocchiate. Evita di oscillare: fermati un istante in basso prima della ripetizione successiva.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--tergicristallo-alla-sbarra",
    "name": "Tergicristallo alla sbarra",
    "category": "core",
    "description": "Gambe sollevate a 90° ruotate da un lato all'altro come un tergicristallo.",
    "dose": "3 × 8 per lato, recupero 75 s",
    "details": "Appeso, porta le gambe tese o piegate a 90 gradi e ruotale lentamente da un lato all'altro mantenendo il busto stabile. Sviluppa forza rotazionale e anti-rotazionale del tronco, utile nei calci circolari. Inizia a ginocchia piegate se la versione tesa compromette il controllo.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--ginocchiate-appese-alternate",
    "name": "Ginocchiate appese alternate",
    "category": "velocita",
    "description": "Da appeso esegui ginocchiate rapide alternate verso il petto.",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "Appeso con scapole attive, spingi in modo esplosivo un ginocchio verso il petto e alterna rapidamente le gambe. Allena la velocità di flessione dell'anca della ginocchiata senza l'appoggio dei piedi. Limita l'oscillazione del corpo contraendo l'addome.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--hollow-hold-appeso",
    "name": "Hollow hold appeso",
    "category": "core",
    "description": "Tenuta in posizione a barchetta da appeso alla sbarra.",
    "dose": "4 × 20 s, recupero 45 s",
    "details": "Appeso, deprimi le scapole, retroverti il bacino e porta i piedi leggermente avanti formando una linea curva. Insegna la rigidità del tronco che trasferisce forza dalle gambe ai colpi. Non inarcare la zona lombare e mantieni le gambe unite.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--dip-su-parallele-con-pausa",
    "name": "Dip su parallele con pausa",
    "category": "forza-massimale",
    "description": "Dip con fermo di 2 secondi nel punto più basso.",
    "dose": "4 × 5 ripetizioni, recupero 2 min",
    "details": "Sulle parallele a braccia tese, scendi finché le spalle arrivano all'altezza dei gomiti, tieni 2 secondi e risali spingendo forte. Rinforza tricipiti e pettorali alla base del pugno diretto e della spinta in clinch. Non scendere oltre il range in cui la spalla resta comoda.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--dip-esplosivi",
    "name": "Dip esplosivi",
    "category": "forza-esplosiva",
    "description": "Dip con spinta rapida, cercando di staccare le mani in alto.",
    "dose": "5 × 4 ripetizioni, recupero 90 s",
    "details": "Scendi controllato sulle parallele e spingi con la massima velocità fino a far staccare brevemente le mani, riatterrando a braccia morbide. Migliora l'estensione esplosiva delle braccia per pugni e spinte. Esegui solo se padroneggi i dip classici e atterra sempre in controllo.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--dip-in-appoggio-scapolare",
    "name": "Dip in appoggio scapolare",
    "category": "mobilita",
    "description": "Da appoggio sulle parallele abbassa e alza le spalle a braccia tese.",
    "dose": "3 × 12 ripetizioni lente",
    "details": "In appoggio sulle parallele a braccia tese, lascia salire le spalle verso le orecchie e poi spingi in basso allontanandole. Migliora stabilità e controllo scapolare per spalle più resistenti ai colpi e alle parate. Movimento lento e senza piegare i gomiti.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--knee-raise-sulle-parallele",
    "name": "Knee raise sulle parallele",
    "category": "core",
    "description": "In appoggio sulle parallele solleva le ginocchia al petto.",
    "dose": "3 × 15 ripetizioni, recupero 60 s",
    "details": "In appoggio sulle parallele con spalle basse e braccia tese, porta le ginocchia al petto arrotondando il bacino e scendi lentamente. Rinforza i flessori dell'anca e l'addome usati nelle ginocchiate e nella guardia della gamba. Evita di far affondare le spalle durante la serie.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--circuito-sbarra-e-parallele",
    "name": "Circuito sbarra e parallele",
    "category": "resistenza",
    "description": "Circuito continuo: trazioni, dip e ginocchia al petto senza pausa.",
    "dose": "4 giri × 3 min, recupero 1 min",
    "details": "Alterna 5 trazioni, 8 dip e 10 ginocchia al petto appeso ripetendo il ciclo fino allo scadere dei 3 minuti. Simula la durata di un round mantenendo la parte alta sotto sforzo continuo. Riduci le ripetizioni se la tecnica peggiora.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "sbarra--trazioni-a-ripetizioni-massime-in-1-minuto",
    "name": "Trazioni a ripetizioni massime in 1 minuto",
    "category": "forza-resistente",
    "description": "Il massimo di trazioni pulite in 60 secondi.",
    "dose": "3 × 1 min, recupero 3 min",
    "details": "Esegui trazioni complete in 60 secondi, staccandoti dalla sbarra se necessario ma ripartendo subito. Allena la resistenza muscolare del tirare nelle fasi finali del combattimento. Conta solo ripetizioni con mento sopra la sbarra e braccia tese in basso.",
    "equipment": "Sbarra e parallele",
    "tool": "sbarra"
  },
  {
    "id": "battle-rope--onde-alternate",
    "name": "Onde alternate",
    "category": "resistenza",
    "description": "Onde alternate continue con braccia e spalle, ritmo costante.",
    "dose": "4 × 40 s, recupero 20 s",
    "details": "In mezzo squat atletico, piedi alla larghezza delle spalle, alterna le braccia creando onde regolari fino all'ancoraggio. Costruisce resistenza di spalle per tenere la guardia alta nelle riprese finali. Mantieni il busto fermo e respira in modo ritmico, senza trattenere il fiato.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-doppie",
    "name": "Onde doppie",
    "category": "forza-resistente",
    "description": "Onde simultanee a due braccia per spalle e dorsali.",
    "dose": "5 × 30 s, recupero 30 s",
    "details": "Impugna le corde con presa neutra e muovi entrambe le braccia insieme su e giù, generando onde ampie e sincronizzate. Rinforza spalle e dorsali sotto fatica, utile per pugni ripetuti e clinch prolungato. Spingi dai fianchi e non inarcare la zona lombare.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-in-guardia",
    "name": "Onde in guardia",
    "category": "tecnica",
    "description": "Onde alternate corte restando in posizione di guardia da Muay Thai.",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "Mettiti in guardia ortodossa o mancina, peso distribuito, e produci onde alternate rapide con le mani vicine al viso. Abitua le spalle a lavorare senza abbassare la guardia e mantiene lo stance specifico del combattimento. Il mento resta basso e i piedi non perdono l'appoggio.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-con-passi-laterali",
    "name": "Onde con passi laterali",
    "category": "agilita",
    "description": "Onde alternate spostandosi lateralmente a passi da combattimento.",
    "dose": "6 × 30 s, recupero 30 s",
    "details": "Esegui onde alternate mentre fai due passi a destra e due a sinistra mantenendo lo stance, senza incrociare i piedi. Allena la coordinazione tra lavoro di braccia e footwork, come quando si colpisce in movimento. Mantieni le onde continue anche durante i cambi di direzione.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-con-squat",
    "name": "Onde con squat",
    "category": "forza-resistente",
    "description": "Onde doppie combinate con squat profondi e risalita.",
    "dose": "4 × 30 s, recupero 40 s",
    "details": "Esegui onde doppie mentre scendi in squat e risali, mantenendo il ritmo delle corde per tutto il movimento. Sviluppa la resistenza delle gambe insieme a quella di spalle, utile per calciare forte a fine match. Ginocchia allineate alle punte e schiena neutra in discesa.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-con-affondi-alternati",
    "name": "Onde con affondi alternati",
    "category": "forza-resistente",
    "description": "Onde alternate durante affondi indietro alternati.",
    "dose": "4 × 40 s, recupero 40 s",
    "details": "Mantieni onde alternate e arretra con un piede alla volta in affondo, tornando in piedi senza fermare le corde. Rinforza la stabilità di anche e ginocchia sotto carico metabolico, base per calci e ginocchiate solide. Il ginocchio anteriore non supera troppo la punta del piede.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--slam-con-salto",
    "name": "Slam con salto",
    "category": "forza-esplosiva",
    "description": "Salto verticale seguito da slam violento delle corde a terra.",
    "dose": "5 × 6 ripetizioni, recupero 60 s",
    "details": "Parti in mezzo squat, salta portando le corde sopra la testa e all'atterraggio sbattile a terra con forza massima. Sviluppa la catena di estensione gambe-anche-braccia tipica di ginocchiate e gomitate esplosive. Atterra morbido sugli avampiedi prima di eseguire lo slam.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--slam-laterali",
    "name": "Slam laterali",
    "category": "core",
    "description": "Slam alternati ai lati del corpo con rotazione del busto.",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "Unisci le mani sulle corde, portale sopra una spalla e sbattile a terra sul lato opposto ruotando busto e piedi. Allena la rotazione del tronco che genera potenza in ganci, gomitate e calci circolari. Ruota sul piede posteriore e non torcere la colonna con i piedi bloccati.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--cerchi-esterni",
    "name": "Cerchi esterni",
    "category": "mobilita",
    "description": "Cerchi ampi verso l'esterno con entrambe le braccia.",
    "dose": "3 × 30 s per verso, recupero 30 s",
    "details": "In piedi in mezzo squat, disegna con le corde grandi cerchi verso l'esterno, poi inverti il verso nella serie successiva. Migliora mobilità e controllo della cuffia dei rotatori, proteggendo le spalle dai colpi ripetuti. Movimenti fluidi e ampi, senza scatti nelle articolazioni.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--cerchi-interni",
    "name": "Cerchi interni",
    "category": "mobilita",
    "description": "Cerchi ampi verso l'interno per controllo della spalla.",
    "dose": "3 × 30 s, recupero 30 s",
    "details": "Impugna le corde e traccia cerchi ampi verso l'interno coordinando le due braccia, con il busto stabile. Rinforza la spalla nei piani di movimento usati in clinch e nei colpi circolari. Mantieni le scapole attive e il collo rilassato durante tutto l'esercizio.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--snake-laterale",
    "name": "Snake laterale",
    "category": "core",
    "description": "Onde orizzontali a terra muovendo le corde da lato a lato.",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "In mezzo squat, muovi le corde orizzontalmente a terra come due serpenti, allontanando e avvicinando le mani. Allena la stabilità anti-rotazione del core e l'adduzione delle spalle, utili per controllare l'avversario in clinch. Tieni le corde basse e il busto immobile.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-in-ginocchio",
    "name": "Onde in ginocchio",
    "category": "forza-resistente",
    "description": "Onde alternate in ginocchio per isolare spalle e core.",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "In ginocchio con busto eretto e glutei contratti, esegui onde alternate senza aiuto delle gambe. Isola spalle e core aumentando la resistenza degli arti superiori per pugni e guardia. Non sederti sui talloni e non inarcare la schiena.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-sprint",
    "name": "Onde sprint",
    "category": "velocita",
    "description": "Onde alternate alla massima frequenza per brevi intervalli.",
    "dose": "8 × 10 s, recupero 50 s",
    "details": "In posizione atletica, produci onde alternate piccole e rapidissime alla massima velocità possibile. Sviluppa la frequenza di braccia utile per le combinazioni di pugni veloci. Interrompi la serie se le onde perdono ampiezza o la tecnica si deteriora.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--tabata-battle-rope",
    "name": "Tabata battle rope",
    "category": "resistenza",
    "description": "Protocollo Tabata con onde alternate a intensità massimale.",
    "dose": "8 × 20 s, recupero 10 s",
    "details": "Esegui onde alternate a intensità massima per 20 secondi e riposa 10, per otto cicli consecutivi. Allena la capacità anaerobica necessaria per scambi intensi e finali di ripresa. Riscaldati bene prima e mantieni la postura anche quando la fatica cresce.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--pugni-con-corde",
    "name": "Pugni con corde",
    "category": "tecnica",
    "description": "Simulazione di jab e diretto spingendo le corde in avanti.",
    "dose": "3 riprese da 3 min, 1 min recupero",
    "details": "In guardia, porta le corde in avanti alternando jab e diretto, ruotando anca e piede come nel pugno reale. Collega la tecnica di pugno alla resistenza di spalle sotto un carico leggero e continuo. Torna sempre in guardia dopo ogni colpo, senza lasciare cadere le mani.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--uppercut-con-corde",
    "name": "Uppercut con corde",
    "category": "forza-esplosiva",
    "description": "Spinte esplosive verso l'alto simulando montanti alternati.",
    "dose": "5 × 15 s, recupero 45 s",
    "details": "Da mezzo squat in guardia, solleva le corde con un movimento esplosivo dal basso verso l'alto alternando i lati, spingendo dalle gambe. Rinforza la catena gambe-anca-braccio dei montanti e delle ginocchiate. Il colpo parte dalle gambe e il busto resta compatto.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-con-ginocchiate",
    "name": "Onde con ginocchiate",
    "category": "clinch",
    "description": "Onde alternate intervallate da ginocchiate alternate.",
    "dose": "4 × 40 s, recupero 40 s",
    "details": "Esegui onde alternate e ogni 4 onde porta una ginocchiata frontale alternando le gambe, senza fermare le corde. Simula il lavoro di braccia e ginocchia in clinch con stress metabolico elevato. Spingi l'anca avanti sulla ginocchiata e mantieni l'equilibrio sul piede d'appoggio.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-con-sprawl",
    "name": "Onde con sprawl",
    "category": "agilita",
    "description": "Onde doppie alternate a sprawl rapidi con ritorno in guardia.",
    "dose": "5 × 30 s, recupero 45 s",
    "details": "Esegui onde doppie, lascia le corde, esegui uno sprawl e rialzati riprendendo subito le onde. Allena il recupero rapido della posizione e i cambi di livello sotto fatica. Atterra con le anche basse e rialzati in guardia, non piegato in avanti.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--slam-alternati",
    "name": "Slam alternati",
    "category": "forza-esplosiva",
    "description": "Slam esplosivi a un braccio alla volta con massima forza.",
    "dose": "5 × 20 s, recupero 40 s",
    "details": "In mezzo squat, solleva un braccio sopra la spalla e sbatti la corda a terra con forza, alternando rapidamente i lati. Sviluppa potenza unilaterale e coordinazione destra-sinistra, utile per gomitate dall'alto. Ogni colpo è massimale ma controllato, con core contratto.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--plank-con-onde",
    "name": "Plank con onde",
    "category": "core",
    "description": "In plank alto, onde con un braccio alternando il lato.",
    "dose": "4 × 20 s per lato, recupero 30 s",
    "details": "In posizione di plank su mani, afferra una corda e crea onde con un braccio mentre l'altro sostiene il corpo. Allena la stabilità anti-rotazione del core e della spalla d'appoggio, utile in clinch e ai colpi incassati. Bacino fermo e piedi larghi per maggiore stabilità.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--onde-a-una-mano-in-guardia",
    "name": "Onde a una mano in guardia",
    "category": "clinch",
    "description": "Onde con un braccio mentre l'altro simula il controllo del collo.",
    "dose": "4 × 30 s per lato, recupero 30 s",
    "details": "In guardia, crea onde con una sola corda mentre l'altro braccio resta alto come per afferrare la nuca dell'avversario. Allena resistenza asimmetrica di spalla e postura di clinch con il tronco stabile. Non ruotare il busto per compensare e alterna il lato ogni serie.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "battle-rope--circuito-finale-ripresa",
    "name": "Circuito finale ripresa",
    "category": "resistenza",
    "description": "Circuito di onde, slam e cerchi a simulare l'ultimo minuto.",
    "dose": "3 × 60 s, recupero 2 min",
    "details": "Esegui 20 s di onde alternate, 20 s di slam e 20 s di onde doppie senza pause, simulando l'intensità di fine ripresa. Abitua il fighter a spingere quando la fatica è massima, come negli scambi decisivi. Mantieni la tecnica pulita in ogni fase anche se cala la velocità.",
    "equipment": "Battle rope",
    "tool": "battle-rope"
  },
  {
    "id": "sandbag--bear-hug-squat",
    "name": "Bear hug squat",
    "category": "forza-massimale",
    "description": "Squat tenendo il sandbag abbracciato al petto come in un clinch stretto.",
    "dose": "4 × 6 ripetizioni, recupero 2 min",
    "details": "Abbraccia il sandbag al petto, piedi alla larghezza delle spalle, scendi in squat profondo e risali spingendo dai talloni. Rinforza gambe e la presa a tutto braccio tipica del clinch. Mantieni il busto alto e non lasciare che la sacca scivoli verso il basso.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--bear-hug-march",
    "name": "Bear hug march",
    "category": "clinch",
    "description": "Marcia sul posto con sandbag abbracciato, ginocchia alte a ogni passo.",
    "dose": "3 × 40 s, recupero 60 s",
    "details": "Stringi il sandbag al petto e marcia portando le ginocchia sopra l'anca, alternando le gambe con ritmo costante. Simula il controllo dell'avversario in clinch mentre prepari le ginocchiate. Resta dritto e non inclinarti all'indietro per compensare il peso.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-shouldering-alternato",
    "name": "Sandbag shouldering alternato",
    "category": "forza-esplosiva",
    "description": "Dal pavimento alla spalla con estensione d'anca, alternando i lati.",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Parti con il sandbag a terra tra i piedi, afferralo in presa a orso, estendi l'anca in modo esplosivo e caricalo su una spalla, poi riappoggialo e cambia lato. Sviluppa la potenza d'anca usata in ginocchiate e proiezioni. Solleva con le gambe e la schiena neutra, mai tirando con la sola lombare.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-clean",
    "name": "Sandbag clean",
    "category": "forza-esplosiva",
    "description": "Tirata esplosiva da terra fino alla posizione rack sugli avambracci.",
    "dose": "5 × 4 ripetizioni, recupero 90 s",
    "details": "Afferra le maniglie o il tessuto, porta il sandbag sopra le ginocchia, poi estendi con forza anche e ginocchia e ricevilo sugli avambracci contro il petto. Allena la tripla estensione che trasferisce forza dal terreno ai colpi. Tieni la sacca vicina al corpo durante tutta la tirata.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-rotational-throw",
    "name": "Sandbag rotational throw",
    "category": "forza-esplosiva",
    "description": "Lancio rotazionale laterale del sandbag ruotando su anca e piede posteriore.",
    "dose": "4 × 5 per lato, recupero 90 s",
    "details": "In guardia laterale tieni il sandbag all'altezza dell'anca, carica ruotando verso il lato posteriore e lancialo avanti di lato pivotando sul piede come in un calcio circolare. Trasferisce la rotazione dell'anca a calci e ganci. Usa uno spazio libero e un peso che ti permetta di ruotare veloce.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-lancio-all-indietro",
    "name": "Sandbag lancio all'indietro",
    "category": "forza-esplosiva",
    "description": "Lancio del sandbag sopra la testa all'indietro con estensione totale.",
    "dose": "4 × 4 ripetizioni, recupero 2 min",
    "details": "Parti in mezzo squat con il sandbag tra le gambe, estendi esplosivamente anche e caviglie e lancialo dietro di te sopra la testa. Potenzia la catena posteriore per teep e ginocchiate. Controlla che nessuno sia alle tue spalle e non iperestendere la zona lombare.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-slam",
    "name": "Sandbag slam",
    "category": "resistenza",
    "description": "Sollevamento sopra la testa e schianto a terra ripetuto ad alta intensità.",
    "dose": "4 × 30 s, recupero 30 s",
    "details": "Solleva il sandbag sopra la testa estendendo il corpo, poi schiaccialo a terra flettendo anche e addome con forza, riprendilo e ripeti. Allena il fiato e la potenza ripetuta come in un round intenso. Riprendilo con le gambe piegate e la schiena neutra, mai curvo.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--zercher-squat-con-sandbag",
    "name": "Zercher squat con sandbag",
    "category": "forza-massimale",
    "description": "Squat con sandbag sostenuto negli incavi dei gomiti.",
    "dose": "4 × 5 ripetizioni, recupero 2 min",
    "details": "Con il sandbag nell'incavo dei gomiti, scendi in squat mantenendo il busto eretto e risali spingendo con forza. Sviluppa gambe e parte alta della schiena, utili per spingere e resistere in clinch. Non lasciare che i gomiti cedano e la schiena si arrotondi.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-rotational-lunge",
    "name": "Sandbag rotational lunge",
    "category": "core",
    "description": "Affondo indietro ruotando il busto con il sandbag verso la gamba avanti.",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "Tieni il sandbag al petto, fai un affondo indietro e ruota il busto portando la sacca sopra la coscia anteriore, poi torna al centro e risali. Allena la stabilità del tronco durante la rotazione richiesta da colpi e difese. Il ginocchio avanti resta allineato al piede.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-around-the-world",
    "name": "Sandbag around the world",
    "category": "mobilita",
    "description": "Rotazione circolare del sandbag attorno alla testa mantenendo il core attivo.",
    "dose": "3 × 8 per direzione, recupero 45 s",
    "details": "In piedi con il sandbag tenuto per le maniglie, disegna un cerchio ampio attorno alla testa senza muovere bacino e gambe. Migliora mobilità di spalle e controllo del tronco per la guardia alta. Usa un carico leggero e muoviti lentamente, senza scatti.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-drag-laterale",
    "name": "Sandbag drag laterale",
    "category": "clinch",
    "description": "Trascinamento laterale del sandbag a terra con presa e postura bassa.",
    "dose": "4 × 15 m per lato, recupero 60 s",
    "details": "In posizione bassa, afferra il sandbag a terra e trascinalo lateralmente con passi incrociati e spinta delle gambe. Rinforza la presa e la capacità di tirare l'avversario fuori equilibrio. Mantieni il petto aperto e la schiena piatta durante il tiro.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-sbilanciamento-in-clinch",
    "name": "Sandbag sbilanciamento in clinch",
    "category": "clinch",
    "description": "Ruotare il sandbag da un fianco all'altro simulando lo sbilanciamento in clinch.",
    "dose": "4 × 30 s, recupero 45 s",
    "details": "Abbraccia il sandbag in alto come in una presa al collo e ruotalo con forza da un lato all'altro pivotando sui piedi. Riproduce i cambi di direzione per sbilanciare l'avversario prima di ginocchiate o proiezioni. Gira con anche e piedi, non solo con le braccia.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-knee-strike",
    "name": "Sandbag knee strike",
    "category": "clinch",
    "description": "Ginocchiate alternate al sandbag tenuto in presa alta davanti al corpo.",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "Tieni il sandbag con presa alta davanti al petto, tiralo verso di te e colpiscilo con ginocchiate alternate estendendo l'anca. Allena il tempismo tra tirata delle braccia e ginocchiata come nel clinch reale. Resta sull'avampiede della gamba d'appoggio e controlla l'equilibrio.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-russian-twist",
    "name": "Sandbag Russian twist",
    "category": "core",
    "description": "Rotazioni da seduti passando il sandbag da un fianco all'altro.",
    "dose": "3 × 20 tocchi, recupero 45 s",
    "details": "Seduto con busto inclinato indietro e piedi a terra o sollevati, porta il sandbag da un fianco all'altro ruotando il tronco. Rinforza gli obliqui che generano e assorbono i colpi rotazionali. Mantieni la schiena dritta e ruota il busto, non solo le braccia.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-dead-bug",
    "name": "Sandbag dead bug",
    "category": "core",
    "description": "Dead bug supino tenendo il sandbag sollevato a braccia tese.",
    "dose": "3 × 10 per lato, recupero 45 s",
    "details": "Supino, tieni il sandbag sopra il petto a braccia tese e abbassa alternatamente le gambe estese verso il pavimento senza staccare la lombare. Costruisce un core anti-estensione stabile per incassare e calciare. Espira mentre allunghi la gamba e fermati prima che la schiena si inarchi.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-getup",
    "name": "Sandbag getup",
    "category": "core",
    "description": "Da supino in piedi tenendo il sandbag su una spalla.",
    "dose": "3 × 3 per lato, recupero 90 s",
    "details": "Sdraiato con il sandbag su una spalla, alzati in piedi nel modo più fluido possibile e poi torna giù controllato. Allena stabilità totale e capacità di rialzarsi sotto carico dopo una caduta. Procedi lentamente e usa un peso moderato per proteggere la spalla.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-bent-over-row",
    "name": "Sandbag bent over row",
    "category": "forza-resistente",
    "description": "Rematore a busto flesso con sandbag tirato verso l'ombelico.",
    "dose": "4 × 10 ripetizioni, recupero 75 s",
    "details": "Busto inclinato in avanti a schiena piatta, tira il sandbag verso l'ombelico portando i gomiti indietro e poi abbassalo controllato. Rinforza dorsali e presa utili per tirare e controllare in clinch. Non dare slanci con il busto durante la tirata.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-push-press",
    "name": "Sandbag push press",
    "category": "forza-esplosiva",
    "description": "Spinta sopra la testa aiutata da un rapido piegamento delle gambe.",
    "dose": "4 × 6 ripetizioni, recupero 90 s",
    "details": "Con il sandbag in posizione rack, piega leggermente le ginocchia e spingi in modo esplosivo portandolo sopra la testa a braccia tese. Collega gambe e spalle come nei pugni dritti con trasferimento di peso. Blocca il core in alto senza inarcare la schiena.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-lateral-step-up",
    "name": "Sandbag lateral step-up",
    "category": "agilita",
    "description": "Salita laterale su un rialzo con sandbag in posizione bear hug.",
    "dose": "3 × 8 per lato, recupero 60 s",
    "details": "Con il sandbag abbracciato, sali lateralmente su un box basso spingendo con la gamba vicina e scendi controllato. Migliora forza unilaterale e stabilità per i cambi di direzione sul ring. Il ginocchio non deve crollare verso l'interno.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-shuffle-in-guardia",
    "name": "Sandbag shuffle in guardia",
    "category": "agilita",
    "description": "Spostamenti laterali rapidi in guardia tenendo il sandbag al petto.",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "In guardia bassa con il sandbag stretto al petto, esegui passi laterali veloci senza incrociare i piedi, cambiando direzione al comando. Sviluppa gambe reattive e footwork sotto carico. Resta sull'avampiede e mantieni l'altezza del bacino costante.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "sandbag--sandbag-complex-da-round",
    "name": "Sandbag complex da round",
    "category": "resistenza",
    "description": "Circuito continuo di clean, squat e press per la durata di un round.",
    "dose": "3 × 3 min, recupero 1 min",
    "details": "Esegui senza sosta un clean, uno squat e un press con il sandbag, ripetendo la sequenza a ritmo sostenuto per tutto il round. Riproduce la fatica muscolare e respiratoria di un match. Scegli un carico leggero e interrompi se la tecnica si deteriora.",
    "equipment": "Sandbag",
    "tool": "sandbag"
  },
  {
    "id": "pneumatico--ribaltamento-esplosivo-a-ripetizioni-rapide",
    "name": "Ribaltamento esplosivo a ripetizioni rapide",
    "category": "forza-esplosiva",
    "description": "Ribaltamenti in serie con spinta massima di gambe e anche.",
    "dose": "5 × 4 ribaltamenti, recupero 90 s",
    "details": "Parti accosciato con il petto vicino al pneumatico e le mani sotto il bordo, poi estendi anche e ginocchia di scatto e spingi con le mani. Sviluppa la tripla estensione che dà potenza a ginocchiate e calci. Schiena neutra: tira con le gambe, non con la zona lombare.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--ribaltamento-pesante-a-bassa-ripetizione",
    "name": "Ribaltamento pesante a bassa ripetizione",
    "category": "forza-massimale",
    "description": "Ribaltamenti di un pneumatico pesante a ritmo controllato.",
    "dose": "4 × 3 ribaltamenti, recupero 2 min",
    "details": "Usa un pneumatico impegnativo e cura l'aggancio: mani in supinazione, petto contro la gomma, piedi larghi come le spalle. Costruisce la forza di base che regge il clinch e la stabilità sui colpi. Fermati se la schiena si arrotonda e recupera completamente tra le serie.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--ribaltamento-piu-sprawl",
    "name": "Ribaltamento più sprawl",
    "category": "resistenza",
    "description": "Ribaltamento seguito da uno sprawl difensivo prima del successivo.",
    "dose": "4 × 6 ribaltamenti, recupero 60 s",
    "details": "Ribalta il pneumatico, raggiungilo e fai subito uno sprawl portando le anche a terra, poi rialzati in guardia. Allena il passaggio da sforzo massimale a reazione difensiva, tipico del combattimento. Atterra sullo sprawl con le anche basse e la testa alta, senza crollare sulla schiena.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--ribaltamento-piu-combinazione",
    "name": "Ribaltamento più combinazione",
    "category": "tecnica",
    "description": "Dopo ogni ribaltamento esegui una combinazione a vuoto pulita.",
    "dose": "4 × 5 ribaltamenti, recupero 60 s",
    "details": "Ribalta il pneumatico, torna in guardia e lancia jab-diretto-calcio circolare a vuoto con tecnica completa. Insegna a mantenere precisione e guardia anche sotto fatica muscolare. Non sacrificare la forma dei colpi per velocizzare: guardia alta e rientro del calcio.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--martellata-diagonale-alternata",
    "name": "Martellata diagonale alternata",
    "category": "core",
    "description": "Colpi di mazza in diagonale alternando lato destro e sinistro.",
    "dose": "3 × 10 colpi per lato, recupero 60 s",
    "details": "In posizione semi-laterale, porta la mazza sopra la spalla e colpisci il pneumatico in diagonale ruotando busto e anche, alternando i lati. Rafforza la catena rotatoria che genera potenza nei ganci e nei calci circolari. Fai scorrere la mano alta sul manico e tieni il core contratto all'impatto.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--martellata-verticale-overhead",
    "name": "Martellata verticale overhead",
    "category": "forza-esplosiva",
    "description": "Colpo dall'alto con la mazza al centro del pneumatico.",
    "dose": "4 × 8 colpi, recupero 75 s",
    "details": "Piedi larghi, solleva la mazza sopra la testa e scaricala al centro del pneumatico con anche e addominali, piegando leggermente le ginocchia. Sviluppa la potenza di flessione del tronco utile per gomiti discendenti e ginocchiate. Guarda il punto di impatto e controlla il rimbalzo della mazza.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--martellate-a-tempo-tabata",
    "name": "Martellate a tempo Tabata",
    "category": "resistenza",
    "description": "Intervalli brevi e intensi di martellate continue.",
    "dose": "8 × 20 s lavoro / 10 s pausa",
    "details": "Colpisci il pneumatico alternando i lati senza fermarti per 20 secondi, poi recupera 10 secondi tenendo la mazza a terra. Riproduce la richiesta lattacida degli scambi intensi a fine round. Abbassa la velocità se la tecnica peggiora: la mazza deve sempre restare sotto controllo.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--martellata-a-tre-minuti",
    "name": "Martellata a tre minuti",
    "category": "forza-resistente",
    "description": "Martellate continue a ritmo costante per la durata di un round.",
    "dose": "3 × 3 min, recupero 1 min",
    "details": "Colpisci a ritmo regolare alternando i lati, cambiando la guardia dei piedi ogni 30 secondi. Costruisce la resistenza di spalle, avambracci e core per mantenere i colpi pesanti per tutto il round. Respira a ogni colpo e mantieni la presa salda ma non contratta.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--martellata-dalla-guardia",
    "name": "Martellata dalla guardia",
    "category": "tecnica",
    "description": "Colpo di mazza laterale partendo dalla posizione di guardia.",
    "dose": "3 × 8 colpi per lato, recupero 60 s",
    "details": "Parti in guardia Muay Thai, ruota il piede posteriore e colpisci il pneumatico lateralmente come in un gancio largo, poi torna in guardia. Collega la rotazione dell'anca alla trasmissione di forza tipica dei colpi circolari. Ritorna sempre in posizione bilanciata prima del colpo successivo.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--martellata-in-ginocchio",
    "name": "Martellata in ginocchio",
    "category": "core",
    "description": "Martellate da posizione inginocchiata per isolare il tronco.",
    "dose": "3 × 10 colpi per lato, recupero 60 s",
    "details": "Inginocchiati davanti al pneumatico su un tappetino e colpisci in diagonale usando solo la rotazione del busto. Elimina l'aiuto delle gambe e rafforza obliqui e stabilità del core per il clinch e i colpi. Mantieni il busto eretto e non iperestendere la zona lombare.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--salti-dentro-e-fuori-dal-pneumatico",
    "name": "Salti dentro e fuori dal pneumatico",
    "category": "agilita",
    "description": "Salti rapidi a piedi uniti dentro e fuori dal pneumatico.",
    "dose": "4 × 20 s, recupero 40 s",
    "details": "Posiziona il pneumatico a terra e salta a piedi uniti dentro il foro e poi fuori, in avanti, lateralmente e indietro. Migliora reattività dei piedi e cambi di direzione utili negli spostamenti sul ring. Atterra sugli avampiedi con ginocchia morbide e tocchi rapidi al suolo.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--box-jump-sul-pneumatico",
    "name": "Box jump sul pneumatico",
    "category": "forza-esplosiva",
    "description": "Salto a piedi uniti sopra il bordo del pneumatico.",
    "dose": "4 × 6 salti, recupero 75 s",
    "details": "Da in piedi, carica con un piegamento rapido e salta atterrando sul bordo o al centro di un pneumatico pesante, poi scendi camminando. Sviluppa l'esplosività delle gambe per entrate, ginocchiate in salto e calci. Atterra stabile con le ginocchia allineate alle punte dei piedi.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--step-up-sul-pneumatico-con-ginocchiata",
    "name": "Step-up sul pneumatico con ginocchiata",
    "category": "forza-resistente",
    "description": "Salita sul pneumatico chiudendo con ginocchiata in alto.",
    "dose": "3 × 10 per gamba, recupero 60 s",
    "details": "Sali sul bordo del pneumatico con una gamba spingendo col tallone e porta l'altra in ginocchiata alta, tirando le braccia verso il basso. Rafforza la gamba d'appoggio e la catena della ginocchiata. Controlla la discesa e tieni il bacino stabile senza ruotare.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--ginocchiate-sul-pneumatico-verticale",
    "name": "Ginocchiate sul pneumatico verticale",
    "category": "clinch",
    "description": "Ginocchiate su un pneumatico tenuto in verticale come avversario.",
    "dose": "4 × 30 s, recupero 45 s",
    "details": "Tieni un pneumatico leggero in verticale contro un muro o un compagno, aggancialo con presa da clinch e alterna ginocchiate dritte con spinta delle anche. Allena il ritmo e la potenza delle ginocchiate in presa. Resta alto sulle punte e tira il bersaglio verso di te mentre colpisci.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--spinta-del-pneumatico-in-clinch",
    "name": "Spinta del pneumatico in clinch",
    "category": "clinch",
    "description": "Spingi il pneumatico sul pavimento in posizione di clinch.",
    "dose": "4 × 15 m, recupero 60 s",
    "details": "Abbraccia il pneumatico in piedi, abbassa il baricentro e spingilo a piccoli passi come se portassi l'avversario alle corde. Sviluppa la forza delle gambe e della postura necessaria per dominare il clinch. Tieni la schiena dritta, la testa alta e i passi corti e potenti.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--trascinamento-del-pneumatico-all-indietro",
    "name": "Trascinamento del pneumatico all'indietro",
    "category": "forza-resistente",
    "description": "Trascina il pneumatico con una corda camminando all'indietro.",
    "dose": "4 × 20 m, recupero 60 s",
    "details": "Lega una corda al pneumatico, impugnala con le braccia tese e cammina all'indietro a passi brevi spingendo con l'avampiede. Rafforza i quadricipiti e le ginocchia, utili per mantenere la posizione e i teep. Mantieni anche basse e busto leggermente inclinato in avanti.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--sprint-trainando-il-pneumatico",
    "name": "Sprint trainando il pneumatico",
    "category": "velocita",
    "description": "Sprint in avanti con il pneumatico legato in vita.",
    "dose": "6 × 15 m, recupero 90 s",
    "details": "Fissa il pneumatico a una cintura con una corda e sprinta in avanti con spinta potente delle braccia e busto inclinato. Migliora la potenza di accelerazione per entrare a distanza di colpo. Usa un pneumatico leggero per non perdere la meccanica di corsa.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--tiro-della-corda-col-pneumatico",
    "name": "Tiro della corda col pneumatico",
    "category": "forza-resistente",
    "description": "Tira a mano il pneumatico con una corda da fermo.",
    "dose": "4 × 15 m, recupero 60 s",
    "details": "In semi-squat, tira la corda legata al pneumatico mano dopo mano finché arriva ai tuoi piedi. Rafforza presa, dorsali e bicipiti, fondamentali per controllare la testa dell'avversario nel clinch. Non arrotondare la schiena e tieni le gambe ben piantate.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--calcio-basso-sul-pneumatico",
    "name": "Calcio basso sul pneumatico",
    "category": "tecnica",
    "description": "Calci bassi controllati sul pneumatico tenuto in verticale.",
    "dose": "3 × 10 per gamba, recupero 60 s",
    "details": "Fissa un pneumatico in verticale e colpisci con la tibia in calcio basso, ruotando completamente il piede d'appoggio e l'anca. Rinforza il condizionamento e la meccanica del calcio basso. Inizia con intensità moderata e proteggi la tibia con un paratibia se sei principiante.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--teep-sul-pneumatico",
    "name": "Teep sul pneumatico",
    "category": "velocita",
    "description": "Teep rapidi e secchi contro il pneumatico appeso o verticale.",
    "dose": "4 × 10 per gamba, recupero 45 s",
    "details": "Da guardia, solleva il ginocchio e spingi il pneumatico con la pianta del piede estendendo l'anca, poi riporta subito la gamba in guardia. Allena velocità e precisione del teep per gestire la distanza. Concentrati sul rientro rapido e non sbilanciarti in avanti.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--plank-con-mani-sul-pneumatico",
    "name": "Plank con mani sul pneumatico",
    "category": "core",
    "description": "Plank con mani sul bordo del pneumatico e tocco alternato.",
    "dose": "3 × 40 s, recupero 30 s",
    "details": "Appoggia le mani sul bordo del pneumatico in posizione di plank e tocca alternativamente la spalla opposta senza ruotare il bacino. Rafforza la stabilità del tronco che protegge dai colpi al corpo. Allinea testa, schiena e talloni e respira regolarmente.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "pneumatico--affondi-laterali-con-salto-sul-pneumatico",
    "name": "Affondi laterali con salto sul pneumatico",
    "category": "mobilita",
    "description": "Affondi laterali dinamici scavalcando il bordo del pneumatico.",
    "dose": "3 × 8 per lato, recupero 45 s",
    "details": "In piedi accanto al pneumatico, porta una gamba sopra il bordo in affondo laterale profondo, poi scavalca e ripeti dall'altro lato. Migliora la mobilità delle anche e degli adduttori per calci più alti. Scendi lentamente e tieni il ginocchio allineato alla punta del piede.",
    "equipment": "Pneumatico e mazza",
    "tool": "pneumatico"
  },
  {
    "id": "coni-scaletta--scaletta-ickey-shuffle",
    "name": "Scaletta Ickey Shuffle",
    "category": "agilita",
    "description": "Schema dentro-dentro-fuori alternato lungo la scaletta.",
    "dose": "4 passaggi, recupero 30 s",
    "details": "Avanza lungo la scaletta con due appoggi dentro e uno fuori, alternando lato, sugli avampiedi e con la guardia alta. Allena il ritmo di piedi necessario per cambiare angolo senza perdere equilibrio. Mantieni il busto stabile e lo sguardo avanti, non sui piedi.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--scaletta-in-guardia-avanti-indietro",
    "name": "Scaletta in guardia avanti-indietro",
    "category": "agilita",
    "description": "Entra ed esci dai quadrati in posizione di guardia, avanti e indietro.",
    "dose": "4 passaggi, recupero 30 s",
    "details": "In guardia ortodossa, avanza di un quadrato con passo-scivolato e arretra di mezzo, percorrendo tutta la scaletta. Riproduce l'entrata e l'uscita dalla distanza di colpo tipica del ring. Piedi mai incrociati, peso centrato e mani al volto per tutto il tempo.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--scaletta-con-switch-kick",
    "name": "Scaletta con switch kick",
    "category": "velocita",
    "description": "Due appoggi per quadrato, poi switch e calcio circolare a fine scala.",
    "dose": "5 passaggi per lato, recupero 40 s",
    "details": "Percorri la scaletta con due appoggi rapidi per quadrato restando in guardia, poi all'uscita esegui uno switch e un calcio circolare al sacco o a vuoto. Collega la rapidità di piedi a un colpo potente, come quando si chiude una sequenza nel ring. Il calcio deve partire senza pause dopo l'ultimo appoggio.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--scaletta-carioca",
    "name": "Scaletta Carioca",
    "category": "agilita",
    "description": "Spostamento laterale incrociando i piedi davanti e dietro.",
    "dose": "4 passaggi per lato, recupero 30 s",
    "details": "Muoviti lateralmente lungo la scaletta incrociando il piede davanti e poi dietro, ruotando le anche in modo controllato e restando sugli avampiedi. Migliora la mobilità delle anche e la coordinazione utili per le rotazioni dei calci. Spalle rivolte avanti, sono le anche a lavorare.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--scaletta-pivot-e-jab-cross",
    "name": "Scaletta pivot e jab-cross",
    "category": "tecnica",
    "description": "Ogni due quadrati un pivot di 90° seguito da jab-cross.",
    "dose": "4 passaggi, recupero 40 s",
    "details": "Avanza in guardia nella scaletta e ogni due quadrati esegui un pivot sul piede anteriore di 90°, chiudendo con jab-cross. Insegna a cambiare angolo dopo l'attacco per uscire dalla linea dell'avversario. Ruota sull'avampiede, mai sul tallone, e ritrova subito la guardia.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--quadrato-di-coni-con-colpi",
    "name": "Quadrato di coni con colpi",
    "category": "velocita",
    "description": "Sprint tra 4 coni e combinazione di pugni a ogni vertice.",
    "dose": "4 giri, recupero 45 s",
    "details": "Disponi quattro coni a quadrato di 4 m; corri da un cono all'altro e a ogni vertice esegui una combinazione da 3 colpi in guardia. Simula il ritmo di spostamento-attacco di un round, abbinando velocità di piedi ed esplosività delle mani. Arriva al cono già in posizione, senza passi di assestamento.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--angoli-a-v-con-calcio",
    "name": "Angoli a V con calcio",
    "category": "agilita",
    "description": "Uscita diagonale a un cono e calcio circolare al rientro.",
    "dose": "3 × 6 ripetizioni, recupero 45 s",
    "details": "Posiziona due coni a V a 2-3 m davanti a te; scatta in diagonale verso uno, torna al centro e calcia di circolare dal lato opposto, poi alterna. Allena l'uscita d'angolo e il contrattacco immediato, fondamentale contro un avversario che avanza. Mantieni il baricentro basso nei cambi di direzione.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--reazione-al-cono-chiamato",
    "name": "Reazione al cono chiamato",
    "category": "agilita",
    "description": "Il partner chiama un colore e l'atleta scatta al cono giusto.",
    "dose": "5 × 20 s, recupero 40 s",
    "details": "Disponi 4-5 coni colorati attorno all'atleta in guardia; il partner chiama un colore e l'atleta scatta, tocca il cono e torna al centro. Sviluppa il tempo di reazione e la decisione rapida che servono per rispondere agli attacchi. Resta sugli avampiedi pronto a partire in ogni direzione.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--ostacoli-frontali-con-ginocchiata",
    "name": "Ostacoli frontali con ginocchiata",
    "category": "forza-esplosiva",
    "description": "Salti a piedi uniti sugli ostacoli e ginocchiata all'arrivo.",
    "dose": "4 serie da 5 ostacoli, recupero 60 s",
    "details": "Salta a piedi uniti una fila di 5 ostacoli bassi con contatti brevi e reattivi, poi all'arrivo esegui una ginocchiata esplosiva tirando le mani verso il basso. Sviluppa la reattività delle caviglie e la potenza delle anche usate nel clinch. Atterra morbido e rimbalza subito, senza fermarti tra un ostacolo e l'altro.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--ostacoli-monopodalici",
    "name": "Ostacoli monopodalici",
    "category": "forza-esplosiva",
    "description": "Saltelli su un piede solo oltre gli ostacoli bassi.",
    "dose": "3 × 5 ostacoli per gamba, recupero 60 s",
    "details": "Supera una fila di ostacoli bassi saltando sempre sullo stesso piede, con le braccia in guardia e il ginocchio stabile in atterraggio. Rinforza la gamba d'appoggio, decisiva per stabilità e potenza nei calci. Controlla l'atterraggio: ginocchio allineato al piede, mai verso l'interno.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--ostacoli-in-guardia-laterale-con-step",
    "name": "Ostacoli in guardia laterale con step",
    "category": "agilita",
    "description": "Passi laterali sopra gli ostacoli senza perdere la guardia.",
    "dose": "4 passaggi per lato, recupero 30 s",
    "details": "Disponi gli ostacoli in fila e superali lateralmente con passo-scivolato alto, restando in guardia e senza incrociare i piedi. Migliora il controllo degli spostamenti laterali per girare attorno all'avversario. Ginocchia alte ma busto fermo, le mani non devono scendere.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--zig-zag-di-coni-con-teep",
    "name": "Zig-zag di coni con teep",
    "category": "tecnica",
    "description": "Spostamento a zig-zag tra i coni con teep a ogni cono.",
    "dose": "4 passaggi, recupero 40 s",
    "details": "Disponi 6 coni a zig-zag a 2 m di distanza; arriva a ogni cono in guardia ed esegui un teep con la gamba anteriore prima di ripartire. Allena a gestire la distanza con il teep mentre ci si muove, come per fermare un avversario aggressivo. Spingi con l'anca e richiama subito la gamba.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--scaletta-con-sprawl",
    "name": "Scaletta con sprawl",
    "category": "forza-resistente",
    "description": "Due appoggi per quadrato e sprawl a comando del partner.",
    "dose": "4 passaggi, recupero 45 s",
    "details": "Percorri la scaletta con passi rapidi in guardia; quando il partner batte le mani esegui uno sprawl, rialzati e prosegui. Abitua a reagire a un tentativo di presa o a un cambio di livello mantenendo il ritmo. Rialzati direttamente in guardia, senza appoggiare le ginocchia.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--scaletta-shuffle-dentro-fuori-resistenza",
    "name": "Scaletta Shuffle dentro-fuori resistenza",
    "category": "resistenza",
    "description": "Serie lunghe di passi dentro-fuori a ritmo da round.",
    "dose": "3 × 2 min, recupero 1 min",
    "details": "Percorri avanti e indietro la scaletta con passi dentro-fuori continui per tutta la durata, guardia alta e respirazione regolare. Costruisce la resistenza delle gambe a restare leggere fino alla fine del round. Mantieni lo stesso ritmo dall'inizio alla fine, senza appesantire l'appoggio.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  },
  {
    "id": "coni-scaletta--cerchio-di-coni-in-clinch",
    "name": "Cerchio di coni in clinch",
    "category": "clinch",
    "description": "Coppia in clinch che si sposta attorno a un cerchio di coni.",
    "dose": "4 × 30 s, recupero 45 s",
    "details": "Disponi i coni in cerchio di circa 3 m; in clinch con un partner, guida lo spostamento attorno al cerchio ruotando e sbilanciando senza uscire dai coni. Allena il controllo del corpo e i passi corti necessari per dominare il clinch. Gomiti stretti, testa alta e passi brevi sotto il baricentro.",
    "equipment": "Coni e scaletta",
    "tool": "coni-scaletta"
  }
];

export const exercisesByCategory = (id: CategoryId): Exercise[] =>
  exercises.filter((e) => e.category === id);
