var PPE2_Mission_3;
(function (PPE2_Mission_3) {
    var mainPPE2_Mission_3 = /** @class */ (function () {
        // Constructeur
        function mainPPE2_Mission_3() {
            var mythis = this;
            mythis.page = new Page({ id: "PagePPE2_Mission_3", HeaderFix: true });
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }
        // Methodes
        // ------------- //
        // Bouton Header //
        // ------------- //
        mainPPE2_Mission_3.prototype.generateBoutonHeader = function () {
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
        mainPPE2_Mission_3.prototype.GenerateContainte = function () {
            var mythis = this;
            var divcontenu = new DivConteneur({ Titre: "PPE2 - Mission 3 Mise en œuvre d’un PROTOTYPE DE COMPARAISON entre une approche Web et une approche Windows." });
            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            var textObjectif = "A la suite de l’interface de gestion web des véhicules de l’agence HSH, il est demandé de faire une interface prototype Windows forme pour listé les concessionnaires. ";
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
                text: "l’interface Windows forme, le logiciel devras lire les données d’une base de donnée et les afficher dans un « ListView » avec la possibilité d’effectuer des recherches par rapport au colonne. La connexion a la base de donnée ce fait par ODBC.",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "Le programme a une approche objet avec une classe pour la connexion a la base de donnée, une classe pour le stockage des données et une classe Windows Form pour l’affichage.",
                type: EnumTypeLabel.Standard
            }));
            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Affichage :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                Image: "AffichageWin_01",
                typeCadre: EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Classe base de donnée : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                Langage: EnumLangageHighLightCode.Csharp,
                style: EnumStyleHighLightCode.visualStudio2015dark,
                text: "    public class DB_SQL\n" +
                    "    {\n" +
                    "        #region Attributs\n" +
                    "        private OdbcConnection db;\n" +
                    "        private OdbcCommand cmde;\n" +
                    "        private OdbcDataReader reader;\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Constructeur\n" +
                    "        public DB_SQL(string DSN)\n" +
                    "        {\n" +
                    "                this.db = new OdbcConnection(\"DSN=\" + DSN);\n" +
                    "        }\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Methodes\n" +
                    "\n" +
                    "        // ------------------- //\n" +
                    "        //      Public         //\n" +
                    "        // ------------------- //\n" +
                    "        // Permet d'executer une requete de type INSERT en sql et de recuperer un collection de Concessionnaire\n" +
                    "        public List<Concessionnaire> SELECT()\n" +
                    "        {\n" +
                    "            List<Concessionnaire> toSender = new List<Concessionnaire>();\n" +
                    "            try\n" +
                    "            {\n" +
                    "                // 1 . Connection\n" +
                    "                this.Connection();\n" +
                    "\n" +
                    "                // 2 . formater et executer sql\n" +
                    "                this.cmde = this.db.CreateCommand();\n" +
                    "                this.cmde.CommandText = \"SELECT * FROM Concessionnaires\";\n" +
                    "                this.reader = this.cmde.ExecuteReader();\n" +
                    "\n" +
                    "                // 3 . Lecture des données\n" +
                    "                while(this.reader.Read())\n" +
                    "                    toSender.Add(new Concessionnaire(this.reader.GetString(0),this.reader.GetString(1),this.reader.GetString(2),this.reader.GetString(3),this.reader.GetString(4),this.reader.GetString(5)));\n" +
                    "            \n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                MessageBox.Show(ex.Message, \"SELECT\", MessageBoxButtons.OK, MessageBoxIcon.Error);\n" +
                    "            }\n" +
                    "            finally\n" +
                    "            {\n" +
                    "                // 4 . Deconnection\n" +
                    "                this.Deconnection();\n" +
                    "            }  \n" +
                    "            return toSender;\n" +
                    "        }\n" +
                    "        public List<Concessionnaire> SELECT(string Critere, string Valeur)\n" +
                    "        {\n" +
                    "            List<Concessionnaire> toSender = new List<Concessionnaire>();\n" +
                    "            try\n" +
                    "            {\n" +
                    "                // 1 . Connection\n" +
                    "                this.Connection();\n" +
                    "\n" +
                    "                // 2 . formater et executer sql\n" +
                    "                this.cmde = this.db.CreateCommand();\n" +
                    "                this.cmde.CommandText = \"SELECT * FROM Concessionnaires WHERE \"+Critere+\" LIKE '\"+Valeur+\"%'\";\n" +
                    "                this.reader = this.cmde.ExecuteReader();\n" +
                    "\n" +
                    "                // 3 . Lecture des données\n" +
                    "                while (this.reader.Read())\n" +
                    "                    toSender.Add(new Concessionnaire(this.reader.GetString(0), this.reader.GetString(1), this.reader.GetString(2), this.reader.GetString(3), this.reader.GetString(4), this.reader.GetString(5)));\n" +
                    "\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                MessageBox.Show(ex.Message, \"SELECT\", MessageBoxButtons.OK, MessageBoxIcon.Error);\n" +
                    "            }\n" +
                    "            finally\n" +
                    "            {\n" +
                    "                // 4 . Deconnection\n" +
                    "                this.Deconnection();\n" +
                    "            }  \n" +
                    "            return toSender;\n" +
                    "        }\n" +
                    "\n" +
                    "        // Permet d'executer une requete de type INSERT en sql Dans la table concessionnaire\n" +
                    "        public void INSERT(Concessionnaire unConcessionnaire)\n" +
                    "        {\n" +
                    "            try\n" +
                    "            {\n" +
                    "                // 1 . Connection\n" +
                    "                this.Connection();\n" +
                    "\n" +
                    "                // 2 . formater et executer sql\n" +
                    "                this.cmde = this.db.CreateCommand();\n" +
                    "                this.cmde.CommandText = \"INSERT INTO Concessionnaires(Nom,Prenom,Adresse,CodePostal,Ville) VALUE('\" + unConcessionnaire.Nom + \"','\" + unConcessionnaire.Prenom + \"','\" + unConcessionnaire.Adresse + \"','\" + unConcessionnaire.CodePostal + \"','\" + unConcessionnaire.Ville + \"')\";\n" +
                    "                this.cmde.ExecuteNonQuery();\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                MessageBox.Show(ex.Message, \"SELECT\", MessageBoxButtons.OK, MessageBoxIcon.Error);\n" +
                    "            }\n" +
                    "            finally\n" +
                    "            {\n" +
                    "                // 4 . Deconnection\n" +
                    "                this.Deconnection();\n" +
                    "            }\n" +
                    "        }\n" +
                    "        public void INSERT(List<Concessionnaire> desConcessionnaire)\n" +
                    "        {\n" +
                    "            foreach (Concessionnaire c in desConcessionnaire)\n" +
                    "                INSERT(c);\n" +
                    "        }\n" +
                    "\n" +
                    "        // Permet d'executer une requete de type UPDATA en sql Dans la table concessionnaire\n" +
                    "        public void UPDATE(string SetCritere, string SetValeur, string WhereCritere, string WhereValeur)\n" +
                    "        {\n" +
                    "            try\n" +
                    "            {\n" +
                    "                // 1 . Connection\n" +
                    "                this.Connection();\n" +
                    "\n" +
                    "                // 2 . formater et executer sql\n" +
                    "                this.cmde = this.db.CreateCommand();\n" +
                    "                this.cmde.CommandText = \"UPDATE Concessionnaires SET \" + SetCritere + \" = '\" + SetValeur + \"' WHERE \" + WhereCritere + \" = '\" + WhereValeur + \"'\";\n" +
                    "                this.cmde.ExecuteNonQuery();\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                MessageBox.Show(ex.Message, \"SELECT\", MessageBoxButtons.OK, MessageBoxIcon.Error);\n" +
                    "            }\n" +
                    "            finally\n" +
                    "            {\n" +
                    "                // 4 . Deconnection\n" +
                    "                this.Deconnection();\n" +
                    "            }\n" +
                    "        }\n" +
                    "\n" +
                    "        // Permet d'executer une requete de type DELETE en sql Dans la table concessionnaire\n" +
                    "        public void DELETE(string Critere, string Valeur)\n" +
                    "        {\n" +
                    "            try\n" +
                    "            {\n" +
                    "                // 1 . Connection\n" +
                    "                this.Connection();\n" +
                    "\n" +
                    "                // 2 . formater et executer sql\n" +
                    "                this.cmde = this.db.CreateCommand();\n" +
                    "                this.cmde.CommandText = \"DELETE FROM Concessionnaires WHERE \" + Critere + \" = '\" + Valeur + \"'\";\n" +
                    "                this.cmde.ExecuteNonQuery();\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                MessageBox.Show(ex.Message, \"SELECT\", MessageBoxButtons.OK, MessageBoxIcon.Error);\n" +
                    "            }\n" +
                    "            finally\n" +
                    "            {\n" +
                    "                // 4 . Deconnection\n" +
                    "                this.Deconnection();\n" +
                    "            }\n" +
                    "        }\n" +
                    "\n" +
                    "        // ------------------- //\n" +
                    "        //      Private        //\n" +
                    "        // ------------------- //\n" +
                    "        // Methode permettent de connection\n" +
                    "        private void Connection()\n" +
                    "        {\n" +
                    "            db.Open();\n" +
                    "        }\n" +
                    "\n" +
                    "        // Methode permettent de ce deconnecter\n" +
                    "        private void Deconnection()\n" +
                    "        {\n" +
                    "            db.Close();\n" +
                    "        }\n" +
                    "\n" +
                    "        #endregion\n" +
                    "    }"
            }))
                .ajouter(new Label({
                text: "Classe Donnée : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                Langage: EnumLangageHighLightCode.Csharp,
                style: EnumStyleHighLightCode.visualStudio2015dark,
                text: "    public class Concessionnaire\n" +
                    "    {\n" +
                    "        #region attributs\n" +
                    "        // Attributs\n" +
                    "        private string id;\n" +
                    "\n" +
                    "        private string nom;\n" +
                    "        \n" +
                    "        private string prenom;\n" +
                    "       \n" +
                    "        private string adresse;\n" +
                    "        \n" +
                    "        private string cp;\n" +
                    "       \n" +
                    "        private string ville;\n" +
                    "\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        [...]\n" +
                    "    }"
            }))
                .ajouter(new Label({
                text: "Classe Affichage: ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                Langage: EnumLangageHighLightCode.Csharp,
                style: EnumStyleHighLightCode.visualStudio2015dark,
                text: "    // Classe IHM\n" +
                    "    public partial class Form1 : Form\n" +
                    "    {\n" +
                    "        #region atributs\n" +
                    "\n" +
                    "        // Types de recherche : par nom ou par ville\n" +
                    "        public enum CategorieRecherche { Nom, Ville};\n" +
                    "\n" +
                    "        // Nom de DSN odbc\n" +
                    "        private string DSN = \"DSN_C#_Mysql_PPE2_CarteGrise;\";\n" +
                    "\n" +
                    "        // Object d'interaction SQL\n" +
                    "        private DB_SQL DB_Concessionnaires;\n" +
                    "\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Constructeur\n" +
                    "        // Constructeur\n" +
                    "        public Form1()\n" +
                    "        {\n" +
                    "            InitializeComponent();\n" +
                    "        }\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Methode_Even\n" +
                    "        // Lors du démarrage\n" +
                    "        private void Form1_Load(object sender, EventArgs e)\n" +
                    "        {\n" +
                    "            // Par défaut la combo affiche \"Ville\"\n" +
                    "            cboCriteresChamp.Items.Add(CategorieRecherche.Nom);\n" +
                    "            cboCriteresChamp.Items.Add(CategorieRecherche.Ville);\n" +
                    "            cboCriteresChamp.SelectedIndex = 1;\n" +
                    "\n" +
                    "            // Instanciation DB_SQL\n" +
                    "            DB_Concessionnaires = new DB_SQL(DSN);\n" +
                    "\n" +
                    "            //Affichage de la table Concessionnaires\n" +
                    "            AutoCompletionListView(DB_Concessionnaires.SELECT());\n" +
                    "        }\n" +
                    "\n" +
                    "        // Clic sur ENVOYER\n" +
                    "        private void btnEnvoyer_Click(object sender, EventArgs e)\n" +
                    "        {\n" +
                    "            AutoCompletionListView(DB_Concessionnaires.SELECT(cboCriteresChamp.Text,txtCriteresSaisie.Text));\n" +
                    "        }\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Methode\n" +
                    "        \n" +
                    "        // Permet de Remplire le ListView avec un collection de conncessionnaire\n" +
                    "        private void AutoCompletionListView(List<Concessionnaire> LesConcessions)\n" +
                    "        {\n" +
                    "            lvListeConcessionnaires.Items.Clear();\n" +
                    "            for (int i = 0, c = LesConcessions.Count; i < c; i++)\n" +
                    "            {\n" +
                    "                lvListeConcessionnaires.Items.Add(LesConcessions[i].Id);\n" +
                    "                lvListeConcessionnaires.Items[i].SubItems.Add(LesConcessions[i].Nom);\n" +
                    "                lvListeConcessionnaires.Items[i].SubItems.Add(LesConcessions[i].Prenom);\n" +
                    "                lvListeConcessionnaires.Items[i].SubItems.Add(LesConcessions[i].Adresse);\n" +
                    "                lvListeConcessionnaires.Items[i].SubItems.Add(LesConcessions[i].CodePostal);\n" +
                    "                lvListeConcessionnaires.Items[i].SubItems.Add(LesConcessions[i].Ville);\n" +
                    "            }\n" +
                    "\n" +
                    "        }\n" +
                    "\n" +
                    "        #endregion\n" +
                    "\n" +
                    "    }"
            }));
            mythis.page.AjouteContainte(divcontenu);
        };
        Object.defineProperty(mainPPE2_Mission_3.prototype, "x", {
            // Propriete implementer par elementX
            get: function () { return this.page.x; },
            enumerable: true,
            configurable: true
        });
        return mainPPE2_Mission_3;
    }());
    PPE2_Mission_3.mainPPE2_Mission_3 = mainPPE2_Mission_3;
})(PPE2_Mission_3 || (PPE2_Mission_3 = {}));
var PPE2_Mission_3;
(function (PPE2_Mission_3) {
    WebCall.call(function (ici) {
        ici.append(new PPE2_Mission_3.mainPPE2_Mission_3().x);
    });
})(PPE2_Mission_3 || (PPE2_Mission_3 = {}));
//# sourceMappingURL=app.js.map