var PPE3_Mission_1;
(function (PPE3_Mission_1) {
    var mainPPE3_Mission_1 = /** @class */ (function () {
        // Constructeur
        function mainPPE3_Mission_1() {
            var mythis = this;
            mythis.page = new Page({ id: "PagePPE3_Mission_1", HeaderFix: true });
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }
        // Methodes
        // ------------- //
        // Bouton Header //
        // ------------- //
        mainPPE3_Mission_1.prototype.generateBoutonHeader = function () {
            var mythis = this;
            // bouton Retour
            mythis.page.Ajouteheader(new Bouton({
                click: function (e) {
                    window.history.back();
                    e();
                },
                typeBouton: EnumBoutonType.textUnique,
                texte: "Retour",
                title: "Retour"
            }));
        };
        // ----- //
        // Corps //
        // ----- //
        mainPPE3_Mission_1.prototype.GenerateContainte = function () {
            var mythis = this;
            var divcontenu = new DivConteneur({ Titre: "PPE3 - Mission 1 MAINTENANCE EVOLUTIVE D’UNE APPLICATION DE GESTION POUR LE MUSEE D’ART DES CELESTINS." });
            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            var textObjectif = "Faire la maintenance évolutive d’un logiciel de gestion de musée.";
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));
            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Descriptif  :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Pour ce projet, il a fallu compléter des classes métier, fonction et procédure fourni, et créer une classe technique contenant des prédicats utiles pour l’utilisation des données. Le tout doit pouvoir fonction avec les données du jeu de test fourni.",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "Pour finir, il a fallu créer un application Windows forme et console pour montre que les classes métiers et technique sont dissocier de l’affichage.",
                type: EnumTypeLabel.Standard
            }));
            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Exemple de classe métier compléter : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                style: EnumStyleHighLightCode.visualStudio2015dark,
                Langage: EnumLangageHighLightCode.Csharp,
                text: "#region Classe MUSEE\n" +
                    "    public class Musee\n" +
                    "    {\n" +
                    "        // Attributs\n" +
                    "        private string monMusee;                // Nom du musée\n" +
                    "        private List<Artiste> lesArtistes;      // Liste des artistes\n" +
                    "        private List<Salle> lesSalles;          // Liste des salles\n" +
                    "        private List<Oeuvre> lesOeuvres;        // Liste des oeuvres;\n" +
                    "\n" +
                    "        // Constructeur : création d'un musée\n" +
                    "        public Musee(string nom)\n" +
                    "        {\n" +
                    "            this.monMusee = nom;\n" +
                    "            this.lesArtistes = new List<Artiste>();\n" +
                    "            this.lesOeuvres = new List<Oeuvre>();\n" +
                    "            this.lesSalles = new List<Salle>();\n" +
                    "        }\n" +
                    "\n" +
                    "        // Création d'une SALLE\n" +
                    "        public string CreerSalle(Salle s)\n" +
                    "        {\n" +
                    "            this.lesSalles.Add(new Salle(s));\n" +
                    "            return string.Format(\"*** Creation de la Salle {0} ***\",s.GetNomSalle());\n" +
                    "        }\n" +
                    "\n" +
                    "        // Création d'un ARTISTE\n" +
                    "        public string CreerArtiste(Artiste a)\n" +
                    "        {\n" +
                    "            this.lesArtistes.Add(new Artiste(a));\n" +
                    "            return string.Format(\"*** Creation de l'artiste {0} ***\", a.GetNomArtiste());\n" +
                    "        }\n" +
                    "\n" +
                    "        // Création d'une OEUVRE avec un ARTISTE et une SALLE\n" +
                    "        // (+ surcharge : OEUVRE avec l'ARTISTE déjà défini)\n" +
                    "        public string CreerOeuvre(Oeuvre o, Artiste a, Salle s)\n" +
                    "        {\n" +
                    "            o.SetArtiste(a);\n" +
                    "            this.lesOeuvres.Add(o);\n" +
                    "            s.AjouteOeuvre(o);\n" +
                    "            return string.Format(\"*** Creation de l'oeuvre {0} ***\", o.GetNomOeuvre());\n" +
                    "        }\n" +
                    "        public string CreerOeuvre(Oeuvre o, Salle s)\n" +
                    "        {\n" +
                    "            this.lesOeuvres.Add(o);\n" +
                    "            s.AjouteOeuvre(o);\n" +
                    "            return string.Format(\"*** Creation de l'oeuvre {0} ***\", o.GetNomOeuvre());\n" +
                    "        }\n" +
                    "\n" +
                    "        // Accesseurs\n" +
                    "        public List<Oeuvre> GetLesOeuvres()\n" +
                    "        { return this.lesOeuvres; }\n" +
                    "        public List<Salle> GetLesSalles()\n" +
                    "        { return this.lesSalles; }\n" +
                    "        public List<Artiste> GetLesArtistes()\n" +
                    "        { return this.lesArtistes; }\n" +
                    "        public Artiste GetArtiste(int i)\n" +
                    "        {\n" +
                    "            return this.lesArtistes[i];\n" +
                    "        }\n" +
                    "        public Oeuvre GetOeuvre(int i)\n" +
                    "        {\n" +
                    "            return this.lesOeuvres[i];\n" +
                    "        }\n" +
                    "        public Salle GetSalle(int i)\n" +
                    "        {\n" +
                    "            return this.lesSalles[i];\n" +
                    "        }\n" +
                    "\n" +
                    "        // Retourne une collection DICTIONNAIRE avec la liste des OEUVRES\n" +
                    "        // devant faire l'objet d'une expertise.\n" +
                    "        // Chaque élément est de la forme :\n" +
                    "        //  * Clé : objet SALLE\n" +
                    "        //  * Valeur associée : collection d'oeuvres à expertiser\n" +
                    "        public Dictionary<Salle, List<Oeuvre_Achetee>> getLesExpertisesAFAire()\n" +
                    "        {\n" +
                    "            Dictionary<Salle, List<Oeuvre_Achetee>> toSender = new Dictionary<Salle, List<Oeuvre_Achetee>>();\n" +
                    "            foreach (Salle s in this.lesSalles)\n" +
                    "            {\n" +
                    "                List<Oeuvre_Achetee> tempo = s.getLesOeuvresAExpertiser();\n" +
                    "                if (tempo.Count > 0)\n" +
                    "                    toSender.Add(s, tempo);\n" +
                    "            }\n" +
                    "            return toSender;\n" +
                    "        }\n" +
                    "\n" +
                    "        // Formatte une chaîne avec les données du MUSEE\n" +
                    "        public override string ToString()\n" +
                    "        {\n" +
                    "            string résultat = string.Format(\"\\n***********************************\\n\");\n" +
                    "            résultat += string.Format(\" {0} \\n\", monMusee);\n" +
                    "            résultat += string.Format(\"***********************************\\n\\n\");\n" +
                    "\n" +
                    "            // Liste des ARTISTES\n" +
                    "            résultat += string.Format(\"--- Liste des Artistes\\n\\n\");\n" +
                    "            foreach (Artiste a in this.lesArtistes)\n" +
                    "            {\n" +
                    "                résultat +=a.ToString();\n" +
                    "            }\n" +
                    "            résultat += string.Format(\"\\n\");\n" +
                    "\n" +
                    "            // Liste des OEUVRES\n" +
                    "            résultat += string.Format(\"\\n--- Liste des Oeuvres\\n\\n\");\n" +
                    "            foreach (Oeuvre a in this.lesOeuvres)\n" +
                    "            {\n" +
                    "                résultat +=a.ToString();\n" +
                    "            }\n" +
                    "\n" +
                    "            // Liste et détail des SALLES\n" +
                    "            résultat += string.Format(\"\\n--- Liste des Salles\\n\\n\");\n" +
                    "            foreach (Salle a in this.lesSalles)\n" +
                    "            {\n" +
                    "                résultat += a.ToString();\n" +
                    "            }\n" +
                    "\n" +
                    "            return résultat;\n" +
                    "        }\n" +
                    "    }\n" +
                    "    #endregion"
            }))
                .ajouter(new Label({
                text: "Classe Techinique :  ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                style: EnumStyleHighLightCode.visualStudio2015dark,
                Langage: EnumLangageHighLightCode.Csharp,
                text: "// Utilisation des PREDICATS et de la méthode de COMPARAISON sur les classes METIER\n" +
                    "    public class Predicats\n" +
                    "    {\n" +
                    "        // Donnée utilisées par le PREDICAT\n" +
                    "        public static string nomArtiste = \"\";\n" +
                    "\n" +
                    "        // Méthode PREDICAT (pour \"Find()\", \"FindAll()\"...)\n" +
                    "        // Cette fonction sera appliquée, à tour de rôle, à chaque élement \n" +
                    "        // d'une collection d'OEUVRES pour une SALLE...\n" +
                    "        public static bool RechercheOeuvresArtiste(Oeuvre o)\n" +
                    "        {\n" +
                    "            return (o.GetArtiste().GetNomArtiste() == nomArtiste);\n" +
                    "        }\n" +
                    "\n" +
                    "        // Méthodes de COMPARAISON (pour \"Sort()\") entre deux objets OEUVRE ACHETEE\n" +
                    "        // Cette méthode doit retourner, suivant le critère de comparaison \n" +
                    "        //      0 si = égalité\n" +
                    "        //      1 = si o1 > o2\n" +
                    "        //      -1 = si o1 < o2\n" +
                    "        public static int ComparerOeuvresParNom(Oeuvre o1, Oeuvre o2)\n" +
                    "        {\n" +
                    "            return o1.GetNomOeuvre().CompareTo(o2.GetNomOeuvre());\n" +
                    "        }\n" +
                    "        public static int ComparerOeuvresParPrix(Oeuvre o1, Oeuvre o2)\n" +
                    "        {\n" +
                    "            return (o1 as Oeuvre_Achetee).GetPrixOeuvre().CompareTo((o2 as Oeuvre_Achetee).GetPrixOeuvre());\n" +
                    "        }\n" +
                    "    }"
            }))
                .ajouter(new Label({
                text: "Diagramme de classe : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                typeCadre: EnumTypeCadreImage.Standard,
                Image: "Diagram"
            }))
                .ajouter(new Label({
                text: "Vue des Affichages : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "Windows forme",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                Image: "winform_01",
                typeCadre: EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Mode console",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                Image: "Console_01",
                typeCadre: EnumTypeCadreImage.Standard
            }));
            mythis.page.AjouteContainte(divcontenu);
        };
        Object.defineProperty(mainPPE3_Mission_1.prototype, "x", {
            // Propriete implementer par elementX
            get: function () { return this.page.x; },
            enumerable: true,
            configurable: true
        });
        return mainPPE3_Mission_1;
    }());
    PPE3_Mission_1.mainPPE3_Mission_1 = mainPPE3_Mission_1;
})(PPE3_Mission_1 || (PPE3_Mission_1 = {}));
var PPE3_Mission_1;
(function (PPE3_Mission_1) {
    WebCall.call(function (ici) {
        ici.append(new PPE3_Mission_1.mainPPE3_Mission_1().x);
    });
})(PPE3_Mission_1 || (PPE3_Mission_1 = {}));
//# sourceMappingURL=app.js.map