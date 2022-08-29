export interface Putovanje {
    id: number;
    name: string;
    lokacija: string;
    price: number;
    description: string;
    udaljenost: string;
    vreme_putovanja: string;
    prevoz: string;
}

export const putovanja = [
    {
        id: 1,
        name: 'Kapri',
        vreme_putovanja: '10 dana',
        prevoz: 'Avion',
        lokacija: 'Italija',
        price: 400,
        udaljenost: '900km od Beograda',
        description: 'Kapri je italijansko ostrvo. Na ostrvu se nalazi i grad istoga imena. Nalazi se na južnoj strani Napuljskog zaliva kraj Sorentinskog poluostrva. Kapri je još od rimskih vremena bio čuven po svojim lepotama. Ostrvo ima 10,4 kvadratna kilometra i 14,143[1] stanovnika. Na ostrvu se nalazi Kapri i naselje Anakapri. Od druge polovine 19. veka Kapri je postao popularno odredište evropskih umetnika, književnika i drugih slavnih ličnosti.'
    },
    {
        id: 2,
        name: 'Algarve',
        vreme_putovanja: '15 dana',
        prevoz: 'Avion',
        lokacija: 'Portugal',
        price: 500,
        udaljenost: '3180km od Beograda',
        description: 'Algarve (port. Algarve, Região do Algarve) je najjužniji region u Portugalu. Ima površinu od 4.960 km² i oko 400.000 stanovnika. Najveći i glavni grad je Faro. Južna obala Algarvea je jedna od glavnih turističkih regija Evrope.'
    },
    {
        id: 3,
        name: 'Ibica',
        vreme_putovanja: '10 dana',
        prevoz: 'Avion',
        lokacija: 'Spanija',
        price: 600,
        udaljenost: '2550km od Beograda',
        description: 'Ibiza (nepravilno Ibica; šp. Ibiza, kat. Eivissa) je jedno od Balearskih ostrva koja se nalaze u Mediteranu, a pripadaju Španiji. Ona je jedno od dva Ostrva borova (drugo je Formentera). Veći gradovi su Ibiza, Santa Eulalija del Rio i Sant Antoni de Portmani.  Kao deo svetske baštine, staro jezgro grada Ibize je pod zaštitom Uneska.'

       
    },
    {
        id: 4,
        name: 'Malta',
        lokacija: 'Republika Malta',
        vreme_putovanja: '14 dana',
        prevoz: 'Avion',
        price: 700,
        udaljenost: '1530km od Beograda',
        description: 'Malta (malt. Malta, engl. Malta), ili zvanično Republika Malta (malt. Repubblika ta Malta, engl. Republic of Malta), je mala i gusto naseljena ostrvska država koju sačinjava arhipelag usred Sredozemnog mora na jugu Evrope. Mada Malta geofizički čini deo severne Afrike — leži na afričkoj kontinentalnoj ploči, pravo na jug od Sicilije, istočno od Tunisa i severno od Libije — ova zemlja se geopolitički nalazi u južnoj Evropi. Republika na istoimenom ostrvu, u Sredozemnom moru. Zauzima važan geografski položaj na važnom putu ka središnjem delu Sicilije i 200 nautičkih milja od severnoafričke obale.'
    },
    
    {
        id: 5,
        name: 'Azurna obala',
        lokacija: 'Francuska',
        vreme_putovanja: '10 dana',
        prevoz: 'Autobus',
        price: 400,
        udaljenost: '1430km od Beograda',
        description: 'Азурна обала или Француска ривијера (франц. Côte d Azur) je deo francuske obale Sredozemnog mora. Ime je kovanica pisca Stefana Liežeara, koji je 1887. izdao knjigu pod naslovom „Azurna obala“.'
    },
    
    {
        id: 6,
        name: 'Sorento',
        lokacija: 'Italija',
        vreme_putovanja: '12 dana',
        prevoz: 'Avion',
        price: 450,
        udaljenost: '1520km od Beograda',
        description: 'rad Sorento nalazi se u južnom delu Italije, na 30 km južno od Napulja. Grad je nalazi na istoimenom Sorentinskom poluostrvu, koje razdvaja Napuljski i Salernski zaliv. Grad je najveće i najvažnije naselje poluostrva, smešteno na severnoj strani, na Napuljskom zalivu, sa divnim poglednom na Napulj i obližnji Vezuv. Iznad grada strmo se izdiže planina Lataro.'
    },
    
    {
        id: 7,
        name: 'Santorini',
        lokacija: 'Grcka',
        vreme_putovanja: '10 dana',
        prevoz: 'Autobus',
        price: 350,
        udaljenost: '1400km od Beograda',
        description: 'Santorini ili Tira (grč. Σαντορίνη od ital. Santa Irene, grč. Θήρα) je jedno ostrva u grupaciji Kiklada u Grčkoj. Upravno ostrvo pripada okrugu Santorini u okviru Periferiji Južni Egej. Santorini sa okolnim ostrvima čini jednu opštinu u okviru ovog okruga, ukupne površine 90,6 km². Ova opština uključuje i tzv. Manja ostrva Santorinija - ostrvo Tirazija i nenaseljena ostrva: Nea Kameni, Palaja Kameni, Aspronizi i Kristijani.'
    },
   
    {
        id: 8,
        name: 'Korzika',
        lokacija: 'Francuska',
        vreme_putovanja: '12 dana',
        prevoz: 'Avion',
        price: 700,
        udaljenost: '1350km od Beograda',
        description: 'Korzika (franc. Corse, korz. i ital. Corsica) je mediteransko ostrvo koje pripada Francuskoj. Nalazi se zapadno od Italije, jugoistočno od kopnene Francuske i severno od italijanskog ostrva Sardinije. Planine čije jednu trećinu ostrva, formirajući jedan planinski lanac.'
    },
    
    {
        id: 9,
        name: 'Krf',
        lokacija: 'Grcka',
        vreme_putovanja: '14 dana',
        prevoz: 'Autobus',
        price: 500,
        udaljenost: '950km od Beograda',
        description: 'Krf (grč. Κέρκυρα [Kérkyra] — Kerkira, antgrč. Κόρκυρα [Kórkyra] — Korkira), drugo po veličini, od sedam većih Jonskih ostrva, a ujedno i jedno od najlepših grčkih ostrva.[1] Krf leži u Jonskom moru, koje je deo Sredozemnog mora, a sjeverno se spaja sa Jadranskim. Takvim položajem obezbjeđuje sebi mjesto najsjevernijeg značajnijeg ostrva Grčke.'
    },
    
    {
        id: 10,
        name: 'Hvar',
        lokacija: 'Hrvatska',
        vreme_putovanja: '10 dana',
        prevoz: 'Autobus',
        price: 350,
        udaljenost: '650km od Beograda',
        description: 'Nalazi se u Splitsko-dalmatinskoj županiji, u skupu ostrva ove županije. Severno od njega se nalazi ostrvo Brač, a južno od njega se nalaze Šćedro (od kojeg ga deli Šćedorski kanal), Vis (prema jugozapadu), Paklinska ostrva, Korčula i poluostrvo Pelješac.'
    },
    
    {
        id: 11,
        name: 'Bali',
        lokacija: 'Indonezija',
        vreme_putovanja: '10 dana',
        prevoz: 'Avion',
        price: 650,
        udaljenost: '12000km od Beograda',
        description: 'Bali je indonežansko ostrvo koje se nalazi između ostrva Java na zapadu i Lomboka na istoku. On je jedna od 33 provincije Indonezije sa provincijskim središtem Denpasarom (491.500 stanovnika 2002) koji se nalazi na jugu ostrva. Na ostrvu većinski deo stanovništva čine indonežanski hinduisti koji inače predstavljaju manjinu u državi. Bali danas predstavljaju popularno turističko odredište, lokalno stanovništvo živi i radi od turizma, pored poljoprivrede, na Baliju je prisutan veliki broj hotela i letovališta, jer ostrvo posete milioni turista godišnje .'
    },
    
    {
        id: 13,
        name: 'Vijetnam',
        lokacija:'Vijetnam',
        vreme_putovanja: '14 dana',
        prevoz: 'Avion',
        price: 700,
        udaljenost: '9000km od Beograda',
        description: 'Vijetnam (vij. Việt Nam), ili zvanično Socijalistička Republika Vijetnam (vij. Cộng hòa xã hội chủ nghĩa Việt Nam (O ovoj zvučnoj datoteci listen)) najistočnija je zemlja Indokineskog poluostrva u Jugoistočnoj Aziji. Graniči se sa Kinom na severu, Laosom na zapadu, Kambodžom na jugozapadu, dok je na istoku Južno kinesko more. Broj stanovnika Vijetnama je 90 miliona, i po tome je Vijetnam trinaesta najmnogoljudnija zemlja na svetu.'
    },
    
    {
        id: 14,
        name: 'Novi Juzni Vels',
        lokacija: 'Australija',
        vreme_putovanja: '20 dana',
        prevoz: 'Avion',
        price: 1000,
        udaljenost: '18000km od Beograda',
        description: 'Novi Južni Vels  NJV (engl. New South Wales  NSW) je sa 6.817.100 stanovnika, najmnogoljudnija savezna država Australije. Nalazi se severno od Viktorije i južno od Kvinslenda. Glavni i najveći grad je Sidnej sa 4.254.900 stanovnika.'
    }
];