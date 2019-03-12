module PPE2_Mission_4{
    export class mainPPE2_Mission_4 implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
            let mythis : mainPPE2_Mission_4 = this;
            mythis.page = new Page({id:"PagePPE2_Mission_4",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }

        // Methodes
         // ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainPPE2_Mission_4 =this;
            // bouton Retour
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                     window.history.back();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"Retour",
               title:"Retour"
           }));
        }

        // ----- //
        // Corps //
        // ----- //
        private GenerateContainte() {
            let mythis: mainPPE2_Mission_4 = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "PPE2 - Mission 4 Maintenance EVOLUTIVE (nouvelles fonctionnalités, puis évolution vers une approche OBJET) du jeu de POKER pour le Comité d’entreprise du groupe HsH "});

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "Faire Evoluer le jeu de Poker de la mission 1, pour que le jeu soit en approche objet. ";
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "A partir du poker fait à la mission 1, j’ai donc créer des classe objet reprennent le fonctionnement du jeu et en dissociant l’affichage ce qui permet de pouvoir faire son propre affichage. ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "class_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new Label({
                    text: "Pour ma part, j’ai donc fait mon affichage avec Windows forme.",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "AffichageWin_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new DivImage({
                    Image: "AffichageWin_02",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new DivImage({
                    Image: "AffichageWin_03",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new Label({
                    text: "Code de IHM en Jeu :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    Langage: EnumLangageHighLightCode.Csharp,
                    style: EnumStyleHighLightCode.visualStudio2015dark,
                    text: "    public partial class Jouer : Form\n" +
                        "    {\n" +
                        "        #region Attributs\n" +
                        "\n" +
                        "        // Collection de pictureBox\n" +
                        "        private List<PictureBox> LesCartes;\n" +
                        "\n" +
                        "        // Adresse Memoire de la form Mainmenu\n" +
                        "        private MainMenu Main;\n" +
                        "        // Adresse Memoire de la form Sauvegarde\n" +
                        "        private Sauvegarde Sauve;\n" +
                        "\n" +
                        "        // Objet JeuDeCarte\n" +
                        "        private JeuDeCarte LeJeu;\n" +
                        "\n" +
                        "        // phase\n" +
                        "        // 0 = commencer/rejouer\n" +
                        "        // 1 = echange\n" +
                        "        private int phase_Jeu;\n" +
                        "\n" +
                        "        //carte a echanger\n" +
                        "        private List<int> CarteAEchange;\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Constructeur\n" +
                        "\n" +
                        "        public Jouer(MainMenu Main)\n" +
                        "        {\n" +
                        "            InitializeComponent();\n" +
                        "            this.LesCartes = new List<PictureBox>(5);\n" +
                        "            this.LesCartes.Add(Carte1);\n" +
                        "            this.LesCartes.Add(Carte2);\n" +
                        "            this.LesCartes.Add(Carte3);\n" +
                        "            this.LesCartes.Add(Carte4);\n" +
                        "            this.LesCartes.Add(Carte5);\n" +
                        "            this.Main = Main;\n" +
                        "            this.LeJeu = new JeuDeCarte();\n" +
                        "            this.CarteAEchange = new List<int>(4);\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Methodes\n" +
                        "\n" +
                        "        // Affichage les carte d'un jeu de carte\n" +
                        "        private void AfficherCarte(string nomCarte,int indice)\n" +
                        "        {\n" +
                        "            if (indice < 0 || indice >= 5)\n" +
                        "                throw new Exception(\"Indice Incorret!\");\n" +
                        "            try\n" +
                        "            {\n" +
                        "                LesCartes[indice].Load(\"./Jeu_De_Carte/\" + nomCarte + \".png\");\n" +
                        "            }\n" +
                        "            catch (Exception ex)\n" +
                        "            {\n" +
                        "                throw new Exception(\"Imposible d'acceder à la ressource!\\n\"+ex);\n" +
                        "            }\n" +
                        "        }\n" +
                        "        private void AfficherCarte(string nomCarte)\n" +
                        "        {\n" +
                        "            for (int i = 0; i < 5; i++)\n" +
                        "                AfficherCarte(nomCarte, i);\n" +
                        "        }\n" +
                        "        private void AfficherCarte(JeuDeCarte unJeu)\n" +
                        "        {\n" +
                        "            for (int i = 0; i < 5; i++)\n" +
                        "                AfficherCarte(unJeu.getCarte(i).getValeur()+\"_\"+unJeu.getCarte(i).getFamille().ToString(), i);\n" +
                        "        }\n" +
                        "\n" +
                        "        // Fonction pour ajouter ou supprimer une carte a echanger\n" +
                        "        // par rapport au checkbox\n" +
                        "        // Ajoute une carte a echanger\n" +
                        "        private bool addCarteEchager(int nbCarte)\n" +
                        "        {\n" +
                        "            // s'il y a deja le max de carte selectionner\n" +
                        "            if (this.CarteAEchange.Count >= 4)\n" +
                        "                return false;\n" +
                        "\n" +
                        "            // sinon ajouter la carte\n" +
                        "            this.CarteAEchange.Add(nbCarte);\n" +
                        "            return true;\n" +
                        "\n" +
                        "        }\n" +
                        "        // ou Supprimer \n" +
                        "        private void RemoveCarteEchage(int nbCarte)\n" +
                        "        {\n" +
                        "            this.CarteAEchange.Remove(nbCarte);\n" +
                        "        }\n" +
                        "\n" +
                        "        // Jouer / Nouvelle Main\n" +
                        "        private void Jouer_newHand()\n" +
                        "        {\n" +
                        "            // tirer un nouveau jeu et l'affiche\n" +
                        "            LeJeu.TirageDuJeu();\n" +
                        "            AfficherCarte(LeJeu);\n" +
                        "\n" +
                        "            // Set la phase en echange\n" +
                        "            phase_Jeu = 1;\n" +
                        "            echanger_Select();\n" +
                        "        }\n" +
                        "\n" +
                        "        // Selection des carte a echanger\n" +
                        "        private void echanger_Select()\n" +
                        "        {\n" +
                        "            groupBox1.Show();\n" +
                        "            Bouton1.Text = \"Echanger\";\n" +
                        "            checkBox1.Checked = false;\n" +
                        "            checkBox2.Checked = false;\n" +
                        "            checkBox3.Checked = false;\n" +
                        "            checkBox4.Checked = false;\n" +
                        "            checkBox5.Checked = false;\n" +
                        "        }\n" +
                        "        // Echange les carte\n" +
                        "        private void Echanger_Carte()\n" +
                        "        {\n" +
                        "            int[] aEchanger = new int[this.CarteAEchange.Count];\n" +
                        "\n" +
                        "            for (int i = 0; i < aEchanger.Length; i++)\n" +
                        "                aEchanger[i] = this.CarteAEchange[i];\n" +
                        "            this.LeJeu.EchangeCarte(aEchanger);\n" +
                        "\n" +
                        "            AfficherCarte(LeJeu);\n" +
                        "            groupBox1.Hide();\n" +
                        "            Bouton1.Enabled = false;\n" +
                        "            resultat();\n" +
                        "        }\n" +
                        "\n" +
                        "        // Resultat du jeu\n" +
                        "        private void resultat()\n" +
                        "        {\n" +
                        "            MessageBox.Show(LeJeu.CombinaisonDesCarte(), \"Resultat\", MessageBoxButtons.OK, MessageBoxIcon.Information);\n" +
                        "            if (MessageBox.Show(\"Voulez-vous sauvegardez?\", \"Sauvegarde\", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)\n" +
                        "            {\n" +
                        "                Sauve = new Sauvegarde(this.LeJeu);\n" +
                        "                Sauve.Show();\n" +
                        "            }\n" +
                        "            Bouton1.Text = \"Rejouer\";\n" +
                        "            Bouton1.Enabled = true;\n" +
                        "            phase_Jeu = 0;\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Methode_evenement\n" +
                        "\n" +
                        "        //Load la page\n" +
                        "        private void Jouer_Load(object sender, EventArgs e)\n" +
                        "        {\n" +
                        "            AfficherCarte(\"_DosCarte\");\n" +
                        "            phase_Jeu = 0;\n" +
                        "            Bouton1.Text = \"Commencer\";\n" +
                        "            groupBox1.Hide();\n" +
                        "        }\n" +
                        "\n" +
                        "        // Bouton D'action\n" +
                        "        private void button1_Click(object sender, EventArgs e)\n" +
                        "        {\n" +
                        "            switch (phase_Jeu)\n" +
                        "            {\n" +
                        "                case (0):\n" +
                        "                    Jouer_newHand();\n" +
                        "                    break;\n" +
                        "\n" +
                        "                case(1):\n" +
                        "                    Echanger_Carte();\n" +
                        "                    break;\n" +
                        "            }\n" +
                        "        }\n" +
                        "\n" +
                        "        // Even Checkbox\n" +
                        "        // Pour les echanges de carte\n" +
                        "        #region Echange_CheckBox\n" +
                        "\n" +
                        "        private void checkBox1_CheckedChanged(object sender, EventArgs e)\n" +
                        "        {\n" +
                        "            if (checkBox1.Checked)\n" +
                        "            {\n" +
                        "                if (!addCarteEchager(1))\n" +
                        "                    this.checkBox1.Checked = false;\n" +
                        "            }\n" +
                        "            else\n" +
                        "                RemoveCarteEchage(1);\n" +
                        "        }\n" +
                        "\n" +
                        "        [...]\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "\n" +
                        "        // Permet de revenir au menuPrincipale\n" +
                        "        private void MainMenu_Click(object sender, EventArgs e)\n" +
                        "        {\n" +
                        "            this.Jouer_FormClosing(this, null);\n" +
                        "        }\n" +
                        "        // Quitte\n" +
                        "        private void Jouer_FormClosing(object sender, FormClosingEventArgs e)\n" +
                        "        {\n" +
                        "            this.Dispose();\n" +
                        "            this.Sauve.Dispose();\n" +
                        "            Main.Show();\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        \n" +
                        "    }"
                }))
                .ajouter(new Label({
                    text: "Diagramme de classe :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    typeCadre: EnumTypeCadreImage.Standard,
                    Image:"Diagram"
                }));

            mythis.page.AjouteContainte(divcontenu);
        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}