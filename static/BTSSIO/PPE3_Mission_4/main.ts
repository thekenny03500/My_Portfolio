module PPE3_Mission_4{
    export class mainPPE3_Mission_4 implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
            let mythis : mainPPE3_Mission_4 = this;
            mythis.page = new Page({id:"PagePPE3_Mission_4",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }

        // Methodes
        // ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainPPE3_Mission_4 =this;
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
            let mythis: mainPPE3_Mission_4 = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "PPE3 - Mission 4 Conception et mise en œuvre d’une fonctionnalité « pilote » (la FACTURATION) de la future " +
                    "application de gestion (articles, fournisseurs, clients, devis et des factures) de la société VICHY " +
                    "PAPETERIE."});

            // Context
            divcontenu.ajouter(new Label({
                text: "Context :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            let textContext: string = "A la création de VICHY PAPETERIE en 1983, Pierre DUVAL avait un souhait, celui d’apporter à ses clients le meilleur matériel et surtout, « la solution » qui convenait le mieux à leur entreprise. VICHY PAPETERIE s’est adressé donc à la SSII SIVY dans le but de demander le développement d’une fonctionnalité de la future application. Ceci doit lui permettre de pouvoir comparer les deux technologies (web et Windows), puis de prendre la décision définitive de migrer l’intégralité de l’application Intranet dans une plateforme Windows / C#."
            divcontenu.ajouter(new Label({
                text: textContext,
                type: EnumTypeLabel.Standard
            }));

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif 1 :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "Créer une application windows form pour faire des factures et les savegarder."
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));

            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Descriptif 1 :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "Pour un premier temps nous avons un cahier des charges qui nous demande des créer une application Windows forme qui permet de créer des factures et de les enregistrer sur une base de donnée MySQL. Les données des stocks pourront être récupérer depuis la base de donnée ou par un web service donnée (selon le choix de l’utilisateur). Ce programme dois respecter une architecture MVC.",
                    type: EnumTypeLabel.Standard
                }));

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "Affichage Windows forme : ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "affichageWin_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new Label({
                    text: "Architecture MVC ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "MVC_Schema",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new DivImage({
                    Image: "MVC_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new Label({
                    text: "Exemple de code :",
                    type: EnumTypeLabel.BigText
                }))
                .ajouter(new Label({
                    text: "- Class \"Contrôleur\" :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    Langage: EnumLangageHighLightCode.Csharp,
                    style: EnumStyleHighLightCode.visualStudio2015dark,
                    text:"public class theControleur\n" +
                        "    {\n" +
                        "        #region Attributs\n" +
                        "\n" +
                        "        private const string NomDSN = \"DSN_C#_Mysql_Vichyp\";\n" +
                        "\n" +
                        "        public Form1 FacturationVue { get; set; }\n" +
                        "        private DonnéeMYSQL MYSQL { get; set; }\n" +
                        "        private DonnéeWebService WebService { get; set; }\n" +
                        "\n" +
                        "        private List<Client> lesClients { get; set; }\n" +
                        "        private List<Article> lesArticles { get; set; }\n" +
                        "\n" +
                        "        private Client ClientEnCour { get; set; }\n" +
                        "        private string Factures { get; set; }\n" +
                        "        private string FacturesTotal { get; set; }\n" +
                        "\n" +
                        "        private List<Facture> lesFactures { get; set; }\n" +
                        "        private int nbFacture { get; set; }\n" +
                        "        private int code_Facture_Tempo { get; set; }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Constructeur\n" +
                        "\n" +
                        "        public theControleur()[...]\n"+
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Methodes\n" +
                        "\n" +
                        "        // ------ //\n" +
                        "        // Privat //\n" +
                        "        // ------ //\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Recupere les données et les distributs\n" +
                        "        /// </summary>\n" +
                        "        /// <param name=\"s\"></param>\n" +
                        "        private void RecupDonnée(SourceDonnée s)[...]\n" +
                        "\n" +
                        "        // ------ //\n" +
                        "        // Public //\n" +
                        "        // ------ // \n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Ajouter une commande a la facture du client en cour, si il n'y a pas de facture en cour au que le client changer, cela crée une nouvelle facture et l'ajouter dans une collection\n" +
                        "        /// </summary>\n" +
                        "        /// <param name=\"c\">client En Cour</param>\n" +
                        "        /// <param name=\"a\">Article a ajouter</param>\n" +
                        "        /// <param name=\"Qte\">Quantiter de l'article</param>\n" +
                        "        /// <param name=\"TauxRemis\">Remis sur l'article</param>\n" +
                        "        public void AjouterFacturation(Client c,Article a,int Qte,int TauxRemis)\n" +
                        "        {\n" +
                        "            try\n" +
                        "            {\n" +
                        "                // Création d'une premiere facture\n" +
                        "                if (this.ClientEnCour == null)\n" +
                        "                {\n" +
                        "                    this.code_Facture_Tempo = this.MYSQL.GenerateCodeFacturation();\n" +
                        "                    this.nbFacture = 0;\n" +
                        "\n" +
                        "                    // inisialisation du client en cour\n" +
                        "                    this.ClientEnCour = c;\n" +
                        "\n" +
                        "                    // creation d'une nouvelle facture et inisialisation de la collection de factures\n" +
                        "                    this.lesFactures = new List<Facture>();\n" +
                        "                    Facture Facture_en_cours = new Facture(code_Facture_Tempo, c);\n" +
                        "                    this.lesFactures.Add(Facture_en_cours);\n" +
                        "                    Commande commande = new Commande(a, Qte, TauxRemis);\n" +
                        "                    Facture_en_cours.lesArticleCommander.Add(commande);\n" +
                        "\n" +
                        "                    // Affichage facture\n" +
                        "                    this.Factures += string.Format(\"FACTURE : {0}\\n\", code_Facture_Tempo);\n" +
                        "                    this.Factures += string.Format(\"CLIENT : {0}\\t{1}\\n\", c.code_Client, c.raison_sociale);\n" +
                        "                    this.Factures += \"------------------------------------------------------------------------------------------------------------------------------------------------------\\n\";\n" +
                        "                    this.Factures += string.Format(\"\\t{0}\\t{1}\\t\\t{2}\\tTotal ligne : {3} €\\n\", commande.LArticle.code_article, commande.LArticle.designation, commande.Quantite, commande.TotalArticles);\n" +
                        "\n" +
                        "                    // Affichage fin de facture\n" +
                        "                    this.FacturesTotal = \"\\n------------------------------------------------------------------------------------------------------------------------------------------------------\\n\";\n" +
                        "                    this.FacturesTotal += string.Format(\"\\t\\t\\t\\t\\t\\tTOTAL A PAYER : {0} €\\n\\n\", Facture_en_cours.getTotalFacture());\n" +
                        "                }\n" +
                        "                // ajout d'un article dans la facture du client en cour\n" +
                        "                else if (this.ClientEnCour == c)\n" +
                        "                {\n" +
                        "                    Facture Facture_en_cours = this.lesFactures[this.nbFacture];\n" +
                        "                    Commande commande = new Commande(a, Qte, TauxRemis);\n" +
                        "                    Facture_en_cours.lesArticleCommander.Add(commande);\n" +
                        "                    this.Factures += string.Format(\"\\t{0}\\t{1}\\t\\t{2}\\tTotal ligne : {3} €\\n\", commande.LArticle.code_article, commande.LArticle.designation, commande.Quantite, commande.TotalArticles);\n" +
                        "\n" +
                        "                    this.FacturesTotal = \"\\n------------------------------------------------------------------------------------------------------------------------------------------------------\\n\";\n" +
                        "                    this.FacturesTotal += string.Format(\"\\t\\t\\t\\t\\t\\tTOTAL A PAYER : {0} €\\n\\n\", Facture_en_cours.getTotalFacture());\n" +
                        "                }\n" +
                        "                // Changement du clien creation un nouvelle facture\n" +
                        "                else if (this.ClientEnCour != c)\n" +
                        "                {\n" +
                        "                    // Changement du client en cour\n" +
                        "                    this.ClientEnCour = c;\n" +
                        "\n" +
                        "                    // creation d'un nouvelle facture \n" +
                        "                    this.code_Facture_Tempo++;\n" +
                        "                    this.nbFacture++;\n" +
                        "                    Facture facture_en_cours = new Facture(code_Facture_Tempo, c);\n" +
                        "                    this.lesFactures.Add(facture_en_cours);\n" +
                        "                    Commande commande = new Commande(a, Qte, TauxRemis);\n" +
                        "                    facture_en_cours.lesArticleCommander.Add(commande);\n" +
                        "\n" +
                        "                    // Terminer affichage ancien facture\n" +
                        "                    this.Factures += this.FacturesTotal;\n" +
                        "\n" +
                        "                    // Affichage facture\n" +
                        "                    this.Factures += string.Format(\"FACTURE : {0}\\n\", code_Facture_Tempo);\n" +
                        "                    this.Factures += string.Format(\"CLIENT : {0}\\t{1}\\n\", c.code_Client, c.raison_sociale);\n" +
                        "                    this.Factures += \"------------------------------------------------------------------------------------------------------------------------------------------------------\\n\";\n" +
                        "                    this.Factures += string.Format(\"\\t{0}\\t{1}\\t\\t{2}\\tTotal ligne : {3} €\\n\", commande.LArticle.code_article, commande.LArticle.designation, commande.Quantite, commande.TotalArticles);\n" +
                        "\n" +
                        "                    // Affichage fin de facture\n" +
                        "                    this.FacturesTotal = \"\\n------------------------------------------------------------------------------------------------------------------------------------------------------\\n\";\n" +
                        "                    this.FacturesTotal += string.Format(\"\\t\\t\\t\\t\\t\\tTOTAL A PAYER : {0} €\\n\\n\", facture_en_cours.getTotalFacture());\n" +
                        "\n" +
                        "                }\n" +
                        "\n" +
                        "                this.FacturationVue.Affichage(this.Factures+this.FacturesTotal);\n" +
                        "            }\n" +
                        "            catch (Exception ex)\n" +
                        "            {\n" +
                        "                this.FacturationVue.AfficheMsgBoxError(\"Error AjouterFacture : \" + ex);\n" +
                        "            }\n" +
                        "        }\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Remet a zero, la collection de facture et l'affichage des facture\n" +
                        "        /// </summary>\n" +
                        "        public void RAZFacturation()\n" +
                        "        {\n" +
                        "            this.lesFactures = null;\n" +
                        "            this.ClientEnCour = null;\n" +
                        "            this.Factures = \"\";\n" +
                        "            this.FacturesTotal = \"\";\n" +
                        "            this.FacturationVue.RAZ();\n" +
                        "        }\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Change la source de donnée utiliser pour les clients et les article\n" +
                        "        /// </summary>\n" +
                        "        /// <param name=\"s\"></param>\n" +
                        "        public void ChangerSource(SourceDonnée s)\n" +
                        "        {\n" +
                        "            this.RecupDonnée(s);\n" +
                        "        }\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Enregistrer les factures créer dans la base\n" +
                        "        /// </summary>\n" +
                        "        public void EnregistrementBASE()\n" +
                        "        {\n" +
                        "            try\n" +
                        "            {\n" +
                        "                this.MYSQL.InsertFactures(this.lesFactures);\n" +
                        "                this.FacturationVue.AfficheMsgBoxInfo(\"Factures Enregistrer dans la base.\");\n" +
                        "                this.RAZFacturation();\n" +
                        "            }\n" +
                        "            catch(Exception ex)\n" +
                        "            {\n" +
                        "                this.FacturationVue.AfficheMsgBoxError(\"Error EnregistrementBASE : \" + ex);\n" +
                        "            }\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "}"
                }))
                .ajouter(new Label({
                    text: "- Class \"D'accès aux données Sql\" :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    Langage:EnumLangageHighLightCode.Csharp,
                    style: EnumStyleHighLightCode.visualStudio2015dark,
                    text: "public class DonnéeMYSQL\n" +
                        "    {\n" +
                        "        #region attributs\n" +
                        "\n" +
                        "        private OdbcConnection connexion;       // Objet CONNEXION\n" +
                        "        private OdbcCommand commande;           // Objet COMMANDE\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Constructeur\n" +
                        "\n" +
                        "        public DonnéeMYSQL(string nomDSN)\n" +
                        "        {\n" +
                        "            this.connexion = new OdbcConnection(\"DSN=\"+nomDSN+\";\");\n" +
                        "            this.commande = null;\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "        #region Methode\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Permet de recuperer une list de tous les clients de la tables client dans la bd\n" +
                        "        /// </summary>\n" +
                        "        /// <returns>List de clients</returns>\n" +
                        "        public List<Client> SelectClient()\n" +
                        "        {\n" +
                        "            List<Client> toSender = new List<Client>();\n" +
                        "            try\n" +
                        "            {\n" +
                        "                this.connexion.Open();\n" +
                        "                string laCommande = \"Select * from Client;\";\n" +
                        "                this.commande = new OdbcCommand(laCommande, this.connexion);\n" +
                        "                OdbcDataReader Reader = this.commande.ExecuteReader();\n" +
                        "                while (Reader.Read())\n" +
                        "                {\n" +
                        "                   toSender.Add(new Client((int)Reader[\"code_client\"],Reader[\"raison_sociale\"].ToString()));\n" +
                        "                }\n" +
                        "                this.commande = null;\n" +
                        "            }\n" +
                        "            catch (Exception ex)\n" +
                        "            {\n" +
                        "                throw new Exception(\"Erreur DonnéeMYSQL : SelectClient imposible \\n\\n-->\" + ex.Message);\n" +
                        "            }\n" +
                        "            finally\n" +
                        "            {\n" +
                        "                this.connexion.Close();\n" +
                        "            }\n" +
                        "            return toSender;\n" +
                        "        }\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Permet de recuperer une list de tous les article de la tables article dans la bd\n" +
                        "        /// </summary>\n" +
                        "        /// <returns></returns>\n" +
                        "        public List<Article> SelectArticle()\n" +
                        "        {\n" +
                        "            List<Article> toSender = new List<Article>();\n" +
                        "            try\n" +
                        "            {\n" +
                        "                this.connexion.Open();\n" +
                        "                string laCommande = \"Select * from Article;\";\n" +
                        "                this.commande = new OdbcCommand(laCommande, this.connexion);\n" +
                        "                OdbcDataReader Reader = this.commande.ExecuteReader();\n" +
                        "                while (Reader.Read())\n" +
                        "                {\n" +
                        "                    toSender.Add(new Article((int)Reader[\"code_article\"],Reader[\"designation\"].ToString(),(float)Reader[\"prix_unitaire\"]));\n" +
                        "                }\n" +
                        "                this.commande = null;\n" +
                        "            }\n" +
                        "            catch (Exception ex)\n" +
                        "            {\n" +
                        "                throw new Exception(\"Erreur DonnéeMYSQL : SelectArticle imposible \\n\\n-->\" + ex.Message);\n" +
                        "            }\n" +
                        "            finally\n" +
                        "            {\n" +
                        "                this.connexion.Close();\n" +
                        "            }\n" +
                        "            return toSender;\n" +
                        "        }\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Permet de recuperer un code facture temporaire\n" +
                        "        /// </summary>\n" +
                        "        /// <returns>code_facture</returns>\n" +
                        "        public int GenerateCodeFacturation()\n" +
                        "        {\n" +
                        "            int toSender = 0;\n" +
                        "            try\n" +
                        "            {\n" +
                        "                this.connexion.Open();\n" +
                        "                string laCommande = \"Select MAX(code_Facture) from FACTURE;\";\n" +
                        "                this.commande = new OdbcCommand(laCommande, this.connexion);\n" +
                        "                OdbcDataReader Reader = this.commande.ExecuteReader();\n" +
                        "                Reader.Read();\n" +
                        "                if (Reader[0].ToString() != \"\")\n" +
                        "                    toSender = (int)Reader[0];\n" +
                        "                this.commande = null;\n" +
                        "            }\n" +
                        "            catch (Exception ex)\n" +
                        "            {\n" +
                        "                throw new Exception(\"Erreur DonnéeMYSQL : GenerateCodeFacturation imposible \\n\\n-->\" + ex.Message);\n" +
                        "            }\n" +
                        "            finally\n" +
                        "            {\n" +
                        "                this.connexion.Close();\n" +
                        "            }\n" +
                        "            return toSender;\n" +
                        "        }\n" +
                        "\n" +
                        "        /// <summary>\n" +
                        "        /// Permet d'insert les données des factures créer dans la base de Donnée\n" +
                        "        /// </summary>\n" +
                        "        /// <param name=\"lsFact\">liste des facture</param>\n" +
                        "        public void InsertFactures(List<Facture> lsFact)\n" +
                        "        {\n" +
                        "            try\n" +
                        "            {\n" +
                        "                this.connexion.Open();\n" +
                        "                foreach (Facture f in lsFact)\n" +
                        "                {\n" +
                        "                    string laCommande = string.Format(\"insert into facture(code_client,TotalFacture) Values('{0}','{1}');\",f.client.code_Client,f.getTotalFacture().ToString().Replace(',','.'));\n" +
                        "                    this.commande = new OdbcCommand(laCommande, this.connexion);\n" +
                        "                    this.commande.ExecuteNonQuery();\n" +
                        "                    laCommande = \"SELECT LAST_INSERT_ID();\";\n" +
                        "                    this.commande = new OdbcCommand(laCommande, this.connexion);\n" +
                        "                    int nbFacture = int.Parse(this.commande.ExecuteScalar().ToString()) ;\n" +
                        "                    foreach (Commande c in f.lesArticleCommander)\n" +
                        "                    {\n" +
                        "                        laCommande = string.Format(\"insert into Commande(code_Facture,code_article,Qté,Remise,TotalArticles) Values('{0}','{1}','{2}','{3}','{4}');\", nbFacture,c.LArticle.code_article,c.Quantite,c.Remise,c.TotalArticles.ToString().Replace(',','.'));\n" +
                        "                        this.commande = new OdbcCommand(laCommande, this.connexion);\n" +
                        "                        this.commande.ExecuteNonQuery();\n" +
                        "                    }\n" +
                        "                }\n" +
                        "            }\n" +
                        "            catch (Exception ex)\n" +
                        "            {\n" +
                        "                throw new Exception(\"Erreur DonnéeMYSQL : InsertFactures imposible \\n\\n-->\" + ex.Message);\n" +
                        "            }\n" +
                        "            finally\n" +
                        "            {\n" +
                        "                this.connexion.Close();\n" +
                        "            }\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n" +
                        "\n" +
                        "    }"
                }))
                .ajouter(new Label({
                    text: "Table Facture : ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "TabBD_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new Label({
                    text: "Table Commande : ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "TabBD_02",
                    typeCadre: EnumTypeCadreImage.Standard
                }));

             // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif 2 :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));

            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Descriptif 2 :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));

            mythis.page.AjouteContainte(divcontenu);
        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}