const RP_DATA = {
    "civils": [
        "Jean Moulin",  
        "Inconnu X"
    ],
    "agents": [
        "Cadet Vasquez (M-21)", 
        "Cadet Keller (M-15)", 
        "Cadet Davidson (M-22)", 
        "Cadet Wilson (M-25)", 
        "Cadet Walker (M-18)", 
        "Cadet Steel (M-13)", 
        "Sergent Mcdonuts (M-05)", 
        "Lieutenant Winslow (M-02)", 
        "Lieutenant Winslow (M-03)", 
        "Capitaine Miller (M-01)"
    ],
    "infractions": [
        // --- CODE CIVIL - INFRACTIONS MINEURES ---
        { "nom": "Trouble à l'ordre public (Art. 6)", "amende": 200, "peine": 5 },
        { "nom": "Trouble à l'ordre public [Récidive x1]", "amende": 400, "peine": 10 },
        { "nom": "Trouble à l'ordre public [Récidive x2]", "amende": 600, "peine": 15 },
        
        { "nom": "Conduite dangereuse (Art. 7)", "amende": 1000, "peine": 10 },
        { "nom": "Conduite dangereuse [Récidive x1]", "amende": 2000, "peine": 20 },
        { "nom": "Conduite dangereuse [Récidive x2]", "amende": 3000, "peine": 30 },

        // --- CODE CIVIL - INFRACTIONS MAJEURES ---
        { "nom": "Vol de bien d'autrui (Art. 8)", "amende": 2500, "peine": 20 },
        { "nom": "Vol de bien d'autrui [Récidive x1]", "amende": 5000, "peine": 40 },
        
        { "nom": "Refus d'obtempérer (Art. 9)", "amende": 3000, "peine": 30 },
        { "nom": "Refus d'obtempérer [Récidive x1]", "amende": 6000, "peine": 60 },

        { "nom": "Port d'arme illégal : Beretta (Art. 10)", "amende": 5000, "peine": 45 },
        { "nom": "Port d'arme illégal : Glock (Art. 10)", "amende": 9000, "peine": 50 },
        { "nom": "Port d'arme illégal : Uzi / Tec-9 (Art. 10)", "amende": 11000, "peine": 60 },
        { "nom": "Port d'arme illégal : AK-47 (Art. 10)", "amende": 15000, "peine": 80 },

        // --- CODE CIVIL - CRIMES GRAVES ---
        { "nom": "Agression physique (Art. 11)", "amende": 35000, "peine": 120 },
        { "nom": "Agression physique [Récidive x1]", "amende": 70000, "peine": 240 },

        { "nom": "Braquage : ATM (Art. 12)", "amende": 2000, "peine": 30 },
        { "nom": "Braquage : Supérette (Art. 12)", "amende": 2000, "peine": 40 },
        { "nom": "Braquage : Fleeca (Art. 12)", "amende": 10000, "peine": 90 },

        // --- STANDARDS GTA RP (COMPLÉMENTS) ---
        { "nom": "Outrage à agent", "amende": 2500, "peine": 15 },
        { "nom": "Outrage à agent [Récidive x1]", "amende": 5000, "peine": 30 },
        
        { "nom": "Possession de stupéfiants", "amende": 1500, "peine": 15 },
        { "nom": "Possession de stupéfiants [Récidive x1]", "amende": 3000, "peine": 30 },
        
        { "nom": "Vente de stupéfiants (Trafic)", "amende": 8000, "peine": 60 },
        { "nom": "Vente de stupéfiants [Récidive x1]", "amende": 16000, "peine": 120 },

        { "nom": "Meurtre sur civil", "amende": 40000, "peine": 110 },
        { "nom": "Meurtre sur agent", "amende": 50000, "peine": 120 }
    ]
};